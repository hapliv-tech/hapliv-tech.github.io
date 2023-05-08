import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
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
  return (<div className='p-4 mt-36 center'>
    <Head>
      <title>Dental Care Blogs | Hapliv Dental Clinic</title>
    </Head>
    <div className="flex items-center justify-center prose text-orange-900">
      <h1>Dental Care Blogs</h1>
    </div>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post,index)=>{
        return (<BlogPost post={post} key={'post-'+index}></BlogPost>);
      })}
    </div>
  </div>);
}