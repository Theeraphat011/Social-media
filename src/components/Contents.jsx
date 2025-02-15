import Image from "next/image"
import Img_1 from '../../public/img/s_1.png'
import Img_2 from '../../public/img/s_2.png'
import Img_3 from '../../public/img/s_3.png'
import Img_4 from '../../public/img/s_4.png'
import arrow from '../../public/img/arrow.png'
import arrowBlack from '../../public/img/arrowblack.png'

const Contents = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl mt-12 h-auto">
        <div>
          <div className="grid grid-rows lg:grid-cols-2 gap-20 place-content-center">

            <div  className="border-2 border-gray-500  rounded-xl flex justify-between p-8 h-[300px] gap-5">
              <div className="flex flex-1 flex-col mt-2 justify-between">
                <h1 className="text-2xl"> 
                  <span className="bg-[#c6ff81] py-2 pl-4 pr-8 rounded-tl-xl rounded-tr-xl rounded-br-xl">Serach engin </span><br /> 
                  <span className="bg-[#c6ff81] pt-1 pb-2 px-4 rounded-bl-xl rounded-br-xl">optimizetion</span>
                  </h1>
                <div className="flex items-center mb-4">
                <Image src={arrow} alt="arrow" width={50} height={50} className=" bg-black rounded-full p-2 mr-4"></Image>
                  <p>using Lorem Ipsum is that it</p>
                </div>
              </div>
              <div className="flex items-center">
              <Image src={Img_1} alt="content 1"></Image>
              </div>
            </div>


            <div  className="border-2 border-gray-500  rounded-xl flex justify-between p-8 gap-5 h-[300px] bg-black">
              <div className="flex flex-1 flex-col mt-2 justify-between ">
                <h1 className="text-2xl"> 
                  <span className="bg-[#ffffff] py-2 pl-4 pr-8 rounded-tl-xl rounded-tr-xl rounded-br-xl">Serach engin </span><br /> 
                  <span className="bg-[#ffffff] pt-1 pb-2 px-4 rounded-bl-xl rounded-br-xl">optimizetion</span>
                  </h1>
                <div className="flex items-center mb-4 text-white">
                <Image src={arrowBlack} alt="arrow" width={50} height={50} className=" bg-white rounded-full p-2 text-white mr-4"></Image>
                  <p>using Lorem Ipsum is that it</p>
                </div>
              </div>
              <div className="flex items-center">
              <Image src={Img_2} alt="content 1"></Image>
              </div>
            </div>

            <div  className="border-2 border-gray-500  rounded-xl flex justify-between p-8 h-[300px] gap-5 bg-black">
              <div className="flex flex-1 flex-col mt-2 justify-between">
                <h1 className="text-2xl"> 
                  <span className="bg-[#ffffff] py-2 pl-4 pr-8 rounded-tl-xl rounded-tr-xl rounded-br-xl">Serach engin </span><br /> 
                  <span className="bg-[#ffffff] pt-1 pb-2 px-4 rounded-bl-xl rounded-br-xl">optimizetion</span>
                  </h1>
                <div className="flex items-center mb-4 text-white">
                <Image src={arrowBlack} alt="arrow" width={50} height={50} className=" bg-white rounded-full p-2 mr-4"></Image>
                  <p>using Lorem Ipsum is that it</p>
                </div>
              </div>
              <div className="flex items-center">
              <Image src={Img_3} alt="content 1"></Image>
              </div>
            </div>

            <div  className="border-2 border-gray-500  rounded-xl flex justify-between p-8 h-[300px] gap-5">
              <div className="flex flex-1 flex-col mt-2 justify-between">
                <h1 className="text-2xl"> 
                  <span className="bg-[#c6ff81] py-2 pl-4 pr-8 rounded-tl-xl rounded-tr-xl rounded-br-xl">Serach engin </span><br /> 
                  <span className="bg-[#c6ff81] pt-1 pb-2 px-4 rounded-bl-xl rounded-br-xl">optimizetion</span>
                  </h1>
                <div className="flex items-center mb-4 lg:text-base">
                <Image src={arrow} alt="arrow" width={50} height={50} className=" bg-black rounded-full p-2 mr-4"></Image>
                  <p>using Lorem Ipsum is that it</p>
                </div>
              </div>
              <div className="flex items-center">
              <Image src={Img_4} alt="content 1"></Image>
              </div>
            </div>









          </div>
        </div>
      </div>
    </>
  )
}
export default Contents