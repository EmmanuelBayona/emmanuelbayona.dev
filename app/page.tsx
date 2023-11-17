import { ProjectsGrid } from "./_components";

export default function Home() {
	return (
		<main>
			<section className="max-w-4xl mx-auto mt-24 lg:mt-48 text-center">
				<h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white drop-shadow-white-neon">
					I create and bring <br /> products to life.
				</h1>
			</section>

			<ProjectsGrid />

		</main>
	)
}
