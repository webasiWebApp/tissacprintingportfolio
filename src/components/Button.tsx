"use client";

// Actually, I haven't created lib/utils. Next.js default often doesn't have it unless shadcn is used.
// I'll import directly.
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    color?: string;
    onClick?: () => void;
}

export default function Button({
    text,
    color = "#C6E2DE",
    onClick,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className={cn(
                "text-black font-heading border border-black transition-all rounded-md",
                "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
                "hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]",
                "active:shadow-none active:translate-x-[1px] active:translate-y-[1px]",
                className
            )}
            {...props}
        >
            {text}
        </button>
    );
}
