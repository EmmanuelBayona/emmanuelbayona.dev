import { VariantProps, cva } from "class-variance-authority"
import { cn } from "lib/utils"
import { InputHTMLAttributes, forwardRef } from "react"

export const inputVariants = cva(
    'w-full text-white/70 rounded-lg px-3 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary: 'bg-dark border border-dark-accent focus-visible:ring-white/10'
            },
            inputHeight: {
                sm: 'h-10',
                md: 'h-12',
                lg: 'h-14'
            },
        },
        defaultVariants: {
            variant: 'primary',
            inputHeight: 'sm'
        }
    }
)

interface InputProps extends InputHTMLAttributes<HTMLInputElement>,
VariantProps<typeof inputVariants>{}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, inputHeight, variant, ...props }, ref) => {
        return (
            <input 
                ref={ref}
                className={cn(inputVariants({ className, inputHeight, variant }))}
                {...props}
            />
        )
    }
)

Input.displayName = 'Input'