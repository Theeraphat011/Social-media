import AnimationWrapper from "./AnimationWrapper";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {
   FacebookIcon,
   TwitterIcon,
   InstagramIcon,
   LinkedinIcon,
} from "./Icons";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <AnimationWrapper animateFrom="bottom" delay={100}>
         <footer className="container mx-auto max-w-7xl bg-gradient-to-br from-gray-900 to-black my-20 py-12 px-6 md:p-12 rounded-xl shadow-2xl">
            {/* Top section with columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-10">
               <div className="text-white border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0 md:pr-6">
                  <AnimationWrapper animateFrom="left" delay={200}>
                     <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-green-400">
                           About Us
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                           We help businesses grow through strategic digital
                           marketing. Our data-driven approach delivers
                           measurable results and ROI that exceed industry
                           standards.
                        </p>
                        <div className="flex gap-3 items-center group cursor-pointer">
                           <p className="text-green-400 font-medium group-hover:text-green-300 transition-colors">
                              Our story
                           </p>
                           <div className="bg-green-900 rounded-full p-1.5 group-hover:bg-green-800 transition-colors">
                              <ArrowRightIcon className="h-3 w-3 text-green-200 group-hover:translate-x-0.5 transition-transform" />
                           </div>
                        </div>
                     </div>
                  </AnimationWrapper>
               </div>

               <div className="text-white border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0 md:pr-6">
                  <AnimationWrapper animateFrom="bottom" delay={300}>
                     <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-green-400">
                           Services
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                           <li className="hover:text-white transition-colors">
                              <a href="#">SEO Optimization</a>
                           </li>
                           <li className="hover:text-white transition-colors">
                              <a href="#">Social Media Marketing</a>
                           </li>
                           <li className="hover:text-white transition-colors">
                              <a href="#">Content Creation</a>
                           </li>
                           <li className="hover:text-white transition-colors">
                              <a href="#">Analytics & Reporting</a>
                           </li>
                        </ul>
                        <div className="flex gap-3 items-center group cursor-pointer">
                           <p className="text-green-400 font-medium group-hover:text-green-300 transition-colors">
                              View all services
                           </p>
                           <div className="bg-green-900 rounded-full p-1.5 group-hover:bg-green-800 transition-colors">
                              <ArrowRightIcon className="h-3 w-3 text-green-200 group-hover:translate-x-0.5 transition-transform" />
                           </div>
                        </div>
                     </div>
                  </AnimationWrapper>
               </div>

               <div className="text-white">
                  <AnimationWrapper animateFrom="right" delay={400}>
                     <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-green-400">
                           Contact Us
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                           Ready to transform your digital presence? Get in
                           touch with our team of experts.
                        </p>
                        <a
                           href="#"
                           className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-all duration-300 text-center max-w-[200px]"
                        >
                           Request a consultation
                        </a>
                        <div className="flex gap-4 mt-2">
                           <a
                              href="#"
                              className="bg-gray-800 hover:bg-green-600 rounded-full p-2.5 transition-colors"
                           >
                              <FacebookIcon className="w-4 h-4" />
                           </a>
                           <a
                              href="#"
                              className="bg-gray-800 hover:bg-green-600 rounded-full p-2.5 transition-colors"
                           >
                              <TwitterIcon className="w-4 h-4" />
                           </a>
                           <a
                              href="#"
                              className="bg-gray-800 hover:bg-green-600 rounded-full p-2.5 transition-colors"
                           >
                              <InstagramIcon className="w-4 h-4" />
                           </a>
                           <a
                              href="#"
                              className="bg-gray-800 hover:bg-green-600 rounded-full p-2.5 transition-colors"
                           >
                              <LinkedinIcon className="w-4 h-4" />
                           </a>
                        </div>
                     </div>
                  </AnimationWrapper>
               </div>
            </div>

            {/* Bottom section with copyright */}
            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
               <AnimationWrapper animateFrom="bottom" delay={500}>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                     <div className="flex items-center">
                        <div className="bg-green-600 h-8 w-8 rounded-md flex items-center justify-center mr-2">
                           <span className="text-white font-bold">DM</span>
                        </div>
                        <span className="text-white font-bold text-lg">
                           DigitalMarket
                        </span>
                     </div>
                     <div className="text-gray-500 text-sm">
                        © {currentYear} DigitalMarket. All rights reserved.
                     </div>
                     <div className="flex gap-6">
                        <a
                           href="#"
                           className="text-gray-400 hover:text-green-300 transition-colors text-sm"
                        >
                           Privacy Policy
                        </a>
                        <a
                           href="#"
                           className="text-gray-400 hover:text-green-300 transition-colors text-sm"
                        >
                           Terms of Service
                        </a>
                        <a
                           href="#"
                           className="text-gray-400 hover:text-green-300 transition-colors text-sm"
                        >
                           Sitemap
                        </a>
                     </div>
                  </div>
               </AnimationWrapper>
            </div>
         </footer>
      </AnimationWrapper>
   );
};

export default Footer;
