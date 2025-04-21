import Image from "next/image"
import proposal from '../../public/img/proposal_illustration.png'
import AnimationWrapper from "./AnimationWrapper"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

const SectionTwo = () => {
    return (
        <div className="container mx-auto max-w-7xl py-20 px-4 relative">
            <div className="absolute top-10 left-10 w-48 h-48 bg-green-50 rounded-full -z-10 opacity-70 blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-40 h-40 bg-green-50 rounded-full -z-10 opacity-70 blur-3xl"></div>

            <AnimationWrapper animateFrom="bottom">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center relative bg-gradient-to-br from-white to-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                    <div className="grid gap-6 z-10 md:pr-8">
                        <AnimationWrapper animateFrom="left" delay={200}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                                Let's make things <span className="text-green-600">happen</span>
                            </h2>
                        </AnimationWrapper>
                        
                        <AnimationWrapper animateFrom="left" delay={300}>
                            <p className="text-gray-600 text-lg">
                                Partner with us to transform your digital presence and achieve meaningful results. 
                                Our tailored strategies are designed to boost your online visibility, engage your 
                                target audience, and drive sustainable growth for your business.
                            </p>
                        </AnimationWrapper>
                        
                        <AnimationWrapper animateFrom="left" delay={400}>
                            <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                <a 
                                    href="#" 
                                    className="bg-green-600 hover:bg-green-700 rounded-xl text-white py-3 px-8 max-w-60 text-center transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group"
                                >
                                    Get your free proposal
                                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a 
                                    href="#" 
                                    className="text-green-600 hover:text-green-800 font-medium py-3 px-4 flex items-center underline-offset-4 hover:underline"
                                >
                                    Learn how it works
                                </a>
                            </div>
                        </AnimationWrapper>
                        
                        <AnimationWrapper animateFrom="bottom" delay={500}>
                            <div className="flex items-center gap-4 mt-2 bg-green-50 p-4 rounded-lg">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">JD</div>
                                    <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">KL</div>
                                    <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-bold">TS</div>
                                </div>
                                <p className="text-sm text-gray-600">Joined by 500+ businesses this month</p>
                            </div>
                        </AnimationWrapper>
                    </div>
                    
                    <AnimationWrapper animateFrom="right" delay={300} className="relative hidden md:block">
                        <div className="relative h-[400px] w-full flex items-center justify-center">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 w-64 h-64 rounded-full opacity-50"></div>
                            <Image 
                                src={proposal} 
                                width={400} 
                                height={350} 
                                alt="Proposal illustration" 
                                className="relative z-10 hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </AnimationWrapper>
                    
                    <div className="absolute md:hidden right-4 top-4">
                        <Image src={proposal} width={150} height={125} alt="Proposal illustration" />
                    </div>
                </div>
            </AnimationWrapper>
        </div>
    )
}

export default SectionTwo