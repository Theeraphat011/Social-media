"use client";

import Image from "next/image";
import AnimationWrapper from "./AnimationWrapper";
import amazone from "../../public/img/Amazon.jpg";
import netflix from "../../public/img/netflix.jpg";
import youtube from "../../public/img/youtube.png";
import zoom from "../../public/img/zoom.png";
import hubspot from "../../public/img/hubspot.png";
import GitHub from "../../public/img/GitHub.webp";

const Hero = () => {
   const imgStore = [amazone, netflix, youtube, zoom, hubspot, GitHub];
   
   return (
      <>
         <div className="container mx-auto px-4 py-12 md:py-16">
            <AnimationWrapper animateFrom="bottom">
               <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-3">
                     Trusted by industry leaders worldwide
                  </h2>
                  <p className="text-gray-500 max-w-2xl mx-auto">
                     Join thousands of leading companies who trust our platform to
                     accelerate their digital transformation journey
                  </p>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#c6ff81] to-green-300 mx-auto mt-6"></div>
               </div>
            </AnimationWrapper>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 relative">
               <div className="absolute -top-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 blur-xl"></div>
               <div className="absolute -bottom-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>

               {imgStore.map((item, index) => (
                  <AnimationWrapper key={index} delay={index * 150} animateFrom="bottom">
                     <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <Image
                           src={item}
                           width={130}
                           height={100}
                           alt={`Partner company logo ${index + 1}`}
                           className="grayscale transition-all duration-500 group-hover:grayscale-0 object-contain h-12 md:h-16"
                        />
                     </div>
                  </AnimationWrapper>
               ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
               {[
                  { value: "10K+", label: "Active Users" },
                  { value: "200+", label: "Global Partners" },
                  { value: "99%", label: "Customer Satisfaction" },
                  { value: "24/7", label: "Support Available" }
               ].map((stat, index) => (
                  <AnimationWrapper key={index} delay={index * 100} animateFrom="bottom">
                     <div className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                           {stat.value}
                        </h3>
                        <p className="text-gray-600 mt-2">{stat.label}</p>
                     </div>
                  </AnimationWrapper>
               ))}
            </div>
         </div>
      </>
   );
};

export default Hero;
