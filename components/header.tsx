'use client'
import { Component, useState } from 'react';

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"

  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ModeToggle } from "./mode-toggle";
import { Grip } from "lucide-react";
 

import { Link, animateScroll as scroll } from 'react-scroll';
import Education from '@/components/about';
 
 
 

     const  Header  = ()=> {
      const [isopen,setisopen] = useState(false);
    return ( 
      <> 
      <Menubar className="p-8   font-thin justify-between flex border-b-0">
        <div className="flex gap-4">
        <Avatar>
  <AvatarImage src="m.png"  className='  object-contain  p-1    bg-black dark:bg-[#222] border-white'  />
  <AvatarFallback>M</AvatarFallback> 
</Avatar>
<ModeToggle/>
        </div>
      <div className="md:flex gap-3  hidden ">
      <MenubarMenu>
          <MenubarTrigger  className="cursor-pointer   font-normal ">
            
          <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Home
      </Link>
            </MenubarTrigger> 
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer font-normal" >
            
          <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
         Skills
      </Link>
            </MenubarTrigger> 
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer font-normal" >
            
          <Link
        activeClass="active"
        to="project"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Projects
      </Link>
      </MenubarTrigger> 
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer font-normal">

            
          <Link
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
         About Me
      </Link>
          </MenubarTrigger>
           
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer font-normal"  > 
          
          <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        Contact Me
      </Link>
          </MenubarTrigger> 
        </MenubarMenu>  
      </div>
             
       

      <MenubarMenu> 
      <Sheet open={isopen} onOpenChange={setisopen}>
<SheetTrigger className="font-semibold  md:hidden block"> <Grip /></SheetTrigger>
<SheetContent>
  <SheetHeader className="mb-8 flex gap-4 flex-row">
  <Avatar>
  <AvatarImage src="profile.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    <SheetTitle  className="flex gap-2 items-center">  Mayur Shinde.
     </SheetTitle>  
  </SheetHeader>
  <Separator />
     <div className="flex flex-col gap-10 items-start mt-4">
      

     <MenubarMenu>
                
     <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-10}
        duration={500}
      >
          <MenubarTrigger  className="cursor-pointer   font-normal "  onClick={()=>{setisopen(false)}}> 
        Home 
            </MenubarTrigger> 
            </Link>
        </MenubarMenu>
        <MenubarMenu>
        <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
          <MenubarTrigger className="cursor-pointer font-normal" onClick={()=>{setisopen(false)}}> 
         Skills
 
            </MenubarTrigger> 
            </Link>
        </MenubarMenu>
        <MenubarMenu>
        <Link
        activeClass="active"
        to="project"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
          <MenubarTrigger className="cursor-pointer font-normal" onClick={()=>{setisopen(false)}}> 
        Projects
      
      </MenubarTrigger> 
      </Link>
        </MenubarMenu>

        <MenubarMenu>
                
        <Link
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
          <MenubarTrigger className="cursor-pointer font-normal" onClick={()=>{setisopen(false)}}>

       
        About Me
  
          </MenubarTrigger>
          </Link>  
        </MenubarMenu>

        <MenubarMenu>
        <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}  
      >
          <MenubarTrigger className="cursor-pointer font-normal"  onClick={()=>{setisopen(false)}}>  
      
        Contact Me
 
          </MenubarTrigger> 
          </Link>
        </MenubarMenu>  

     
           <Separator />
      </div>


</SheetContent>
</Sheet>
        </MenubarMenu>
 

      </Menubar>

 
 </>
      
    )
  }
  

  export default Header;