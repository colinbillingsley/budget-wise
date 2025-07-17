"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Section from "../Section";
import { CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { signUp } from "@/app/server/users";
import { useRouter } from "next/navigation";
import GoogleButton from "./GoogleButton";

export default function SignUpForm() {
	const [loading, setLoading] = useState<boolean>(false);
	const [formData, setFormData] = useState<{
		name: string;
		email: string;
		password: string;
	}>({
		name: "",
		email: "",
		password: "",
	});
	const [formErrors, setFormErrors] = useState<{
		name: string;
		email: string;
		password: string;
	}>({
		name: "",
		email: "",
		password: "",
	});
	const [serverError, setServerError] = useState<string | null>(null);
	const router = useRouter();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setFormErrors({ ...formErrors, [e.target.name]: "" });
		setServerError("");
	};

	// determine if there are any empty fields
	// if so, set the error message for the field
	// return the object of errors
	function determineEmptyFields() {
		const newErrors: typeof formErrors = {
			name: "",
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

	// determine if input in email box is valid email
	function isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email.toLowerCase());
	}

	async function handleRegister(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);

		if (!validateFields()) {
			setLoading(false);
			return;
		}

		try {
			const res = await signUp(
				formData.name,
				formData.email,
				formData.password
			);

			if (res.success) {
				toast("User has been created! Thanks for signing up with BudgetWise!", {
					description: "Please log in with your credentials.",
					action: {
						label: "Close",
						onClick: () => console.log("Close"),
					},
					icon: <CheckCircle className="text-green-500" size={15} />,
				});
				router.push("/login");
			} else {
				setServerError(res.message);
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
				onSubmit={handleRegister}
				className="space-y-6 bg-background rounded-sm"
			>
				<div className="space-y-8 my-10">
					<div className="space-y-3">
						<Label
							htmlFor="name"
							className={`${
								formErrors.name ? "text-destructive" : "text-foreground"
							}`}
						>
							Name
						</Label>
						<Input
							name="name"
							value={formData.name}
							onChange={handleChange}
							className={`${formErrors.name ? "border-destructive" : ""}`}
						/>
						{formErrors.name && (
							<p className="text-destructive text-sm">{formErrors.name}</p>
						)}
					</div>
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
							htmlFor="password"
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

				{serverError && (
					<p className="text-destructive text-sm">{serverError}</p>
				)}

				<Button
					type="submit"
					size={"lg"}
					className="w-full shadow font-semibold"
					disabled={loading}
				>
					{loading ? (
						<div className="flex items-center gap-2">
							<Loader2 className="animate-spin" />
							<p>Creating account...</p>
						</div>
					) : (
						"Create Account"
					)}
				</Button>

				<GoogleButton text="Sign Up with Google" />

				<p className="text-sm text-center text-muted-foreground">
					Already have an account?{" "}
					<Link href="/login" className="text-primary hover:underline">
						Log in
					</Link>
				</p>
			</form>
		</Section>
	);
}
