import Image from "next/image";
import BannerImg from '../../public/img/microphone_illustration.png';

const Banner = () => {
    return (
        <>
            <div className="container mx-auto max-w-7xl">
                <div className="flex">
                    <div className="flex flex-col flex-1">
                        <h1 className="text-6xl mb-10 max-xl:text-5xl max-md:text-3xl">Navigating the <br />
                            digital landscape <br />
                            for success</h1>
                        <p className="max-md:text-sm">It is a long established fact that a reader will be <br /> distracted by the readable content of a page when  <br />looking at its layout. The point of using Lorem <br /> Ipsum is that it has </p>
                        <a href="#" className="bg-gray-800 rounded-xl text-white py-3 px-8 mt-8 max-w-60 text-center">Navigating The Digital</a>
                    </div>
                    <div className="flex-1 ">
                        <Image src={BannerImg} width={650} height={550} alt="Banner"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner