 
import Image from "next/image";
import { Button } from "./ui/button"; 
import { HiEye } from "react-icons/hi2";
import { Separator } from "./ui/separator";
import { FaDiscord ,FaEye,FaRegEye,FaSpotify} from "react-icons/fa";
import { IconType } from 'react-icons';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
        
  
 
  import { PiTreeStructureLight } from "react-icons/pi";
import { RiCloseLine, RiGithubFill } from "react-icons/ri";
import { FaCartShopping, FaCross } from "react-icons/fa6";
import { TbBrandAirbnb } from "react-icons/tb";
import { cn } from "@/lib/utils";
 

 
 
 
interface ProjectCardProps{
    icon:IconType,
   
    carttitle:string,
    cardDesc:string
    imgurl:string,
    alt:string,
    height:string,
    width:string,
    github:string,
    watch?:string
    className:string
}

     const  ProjectCard:React.FC<ProjectCardProps> = ({
         
        icon:Icon,
        carttitle,
        cardDesc,
        imgurl,
        alt,
        height,
        width,
        github,
        watch,
        className
     })=> {
    return (
  <>
    
      <Card className="w-[300px] h-[280px] overflow-hidden relative" key={carttitle}>
        <div className={cn(" absolute right-0 top-0  p-2 rounded-l-3xl shadow-lg",className)}> <a href={github}><RiGithubFill size={22}/> </a></div>
    {watch &&  <div className={cn(" absolute right-0 top-10  p-2 rounded-l-3xl shadow-lg bg-blue-500")}> <a href={watch}><FaRegEye size={22}/> </a></div>}    
  <CardHeader>
    <CardTitle className="flex gap-2 text-lg font-light  items-center"> <Icon size={22}/>{carttitle}</CardTitle> 
    <CardDescription>{cardDesc}</CardDescription>
  </CardHeader> 
  <CardContent className="p-0   w-full h-auto">
    <Image 
    src={imgurl} 
    alt={alt}
    height={500}
    width={500} 
    className=" absolute left-0 top-[47%]"
    />
  </CardContent>
  </Card> 
  </>
    )
  }
  

  export default ProjectCard;