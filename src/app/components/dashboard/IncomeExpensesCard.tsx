import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { formatCurrency } from "@/lib/utils";
import { IncomeExpensesGraph } from "./IncomeExpensesGraph";
import dayjs from "dayjs";

const ICONSIZE = 14;

const IncomeExpensesCard = () => {
	const date = dayjs(new Date());

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-base">
					{date.format("MMMM YYYY")} Income/Expense&apos;s
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 h-full overflow-y-hidden">
				<IncomeExpensesGraph />
			</CardContent>
		</Card>
	);
};

export default IncomeExpensesCard;
