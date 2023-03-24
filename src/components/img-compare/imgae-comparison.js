// import { FaInstagram, FaArrowCircleRight } from "react-icons/fa";
// import Image from "next/image";
// import styles from "./img-compare.module.css";
// import React, { useState, useEffect, useRef, useCallback } from "react";

// export default function ImageCompare() {
//     const [isResizing, setIsResizing] = useState(false);
//   const topImageRef = useRef();
//   const handleRef = useRef();

//   const setPositioning = useCallback((x) => {
//     const { left, width } = topImageRef.current.getBoundingClientRect();
//     const handleWidth = handleRef.current.offsetWidth;

//     if (x >= left && x <= width + left - handleWidth) {
//       handleRef.current.style.left = `${((x - left) / width) * 100}%`;
//       topImageRef.current.style.clipPath = `inset(0 ${
//         100 - ((x - left) / width) * 100
//       }% 0 0)`;
//     }
//   }, []);

//   const handleResize = useCallback(
//     (e) => {
//       if (e.clientX) {
//         setPositioning(e.clientX);
//       } else if (e.touches[0] && e.touches[0].clientX) {
//         setPositioning(e.touches[0].clientX);
//       }
//     },
//     [setPositioning]
//   );

//   // Set initial positioning on component mount
//   useEffect(() => {
//     const { left, width } = topImageRef.current.getBoundingClientRect();
//     const handleWidth = handleRef.current.offsetWidth;

//     setPositioning(width / 2 + left - handleWidth / 2);
//   }, [setPositioning]);

//   const handleResizeEnd = useCallback(() => {
//     setIsResizing(false);

//     window.removeEventListener("mousemove", handleResize);
//     window.removeEventListener("touchmove", handleResize);
//     window.removeEventListener("mouseup", handleResizeEnd);
//     window.removeEventListener("touchend", handleResizeEnd);
//   }, [handleResize]);

//   const onKeyDown = useCallback(
//     (e) => {
//       const { offsetLeft, offsetParent } = handleRef.current;

//       if (e.code === "ArrowLeft") {
//         setPositioning(offsetLeft + offsetParent.offsetLeft - 10);
//       }

//       if (e.code === "ArrowRight") {
//         setPositioning(offsetLeft + offsetParent.offsetLeft + 10);
//       }
//     },
//     [setPositioning]
//   );

//   // Add keydown event on mount
//   useEffect(() => {
//     window.addEventListener("keydown", onKeyDown);
//   }, [onKeyDown]);

//   useEffect(() => {
//     if (isResizing) {
//       window.addEventListener("mousemove", handleResize);
//       window.addEventListener("touchmove", handleResize);
//       window.addEventListener("mouseup", handleResizeEnd);
//       window.addEventListener("touchend", handleResizeEnd);
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleResize);
//       window.addEventListener("touchmove", handleResize);
//       window.removeEventListener("mouseup", handleResizeEnd);
//       window.removeEventListener("touchend", handleResizeEnd);
//       window.removeEventListener("keyup", onKeyDown);
//     };
//   }, [isResizing, handleResize, handleResizeEnd, onKeyDown]);

//   return (
//     <>
//       <div className="comparison-slider">
//         <div
//           ref={handleRef}
//           className="handle"
//           onMouseDown={() => setIsResizing(true)}
//           onTouchStart={() => setIsResizing(true)}
//         >
          
//         </div>
//         <div ref={topImageRef} className="comparison-item top">
//           <Image className="img" draggable="false" src={'/assets/technology/endomotor.webp'} height="300" width="200"/>
//         </div>
//         <div className="comparison-item">
//           <Image className="img" draggable="false" src={'/assets/technology/jmorita.webp'} height="300" width="200" />
//         </div>
//       </div>
//       {/* DEMO ONLY */}
//       <p className="photo-creds">
//         Photos by:
//         <a href="https://unsplash.com/@dancalders">@dancalders</a>
//         <a href="https://unsplash.com/@dancalders">@oplattner</a>
//       </p>
//     </>
//   );
// }