import Image from "next/image"
import arrow_dark from '../../public/img/arrow_dark.png'

const Footer = () => {
    return (
        <>
            <div className="container mx-auto max-w-7xl bg-black my-20 p-7 rounded-xl" >
                <div className="grid grid-cols-3 text-white gap-5">
                <div className=" text-white border-r">
                        <div className="flex flex-col gap-10">
                            <h1>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</h1>
                            <div className="flex gap-3 items-end">
                                <p>Learn more</p>
                                <Image src={arrow_dark} width={50} height={50} alt="arrow footer"></Image>
                            </div>
                        </div>
                    </div>
                    <div className=" text-white border-r">
                        <div className="flex flex-col gap-10">
                            <h1>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</h1>
                            <div className="flex gap-3 items-end">
                                <p>Learn more</p>
                                <Image src={arrow_dark} width={50} height={50} alt="arrow footer"></Image>
                            </div>
                        </div>
                    </div>
                    <div className=" text-white">
                        <div className="flex flex-col gap-10">
                            <h1>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</h1>
                            <div className="flex gap-3 items-end">
                                <p>Learn more</p>
                                <Image src={arrow_dark} width={50} height={50} alt="arrow footer"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer