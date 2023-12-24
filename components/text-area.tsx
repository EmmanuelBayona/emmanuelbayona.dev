import { VariantProps, cva } from "class-variance-authority"
import { cn } from "lib/utils"
import { TextareaHTMLAttributes, forwardRef } from "react"

export const textAreaVariants = cva(
    'w-full text-white/70 rounded-lg p-3 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 resize-none',
    {
        variants: {
            variant: {
                primary: 'bg-dark border border-dark-accent focus-visible:ring-white/10'
            },
        },
        defaultVariants: {
            variant: 'primary',
        }
    }
)

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>,
VariantProps<typeof textAreaVariants>{}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, variant, ...props }, ref) => {
        return (
            <textarea 
                ref={ref}
                className={cn(textAreaVariants({ className, variant }))}
                {...props}
            />
        )
    }
)

TextArea.displayName = 'TextArea'