import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'test@gmail.com',
        firstName: 'awin',
        lastName: 'dsr',
    }
})

console.log('done')