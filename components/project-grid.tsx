import Link from "next/link"
import { getBlogPosts } from "lib/blogs"
import { ProjectItem } from "./project-item"
import { cn } from "lib/utils"


export const ProjectsGrid = () => {

    const allBlogs = getBlogPosts()

    return (
        <section className={cn("w-full px-5 flex flex-col gap-6 md:px-0 mt-10 lg:mt-28 max-w-screen-md mx-auto relative",
            "after:bg-red-500 after:h-full after:w-[1px] after:absolute after:top-0 after:right-0 after:bottom-0 after:translate-x-3",
            "before:bg-red-500 before:h-full before:w-[1px] before:absolute before:top-0 before:left-0 before:bottom-0 before:-translate-x-3"
        )}>

            {
                allBlogs?.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className={cn("after:bg-red-500 after:w-full after:h-[1px] after:content-[''] after:block after:translate-y-3",
                            "first:before:bg-red-500 first:before:w-full first:before:h-[1px] first:before:content-[''] first:before:block first:before:-translate-y-3"
                        )}
                    >
                        <ProjectItem
                            title={post.metadata.title}
                            publishedAt={post.metadata.publishedAt}
                            summary={post.metadata.summary}
                            className="mt-4 md:mt-0"
                        />
                    </Link>
                ))
            }


        </section>
    )

}
