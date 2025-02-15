'use client'
import { useState, useEffect } from "react"

import Image from "next/image"

const Logo = '/img/logo.png'
const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [htmlWidth, setHtmlWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setHtmlWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (htmlWidth >= 1024) {
            setToggle(true); 
        } else {
            setToggle(false);
        }
    }, [htmlWidth]); 


    return (
        <>
            <div className="container mx-auto max-w-7xl">
                <div className="flex justify-between items-center py-8 relative uppercase">
                    <div>
                        <Image src={Logo} width={180} height={60} alt="Company logo"></Image>
                    </div>
                    <ul className={`flex flex-1 items-center text-center gap-[10px] text-base xl:text-lg ml-4  justify-end
                    max-lg:flex-col flex-row max-lg:absolute top-5 right-0 max-lg:bg-slate-100 px-8 py-7 rounded-xl visible 
                    transition-all duration-500 lg:flex ${toggle? 'flex opacity-100': 'invisible opacity-0'}` }>
                        <li className="max-lg:hover:bg-gray-200 max-lg:px-[50px] py-2 rounded-xl mr-4"><a href="#">Home</a></li>
                        <li className="max-lg:hover:bg-gray-200 max-lg:px-[50px] py-2 rounded-xl mr-4"><a href="#">About Us</a></li>
                        <li className="max-lg:hover:bg-gray-200 max-lg:px-[50px] py-2 rounded-xl mr-4"><a href="#">Contact</a></li>
                        <li className="max-lg:hover:bg-gray-200 max-lg:px-[50px] py-2 rounded-xl mr-4"><a href="#">Blog</a></li>
                        <li className="max-lg:hover:bg-gray-200 max-lg:px-[50px] py-2 rounded-xl mr-4"><a href="#">Help</a></li>
                        <a href="#" className="ml-4 border-2 border-gray-700 py-3 px-6 rounded-xl max-lg:ml-0">Authentication</a>
                    </ul>
                    <div className="lg:hidden cursor-pointer z-10 hover:bg-gray-200 p-2 mr-2 rounded-full font-bold" onClick={() => setToggle(!toggle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 50 50">
                            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar