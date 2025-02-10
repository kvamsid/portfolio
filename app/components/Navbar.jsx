import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src = {assets.header_bg_color} alt = "" className = 'w-full'/>
    </div>
      <nav className = {`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
            {/* <Image src = {isDarkMode ? assets.logo_dark : assets.logo} alt = "" className = 'w-28 cursor-pointer mr-14'/> */}
        </a>
        <ul className = {`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
            <li>
                <a className ='font-Ovo' href="#top">Home</a>
            </li>
            <li>
                <a className ='font-Ovo' href="#about">About Me</a>
            </li>
            <li>
                <a className ='font-Ovo' href="#experience">Experience</a>
            </li>
            <li>
                <a className ='font-Ovo' href="#projects">Projects</a>
            </li>
            <li>
                <a className ='font-Ovo' href="#skills">Skills</a>
            </li>
            <li>
                <a className ='font-Ovo' href="#contact">Contact Me</a>
            </li>
        </ul>
        <div className = 'flex items-center gap-8'>
            <button onClick={()=> setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt = "" className = 'w-6'></Image>
            </button>
            <a href = "https://github.com/kvamsid">
                <Image src = {isDarkMode ? assets.github_dark : assets.github} alt = ""className='w-6' />
            </a>
            <a href = "https://www.linkedin.com/in/vamsi-deekshith/" className=''>
                <Image src = {isDarkMode ? assets.linkedin : assets.linkedin} alt = ""className='w-6' />
            </a>
            <a href = "https://leetcode.com/u/vamsikanakavety144/" className=''>
                <Image src = {isDarkMode ? assets.leetcode : assets.leetcode} alt = ""className='w-6' />
            </a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt = "" className = 'w-6'></Image>
            </button>
        </div>
        <ul ref = {sideMenuRef} className = 'flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
            <div className = 'absolute right-6 top-6' onClick={closeMenu}>
                <Image src = {isDarkMode ? assets.close_white : assets.close_black} alt = '' className = 'w-5 cursor-pointer'/>
            </div>
            
            <li>
                <a className ='font-Ovo' onClick={closeMenu} href="#top">Home</a>
            </li>
            <li>
                <a className ='font-Ovo' onClick={closeMenu} href="#about">About Me</a>
            </li>
            <li>
                <a className ='font-Ovo' href="#experience">Experience</a>
            </li>
            <li>
                <a className ='font-Ovo' onClick={closeMenu} href="#projects">Projects</a>
            </li>
            <li>
                <a className ='font-Ovo' onClick={closeMenu} href="#skills">Skills</a>
            </li>
            <li>
                <a className ='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a>
            </li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar