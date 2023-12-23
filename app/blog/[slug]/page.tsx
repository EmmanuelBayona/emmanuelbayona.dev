import type { Metadata } from "next"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/lib/blogs"
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote";


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
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime,
            url: `https://portfolio-next-azure-pi.vercel.app/blog/${post.slug}`,
            // images: [{url: ''}]
            
        },
    }

}

export default function Blog({ params }: { params: { slug: string } }) {

    const post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) notFound();
    
    return (
        <MaxWidthWrapper className="flex justify-center mt-24">
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
                            url: `https://portfolio-next-azure-pi.vercel.app/blog/${post.slug}`,
                            author: {
                                '@type': 'Person',
                                name: 'Emmanuel Bayona',
                            }
                        })
                    }}
                />
                <h1 className="font-medium text-3xl tracking-tighter max-w-[650px] text-white">
                    {post.metadata.title}
                </h1>

                <p className="text-white/40">
                    {post.metadata.publishedAt}
                </p>

                <article className="prose prose-neutral text-white/70">
                    <CustomMDX source={post.content} />
                </article>

            </section>
        </MaxWidthWrapper>
    )

}