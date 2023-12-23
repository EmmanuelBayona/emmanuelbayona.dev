import { cv } from "lib/utils"
import { ReactNode } from "react"

export const MaxWidthWrapper = ({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) => {

    return (
        <div className={cv('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)} >
            { children }
        </div>
    )

}