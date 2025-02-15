import Image from "next/image"
import proposal from '../../public/img/proposal_illustration.png'


const SectionTwo = () => {
    return (
        <>
            <div className="container mx-auto max-w-7xl pt-20">
                <div className="grid grid-rows-1 xl:grid-cols-2 items-center relative bg-gray-100 p-10 rounded-xl">
                    <div className="grid gap-10 z-10">
                        <h1>Let’s make things happen</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <a href="#" className="bg-gray-800 rounded-xl text-white py-3 px-8 max-w-60 text-center">Get your free Process</a>
                    </div>
                    <div className="absolute top-20 right-0 lg:top-5 lg:right-40">
                        <Image src={proposal} width={300} height={250} alt="proposal"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionTwo