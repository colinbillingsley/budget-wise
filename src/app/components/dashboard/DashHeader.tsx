import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import H1 from "../H1";

const DashHeader = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	return (
		<header>
			<H1 className="mb-4 text-xl md:text-xl">Hello, {session?.user.name}</H1>
		</header>
	);
};

export default DashHeader;
