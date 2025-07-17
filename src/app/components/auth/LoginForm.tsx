"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Section from "../Section";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { signIn } from "@/app/server/users";
import { useRouter } from "next/navigation";
import GoogleButton from "./GoogleButton";

const initialFormState: { email: string; password: string } = {
	email: "",
	password: "",
};

const inintialErrorState: { email: string; password: string } = {
	email: "",
	password: "",
};

export default function LoginForm() {
	const [formData, setFormData] = useState(initialFormState);
	const [formErrors, setFormErrors] = useState(inintialErrorState);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();

	// handle changes in login input
	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setFormErrors((prev) => ({ ...prev, [name]: "" }));
		setError(null);
	}
	// determine if there are any empty fields
	// if so, set the error message for the field
	// return the object of errors
	function determineEmptyFields() {
		const newErrors: typeof formErrors = {
			email: "",
			password: "",
		};

		Object.entries(formData).forEach(([key, value]) => {
			if (!value.trim()) {
				newErrors[key as keyof typeof newErrors] = `${
					key[0].toUpperCase() + key.slice(1)
				} is required`;
			}
		});

		return newErrors;
	}

	// determine if input in email box is valid email
	function isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email.toLowerCase());
	}

	// check all fields for errors before creating account
	function validateFields() {
		// check for empty error fields
		const newErrors = determineEmptyFields();

		// email format check
		if (formData.email && !isValidEmail(formData.email)) {
			newErrors.email = "Please enter a valid email address.";
		}

		setFormErrors(newErrors);

		// Returns true if there are no errors
		return Object.values(newErrors).every((error) => error === "");
	}

	// handle login logic
	async function handleLogin(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);

		if (!validateFields()) {
			setLoading(false);
			return;
		}

		try {
			const res = await signIn(formData.email, formData.password);

			if (res.success) {
				router.push("/dashboard");
			} else {
				setError(res.message);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Section className="min-h-screen bg-background px-4 w-full">
			<form
				onSubmit={handleLogin}
				className="space-y-6 bg-background rounded-sm"
			>
				<div className="space-y-8">
					<div className="space-y-3">
						<Label
							htmlFor="email"
							className={`${
								formErrors.email ? "text-destructive" : "text-foreground"
							}`}
						>
							Email
						</Label>
						<Input
							name="email"
							value={formData.email}
							onChange={handleChange}
							className={`${formErrors.email ? "border-destructive" : ""}`}
						/>
						{formErrors.email && (
							<p className="text-destructive text-sm">{formErrors.email}</p>
						)}
					</div>

					<div className="space-y-3">
						<Label
							htmlFor="username"
							className={`${
								formErrors.password ? "text-destructive" : "text-foreground"
							}`}
						>
							Password
						</Label>
						<Input
							name="password"
							type="password"
							value={formData.password}
							onChange={handleChange}
							className={`${formErrors.password ? "border-destructive" : ""}`}
						/>
						{formErrors.password && (
							<p className="text-destructive text-sm">{formErrors.password}</p>
						)}
					</div>
				</div>

				{error && <p className="text-destructive text-sm">{error}</p>}

				<Button
					type="submit"
					size={"lg"}
					className="w-full shadow font-semibold"
					disabled={loading}
				>
					{loading ? (
						<div className="flex items-center gap-2">
							<Loader2 className="animate-spin" />
							<p>Logging in...</p>
						</div>
					) : (
						"Log In"
					)}
				</Button>

				<GoogleButton />

				<p className="text-sm text-center text-muted-foreground">
					Don&apos;t have an account?{" "}
					<Link href="/signup" className="text-primary hover:underline">
						Sign up
					</Link>
				</p>
			</form>
		</Section>
	);
}
