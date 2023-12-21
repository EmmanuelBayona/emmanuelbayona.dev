import { getBlogPosts } from "@/lib/blogs"
import type { Metadata } from "next"


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
            images: [{url: ''}]
            
        },
    }

}

export default function Blog({ params }: { params: { slug: string } }) {
    
    return (
        <>
        </>
    )

}