import { cn } from "lib/utils";
import { slugify } from "./mdx";

type BlogTitle = { title: string; level: number }

interface BlogTitlesProps {
    titles: BlogTitle[]
    className?: string
}

export const BlogTitles = ({ titles, className }: BlogTitlesProps) => {

    return (
        <div className={cn('text-white/70', className)}>
            <ul className="leading-7">
                <li>
                    <p className="mb-1 text-white/50">ON THIS PAGE</p>
                </li>
                {
                    titles.map((title) => (
                        <li key={title.title}>
                            <a href={`#${slugify(title.title)}`}
                                className={cn('block hover:text-white hover:underline cursor-pointer', {
                                    'ml-3': title.level === 3,
                                } )}
                            >
                                {title.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}