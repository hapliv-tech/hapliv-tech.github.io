import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { marked } from 'marked';
import { mangle } from 'marked-mangle';
import { RecommendationPost } from 'components/blog-post';
import { useRouter } from "next/router";
import Disqus, { DiscussionEmbed } from "disqus-react"

marked.use(mangle());

export default function PostPage({ frontmatter, slug, content, recommendation }) {
    const recommendPosts = recommendation ? recommendation.sort(() => Math.random() - Math.random()).slice(0, 2) : null;
    const imageUrl = frontmatter?.cover_image? `https://haplivdentalclinic.com${frontmatter?.cover_image}`:`https://haplivdentalclinic.com/assets/hapliv_dental_operatory.webp`;
    const router = useRouter();
    const pageURL = (`https://haplivdentalclinic.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
    const disqusShortname = "haplivdentalclinic"
    const disqusConfig = {
      url: pageURL,
      identifier: pageURL,
      title: frontmatter?.title
    }
    
    return (<>
        <Head>
            <title>{frontmatter?.title} | Blog | Hapliv Dental Clinic</title>
            <meta name="description" content={frontmatter?.description} />
            <meta name="keywords" content={frontmatter?.keywords} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@HaplivDental" />
            <meta name="twitter:title" content={frontmatter?.title + ' | Blog | Hapliv Dental Clinic'} />
            <meta name="twitter:description" content={frontmatter?.description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta property="og:type" name="og:type" content="article" />
            <meta property="og:title" name="og:title" content={frontmatter?.title + ' | Blog | Hapliv Dental Clinic'} />
            <meta property="og:description" name="og:description" content={frontmatter?.description} />
            <meta property="og:image" name="og:image" content={imageUrl} />
        </Head>
        <section className='container p-4 m-auto lg:p-8 mt-36'>
            {slug ?
                <article className='prose md:prose-xl lg:prose-xl prose-slate card'>
                    <h1 className='title'>{frontmatter?.title}</h1>
                    <div className='text-md post-author'>
                        <span className="text-teal-700 author">{frontmatter?.author}</span> &#8226; <span className="text-teal-700 published-date">{frontmatter?.date}</span>
                        </div>
                    <Image src={frontmatter?.cover_image} alt='' height={140} width={300} sizes='' layout='responsive'></Image>
                    <div className='cover-img'>
                    </div>
                    <div className='post-body'>
                        <div dangerouslySetInnerHTML={{ __html: marked.parse(content ? content : '') }} className='items-center'></div>
                    </div>
                </article> : <></>}
        </section>

        <section className='container p-4 m-auto lg:p-8'>
            <h2 className='p-4 text-3xl font-extrabold text-center'>You may also want to read</h2>
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {recommendPosts ? recommendPosts.map((a, index) => (<RecommendationPost post={a} key={index}></RecommendationPost>)) : <></>}
            </section>
        </section>
        <div id="disqus_thread" className='container p-4 m-auto lg:p-8'></div>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
    </>)
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('src', 'posts'));
    const paths = files.filter(filename => filename).map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    if (!slug) {
        return {
            props: { hasError: false },
        }
    }
    const files = fs.readdirSync(path.join('src', 'posts'));
    const blogForRecommendation = files.filter(filename => filename && filename != slug + '.md').map(filename => {
        const markDownList = fs.readFileSync(path.join('src', 'posts', filename), 'utf-8');
        const { data: frontmatter } = matter(markDownList);
        return {
            "slug": filename.replace('.md', ''),
            "frontmatter": frontmatter
        };
    });
    const markDownWithMeta = fs.readFileSync(path.join('src', 'posts', slug + '.md'), 'utf-8');
    const { data: frontmatter, content } = matter(markDownWithMeta);
    return {
        props: {
            frontmatter: frontmatter,
            slug: slug,
            content: content,
            recommendation: blogForRecommendation
        }
    }
}