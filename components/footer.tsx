
import Image from "next/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
 
const Footer = ()=>{
    return(<>
      <div className=" mt-12 relative w-full   py-24 h-64 flex justify-center items-center text-white bg-[#111] dark:bg-[#111]">
        <Image
         src="/footer.jpg"
         alt="footer"  
           fill
            className=" absolute w-full object-cover  dark:opacity-5  opacity-5" />

  <div className="md:flex-row flex-col flex  mx-auto gap-5 py-5 justify-between w-full  md:mx-24 items-center z-50">
 <div>
 <h1 className="flex  items-center text-3xl"> <Image alt="logo" src="/m.png" width={70} height={70} className=" dark:bg-transparent"/>ayur.</h1>
 <p className="text-sm ">
  I love working with ambitious people. <br />
  Lets build something great together now.
 </p>
 </div>
  <div>
   
  <ul className="flex flex-row gap-4 z-20">
        <li className="hover:scale-110 transition"><a href="https://github.com/mayur4895" className=" cursor-pointer"><RiGithubFill size={20}/></a>  </li>
  
        <li className="hover:scale-110 transition"><a href="https://twitter.com/Mayur4895" className=" cursor-pointer"><BsTwitterX size={20}/></a></li>
           
        <li className="hover:scale-110 transition"><a href="https://www.linkedin.com/in/webdevelopermayur4895" className=" cursor-pointer"><RiLinkedinFill size={20}/></a></li>
         </ul>
  </div>
  </div>  
 <div className=" absolute bottom-2 flex gap-2 items-center  text-xs">
 <AiOutlineCopyrightCircle/> 2024 | Mayur shinde | all right reserved
 </div>
 
    
      </div>
      
  
    </>)
}


export default Footer;