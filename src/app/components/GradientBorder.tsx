"use client";

import React from "react";
import { cn } from "@/lib/utils"; // Tailwind class merge helper (ShadCN style)

interface GradientBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	borderColors?: string; // tailwind gradient e.g. 'from-green-400 via-emerald-500 to-teal-400'
	animate?: boolean; // whether the border spins
	padding?: string; // e.g. 'p-6'
	rounded?: string;
	conicSize?: string;
}

const conicSizes = {
	sm: "from-[78%] via-[88%] to-[96%]",
	md: "from-[75%] via-[87%] to-[99%]",
	lg: "from-[72%] via-[85%] to-[102%]",
	default: "",
};

const GradientBorder: React.FC<GradientBorderCardProps> = ({
	children,
	className,
	borderColors = "from-black via-primary to-black",
	animate = true,
	rounded = "sm",
	conicSize = "md",
}) => {
	return (
		<div
			className={cn(
				`w-full ${
					animate ? "animate-rotate-border" : ""
				} max-w-sm rounded-${rounded} ${
					animate ? "bg-conic/[from_var(--border-angle)]" : "bg-conic-180"
				} ${borderColors} ${
					conicSizes[conicSize as keyof typeof conicSizes]
				} p-px`,
				className
			)}
		>
			{children}
		</div>
	);
};

export default GradientBorder;
