import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PageContainer from "@/app/components/PageContainer";
import SignUpForm from "@/app/components/auth/SignUpForm";

const page = () => {
	return (
		<PageContainer className="grid md:grid-cols-2">
			<div className="relative">
				<Image
					src={"/auth-bg.avif"}
					alt="black background with gray waves"
					fill
					className="object-cover hidden md:block"
				/>
			</div>
			<div className=" border-l border-border">
				<Link
					href={"/"}
					className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground mx-8 mt-8"
				>
					<ChevronLeft size={14} />
					<span>Home</span>
				</Link>

				<div className="p-8">
					<div className="space-y-1">
						<h1 className="text-2xl font-semibold text-foreground">
							Create an account with BudgetWise
						</h1>
						<p className="text-muted-foreground text-sm">
							Create an account to manage your budget
						</p>
					</div>

					<SignUpForm />
				</div>
			</div>
		</PageContainer>
	);
};

export default page;
