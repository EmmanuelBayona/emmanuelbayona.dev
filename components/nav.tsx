import Link from "next/link"

export const Navbar = () => {

    return (
        <nav className="bg-zinc-950 text-sm text-zinc-300 shadow-[inset_0_-1px_0_0_rgb(39,39,42)] h-12 flex justify-between items-center px-6 md:px-10 bg-transparent">

            <Link href='/' className="hover:text-zinc-400">
                Home
            </Link>

            <div className="flex gap-4">
                <Link href='/' className="hover:text-zinc-400">
                    Blog
                </Link>

                <Link href='/' className="hover:text-zinc-400">
                    Projects
                </Link>
            </div>

        </nav>
    )

}
