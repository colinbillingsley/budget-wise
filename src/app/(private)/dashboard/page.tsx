import React from "react";
import PageContainer from "../../components/PageContainer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import DashHeader from "../../components/dashboard/DashHeader";
import { Metadata } from "next";
import SpentThisMonth from "@/app/components/dashboard/SpentThisMonth";
import RecentTransactions from "@/app/components/dashboard/RecentTransactions";
import BudgetCard from "@/app/components/dashboard/BudgetCard";

export const metadata: Metadata = {
	title: "Home | Budget Wise",
	description: "Look over all your data from across the budgetwise app.",
};

const Dashboard = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) redirect("/login");

	return (
		<PageContainer>
			<DashHeader />

			<main className="w-full">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					<BudgetCard leftToSpend={127} />
					<SpentThisMonth spentAmount={100} />
					<RecentTransactions />
				</div>
			</main>
		</PageContainer>
	);
};

export default Dashboard;
