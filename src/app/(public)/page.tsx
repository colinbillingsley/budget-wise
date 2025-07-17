import { Button } from "@/components/ui/button";
import PageContainer from "../components/PageContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "../components/Section";
import {
	BanknoteArrowDown,
	BanknoteArrowUp,
	ChartLine,
	ChevronRight,
	PiggyBank,
	TrendingUp,
	Wallet,
} from "lucide-react";
import Link from "next/link";
import GradientBorder from "../components/GradientBorder";

const ICONSIZE: number = 28;
const STROKEWIDTH: number = 1;

const features = [
	{
		title: "Budget Smarter",
		desc: "Categorize expenses and optimize savings.",
		icon: <PiggyBank size={ICONSIZE} strokeWidth={STROKEWIDTH} />,
	},
	{
		title: "Track Your Spending",
		desc: "Visualize where your money goes each month.",
		icon: <Wallet size={ICONSIZE} strokeWidth={STROKEWIDTH} />,
	},
	{
		title: "Grow Your Wealth",
		desc: "See how much you have left to invest.",
		icon: <TrendingUp size={ICONSIZE} strokeWidth={STROKEWIDTH} />,
	},
];

export default function Home() {
	return (
		<PageContainer>
			<main className="min-h-screen">
				{/* Hero */}
				<Section px className="min-h-screen grid lg:grid-cols-2">
					<div className="flex items-center justify-center h-full">
						<div className="space-y-4">
							<h1 className="max-w-2xl text-5xl md:text-7xl font-medium mb-4 bg-gradient-to-br from-foreground/50 to-foreground bg-clip-text text-transparent">
								Take Control of Your Money
							</h1>
							<p className="text-lg text-foreground/75 mb-6 max-w-xl">
								A sleek budgeting tool to help you track income, cut expenses,
								and build smarter habits.
							</p>
							<Link href={"/signup"}>
								<Button
									size={"lg"}
									className="shadow-primary/30 shadow-lg rounded-full"
								>
									Get Started
									<ChevronRight size={18} />
								</Button>
							</Link>
						</div>
					</div>
					<div className="flex items-center justify-center text-primary">
						<GradientBorder conicSize="default">
							<Card className="border-border m-0">
								<CardHeader>
									<CardTitle>Summary</CardTitle>
								</CardHeader>
								<CardContent className="text-card-foreground/80">
									<p className="p-2 flex items-center gap-2">
										<BanknoteArrowUp
											strokeWidth={STROKEWIDTH}
											className="text-emerald-500"
										/>{" "}
										Income: $3,000
									</p>
									<p className="p-2 flex items-center gap-2">
										<BanknoteArrowDown
											strokeWidth={STROKEWIDTH}
											className="text-red-500"
										/>{" "}
										Expenses: $1,450
									</p>
									<p className="p-2 flex items-center gap-2">
										<ChartLine
											strokeWidth={STROKEWIDTH}
											className="text-primary"
										/>
										Invested: $400
									</p>
								</CardContent>
							</Card>
						</GradientBorder>
					</div>
				</Section>

				{/* Features */}
				<Section px className="py-20">
					<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
						{features.map((feat, i) => (
							<GradientBorder
								key={i}
								animate={false}
								conicSize="default"
								borderColors="from-background via-foreground to-background"
							>
								<Card className="bg-background border border-border h-full">
									<CardHeader className="space-y-2">
										{feat.icon}
										<CardTitle>{feat.title}</CardTitle>
									</CardHeader>
									<CardContent className="p-6">
										<p className="text-card-foreground/75 text-sm">
											{feat.desc}
										</p>
									</CardContent>
								</Card>
							</GradientBorder>
						))}
					</div>
				</Section>
			</main>
		</PageContainer>
	);
}
