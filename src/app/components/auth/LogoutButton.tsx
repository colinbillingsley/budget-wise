"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
	const router = useRouter();

	async function handleLogout() {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/login"); // redirect to login page
				},
			},
		});
	}
	return (
		<Button
			type="button"
			variant={"ghost"}
			className="justify-start"
			onClick={handleLogout}
		>
			<LogOut /> Logout
		</Button>
	);
};

export default LogoutButton;
