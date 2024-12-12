import Header from "./Components/header"
import Footer from "./Components/footer";
import Image from "next/image"
import { JetBrains_Mono } from "next/font/google"
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const jetbrians_mono = JetBrains_Mono ({
   subsets : ["latin"],
   weight : ["400", "500", "600"]
})

function Page() {
  return (
    <div className="  bg-backgroundcolor " >
      {/* Header */}
       <Header />

     {/* Hero section */}
       <div className={` ${jetbrians_mono.className}  flex flex-col md:flex-row  justify-between mx-6 md:mx-10 gap-3 md:gap-5 h-screen mt-16` }>
          {/* left section */}
           <div className=" w-[95%] sm:w-[30%] md:w-[25%]  mx-auto bg-grey-600 flex items-center justify-center rounded-full border-[1px] border-x-amber-400 h-96 " >
             <Image className=" w-64 h-72 md:w-72 md:h-80 rounded-full"
              src="/images/dp2.webp" alt="Profile-pic" width={200} height={150} />
           </div>

        {/* Right section */}
           <div className=" w-[95%]  md:w-[60%]  text-white text-start md:text-end flex flex-col gap-1 " > 
               <p className=" " >front-end developer</p>
               <h2 className=" text-3xl sm:text-4xl space-x-3" >Hello I am</h2>
               <h1 className=" text-4xl sm:text-6xl space-x-7 text-yellow-400 font-semibold " > Kabir Iqbal</h1>
               <p className="text-sm space-x-2 space-y-2 px-1 md:px-5 mt-2">I’m a passionate frontend developer specializing in Next.js,
                 React, and Tailwind CSS. With a strong focus on UI/UX Design, I build responsive, 
                user-friendly web applications that offer seamless experiences across devices. </p>
                <div className="text-start flex h-28 gap-3 md:gap-6 items-center px-1 my-2 md:my-0 md:px-4 py-1 " >
                <button className="flex gap-1 md:gap-2 py-1  md:p-2 px-2  md:px-3 rounded-3xl border-[1px] border-amber-400 hover:border-gray-500 text-yellow-300 hover:text-black hover:bg-yellow-400 font-semibold text-sm " > Download Resume <MdOutlineFileDownload /> </button>
                <a href="https://github.com/Kabir-Iqbal" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full " ><FaGithub  /></button> </a>
                <a href="https://www.linkedin.com/in/kabir-iqbal-8705722ba/" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full "><FaLinkedin /></button> </a>
                <a href="https://web.facebook.com/profile.php?id=100073063770870" target="blank" > <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full "> <FaFacebook /> </button> </a>
                <a href="" target="blank"> <button className="border-[1px] text-amber-400 hover:text-black border-amber-400 hover:border-gray-500 hover:bg-yellow-400 p-2 rounded-full "> <FaInstagram /></button> </a>
                </div>
           </div>

       </div>
       {/* Footer */}
           <Footer />
    </div>
  )
}

export default Page
