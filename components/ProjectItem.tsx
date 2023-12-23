
interface ProjectItem {
    title: string,
    summary: string,
    publishedAt: string
}

export const ProjectItem = ({ title, publishedAt, summary }: ProjectItem ) => {

    return (
        <article 
            className="w-full max-w-xs md:max-w-none bg-dark border border-dark-accent rounded-3xl p-5 md:p-8 relative group">

            <div  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl" />

            <h2 className="text-white text-xl font-semibold">
                { title }
            </h2>

            <p className="text-white/60 mt-2">
                { summary }
            </p>

            <p className="text-white/40 text-sm mt-2">
                { publishedAt }
            </p>

        </article>
    )

}