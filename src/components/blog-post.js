import Image from "next/image";
import Link from "next/link";

export default function BlogPost({ post }) {
    return (
        <article className="prose card">
            <div className="card-photo">
                <Image src={post.frontmatter.cover_image} alt="" width={20} height={15} layout="responsive"></Image>
            </div>
            <div className="card-header">
                <span className="text-teal-700 author">{post.frontmatter.author}</span> &#8226; <span className="text-teal-700 published-date">{post.frontmatter.date}</span>
            </div>
            <div className="overflow-hidden card-content min-h-[150px] max-h-[150px]">
                <h3 className="mt-0">
                    <Link href={`/blogs/${post.slug}`}>
                        <a className="inline-block ">
                            {post.frontmatter.title}
                        </a>
                    </Link>
                </h3>
                <p>{post.frontmatter.excerpt}</p>
            </div>
            <div className="border border-t-1 card-footer">
                <Link href={`/blogs/${post.slug}`}>
                    <a className="inline-block float-right p-4 m-2 text-white bg-purple-600 rounded-lg hover:bg-purple-500">Read More</a>
                </Link>
            </div>
        </article>
    )
}


export function RecommendationPost({ post }) {
    return (
        <Link href={`/blogs/${post.slug}`}>
            <a className="inline-block">
                <article className="prose card">
                    <div className="grid items-center grid-cols-1 gap-1 p-4 md:grid-cols-2">
                        <Image src={post.frontmatter.cover_image} alt="" width={160} height={120} layout="fixed"></Image>
                        <h3 className="prose-h2">
                            {post.frontmatter.title}
                        </h3>
                    </div>
                </article>
            </a>
        </Link>
    )
}