'use client';
import { MouseEvent } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";


export const ProjectItem = () => {

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const onHandleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
        // elements info about the size and position relative to the viewport
        const bounds = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - bounds.left);
        mouseY.set(clientY - bounds.top);
    }

    return (
        <article 
            className="w-full max-w-xs md:max-w-none bg-dark border border-dark-accent rounded-3xl p-5 md:p-8 relative group"
            onMouseMove={onHandleMouseMove}
        >

            <motion.div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl"
                style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgb(111 1 255 / 0.15) 0%, transparent 80%)`
                }}
            />

            <h2 className="text-white text-xl font-semibold">
                Hover glow effect
            </h2>

            <p className="text-white text-sm mt-2">
                Create a glow effect on hover on a card using framer-motion
            </p>

        </article>
    )

}