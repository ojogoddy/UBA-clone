// import React from 'react'
// import carousel1 from "../assets/UBA-Foundation-2-scaled.jpg"
// import carousel2 from "../assets/UBA-Group-Achievements.jpg"
// import carousel3 from "../assets/UBA-Foundation-2-scaled.jpg"
// import carousel4 from "../assets/UBA-Group-Achievements.jpg"
// import carousel5 from "../assets/UBA-Foundation-2-scaled.jpg"


// const Carousel = () => {
//   return (
//     <div id="default-carousel" className="relative w-full" data-carousel="slide">
//       {/* Carousel wrapper */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {/* Item 1 */}
//         <div className="transition duration-700 ease-in-out" data-carousel-item>
//           <img
//             src={carousel1}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
//         {/* Item 2 */}
//         <div className="transition duration-700 ease-in-out" data-carousel-item>
//           <img
//             src={carousel2}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
//         {/* Item 3 */}
//         <div className="transition duration-700 ease-in-out" data-carousel-item>
//           <img
//             src={carousel3}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
//         {/* Item 4 */}
//         <div className="transition duration-700 ease-in-out" data-carousel-item>
//           <img
//             src={carousel4}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
//         {/* Item 5 */}
//         <div className="transition duration-700 ease-in-out" data-carousel-item>
//           <img
//             src={carousel5}
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
//       </div>
//       {/* Slider indicators */}
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         {[0, 1, 2, 3, 4].map((index) => (
//           <button
//             key={index}
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current={index === 0}
//             aria-label={`Slide ${index + 1}`}
//             data-carousel-slide-to={index}
//           ></button>
//         ))}
//       </div>
//       {/* Slider controls */}
//       <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   )
// }

// export default Carousel

import React, { useEffect, useRef, useState } from 'react'
import carousel1 from "../assets/UBA-Foundation-2-scaled.jpg"
import carousel2 from "../assets/UBA-Group-Achievements.jpg"
import carousel3 from "../assets/UBA-Foundation-2-scaled.jpg"
import carousel4 from "../assets/UBA-Group-Achievements.jpg"
const images = [carousel1, carousel2, carousel3, carousel4 ]
const Carousel = () => {
    const indicatorWidthPercent = images.length > 0 ? 100 / images.length: 100

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentSlide((prevSlide)=>(prevSlide + 1)% images.length)
        }, 5000)
        //clear the interval on component unmount
        return ()=>clearInterval(intervalId)
    }, [])
  return (
    <div className="w-full max-w-xl mx-auto">
        <div className='w-full flex flex-row overflow-x-scroll snap-x snap-mandatory' style={{
            paddingBottom: "15px",
            clipPath: "inset( 0 0 15px 0)"
        }}>
        {images.map((prop, index)=>{
            return(
                <div className={`w-full flex-shrink-0 snap-start ${index === currentSlide ? "opacity-50": "opacity-30"}`} key={index} >
                    <img src={prop} alt=""  />
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Carousel