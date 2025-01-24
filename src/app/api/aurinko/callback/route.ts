// /api/aurinko/callback/route.ts

import { exchangeCodeForAccessToken, getAccountDetails } from "@/lib/aurinko";
import { db } from "@/server/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { waitUntil } from "@vercel/functions";
import axios from "axios";

export const GET = async (req: Request) => {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const params = url.searchParams;

  const status = params.get("status");
  if (status !== "success")
    return NextResponse.json(
      { message: "failed to link account" },
      { status: 400 },
    );

  const code = params.get("code");
  if (!code)
    return NextResponse.json({ message: "missing code" }, { status: 400 });
  const token = await exchangeCodeForAccessToken(code);
  if (!token)
    return NextResponse.json(
      { message: "Failed to get token" },
      { status: 400 },
    );

  const accountDetails = await getAccountDetails(token.accessToken);

  await db.account.upsert({
    where: {
      id: token.accountId.toString(),
    },
    update: {
      accessToken: token.accessToken,
    },
    create: {
      id: token.accountId.toString(),
      userId,
      name: accountDetails.name,
      emailAddress: accountDetails.email,
      accessToken: token.accessToken,
    },
  });

  //trigger initial-sync endpoint
  waitUntil(
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/initial-sync`, {
        accountId: token.accountId.toString(),
        userId,
      })
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error("Failed to trigger initial sync", error);
      })
  );

  return NextResponse.redirect(new URL("/mail", req.url));
};
