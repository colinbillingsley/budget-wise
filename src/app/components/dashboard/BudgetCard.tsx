import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BudgetCard = ({ leftToSpend = 0 }: { leftToSpend: number }) => {
	function formatToTwoDecimals(amount: number): string {
		return amount.toFixed(2);
	}

	return (
		<Card className="">
			<CardHeader>
				<CardTitle className="text-base">Budget</CardTitle>
				<CardAction>
					<Link href={"/transactions"} prefetch>
						<Button variant="ghost">
							<ChevronRight />
						</Button>
					</Link>
				</CardAction>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="w-full space-y-3">
					<h2 className="text-sm text-card-foreground/75">Left to Spend</h2>
					<p className="text-xl font-bold">
						${formatToTwoDecimals(leftToSpend)}
					</p>
					<div className="w-full h-3 bg-accent rounded-full overflow-hidden">
						<div className="h-full w-6/12 bg-primary rounded-full"></div>
					</div>
				</div>
				<div className="w-full space-y-4">
					<h2 className="text-sm text-card-foreground/75">
						Popular Categories
					</h2>
					<div className="flex items-center justify-between gap-6 w-full overflow-x-auto scroll-smooth whitespace-nowrap">
						{Array(8)
							.fill(null)
							.map((_, i) => (
								<div
									key={i}
									className="min-w-[120px] flex flex-col justify-center items-center gap-2 shrink-0"
								>
									<div className="size-20 bg-accent rounded-full"></div>
									<p className="text-sm text-card-foreground/75">Restaurant</p>
									<p className="text-base">$0.00 left</p>
								</div>
							))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default BudgetCard;
