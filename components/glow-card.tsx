'use client';
import { MouseEvent } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export const GlowCard = () => {

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
            className="w-full bg-dark border border-dark-accent rounded-3xl p-5 md:p-8 relative group"
            onMouseMove={onHandleMouseMove}
            key={1}
        >

            <motion.div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl"
                style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgb(111 1 255 / 0.15) 0%, transparent 80%)`
                }}
            />

            <h2 className="text-white text-xl font-semibold mt-0">
                Hover me
            </h2>

            <p className="text-white/60 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolorum voluptatibus eum dignissimos quasi assumenda non itaque, cum aspernatur debitis distinctio illo consequuntur atque accusantium rerum nulla minus animi cupiditate.
            </p>

            <span className="md:hidden text-white">
                ‼ Mobile not supported
            </span>

        </article>
    )

}