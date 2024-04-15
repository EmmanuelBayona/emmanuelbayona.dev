
import { cn } from "lib/utils"
import { ReactNode } from "react"

export const MaxWidthWrapper = ({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) => {

    return (
        <div className={cn('mx-auto w-full max-w-[650px] px-6 md:px-0', className)} >
            {children}
        </div>
    )

}
