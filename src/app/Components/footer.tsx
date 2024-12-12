import { JetBrains_Mono } from "next/font/google"

const jetbrians_mono = JetBrains_Mono ({
    subsets : ["latin"],
    weight : ["400", "500", "800"]
 })

function Footer() {
  return (
    <div className="bg-amber-400 w-full" >
         <div>
            <h2 className={` ${jetbrians_mono.className} w-8/12 text-sm md:text-[16px] mx-auto text-center py-5 `} >© 2024 My Website. All rights reserved.</h2>
         </div>
    </div>
  )
}

export default Footer
