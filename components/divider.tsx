import { cn } from "lib/utils";

export const Divider = ({ className }: { className?: string }) => (
    <hr className={cn("", className)} />
);
