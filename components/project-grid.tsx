import Link from "next/link"
import { getBlogPosts } from "lib/blogs"
import { ProjectItem } from "./project-item"


export const ProjectsGrid = () => {

    const allBlogs = getBlogPosts()

    return (
        <section className="w-full px-5 flex flex-col gap-4 md:px-0 mt-10 lg:mt-28 max-w-screen-md mx-auto">

            {
                allBlogs?.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                    >
                        <ProjectItem
                            title={post.metadata.title}
                            publishedAt={post.metadata.publishedAt}
                            summary={post.metadata.summary}
                            image={post.metadata.image}
                            className="mt-4 md:mt-0"
                        />
                    </Link>
                ))
            }

        </section>
    )

}
