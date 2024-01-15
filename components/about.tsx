 'use client'
import Image from "next/image";
import { Button } from "./ui/button"; 
import React, { Component } from 'react'
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
  
 
  import { PiGraduationCap, PiTreeStructureLight } from "react-icons/pi";
import { RiCloseLine, RiGithubFill } from "react-icons/ri";
import { FaCartShopping, FaCross } from "react-icons/fa6";
import { TbBrandAirbnb } from "react-icons/tb";

 
 
     const  AboutMe = ()=> {
    return (
  <>
      <section className="grid place-items-center relative h-full  mt-20 py-20 " id="aboutme" >
     
     <main className="flex w-[90%]  md:w-[80%] h-full justify-center items-center  ">
     <Image 
         src="/wave.png"
         alt="pt"
          fill
         className=" absolute  opacity-5  object-cover rounded-md"
   
        />
  
   <div className="w-full p-2 relative">
   <h1 className="flex flex-row gap-2 text-xl font-normal"> <PiGraduationCap size={22}/> About Me</h1>
    
   <div className="mt-5  w-full  lg:grid-cols-2 grid  sm:grid-cols-1  gap-4 justify-center ">
           <div className="w-full   ">

            <Card className="p-4">
              <CardTitle>About me</CardTitle>
              <CardDescription className="mt-5 text-base">
              I am a web developer with a passion for creating dynamic and user-friendly websites.
               I have experience in working with various web technologies, such as Nextjs, Reactjs, MongoDB, Node.js, Prisma, Express.js, Tailwind, and more.
                I enjoy learning new skills and exploring new challenges in web development.
                 Some of the projects I have worked on include Spotify clone, Discord clone, and Airbnb clone. You can check out my github at <a href="https://github.com/mayur4895" className=" cursor-pointer border-b border-blue-500">github.com/mayur4895</a> . I am always open to new opportunities and collaborations, so feel free to contact me at mayurshinde4895@gmail.com.

              </CardDescription>
            </Card>
           </div>
         <div className="w-full"> 
         <Card className="p-3 w-auto relative h-auto shadow-lg">
            <div className=" absolute h-full w-[1px] bg-blue-400 left-0 top-0" >
            </div>
        
           <div className="p-2 relative py-8">
            <div className=" absolute -top-3 rounded-b-sm -right-3  p-2 bg-green-500 text-xs"> 2017 - 2018</div>
            <div className=" absolute -left-[1.10rem] bg-green-400 border-green-800 border-2 w-3 h-3 rounded-full  top-[40%]"></div>
             <h3 className="text-light text-xl">SSC</h3>
             <CardDescription>from madymik vidyalay, pimple gurav, pune 411061 <br />
              percentage: (84.20 %)
             </CardDescription>
           </div>
           <Separator/>
           
           <div className="p-2 relative py-8">
           <div className=" absolute  top-0 rounded-b-sm -right-3  p-2 bg-yellow-500 text-xs"> 2019 - 2020</div>
            <div className=" absolute -left-[1.10rem] bg-yellow-400 border-yellow-800 border-2 w-3 h-3 rounded-full  top-[40%]"></div>
             <h3 className="text-light text-xl">HSC (Science)</h3>
             <CardDescription>from D.T patil junior college, Dapodi <br />
              percentage: (64 %)
             </CardDescription>
           </div>

           <Separator/>
           
           <div className="p-2 relative py-12">
           <div className=" absolute top-0 rounded-b-sm -right-3  p-2 bg-rose-500 text-xs"> 2021 - 2023</div>
            <div className=" absolute -left-[1.10rem] bg-rose-400 border-rose-800 border-2 w-3 h-3 rounded-full  top-[40%]"></div>
             <h3 className="text-light text-xl">BSC (Computer Science) Pune University</h3>
             <CardDescription>from T.J college, Khadki <br />
              ponter: 8 <br />
               
             </CardDescription>
           </div>


           <Separator/>
           
           <div className="p-2 relative py-8">
           <div className=" absolute top-0 rounded-b-sm -right-3  p-2 bg-blue-500 text-xs">2023 - .....</div>
            <div className=" absolute -left-[1.10rem] bg-gray-800 border-blue-800 border-2 w-3 h-3 rounded-full  top-[40%]"></div>
             <h3 className="text-light text-xl">MSC (Computer Application)</h3>
             <CardDescription>from Morden college, GaneshKhind, pune <br />
               
               status:(pursuing)
               
             </CardDescription>
           </div>



            </Card>
         </div>
             
  
 
   </div>
</div>
 </main>
   
    </section>
 
  </>
    )
  }
  

  export default AboutMe;