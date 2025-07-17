import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { formatCurrency } from "@/lib/utils";

const UpcomingTransactions = () => {
	return (
		<Card className="">
			<CardHeader>
				<CardTitle className="text-base">Upcoming Transactions</CardTitle>
			</CardHeader>
			<CardContent className="h-full flex flex-col justify-between">
				<div className="flex flex-col justify-between items-center h-[12rem]">
					{Array(3)
						.fill(null)
						.map((_, i) => (
							<div
								key={i}
								className="w-full flex items-center justify-between p-2 rounded-md"
							>
								<div className="flex items-center gap-2 text-sm">
									<div className="px-3 py-1 rounded-full border border-accent">
										<p>8 days</p>
									</div>
									<div className="flex items-center gap-2">
										<div className="size-5 bg-accent rounded-full"></div>
										<p>Subscription</p>
									</div>
								</div>
								<p className="text-sm">{formatCurrency(1)}</p>
							</div>
						))}
				</div>
				<Link href={"/transactions/upcoming"}>
					<Button
						size={"lg"}
						type="button"
						variant={"secondary"}
						className="w-full"
					>
						See all recurring transactions
					</Button>
				</Link>
			</CardContent>
		</Card>
	);
};

export default UpcomingTransactions;
