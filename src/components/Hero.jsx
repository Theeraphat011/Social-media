import Image from "next/image"
import amazone from '../../public/img/Amazon.jpg'
import netflix from '../../public/img/netflix.jpg'
import youtube from '../../public/img/youtube.png'
import zoom from '../../public/img/zoom.png'
import hubspot from '../../public/img/hubspot.png'
import GitHub from '../../public/img/GitHub.webp'


const Hero = () => {

    const imgStoe = [
        amazone,
        netflix,
        youtube,
        zoom,
        hubspot,
        GitHub
    ]
    return (
        <>
            <div className="container mx-auto max-w-7xl mt-20">
                <div className="flex justify-between">
                    {imgStoe.map((itme, index) => (
                        <div key={index} className="cursor-pointer">
                            <Image src={itme} width={100} height={100} alt='hero banner' className="grayscale transition-all duration-500 hover:grayscale-0"></Image>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Hero