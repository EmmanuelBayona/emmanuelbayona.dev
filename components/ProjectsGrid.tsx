import { getBlogPosts } from "@/lib/blogs"
import { ProjectItem } from "./ProjectItem"
import Link from "next/link"


export const ProjectsGrid = () => {

    const allBlogs = getBlogPosts()

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-14 lg:mt-32 gap-4">

            {
                allBlogs?.map((post) => (
                    <Link 
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                    >
                        <ProjectItem 
                            title={post.metadata.title}
                            publishedAt={post.metadata.publishedAt}
                        />
                    </Link>
                ))
            }

        </section>
    )

}