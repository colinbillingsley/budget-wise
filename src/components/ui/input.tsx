import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-background dark:bg-input/30 border-input hover:border-foreground/35 flex h-10 w-full min-w-0 rounded-sm border bg-transparent px-3 py-1 text-base shadow-xs transition-colors duration-[300ms] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				"focus-visible:border-foreground",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				className
			)}
			{...props}
		/>
	);
}

export { Input };
