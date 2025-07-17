import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const RecentTransactions = () => {
	function formatToTwoDecimals(amount: number): string {
		return amount.toFixed(2);
	}

	return (
		<Card className="">
			<CardHeader>
				<CardTitle className="text-base">Recent Transactions</CardTitle>
				<CardAction>
					<Link href={"/transactions"} prefetch>
						<Button variant={"ghost"}>
							<ChevronRight />
						</Button>
					</Link>
				</CardAction>
			</CardHeader>
			<CardContent className="space-y-2 h-[15rem] overflow-y-auto scroll-smooth">
				{Array(6)
					.fill(null)
					.map((_, i) => (
						<div
							key={i}
							className="w-full flex items-center justify-between p-2 bg-accent rounded-md"
						>
							<div className="flex items-center gap-2">
								<div className="size-10 bg-primary/50 rounded-full"></div>
								<p className="text-sm">Category</p>
							</div>
							<p className="text-sm">$0.00</p>
						</div>
					))}
			</CardContent>
		</Card>
	);
};

export default RecentTransactions;
