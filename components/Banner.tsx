'use client'
import React, { Component } from 'react'
 
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { Button } from "./ui/button";
import { Fragment } from "react";
import { RiGithubFill, RiGoogleFill, RiLineLine, RiLinkedinFill, RiLinkedinLine, RiTwitterFill } from 'react-icons/ri';
import { Separator } from "./ui/separator";
import { Link } from 'react-scroll';
import { FaRegPaperPlane } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";
  
     const  Banner = ()=> {
    return (
  < >
  <div id="home">  
    <section className="grid place-items-center h-full pt-20 mt-10 px-5"  >

      
 <main className=" flex  w-full    h-full justify-center items-center">
     <Image 
     src={"/bgg.png"}
     alt="bg"
     className=" absolute  opacity-[0.15] dark:opacity-5 -z-10   rotate-180  object-cover"
     fill
     />
 

 <div className=" grid xl:grid-cols-2 items-center  lg:grid-cols-2  md:grid-cols-1  gap-8  w-full  place-items-center    "> 

  <div className="flex gap-12 items-center justify-center w-full ">
  <ul className="flex flex-col gap-4">
        <li className="hover:scale-110 transition"><a href="https://github.com/mayur4895"><RiGithubFill size={20}/></a></li>
        <Separator/>
        <li className="hover:scale-110 transition"><a href="https://twitter.com/Mayur4895"><RiTwitterFill size={20}/></a></li>
        <Separator/>
        <li className="hover:scale-110 transition"><a href="https://www.linkedin.com/in/webdevelopermayur4895"><RiLinkedinFill size={20}/></a></li>
        
        </ul>
    <Image
            className="mt-5  "
            src={"/profile.png"}
            alt="pro"
            width={300}
            height={300}
            
            />
    
 </div>

       <div className="flex flex-col gap-2 w-full  sm:text-center sm:items-center md:text-center md:items-center lg:text-start lg:items-start">

       <h1 className="md:text-5xl text-4xl font-medium tracking-tight">Hi, I am Mayur </h1>
       <h1 className="md:text-4xl  text-3xl font-medium tracking-tight">Creative Web Developer</h1>
           <p>I am web developer to create responsive websites using latest technologies.</p>
     <div className='flex gap-4'>
     <Button variant="rose" className="mt-5 w-[180px] md:text-center">
     <Link
        activeClass="active"
        className='flex gap-2 items-center'
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Contact Me <FaRegPaperPlane/>
      </Link>
      </Button> 
      <a href='/mayur_resume.pdf' download={"/mayur_resume.pdf"}> 
       <Button variant="rose"  className="mt-5 w-[180px] md:text-center flex items-center gap-2">Download Cv <RxDownload/></Button> 
       </a>
     </div>
       </div>
 
       </div>

 </main>
   
    </section>
    </div>
  </>
    )
  }
  

  export default Banner;