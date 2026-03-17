// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/legacy/image";

// import React from 'react';

// const PopupBanner = ({ onClose, isOpen }) => {
//     if (!isOpen) return null;
//     const [bannerData, setBannerData] = useState(null);
//     // Fetch banner data from backend
//     useEffect(() => {
//         const fetchBanner = async () => {
//             try {
//                 const baseAPIUrl = 'https://api.haplivdentalclinic.com';
//                 const response = await fetch(`${baseAPIUrl}/files/ls-media?key=home_page_banner&limit=1`);
//                 if (!response.ok) throw new Error("Failed to fetch banner data");
//                 const data = await response.json();
//                 setBannerData(data);
//             } catch (error) {
//                 console.error("Error loading banner:", error);
//             }
//         };
//         fetchBanner();
//     }, []);
//     if (!bannerData || bannerData.length == 0) return null;

//     return (
//         <div className="fixed z-50 bg-black inset-1 animate-fade-in no-doc-scroll">
//             <div
//                 variant="ghost"
//                 size="icon"
//                 className="absolute z-50 text-white top-4 right-4 hover:bg-white/20"
//                 onClick={onClose}
//             >
//               <span className="w-4 h-4 p-16 leading-8">X</span>

//             </div>
//             <div className="w-full h-full">
//                 {bannerData.map(banner =>
//                     banner.mime.startsWith('video')?<><video preload="auto" muted autoplay="true" aria-label="Video player">
//                     <source src={banner.url} type={banner.mime} />
//                     Your browser does not support the video tag.
//                   </video></>:banner.mime.startsWith('image')?<><Image
//                     src={bannerData[0].url}
//                     alt="Full page banner"
//                     className="object-contain w-full h-full"
//                     layout="fill"
//                 /> </>:<></>)}
//             </div>
//         </div>
//     );
// };

// export default PopupBanner;