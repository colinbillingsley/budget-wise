// components/dashboard/CustomChartTooltip.tsx
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { TooltipProps } from "recharts";

export const MonthlyCustomChartTooltip = ({
	active,
	payload,
	label,
}: TooltipProps<any, any>) => {
	if (!active || !payload || payload.length === 0) return null;

	const value = payload[0]?.value;
	const displayDate = label; // this is the `day` value, e.g., "Jul 1"

	return (
		<div className="text-center rounded-md bg-background px-3 py-2 shadow-md border text-sm">
			<p className="text-muted-foreground">
				{dayjs(displayDate).format("MMM D")}
			</p>
			<p className="font-medium text-foreground">{formatCurrency(value)}</p>
		</div>
	);
};
