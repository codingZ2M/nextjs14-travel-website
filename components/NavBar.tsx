"use client"
import { useState } from 'react';
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { IoTelescopeOutline } from "react-icons/io5";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-3 md:px-6">
        <div className="flex justify-between items-center">
            <div>
                <Link href="/">
                    <h3 className="text-xl md:text-2xl font-bold text-[#033F73] ">CZ2M Travel</h3>
                </Link>
            </div>

             {/* Desktop Navigation Menu */}
             <nav className='hidden xl:flex'>
                <ul className="flex gap-7">
                   {NAV_LINKS.map((nav_link)=> (
                        <Link href={nav_link.href} key={nav_link.key} 
                                className="text-lg font-normal text-[#033F73] cursor-pointer hover:text-[#0597F2] transition duration-1000" >
                            {nav_link.label}
                        </Link>
                   ))}
                </ul>
            </nav>

            <button className="flex items-center justify-center gap-2 text-sm md:text-lg 
                                font-normal tracking-wide bg-[#055BA6] text-white
                                px-3 py-2 md:px-12 md:py-4  rounded-full cursor-pointer">
                        <IoTelescopeOutline className="h-6 w-6 md:h-8 md:w-8 text-[##033F73]"/>
                        <span>Start Exploring</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
                <button className="text-black" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                                            <AiOutlineClose className='w-6 h-6' />
                                        ) : (
                                            <AiOutlineMenu className='w-6 h-6'/>
                    )}
                </button>
            </div>   

            {/* Mobile Navigation Menu */}
            <nav className={`z-40 h-full absolute top-20 right-0 w-[225px] md:w-[300px] text-[#fff] bg-[#033F73] p-4  ${
                                isMobileMenuOpen ? 'block' : 'hidden'
                            }`}
            >
                <ul className="">
                   {NAV_LINKS.map((nav_link)=> (
                        <Link href={nav_link.href} key={nav_link.key} 
                                className="block pb-4 text-sm md:text-lg font-normal cursor-pointer hover:text-[#0597F2] transition duration-1000" 
                                onClick={toggleMobileMenu}
                        >
                            {nav_link.label}
                        </Link>
                   ))}
                </ul>
            </nav>
        </div>
  </header>
  )
}

export default NavBar
