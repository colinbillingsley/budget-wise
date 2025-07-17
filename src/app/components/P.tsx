import { cn } from "@/lib/utils";
import React from "react";

interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: React.ReactNode;
}

const P = ({ children, className, ...props }: PProps) => {
	return (
		<p
			className={cn(
				"text-base md:text-lg text-foreground/75 leading-relaxed",
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
};

export default P;
