import { MaxWidthWrapper } from "components/max-width-wrapper";
import { ProjectsList } from "components/projects-list";

export default function Home() {
    return (
        <>
            <MaxWidthWrapper className="mt-12 lg:mt-28">
                <section className="mx-auto">
                    <h1 className="font-bold text-white">
                        Hey, I&apos;m Emmanuel
                    </h1>

                    <p className="mt-2 text-sm">
                        Frontend Developer
                    </p>
                </section>
            </MaxWidthWrapper>

            <ProjectsList title="Projects" itemsToShow="project" />
            <ProjectsList title="Blogs" itemsToShow="blog" />
        </>
    )
}
