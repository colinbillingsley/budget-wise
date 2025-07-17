import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { formatCurrency, truncateWithEllipsis } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const RecentTransactions = () => {
	return (
		<Card>
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
			<CardContent className="space-y-5 h-full overflow-y-auto scroll-smooth">
				{Array(6)
					.fill(null)
					.map((_, i) => (
						<div
							key={i}
							className="w-full flex items-center justify-between p-3 rounded-md border border-muted text-sm"
						>
							<div className="flex items-center gap-2">
								<p>{truncateWithEllipsis("Transaction", 20)}</p>
								<p className="px-3 py-1 bg-accent rounded-full font-semibold">
									category
								</p>
							</div>
							<p>{formatCurrency(1)}</p>
						</div>
					))}
			</CardContent>
		</Card>
	);
};

export default RecentTransactions;
