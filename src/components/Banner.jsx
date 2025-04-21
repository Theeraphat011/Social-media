"use client";

import Image from "next/image";
import BannerImg from "../../public/img/microphone_illustration.png";
import AnimationWrapper from "./AnimationWrapper";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Banner = () => {
   return (
      <>
         <div className="relative flex flex-col items-center lg:flex-row lg:justify-between my-20 px-4 overflow-hidden rounded-lg bg-gradient-to-r from-gray-50 to-white shadow-lg">
            <div className="absolute top-0 left-0 w-40 h-40 bg-green-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-500 rounded-full opacity-20 translate-x-1/4 translate-y-1/4 z-10"></div>
            
            <AnimationWrapper animateFrom="left">
               <Image
                  src={BannerImg}
                  width={650}
                  height={550}
                  className="w-full lg:ml-10 hover:scale-105 transition-transform duration-300"
                  alt="Banner"
               />
            </AnimationWrapper>

            <AnimationWrapper animateFrom="bottom" delay={300}>
               <div className="grid justify-center gap-5 lg:w-full py-8">
                  <div className="inline-block mb-2">
                     <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">New Feature</span>
                  </div>
                  
                  <h1 className="text-6xl max-xl:text-5xl max-md:text-3xl font-bold bg-gradient-to-r from-green-800 to-green-600 text-transparent bg-clip-text">
                     Navigating the <br />
                     digital landscape <br />
                     for success
                  </h1>
                  
                  <p className="md:text-lg text-gray-600">
                     It is a long established fact that a reader will be <br />{" "}
                     distracted by the readable content of a page when <br />
                     looking at its layout. The point of using Lorem <br /> Ipsum
                     is that it has a more-or-less normal distribution.
                  </p>
                  
                  <div className="flex flex-col lg:flex-row gap-4 mt-4">
                     <a
                        href="#"
                        className="bg-green-700 hover:bg-green-800 rounded-md text-white py-3 px-8 text-center transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                     >
                        <span>Navigating The Digital</span>
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                     </a>
                     
                     <a href="#" className="text-green-700 border border-green-300 rounded-md py-3 px-6 text-center transition-all hover:bg-green-50 hover:border-green-400">
                        Learn More
                     </a>
                  </div>
               </div>
            </AnimationWrapper>
         </div>
      </>
   );
};

export default Banner;
