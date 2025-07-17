import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import React from "react";

const SpentThisMonth = ({ spentAmount = 0 }: { spentAmount: number }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-base">Monthly Spending</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2 h-full overflow-y-hidden bg-accent">
				<p>{formatCurrency(spentAmount)}</p>

				<div></div>
			</CardContent>
		</Card>
	);
};

export default SpentThisMonth;
