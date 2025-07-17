import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/nav/Navbar";
import { Toaster } from "sonner";

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
			<body className={`${inter.variable} antialiased dark`}>
				<Navbar />
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
