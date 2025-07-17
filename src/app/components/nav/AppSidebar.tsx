"use client";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
	ArrowUpDown,
	CalendarDays,
	Flag,
	HandCoins,
	Home,
	LogOut,
	PiggyBank,
	Settings,
	UserCircle2,
	Wallet,
} from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const generalLinks: { title: string; url: string; icon: ReactNode }[] = [
	{
		title: "Home",
		url: "/dashboard",
		icon: <Home />,
	},
	{
		title: "Budget",
		url: "/budget",
		icon: <PiggyBank />,
	},
	{
		title: "Calendar",
		url: "/calendar",
		icon: <CalendarDays />,
	},
	{
		title: "Goals",
		url: "/goals",
		icon: <Flag />,
	},
	{
		title: "Transactions",
		url: "/transactions",
		icon: <ArrowUpDown />,
	},
	{
		title: "Wallet",
		url: "/wallet",
		icon: <Wallet />,
	},
];

const personalLinks: { title: string; url: string; icon: ReactNode }[] = [
	{
		title: "Account",
		url: "/account",
		icon: <UserCircle2 />,
	},
	{
		title: "Settings",
		url: "/settings",
		icon: <Settings />,
	},
];

const AppSidebar = () => {
	const pathname = usePathname();
	const router = useRouter();
	const determineActive = (url: string): boolean => {
		return pathname.includes(url);
	};
    

	async function handleLogout() {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/login"); // redirect to login page
				},
			},
		});
	}

	return (
		<Sidebar collapsible="icon" variant="floating">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton className="text-xl flex items-center justify-center hover:bg-transparent dark:hover:text-primary">
							<HandCoins />
							<span>BudgetWise</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>General</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{generalLinks.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={determineActive(item.url)}
									>
										<Link href={item.url} prefetch>
											{item.icon}
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Personal</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{personalLinks.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										asChild
										isActive={determineActive(item.url)}
									>
										<Link href={item.url} prefetch>
											{item.icon}
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild onClick={handleLogout}>
							<div>
								<LogOut />
								<span>Logout</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
