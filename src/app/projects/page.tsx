import Footer from "../Components/footer"
import Image from "next/image";
import Header from "../Components/header"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { JetBrains_Mono } from "next/font/google";
const jetbrians_mono = JetBrains_Mono ({
  subsets : ["latin"],
  weight : ["400", "500", "600"]
})

function Page() {
    return (
      <div className="bg-backgroundcolor " >
        <Header />
         
        
   <div className={` ${jetbrians_mono.className} w-[85%]   md:w-[80%] mx-auto justify-center py-10 `}>
        <h2 className="text-yellow-400 text-4xl font-semibold text-center mt-6  ">PROJECTS</h2>
        <div className="  mt-24 justify-center  text-white mx-auto  flex flex-wrap gap-6 md:gap-11  " >

          <div className="h-[300px] w-[200px] font-bold rounded-xl border-amber-300 border-[1px] relative  "  >
          <Image className="w-[80%] mx-auto h-[50%] mt-2" src="/images/todo.jpeg" width={200} height={200} alt="Todo-pic" /> 
            <h2 className="text-center" >TO DO</h2>
            <div className="flex gap-2 absolute bottom-2 left-1 ">
            <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full " ><FaGithub  /></button> </a>
            <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full "><FaLinkedin /></button> </a> 
            </div>
             </div>

         <div className="h-[300px] w-[200px] font-bold rounded-xl border-amber-300 border-[1px]  flex flex-col items-center relative   "  > 
         <Image className="w-[80%] mx-auto h-[50%] mt-2"  src="/images/clacu.jpg" width={200} height={200} alt="claculator pic" /> 
            <h2 >CALCULATOR</h2>
            <div className="flex gap-4 absolute bottom-2 left-1 ">
            <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full " ><FaGithub  /></button> </a>
            <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full "><FaLinkedin /></button> </a> 
          </div>
             </div>


             <div className="h-[300px] w-[200px] font-bold rounded-xl border-amber-300 border-[1px] flex flex-col items-center relative "> 
             <Image className="w-[80%] mx-auto h-[50%] mt-2"  src="/images/timer.webp" width={200} height={200} alt="Timer pic" />
            <h2>TIMER</h2>
            <div className="flex gap-4 absolute bottom-2 left-1 ">
            <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full " ><FaGithub  /></button> </a>
            <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full "><FaLinkedin /></button> </a> 
            </div>
             </div>


             <div className="h-[300px] w-[200px] font-bold rounded-xl border-amber-300 border-[1px] flex flex-col items-center relative   "  > 
             <Image className="w-[80%] mx-auto h-[50%] mt-2"  src="/images/portfolioimg.jpeg" width={200} height={200} alt="portfolio-pic" />  
            <h2>PORTFOLIO</h2>
            <div className="flex gap-4 absolute bottom-2 left-1">
            <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full " ><FaGithub  /></button> </a>
            <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full "><FaLinkedin /></button> </a> 
            </div>
             </div>


        </div>



          </div>
          </div>
    )
  }
  
  export default Page