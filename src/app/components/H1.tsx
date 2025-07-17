import { cn } from "@/lib/utils";
import React from "react";

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
	children: React.ReactNode;
}

const H1 = ({ children, className, ...props }: H1Props) => {
	return (
		<h1
			className={cn(
				"text-2xl md:text-3xl font-medium leading-tight tracking-tight",
				"",
				className
			)}
			{...props}
		>
			{children}
		</h1>
	);
};

export default H1;
