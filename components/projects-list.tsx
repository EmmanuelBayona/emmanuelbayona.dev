import Link from "next/link"
import { getBlogPosts } from "lib/blogs"
import { ProjectItem } from "./project-item"
import { MaxWidthWrapper } from "./max-width-wrapper"

interface ProjectsListProps {
    title: string;
    itemsToShow: 'projects' | 'blogs';
}

export const ProjectsList = ({ title }: ProjectsListProps) => {

    const allBlogs = getBlogPosts()

    return (
        <MaxWidthWrapper className="md:max-w-[682px]">

            <h2 className="font-bold text-white mt-16 md:p-4">
                {title}
            </h2>

            <ul className="mt-5 md:mt-3 flex flex-col gap-5">
                {
                    allBlogs?.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                            >
                                <ProjectItem
                                    title={post.metadata.title}
                                    publishedAt={post.metadata.publishedAt}
                                    summary={post.metadata.summary}
                                />
                            </Link>
                        </li>
                    ))
                }
            </ul>


        </MaxWidthWrapper>
    )

}
