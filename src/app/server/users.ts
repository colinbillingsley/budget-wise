"use server";
import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
	try {
		await auth.api.signInEmail({
			body: {
				email,
				password,
			},
		});

		return {
			success: true,
			message: "Log In Successful!",
		};
	} catch (error) {
		const err = error as Error;
		return {
			success: false,
			message: err.message || "Unknown error occurred.",
		};
	}
};

export const signUp = async (name: string, email: string, password: string) => {
	try {
		await auth.api.signUpEmail({
			body: {
				name,
				email,
				password,
			},
		});
		return {
			success: true,
			message: "Sign Up Successful!",
		};
	} catch (error) {
		const err = error as Error;
		return {
			success: false,
			message: err.message || "Unknown error occurred.",
		};
	}
};
