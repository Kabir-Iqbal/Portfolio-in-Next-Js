import classNames from "classnames"
import Footer from "../Components/footer"
import Header from "../Components/header"
import { HiArrowDownRight } from "react-icons/hi2";

import { JetBrains_Mono } from "next/font/google"


const jetbrians_mono = JetBrains_Mono ({
  subsets : ["latin"],
  weight : ["300", "400", "500"]
})


function Page() {
  return (
    <div className= { `${jetbrians_mono.className}, bg-backgroundcolor text-white `} >
      <Header />
     
     <div className=" w-[85%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 tracking-widest gap-7 py-6 mt-9 md:mt-7" >
         <div className=" my-2 group " >
              <div className="flex justify-between  ">
                  <p className="text-5xl mb-4 group-hover:text-yellow-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white  to-black " >1</p>
                  <p className="px-[25px] py-[25px] rounded-full group-hover:bg-yellow-300 bg-white  text-black " ><HiArrowDownRight /></p>
              </div>
              <h2 className="text-4xl my-3 tracking-wide group-hover:text-yellow-300 " >Web Devlopment</h2>
              <p className="text-[16px]  " >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates alias voluptas iste eius neque numquam consequuntur quaerat officia
                 veritatis vel, aspernatur dicta soluta autem nulla fugit suscipit incidunt ipsam reprehenderit</p>
                <div className="w-[100%] h-[1px] bg-gray-500 mt-6  "></div>
         </div>


         <div className="my-2 group ">
              <div className="flex justify-between group">
                  <p className="text-5xl mb-4 group-hover:text-yellow-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white  to-black ">2</p>
                  <p className="px-[25px] py-[25px] rounded-full group-hover:bg-yellow-300 bg-white text-black " ><HiArrowDownRight /></p>
              </div>
              <h2 className="text-4xl my-3 tracking-wide group-hover:text-yellow-300">UI & UX Design</h2>
              <p className="text-[16px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates alias voluptas iste eius neque numquam consequuntur quaerat officia
                 veritatis vel, aspernatur dicta soluta autem nulla fugit suscipit incidunt ipsam reprehenderit</p>
                 <div className="w-[100%] h-[1px] bg-gray-500 mt-6  "></div>
         </div>

         
         
         <div className="my-2 group " >        
              <div className="flex justify-between ">
                  <p className="text-5xl mb-4 group-hover:text-yellow-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white  to-black ">3</p>
                  <p className="px-[25px] py-[25px] rounded-full group-hover:bg-yellow-300 bg-white text-black " ><HiArrowDownRight /></p>
              </div>
              <h2 className="text-4xl my-3 tracking-wide group-hover:text-yellow-300 ">Logo Design</h2>
              <p className="text-[16px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates alias voluptas iste eius neque numquam consequuntur quaerat officia
                 veritatis vel, aspernatur dicta soluta autem nulla fugit suscipit incidunt ipsam reprehenderit</p>
                 <div className="w-[100%] h-[1px] bg-gray-500 mt-6  "></div>
        </div>

         <div className="my-2 group ">
               <div className=" flex justify-between group-hover:text-yellow-300">
                  <p className="text-5xl mb-4 group-hover:text-yellow-300 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white  to-black ">4</p>
                  <p className="px-[25px] py-[25px] rounded-full group-hover:bg-yellow-300  bg-white text-black " ><HiArrowDownRight   /></p>
              </div>
              <h2 className=" text-4xl my-3 tracking-wide group-hover:text-yellow-300">SEO</h2>
              <p className="text-[16px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates alias voluptas iste eius neque numquam consequuntur quaerat officia
                 veritatis vel, aspernatur dicta soluta autem nulla fugit suscipit incidunt ipsam reprehenderit</p>
                 <div className="w-[100%] h-[1px] bg-gray-500 mt-6  "></div>
         </div>
    </div>

    </div>
  )}
export default Page
