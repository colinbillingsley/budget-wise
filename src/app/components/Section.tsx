import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Section = ({
	children,
	className,
	px,
}: {
	children?: ReactNode;
	className?: string;
	px?: boolean | false;
}) => {
	return (
		<section className={cn(`${px ? "px-8 md:px-20" : ""} py-10`, className)}>
			{children}
		</section>
	);
};

export default Section;
