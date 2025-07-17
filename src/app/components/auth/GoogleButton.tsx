import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-client";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleButton = ({ text }: { text?: string }) => {
	return (
		<Button
			onClick={signInWithGoogle}
			size={"lg"}
			type="button"
			className="w-full font-semibold"
			variant={"secondary"}
		>
			<FaGoogle />
			{text ? text : "Login with Google"}
		</Button>
	);
};

export default GoogleButton;
