"use client"
import style from "./header.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { JetBrains_Mono } from "next/font/google"
import { useState } from "react"
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const jetbrians_mono = JetBrains_Mono ({
    subsets : ["latin"],
    weight : ["400", "500", "800"]
 })

function Header() {

 const pathname = usePathname()   /// Current path leny k leye 

 const isactive = (path :string)=> pathname === path;

 const [isdropdown , setisdropdown] = useState(false);

 const togglebutn =()=>{
   setisdropdown(!isdropdown)
 }

 


  return (
    <div>
      <nav className={` ${jetbrians_mono.className} flex z-10 justify-between px-2 sm:px-5 md:px-9 lg:px-24 text-white text-md bg-backgroundcolor h-36 items-center  `} >
           <h2 className="text-2xl" >Portfolio  <span className="text-yellow-400 text-3xl ml-2  "> . </span> </h2>
           <div className="flex gap-6 text-center " >
           <ul className={`  absolute flex flex-col  right-1 bg-[rgba(39,39,44,1)] py-52 h-full w-[35%] top-[-6632px]  ${isdropdown? " top-[1px] " : " "}    md:flex-row md:flex-1 md:static  md:my-auto  md:py-0 md:bg-backgroundcolor  gap-6 text-[15px] items-center `} >
            <li  className={` btn  hover:text-yellow-400 ${isactive ("/") ? "active"  : "" } `} > <Link href="/"> Home  </Link>  </li>
            <li   className={` btn hover:text-yellow-400 ${isactive ("/resume") ? "active"  : "" } `}> <Link  href="/resume" > Resume </Link>  </li>
            <li className={` btn hover:text-yellow-400  ${isactive ("/service") ? "active"  : "" } `}> <Link href="/service" > Service </Link>   </li>
            <li className= {`btn hover:text-yellow-400 ${isactive ("/projects") ? "active"  : "" } `} > <Link href="/projects"  > Projects </Link> </li>
            <li className= {` btn hover:text-yellow-400 ${isactive ("/contact") ? "active" : "" } `}  > <Link href="/contact" > Contact </Link> </li>
           </ul>
           <p className= " hover:text-yellow-400 sm:z-10  ">
                <Link href="/contact" > <button  className="bg-yellow-400 hover:bg-gray-900 px-3 md:px-4 py-1 md:py-2 rounded-[14px] text-black hover:text-amber-400 hover:font-semibold " type="button"> hire me </button> </Link> 
            </p>
            <div className="flex   md:mx-2 md:ml-5 gap-2  text-3xl items-center md:hidden" >
              {!isdropdown? 
            <button className="" onClick={togglebutn} > <FaBarsStaggered /> </button>
            :
            <button className="z-10" onClick={togglebutn} > <IoMdClose /> </button>
              }
            </div>
           </div>
      </nav>
    </div>
  )
}

export default Header
