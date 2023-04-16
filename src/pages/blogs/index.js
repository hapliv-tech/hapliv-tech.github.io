import Head from "next/head";
import React, { useState, useEffect } from 'react';


export default function BlogHome({ props }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@haplivdentalclinic")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, [])
  return (<div className='p-4 mt-36 center'>
    <Head>
      <title>Blogs by Hapliv Dental Clinic</title>
    </Head>
    <div className="flex items-center justify-center text-orange-900">
      <h1 className='text-3xl font-bold'>Blogs</h1>
    </div>

    {loading ? (
      <div>...Data Loading.....</div>
    ) : (
      <div>
        <br />
        <div className="grid grid-flow-col gap-4">{items.map((val, idx) => {
          return (<>
            <a href={val.link} target="_blank" className="p-2 m-auto border basis-1/4">
              <div key={idx} >
                <img src={val?.thumbnail} className="aspect-video" />
                <span className='text-md'>{val?.title}</span>
                <span className="text-[0.60em] block">By {val?.author}</span>
                <span className="text-[0.60em] block">At {val?.pubDate}</span>
              </div>
            </a>

          </>);
        })
        }</div>
      </div>
    )}
  </div>);
}