"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
	{ month: "January", income: 186, expenses: 80 },
	{ month: "February", income: 305, expenses: 200 },
	{ month: "March", income: 237, expenses: 120 },
	{ month: "April", income: 73, expenses: 190 },
	{ month: "May", income: 209, expenses: 130 },
	{ month: "June", income: 214, expenses: 140 },
];

const chartConfig = {
	income: {
		label: "Income",
		color: "var(--success)",
	},
	expenses: {
		label: "Expenses",
		color: "var(--destructive)",
	},
} satisfies ChartConfig;

export function IncomeExpensesGraph() {
	return (
		<ChartContainer config={chartConfig} className="w-full h-full">
			<BarChart accessibilityLayer data={chartData}>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="month"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<ChartTooltip
					cursor={true}
					content={<ChartTooltipContent indicator="dashed" />}
				/>
				<Bar
					dataKey="income"
					fill="var(--color-success)"
					fillOpacity={0.7}
					stroke="var(--color-success)"
					radius={4}
				/>
				<Bar
					dataKey="expenses"
					fill="var(--color-destructive)"
					fillOpacity={0.7}
					stroke="var(--color-destructive)"
					radius={4}
				/>
			</BarChart>
		</ChartContainer>
	);
}
