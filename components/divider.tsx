import { cn } from "lib/utils";

export const Divider = ({ className }: { className?: string }) => (
    <hr className={cn("h-px bg-white/5 border-0", className)} />
);
