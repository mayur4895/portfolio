import Image from "next/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Footer = ()=>{
    return(<>
      <div className=" mt-12 relative w-full  h-40 flex justify-center items-center">
        <Image
         src="/footer.png"
         alt="footer"  
           fill
            className=" absolute w-full object-cover opacity-5"
        />
     <div className="flex flex-row items-center gap-2">
     <AiOutlineCopyrightCircle/> 2023 | Mayur shinde | all right reserved
     </div>
      </div>
    </>)
}


export default Footer;