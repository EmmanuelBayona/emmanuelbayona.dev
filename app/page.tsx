import { MaxWidthWrapper } from "components/max-width-wrapper";
import { ProjectsGrid } from "components/project-grid";

export default function Home() {
	return (
		<MaxWidthWrapper className="mt-12 lg:mt-28">
			<section className="max-w-[650px] mx-auto text-center">
				<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-white-neon">
					hey, I&apos;m Emmanuel 👋
				</h1>
				<p className="mt-8 text-base md:text-xl lg:text-2xl text-gray-300 max-w-[6500px]">
					Frontend Developer creating clean and intuitive user interfaces. Let&apos;s build something beautiful together.
				</p>
			</section>

			<ProjectsGrid />
		</MaxWidthWrapper>
	)
}
