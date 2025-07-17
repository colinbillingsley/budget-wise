import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SpentThisMonth = ({ spentAmount = 0 }: { spentAmount: number }) => {
	function formatToTwoDecimals(amount: number): string {
		return amount.toFixed(2);
	}

	return (
		<Card className="">
			<CardHeader>
				<CardTitle className="text-base">Spent this month</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2">
				<p className="font-bold text-2xl">
					${formatToTwoDecimals(spentAmount)}
				</p>
				<div className="w-full h-40 bg-accent"></div>
			</CardContent>
		</Card>
	);
};

export default SpentThisMonth;
