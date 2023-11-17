import Link from "next/link"


export const Navbar = () => {

    return (
        <nav className="w-full h-14 border-b border-dark-accent flex justify-between items-center px-5 md:px-7 fixed top-0 backdrop-blur-lg bg-transparent z-10">

            <span className="text-white text-sm">
                Emmanuel Bayona
            </span>

            <div className="flex justify-center items-center gap-4 text-white text-sm">
                <Link href="/">
                    Home
                </Link>

                <Link href="/Blog">
                    Blog
                </Link>
            </div>

        </nav>
    )

}