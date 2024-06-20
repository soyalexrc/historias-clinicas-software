'use server';

import {clerkClient} from "@clerk/nextjs/server";
import {cookies} from "next/headers";
import {decodeJwt} from "@clerk/backend/jwt";

export async function getCurrentUser() {
    const Cookies = cookies();
    try {
        const session = Cookies.get('__session')
        const token = session?.value;
        const { payload } = decodeJwt(token!);
        const userId = payload.sub;
        const user = await clerkClient.users.getUser(userId)
        return JSON.stringify(user);
    } catch (err) {
        console.log(err);
    }
}
