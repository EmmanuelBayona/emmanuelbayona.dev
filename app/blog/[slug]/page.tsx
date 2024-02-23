import type { Metadata } from "next"
import { notFound } from "next/navigation";
import { getBlogPosts, getBlogTitles } from "lib/blogs";
import { MaxWidthWrapper } from "components/max-width-wrapper";
import { CustomMDX } from "components/mdx";
import { formatDateUS } from "lib/utils";
import { BlogTitles } from "components/blog-titles";


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
    
    const post = getBlogPosts().find((post) => post.slug === params.slug);
    if (!post) return;

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image
    } = post.metadata;

    return {
        metadataBase: new URL(`https://emmanuelbayona.dev/blog/${post.slug}`),
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `https://emmanuelbayona.dev/blog/${post.slug}`,
            // images: [{url: ''}]
        },
    }

}

export default function Blog({ params }: { params: { slug: string } }) {

    const post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) notFound();

    const blogTitles = getBlogTitles(post.content);
    
    return (
        <MaxWidthWrapper className="mt-5 lg:mt-14 lg:flex lg:flex-col lg:items-center relative">

            <div className="absolute top-0 right-5 hidden xl:block h-full">
                <BlogTitles titles={blogTitles}
                    className="sticky top-5"
                />
            </div>

            <section>
                <script 
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BlogPosting',
                            headline: post.metadata.title,
                            datePublished: post.metadata.publishedAt,
                            dateModified: post.metadata.publishedAt,
                            description: post.metadata.summary,
                            image: post.metadata.image,
                            url: `https://emmanuelbayona.dev/blog/${post.slug}`,
                            author: {
                                '@type': 'Person',
                                name: 'Emmanuel Bayona',
                            }
                        })
                    }}
                />
                <h1 className="font-medium text-2xl lg:text-3xl tracking-tighter max-w-[650px] text-white">
                    {post.metadata.title}
                </h1>

                <p className="text-zinc-400">
                    { formatDateUS(post.metadata.publishedAt) }
                </p>

                <article className="prose prose-neutral text-zinc-400 pb-5 lg:pb-10">
                    <CustomMDX source={post.content} />
                </article>

            </section>
        </MaxWidthWrapper>
    )

}