"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
} from "@/components/ui/chart";
import { MonthlyCustomChartTooltip } from "./MonthlyCustomChartTooltip";
import dayjs from "dayjs";

export function MonthlySpendingChart({
	importedChartData,
	isDown,
}: {
	importedChartData: { date: string; spent: number; dateKey: string }[];
	isDown: boolean;
}) {
	const chartData = importedChartData;

	const chartConfig = {
		spent: {
			color: `${isDown ? "var(--success)" : "var(--destructive)"}`,
		},
	} satisfies ChartConfig;

	return (
		<ChartContainer config={chartConfig} className="h-[15rem] w-full">
			<AreaChart
				accessibilityLayer
				data={chartData}
				margin={{
					left: 12,
					right: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="date"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
					tickFormatter={(value) => dayjs(value).date().toString()}
				/>
				<ChartTooltip cursor={true} content={<MonthlyCustomChartTooltip />} />
				<Area
					dataKey="spent"
					type="linear"
					fill="var(--color-spent)"
					fillOpacity={0.3}
					stroke="var(--color-spent)"
				/>
			</AreaChart>
		</ChartContainer>
	);
}
