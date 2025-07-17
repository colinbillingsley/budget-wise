import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const PageContainer = ({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				`min-h-screen w-full font-[family-name:var(--font-inter)] text-foreground p-6`,
				className
			)}
		>
			{children}
		</div>
	);
};

export default PageContainer;
