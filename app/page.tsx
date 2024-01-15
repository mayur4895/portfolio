import Banner from '@/components/Banner'
import Contact from '@/components/contact'
import AboutMe from '@/components/about'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Projects from '@/components/projects'
 
import Skills from '@/components/skills'
import { Link } from 'lucide-react'
 





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

 import { ModeToggle } from '@/components/mode-toggle'
import { Grip } from "lucide-react";
import UpArrow from '@/components/uparrow'
 
 


  
  


 
export default function Home() {
  return (
  <>
    

  
     
     <Header/> 
   <main  className=' md:px-5'>  
  <Banner  />
  <Skills/>
  <Projects/>
  <AboutMe/>
  <Contact/> 
   </main>
   <UpArrow/>
   <Footer/>
  </>
  )
}
