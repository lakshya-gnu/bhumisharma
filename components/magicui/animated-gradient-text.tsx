import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function AnimatedGradientText({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "hover:from-electric-lime hover:via-ufo-green hover:to-chartreuse-yellow group relative z-30 mx-auto flex max-w-fit flex-row items-center justify-center rounded-full bg-transparent px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-all duration-1000 ease-out [--bg-size:300%] hover:bg-gradient-to-r hover:text-blue-950 hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
                className,
            )}
        >
            <div
                className={`animate-gradient-text from-electric-lime via-ufo-green to-chartreuse-yellow absolute inset-0 block h-full w-full bg-gradient-to-r bg-[length:var(--bg-size)_100%] p-[1.5px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
            />
            {children}
        </div>
    );
}
