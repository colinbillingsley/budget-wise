import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../components/nav/AppSidebar";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				id="private-body"
				className={`${inter.variable} antialiased dark bg-background w-full overflow-x-hidden`}
			>
				<SidebarProvider>
					<AppSidebar />
					<main className="w-full">
						<SidebarTrigger />
						{children}
						<Toaster />
					</main>
				</SidebarProvider>
			</body>
		</html>
	);
}
