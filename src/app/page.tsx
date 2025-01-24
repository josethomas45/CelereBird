import { Button } from "@/components/ui/button";
import LinkAccountButton from "@/components/ui/link-account-button";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  return <LinkAccountButton />;
}
