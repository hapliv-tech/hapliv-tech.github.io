import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

export default function SideSocialMediaBar(props) {
  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);

  useEffect(() => {
    const sidebarEl = document.querySelector('.sidebar').getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarTop(sidebarEl.top);
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const sidebarEl = document.querySelector('.sidebar');
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 110) {
      sidebarEl.classList.add('sticky');
      sidebarEl.classList.remove('hidden');
    } else {
      sidebarEl.classList.remove('sticky');
      sidebarEl.classList.add('hidden');
    }
  }

  return (<>
    <div className='bg-red-200 sidebar'>
      ^
    </div>
  </>);
}