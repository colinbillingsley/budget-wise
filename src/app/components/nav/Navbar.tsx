import { Button } from "@/components/ui/button";
import { HandCoins } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="p-3 md:p-4 font-[family-name:var(--font-poppins)] bg-background border-b border-border">
			<nav className="w-full flex items-center">
				<div className="flex items-center justify-between gap-8 w-full">
					<div className="flex items-center gap-3 text-primary">
						<HandCoins size={24} />
						<span>BudgetWise</span>
					</div>

					<div className="ml-auto flex items-center gap-2 sm:gap-3">
						<Link href={"/signup"} prefetch>
							<Button className="rounded-full py-6 px-4 sm:px-6 text-xs sm:text-sm">
								Sign Up
							</Button>
						</Link>

						<Link href={"/login"} prefetch>
							<Button
								variant={"outline"}
								className="rounded-full py-6 px-4 sm:px-6 text-xs sm:text-sm"
							>
								Log In
							</Button>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
