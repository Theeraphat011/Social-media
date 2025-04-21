"use client";

import AnimationWrapper from "./AnimationWrapper";
import { 
  Cog6ToothIcon, 
  ChartBarIcon, 
  PuzzlePieceIcon, 
  FingerPrintIcon, 
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const Other = () => {
   const services = [
      {
         icon: <Cog6ToothIcon className="h-16 w-16 text-[#c6ff81]" />,
         title: "Strategic Planning",
         description:
            "We develop comprehensive digital strategies tailored to your business goals, ensuring maximum ROI and sustainable growth.",
         bgAccent: "from-[#ebffd7] to-white",
      },
      {
         icon: <ChartBarIcon className="h-16 w-16 text-[#81ffb2]" />,
         title: "Data Analytics",
         description:
            "Transform your raw data into actionable insights with our advanced analytics services, helping you make informed decisions.",
         bgAccent: "from-[#e0fff0] to-white",
      },
      {
         icon: <PuzzlePieceIcon className="h-16 w-16 text-[#00cc66]" />,
         title: "UX/UI Design",
         description:
            "Create delightful user experiences with our expert design team, focusing on usability, accessibility, and conversion optimization.",
         bgAccent: "from-[#ccffe6] to-white",
      },
      {
         icon: <FingerPrintIcon className="h-16 w-16 text-[#008040]" />,
         title: "Cybersecurity",
         description:
            "Protect your digital assets with our comprehensive security solutions, including risk assessment, implementation, and monitoring.",
         bgAccent: "from-[#d7ffe0] to-white",
      },
   ];

   return (
      <div className="container mx-auto px-4 py-16">
         <AnimationWrapper animateFrom="bottom">
            <div className="text-center mb-16">
               <span className="text-green-600 font-medium mb-2 inline-block">
                  WHAT WE OFFER
               </span>
               <h2 className="text-4xl font-bold mb-4">Our Services</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  We provide comprehensive digital solutions to help your
                  business thrive in today's competitive landscape.
               </p>
               <div className="w-24 h-1 bg-gradient-to-r from-[#c6ff81] to-green-400 mx-auto mt-6"></div>
            </div>
         </AnimationWrapper>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {services.map((service, index) => (
               <AnimationWrapper
                  key={index}
                  animateFrom={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
               >
                  <div className="flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-gradient-to-br h-full group relative overflow-hidden">
                     <div
                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.bgAccent} rounded-bl-full opacity-20 -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}
                     ></div>

                     <div className="flex items-start gap-5">
                        <div className="p-3 bg-gray-50 rounded-lg">
                           {service.icon}
                        </div>
                        <div>
                           <h3 className="text-xl font-bold mb-3">
                              {service.title}
                           </h3>
                           <p className="text-gray-600 mb-4">
                              {service.description}
                           </p>
                           <a
                              href="#"
                              className="text-green-600 hover:text-green-800 inline-flex items-center font-medium"
                           >
                              Learn more
                              <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                           </a>
                        </div>
                     </div>
                  </div>
               </AnimationWrapper>
            ))}
         </div>

         <AnimationWrapper animateFrom="bottom" delay={200}>
            <div className="mt-16 bg-gradient-to-r from-green-800 to-green-900 text-white p-8 rounded-2xl text-center">
               <h3 className="text-2xl font-bold mb-4">
                  Need a custom solution?
               </h3>
               <p className="mb-8">
                  Our team of experts can build a tailored package to meet your
                  specific business requirements
               </p>
               <div className="flex justify-center flex-wrap gap-4">
                  <a
                     href="#"
                     className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md transition-colors duration-300"
                  >
                     Contact Us
                  </a>
                  <a
                     href="#"
                     className="bg-transparent border border-white hover:bg-white hover:text-green-900 text-white py-3 px-8 rounded-md transition-colors duration-300"
                  >
                     View Portfolio
                  </a>
               </div>
            </div>
         </AnimationWrapper>
      </div>
   );
};

export default Other;
