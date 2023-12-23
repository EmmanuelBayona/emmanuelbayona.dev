import Link from "next/link"

export const Navbar = () => {

    return (
        <nav className="w-full h-14 border-b border-dark-accent flex justify-between items-center px-6 md:px-10 fixed top-0 backdrop-blur-lg bg-transparent z-10">

            <Link className="text-white text-sm"
                href='/'
            >
                Home
            </Link>

        </nav>
    )

}