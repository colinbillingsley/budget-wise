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

const CalendarCard = () => {
	return (
		<Card className="col-span-full">
			<CardHeader>
				<CardTitle className="text-base">Calendar</CardTitle>
				<CardAction>
					<Link href={"/calendar"} prefetch>
						<Button variant={"ghost"}>
							<ChevronRight />
						</Button>
					</Link>
				</CardAction>
			</CardHeader>
			<CardContent>
				<div></div>
			</CardContent>
		</Card>
	);
};

export default CalendarCard;
