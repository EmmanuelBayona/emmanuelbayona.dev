import { ProjectItem } from "."

export const ProjectsGrid = () => {

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-14 lg:mt-32 px-6 md:px-10 gap-4">

            <div className="grid gap-4">
                <ProjectItem />
            </div>

            <div className="grid gap-4">
                <ProjectItem />
            </div>

            <div className="grid gap-4">
                <ProjectItem />
            </div>

        </section>
    )

}