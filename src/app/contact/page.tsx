import Footer from "../Components/footer"
import Header from "../Components/header"
import { JetBrains_Mono } from "next/font/google"
const jetbrians_mono = JetBrains_Mono({
    subsets : ["latin"],
    weight : ["400", "500", "600"]
})


function Page() {
    return (
      <div className="bg-backgroundcolor" >
        <Header />
      <div className={` ${jetbrians_mono.className} w-[90%] md:w-[70%] mx-auto  my-14 `} >
          

        <div  className="  text-white w-[90%] sm:w-[450px] border-[1px] border-yellow-400 mx-auto mt-5 h-[500px] sm:h-[570px] rounded-full " >
         <form action="post" className=" px-11  md:px-24 py-20 md:py-24" >
          <p className="mt-3 mb-1 " >Name:</p>
          <input className=" w-[95%] text-sm p-1 rounded-sm" type="text" id="name" name="name" placeholder="name"  required />
          <p className="mt-3 mb-1 " >Email :</p>
          <input  className=" w-[95%] text-sm p-1 rounded-sm" type="email" id="email" name="email" placeholder="email" required />
          <p className="mt-3 mb-1 " > Message : </p>
          <textarea  className=" w-[95%] text-sm p-1 rounded-sm" name="message" id="message" placeholder="message"  rows={3} cols={23} required />

          <a href=" kabirhussain0343837@gmail.com"  ><button type="submit" className="text-black items-center px-5 py-1 hover:bg-backgroundcolor hover:text-white  bg-yellow-400 my-5 rounded-2xl"  >Submit</button> </a>
         </form>
        </div> 

      </div>
        <Footer />
      </div>
    )
  }
  
  export default Page