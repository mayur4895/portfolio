 'use client'
 import React, { Component } from 'react'
import Image from "next/image";
import { Button } from "./ui/button"; 
import { HiEye } from "react-icons/hi2";
import { Separator } from "./ui/separator";
import { FaDiscord ,FaSpotify} from "react-icons/fa";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
 
  import { PiTreeStructureLight } from "react-icons/pi";
import { RiCloseLine, RiGithubFill } from "react-icons/ri";
import { FaCartShopping, FaCross } from "react-icons/fa6";
import { TbBrandAirbnb } from "react-icons/tb";
import ProjectCard from "./projectCard";
 const projectCards = [
  {
    icon:FaDiscord,
    carttitle:"Discord Clone",
    cardDesc:"Next js, Mongodb, soket.io, prisma, tailwind, shadcn, redux, uploadthing.",
    imgurl:"/discord.jpeg",
    alt:"discord",
    height:"500",
    width:"500",
    className:"bg-blue-500",
    github:"https://github.com/mayur4895/Spotify-Clone"
  },
  {
 
    icon:FaSpotify,
    carttitle:"Spotify Clone",
    cardDesc:"React js, RapidApi, tailwind, redux.",
    imgurl:"/spotify.jpg",
    alt:"spotify",
    height:"250",
    width:"350",
    className:"bg-green-500",
    github:"https://github.com/mayur4895/Spotify-Clone"
    },
    { 
       icon:FaCartShopping,
    carttitle:"Ecommerce Clone",
    cardDesc:"Next js, RapidApi,sahdcn, tailwind, prisma, strapi, uploadthing, redux.",
    imgurl:"/ecommerce.jpg",
    alt:"airbnb",
    height:"189",
    width:"300",
    className:"bg-yellow-500",
    github:"https://github.com/mayur4895/"
    },
    {
      icon:TbBrandAirbnb,
      carttitle:"Airbnb Clone",
      cardDesc:"Next js, Prisma, Cloudinary, Next-auth, shadcn, tailwind, redux.",
      imgurl:"/airbnb.png",
      alt:"ecommerce",
      height:"250",
      width:"350",
       className:"bg-rose-500",
      github:"https://github.com/mayur4895/Live",
      watch:"https://live-reservation.vercel.app"
    },
     
   
  
  ]
  
 
     const  Projects = ()=> {
    return (
  <>
    <section className="grid place-items-center relative h-full  mt-20 py-20  " id="project">
    <Image 
      src="/blueshade.png"
      alt="pt"
       fill
      className=" absolute dark:opacity-[0.05]  opacity-10  object-cover rounded-md "

     />

  <main className="flex  w-[80%] h-full justify-center items-center">
    
   <div className="w-full p-2 relative">
   <h1 className="flex flex-row gap-2 text-xl font-normal"> <PiTreeStructureLight size={22}/>Projects</h1>
   


      <div className="mt-5 flex flex-wrap gap-4 justify-center">
 
   { projectCards.map((cur)=>{
return( 
  <ProjectCard
  
      key={cur.carttitle}
      icon={cur.icon}
      carttitle={cur.carttitle}
      cardDesc={cur.cardDesc}
      imgurl={cur.imgurl}
      alt={cur.alt}
      height={cur.height}
      width={cur.width}
      className={cur.className}
      github={cur.github}
      watch={cur.watch}
     />)
   }) }
 
       </div>
   </div>
     
 </main>
 <br /><br />
   
    </section>
  </>
    )
  }
  

  export default Projects;