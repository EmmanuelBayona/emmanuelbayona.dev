"use client";
import { useRef, useState } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { cn } from "lib/utils";

interface MouseFollowTooltipProps {
    children: React.ReactNode;
    className?: string;
    message: string;
}

export const MouseFollowTooltip = ({
    children,
    message,
    className,
}: MouseFollowTooltipProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 300,
        damping: 30,
        mass: 1,
    });

    const ref = useRef<HTMLDivElement>(null);
    const [lastY, setLastY] = useState(0);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const div = ref.current;
        const rect = div.getBoundingClientRect();

        const offsetY = e.clientY - rect.top - rect.height / 2;

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    };

    function handleMouseEnter() {
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <div
            ref={ref}
            className={cn(
                "relative flex flex-col items-center justify-center w-min p-2",
                className
            )}
            style={{
                perspective: "800px",
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}

            <motion.figcaption
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 hidden rounded-[4px] bg-zinc-900/25 border border-white/5 px-[10px] py-0.5 text-[10px] text-white/80 backdrop-blur-md sm:flex whitespace-nowrap"
                style={{ x, y, opacity, rotate: rotateFigcaption }}
            >
                {message}
            </motion.figcaption>
        </div>
    );
};
