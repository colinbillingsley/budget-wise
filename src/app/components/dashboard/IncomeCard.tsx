import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const ICONSIZE = 14;

const IncomeCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-base">Income</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4 h-full overflow-y-hidden">
				<div className="flex items-center justify-between">
					<p>Yearly Income</p>
					<div className="flex items-center gap-3">
						<span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs">
							<ArrowUpRight size={ICONSIZE} />
							50% from last year
						</span>
						<span>{formatCurrency(20000)}</span>
					</div>
				</div>
				<div className="flex items-center justify-between ">
					<p>Monthly Income</p>
					<div className="flex items-center gap-3">
						<span className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs">
							<ArrowDownRight size={ICONSIZE} />
							5% from last month
						</span>
						<span>{formatCurrency(3300)}</span>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<p>Average Income</p>
					<div className="flex items-center gap-3">
						<span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs">
							<ArrowUpRight size={ICONSIZE} />
							5% from last month
						</span>
						<span>{formatCurrency(3400)}</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default IncomeCard;
