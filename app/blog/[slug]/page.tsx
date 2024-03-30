import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogTitles } from "lib/blogs";
import { MaxWidthWrapper } from "components/max-width-wrapper";
import { CustomMDX } from "components/mdx";
import { formatDateUS } from "lib/utils";
import { BlogTitles } from "components/blog-titles";
import Link from "next/link";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata | undefined> {
    const post = getBlogPosts().find((post) => post.slug === params.slug);
    if (!post) return;

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;

    const ogImage = image
        ? new URL(`https://emmanuelbayona.dev${image}`)
        : new URL(`https://emmanuelbayona.dev/cubes-algorithms.png`);

    return {
        metadataBase: new URL(`https://emmanuelbayona.dev/blog/${post.slug}`),
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `https://emmanuelbayona.dev/blog/${post.slug}`,
            images: [{ url: ogImage }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Blog({ params }: { params: { slug: string } }) {
    const post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) notFound();

    const blogTitles = getBlogTitles(post.content);

    return (
        <MaxWidthWrapper className="mt-5 lg:mt-14 lg:flex lg:justify-center lg:max-w-5xl">

            <section className="lg:pr-8 lg:border-r lg:border-white/5 blog-dash">
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            headline: post.metadata.title,
                            datePublished: post.metadata.publishedAt,
                            dateModified: post.metadata.publishedAt,
                            description: post.metadata.summary,
                            image: post.metadata.image,
                            url: `https://emmanuelbayona.dev/blog/${post.slug}`,
                            author: {
                                "@type": "Person",
                                name: "Emmanuel Bayona",
                            },
                        }),
                    }}
                />

                <Link href="/" className="block mb-3">
                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </Link>

                <h1 className="font-medium tracking-tighter text-white">
                    {post.metadata.title}
                </h1>

                <p>
                    {formatDateUS(post.metadata.publishedAt)}
                </p>

                <article className="prose prose-neutral text-zinc-400 pb-5 lg:pb-10">
                    <CustomMDX source={post.content} />
                </article>
            </section>

            <aside className="pl-8">
                <BlogTitles className="sticky top-5" titles={blogTitles} />
            </aside>


        </MaxWidthWrapper >
    );
}
