'use client'

import { Link } from "react-scroll";

import { GoChevronUp } from "react-icons/go";

const UpArrow = ()=>{
    return(<>
 
    <Link
        activeClass="active"
        to="home"
        className="fixed right-4 bottom-[22px] cursor-pointer p-1 rounded-full z-50 dark:bg-white dark:text-black bg-zinc-900 text-white"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <GoChevronUp   size={28}/>
      </Link>    
    </>)
}

export default UpArrow;