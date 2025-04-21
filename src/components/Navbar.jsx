"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import style from "./components.module.css";
import AnimationWrapper from "./AnimationWrapper";
import {
   Bars3Icon,
   XMarkIcon,
   ChevronDownIcon,
   MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

const Logo = "/img/logo.png";
const Navbar = () => {
   const [toggle, setToggle] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState(null);

   useEffect(() => {
      const handleScroll = () => {
         const isScrolled = window.scrollY > 20;
         if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [scrolled]);

   const menuLists = [
      { name: "Home", link: "#", hasDropdown: false },
      {
         name: "About",
         link: "#",
         hasDropdown: true,
         dropdownItems: [
            { name: "Our Story", link: "#" },
            { name: "Team", link: "#" },
            { name: "Testimonials", link: "#" },
         ],
      },
      { name: "Contact", link: "#", hasDropdown: false },
      { name: "Blog", link: "#", hasDropdown: false },
      {
         name: "Resources",
         link: "#",
         hasDropdown: true,
         dropdownItems: [
            { name: "Documentation", link: "#" },
            { name: "Tutorials", link: "#" },
            { name: "FAQs", link: "#" },
         ],
      },
   ];

   const toggleDropdown = (index) => {
      setActiveDropdown(activeDropdown === index ? null : index);
   };

   const navContainerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            when: "beforeChildren",
         },
      },
   };

   const navItemVariants = {
      hidden: { opacity: 0, y: -10 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <>
         <div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
               scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
         >
            <div className="container mx-auto max-w-7xl relative">
               <div className="flex justify-between items-center relative uppercase py-4 px-4">
                  <AnimationWrapper animateFrom="left">
                     <div className="flex items-center">
                        <Image
                           src={Logo}
                           width={180}
                           height={60}
                           alt="Company logo"
                           className="hover:opacity-90 transition-opacity"
                        />
                     </div>
                  </AnimationWrapper>

                  {/* Desktop Navigation */}
                  <motion.ul
                     initial="hidden"
                     animate="visible"
                     variants={navContainerVariants}
                     className={`max-lg:absolute flex flex-col max-lg:gap-8 gap-2 items-center justify-center top-0 right-0 w-full h-screen bg-white/95 backdrop-blur-sm z-10 transition-all duration-300 text-sm ${
                        toggle ? "opacity-100 visible" : "opacity-0 invisible"
                     } lg:opacity-100 lg:visible lg:flex-row lg:bg-transparent lg:h-auto lg:w-auto lg:backdrop-blur-none`}
                  >
                     {menuLists.map((item, index) => (
                        <motion.li
                           key={index}
                           variants={navItemVariants}
                           className="relative"
                        >
                           <div className="flex items-center">
                              <a
                                 href={item.link}
                                 className={`${style.linav} relative px-3 py-2 font-medium hover:text-green-600 transition-colors`}
                                 onClick={
                                    item.hasDropdown
                                       ? (e) => {
                                            e.preventDefault();
                                            toggleDropdown(index);
                                         }
                                       : undefined
                                 }
                              >
                                 {item.name}
                                 {item.hasDropdown && (
                                    <span className="ml-1 inline-block">
                                       <ChevronDownIcon
                                          className={`h-3 w-3 transition-transform duration-200 ${
                                             activeDropdown === index
                                                ? "rotate-180"
                                                : ""
                                          }`}
                                       />
                                    </span>
                                 )}
                              </a>
                           </div>

                           {/* Dropdown Menu */}
                           {item.hasDropdown && (
                              <div
                                 className={`lg:absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 ${
                                    activeDropdown === index
                                       ? "opacity-100 visible max-h-60"
                                       : "opacity-0 invisible max-h-0"
                                 } lg:w-48`}
                              >
                                 {item.dropdownItems.map((dropItem, idx) => (
                                    <a
                                       key={idx}
                                       href={dropItem.link}
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                                    >
                                       {dropItem.name}
                                    </a>
                                 ))}
                              </div>
                           )}
                        </motion.li>
                     ))}

                     {/* Search Bar */}
                     <motion.div
                        variants={navItemVariants}
                        className="relative mx-4 max-lg:w-3/4 lg:w-auto"
                     >
                        <input
                           type="text"
                           placeholder="Search..."
                           className="px-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 w-full lg:w-40 transition-all duration-300 lg:focus:w-48"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                           <MagnifyingGlassIcon className="h-4 w-4" />
                        </button>
                     </motion.div>

                     {/* Authentication Button */}
                     <motion.div variants={navItemVariants}>
                        <a
                           href="#"
                           className="text-center ml-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-2 px-6 rounded-md max-lg:ml-0 transition-colors duration-300"
                        >
                           Sign In
                        </a>
                     </motion.div>
                  </motion.ul>

                  {/* Mobile Menu Button */}
                  <div
                     className="lg:hidden cursor-pointer z-20 hover:bg-gray-200 p-3 rounded-full transition-colors duration-200 mr-1"
                     onClick={() => setToggle(!toggle)}
                  >
                     {toggle ? (
                        <XMarkIcon className="h-6 w-6" />
                     ) : (
                        <Bars3Icon className="h-6 w-6" />
                     )}
                  </div>
               </div>
            </div>
         </div>

         <div className="h-20"></div>
      </>
   );
};

export default Navbar;
