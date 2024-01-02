import Link from "next/link"

export const Navbar = () => {

    return (
        <nav className="w-full h-14 border-b border-dark-accent flex justify-between items-center px-6 md:px-10 bg-transparent">

            <Link className="text-white text-sm"
                href='/'
            >
                Home
            </Link>

        </nav>
    )

}