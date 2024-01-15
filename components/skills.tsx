'use client'
import React, { Component } from 'react'
import Image from "next/image";
import { Button } from "./ui/button"; 
import { RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiReactjsFill, RiGithubFill } from 'react-icons/ri';
import { Separator } from "./ui/separator";
 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Blocks, Network, Pyramid } from "lucide-react";
import { BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { SiPrisma } from "react-icons/si"; 
import { SiTailwindcss } from "react-icons/si";

 
import { SiNextdotjs } from "react-icons/si";
     const  Skills = ()=> {
    return (
  <>
    <section className="grid place-items-center  h-full  mt-20 py-20" id="skills">

 
 <main className="flex  w-[80%] h-full justify-center items-center">
    
  
 <Card>
  <CardHeader>
    <CardTitle className="flex gap-2 text-2xl font-light"> <Blocks /> Languages / Database / Tools </CardTitle> 
  </CardHeader>
  <CardContent>
     <div className="flex flex-wrap gap-2 justify-center">
     <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
      <SiNextdotjs size={28}/>    
       <span className="text-sm">Next js</span>
        </Card>
        <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
         <RiReactjsFill size={28}/>
         <span className="text-sm"> React js </span> 
        </Card>
        <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
        <RiJavascriptFill size={28}/>    
         <span className="text-sm">Javascript</span>
        </Card>
        <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
      <RiHtml5Fill size={28}/>    
       <span className="text-sm">Html 5</span>
        </Card>
        <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
        <RiCss3Fill size={28}/>   
          <span className="text-sm">Css 3</span>
        </Card> 
     <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
         <BiLogoMongodb size={28}/>
         <span className="text-sm">Mongo Db</span> 
        </Card>
        <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
        <BiLogoNodejs size={28}/>    
         <span className="text-sm">Node Js</span>
        </Card>
        <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
        <SiPrisma size={28} />
       <span className="text-sm">Prisma</span>
        </Card>
        
 
 
      
 
        <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
         <TbBrandRedux size={28}/>
         <span className="text-sm">Redux </span> 
        </Card>
        <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
        <SiTailwindcss size={28}/>    
         <span className="text-sm">Tailwind</span>
        </Card>
        <Card className="p-2 w-24 h-28 flex flex-col gap-4 pt-5 items-center ">
      <RiGithubFill size={28}/>    
       <span className="text-sm">GitHub</span>
        </Card>
      
       
     </div>
  </CardContent> 
</Card>


    
 </main>
   
    </section>
  </>
    )
  }
  

  export default Skills;