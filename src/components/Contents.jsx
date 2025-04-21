"use client";

import {
   ArrowRightIcon,
   MagnifyingGlassIcon,
   ChatBubbleLeftRightIcon,
   DocumentTextIcon,
   ChartBarIcon,
   SparklesIcon,
} from "@heroicons/react/24/solid";
import AnimationWrapper from "./AnimationWrapper";

const Contents = () => {
   const contentCards = [
      {
         title: "Search Engine Optimization",
         description: "Boost your site's visibility with our SEO expertise",
         longDescription:
            "Our data-driven SEO strategies improve search rankings and drive organic traffic. We optimize content, structure, and backlink profiles for sustainable growth.",
         icon: <MagnifyingGlassIcon className="h-14 w-14" />,
         isDark: false,
      },
      {
         title: "Social Media Marketing",
         description: "Engage your audience across all platforms",
         longDescription:
            "Build meaningful connections with your audience through strategic content, community management, and targeted campaigns that drive engagement and conversions.",
         icon: <ChatBubbleLeftRightIcon className="h-14 w-14" />,
         isDark: true,
      },
      {
         title: "Content Strategy",
         description: "Create compelling stories that convert",
         longDescription:
            "Our content experts craft narratives that resonate with your target audience, establish your brand voice, and guide customers through their journey with your business.",
         icon: <DocumentTextIcon className="h-14 w-14" />,
         isDark: true,
      },
      {
         title: "Analytics & Reporting",
         description: "Data-driven insights for better decisions",
         longDescription:
            "Transform raw data into actionable insights with comprehensive analytics and clear reporting. Track progress, measure ROI, and refine strategies based on real results.",
         icon: <ChartBarIcon className="h-14 w-14" />,
         isDark: false,
      },
   ];

   return (
      <div className="container mx-auto max-w-7xl mt-20 mb-16 px-4 relative">
         {/* Decorative elements */}
         <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -z-10 opacity-70 blur-3xl"></div>
         <div className="absolute bottom-20 left-10 w-64 h-64 bg-green-50 rounded-full -z-10 opacity-70 blur-3xl"></div>

         <AnimationWrapper animateFrom="bottom">
            <div className="text-center mb-16">
               <span className="text-green-600 font-medium mb-2 inline-block">
                  OUR EXPERTISE
               </span>
               <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                  <SparklesIcon className="h-8 w-8 text-green-400" />
                  Digital Marketing Solutions
                  <SparklesIcon className="h-8 w-8 text-green-400" />
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  We offer comprehensive digital marketing services to help your
                  business grow and stand out in today's competitive landscape.
                  Our team of experts delivers tailored strategies for
                  businesses of all sizes.
               </p>
               <div className="w-24 h-1 bg-gradient-to-r from-[#c6ff81] to-green-400 mx-auto mt-6" />
            </div>
         </AnimationWrapper>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {contentCards.map((card, index) => {
               const { title, description, longDescription, icon, isDark } =
                  card;
               const styles = {
                  highlight: isDark ? "bg-gray-600" : "bg-green-500",
                  text: isDark ? "text-white" : "text-gray-800",
                  background: isDark ? "bg-gray-900" : "bg-white",
                  arrow: isDark
                     ? "bg-gradient-to-r from-gray-400 to-gray-600 text-gray-900"
                     : "bg-gradient-to-r from-green-600 to-green-400 text-white",
                  iconColor: isDark ? "text-gray-800" : "text-green-600",
                  secondaryText: isDark ? "text-gray-300" : "text-gray-600",
               };

               return (
                  <AnimationWrapper
                     key={index}
                     animateFrom={index % 2 === 0 ? "left" : "right"}
                     delay={index * 100}
                  >
                     <div
                        className={`border-2 border-gray-300 rounded-xl flex flex-col md:flex-row justify-between p-6 md:p-10 gap-5 group hover:shadow-xl transition-all duration-300 ${styles.background} ${styles.text} hover:border-green-400 min-h-[250px] md:min-h-[220px]`}
                     >
                        <div className="flex flex-1 flex-col justify-between">
                           <div>
                              <h2 className="text-xl md:text-2xl font-bold mb-4">
                                 <span
                                    className={`${styles.highlight} py-2 pl-4 pr-8 rounded-tl-xl rounded-tr-xl rounded-br-xl inline-block mb-2`}
                                 >
                                    {title}
                                 </span>
                              </h2>

                              <div className="flex items-center mb-3">
                                 <div
                                    className={`${styles.arrow} rounded-full p-2.5 mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center`}
                                 >
                                    <ArrowRightIcon className="h-5 w-5" />
                                 </div>
                                 <p className="font-medium ">{description}</p>
                              </div>

                              <p
                                 className={`text-sm mt-3 ${styles.secondaryText} line-clamp-3 md:line-clamp-none`}
                              >
                                 {longDescription}
                              </p>
                           </div>

                           <div className="mt-4 hidden md:block">
                              <button
                                 className={`text-sm font-medium ${
                                    isDark ? "text-green-300" : "text-green-600"
                                 } hover:underline flex items-center`}
                              >
                                 Learn more
                                 <ArrowRightIcon className="h-3 w-3 ml-1 inline" />
                              </button>
                           </div>
                        </div>

                        <div className="flex items-center justify-center h-[140px] md:h-[180px] group-hover:scale-105 transition-transform duration-300">
                           <div
                              className={`${styles.iconColor} p-6 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:shadow-lg transition-all duration-300`}
                           >
                              {icon}
                           </div>
                        </div>
                     </div>
                  </AnimationWrapper>
               );
            })}
         </div>

         <AnimationWrapper animateFrom="bottom" delay={300}>
            <div className="mt-16 text-center">
               <a
                  href="#"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
               >
                  Explore All Services
               </a>
            </div>
         </AnimationWrapper>
      </div>
   );
};

export default Contents;
