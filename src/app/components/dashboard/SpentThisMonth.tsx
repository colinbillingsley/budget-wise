import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import React from "react";
import { MonthlySpendingChart } from "./MonthlySpendingChart";
import dayjs from "dayjs";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const ICONSIZE = 14;

const todaysDate = dayjs(new Date());

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min); // Ensure min is an integer
	max = Math.floor(max); // Ensure max is an integer
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateBaseChartData() {
	const daysInMonth = todaysDate.daysInMonth();
	const month = todaysDate.month();
	const year = todaysDate.year();

	return Array.from({ length: daysInMonth }, (_, i) => {
		const date = dayjs(new Date(year, month, i + 1));
		return {
			date: date.toISOString(), // e.g., "Jul 1"
			spent: getRandomInt(0, 100),
			dateKey: date.toISOString().slice(0, 10), // optional for matching
		};
	});
}

const SpentThisMonth = () => {
	const chartData: {
		date: string;
		spent: number;
		dateKey: string;
	}[] = generateBaseChartData();
	const total: number = chartData.reduce(
		(
			accum: number,
			current: {
				date: string;
				spent: number;
				dateKey: string;
			}
		) => accum + current.spent,
		0
	);
	const isDown: boolean = true;

	return (
		<Card className="col-span-full h-[30rem]">
			<CardHeader>
				<CardTitle className="text-base">
					<h2>{dayjs(todaysDate).format("MMMM YYYY")} Spending</h2>
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 h-full overflow-y-hidden">
				<div className="space-y-2">
					<p className="text-4xl font-bold">{formatCurrency(total)}</p>
					<span
						className={`w-fit flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
							isDown
								? "bg-success/10 text-success"
								: "bg-destructive/10 text-destructive"
						}`}
					>
						{isDown ? (
							<ArrowDownRight size={ICONSIZE} />
						) : (
							<ArrowUpRight size={ICONSIZE} />
						)}
						5% from last month
					</span>
				</div>
				<MonthlySpendingChart importedChartData={chartData} isDown={isDown} />
			</CardContent>
		</Card>
	);
};

export default SpentThisMonth;
