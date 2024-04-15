import Link from "next/link"
import { getBlogPosts } from "lib/blogs"
import { ProjectItem } from "./project-item"
import { MaxWidthWrapper } from "./max-width-wrapper"

interface ProjectsListProps {
    title: string;
    itemsToShow: 'project' | 'blog';
}

export const ProjectsList = ({ title, itemsToShow }: ProjectsListProps) => {

    const allPosts = getBlogPosts()
    const selectedPosts = allPosts.filter((post) => post.metadata.postType === itemsToShow);

    return (
        <MaxWidthWrapper className="md:max-w-[682px] dashes">

            <h2 className="font-bold text-white md:pl-4">
                {title}
            </h2>

            <ul className="mt-5 md:mt-3 flex flex-col gap-5">
                {
                    selectedPosts?.map((post) => (
                        <li key={post.slug} >
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
