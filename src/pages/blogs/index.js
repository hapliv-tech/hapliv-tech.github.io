import Head from "next/head";
import Image from "next/image";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import BlogPost from 'components/blog-post';
import {sortByDate} from '../../utils';
export async function getStaticProps(){
  const files = fs.readdirSync(path.join('src','posts'));
  const posts = files.map(filename =>{
    const slug = filename.replace('.md','');
    const markDownWithMeta = fs.readFileSync(path.join('src','posts',filename),'utf-8');
    const {data:frontmatter} = matter(markDownWithMeta)
    return {slug,frontmatter}
  });
  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}

export default function BlogHome({ posts }) {
  return (<div className='p-4 mt-44 center'>
    <Head>
      <title>Dental Care Blogs | Hapliv Dental Clinic</title>
      <meta name="title" property="title" content="Dental Care Blogs | Hapliv Dental Clinic" />
        <meta 
          name="description" 
          property="description" 
          content="Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic's blog." 
        />
        <meta 
          name="keywords" 
          property="keywords" 
          content="Dental Care Blogs, Oral Health, Dental Tips, Cosmetic Dentistry, Orthodontics, LASER, RCT, Dental Treatments, Hapliv Dental Clinic" 
        />

        {/* Open Graph / Social Sharing Tags */}
        <meta name="og:title" property="og:title" content="Dental Care Blogs | Hapliv Dental Clinic" />
        <meta 
          name="og:description" 
          property="og:description" 
          content="Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic's blog." 
        />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="og:image" property="og:image" content="https://haplivdentalclinic.com/assets/blog/laser-teeth-whitening.webp" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" property="twitter:title" content="Dental Care Blogs | Hapliv Dental Clinic" />
        <meta 
          name="twitter:description" 
          property="twitter:description" 
          content="Stay updated with the latest dental care tips, treatments, and oral health news from Hapliv Dental Clinic's blog." 
        />
        <meta name="twitter:image" property="twitter:image" content="https://haplivdentalclinic.com/assets/blog/laser-teeth-whitening.webp" />

    </Head>
    <div className="flex items-center justify-center prose text-orange-900">
      <h1>Dental Care Blogs</h1>
    </div>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {posts?.map((post,index)=>{
        return (<BlogPost post={post} key={'post-'+index}></BlogPost>);
      })}
    </div>
    
    
  </div>);
}