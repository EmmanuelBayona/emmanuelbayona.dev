import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogTitles } from "lib/blogs";
import { MaxWidthWrapper } from "components/max-width-wrapper";
import { CustomMDX } from "components/mdx";
import { formatDateUS } from "lib/utils";
import { BlogTitles } from "components/blog-titles";

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
        <MaxWidthWrapper className="mt-5 lg:mt-14 xl:max-w-screen-lg xl:grid xl:grid-flow-col">

            <section>
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

            <BlogTitles titles={blogTitles} />

        </MaxWidthWrapper>
    );
}
