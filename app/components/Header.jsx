import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({isDarkMode}) => {
  return (
    <div className = 'w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div initial={{scale: 0}} whileInView={{scale:1}} transition={{duration:0.8, type:'spring',stiffness:100}}>
            <Image src={assets.profile_img} alt='' className = 'rounded-full w-32'/>
        </motion.div>
        <motion.h3 initial={{y:-20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:0.6, delay:0.3}} className = 'flex items-end gap-2 text-2xl md:text-3xl mb-3 font-Ovo'>
            Hi! I'm Vamsi Deekshit Kanakavety
            <Image src={assets.hand_icon} alt='' className='w-8'/>
        </motion.h3>
        <motion.h2 initial={{y:-30, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:0.8, delay:0.5}} className='text-xl sm:text-3xl lg:text-[40px] font-Ovo flex items-center gap-2'>
            Full-Stack Web Developer
        </motion.h2>
        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:0.6, delay:0.7}} className = 'text-[18px] max-w-2xl mx-auto font-Ovo'>      
            Graduate Student in Computer Science with professional full-stack development experience at Oracle, specializing in Java, SpringBoot, AWS, and React JS. 
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a 
                initial={{ y: 30, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.6, delay: 1.2 }} 
                href="/Vamsi_Resume.pdf" 
                download 
                className={`w-30 px-10 py-3 border rounded-full border-gray-500 flex items-center justify-center gap-2 
                            ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} 
                            hover:opacity-90 transition`}
            >
                Resume <Image src={isDarkMode ? assets.download_icon : assets.download_icon_dark} alt="" className="w-5" />
            </motion.a>

            <motion.a 
                initial={{ y: 30, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.6, delay: 1.2 }} 
                href="/Vamsi_CoverLetter.pdf" 
                download 
                className={`w-30 px-10 py-3 border rounded-full border-gray-500 flex items-center justify-center gap-2 
                            ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} 
                            hover:opacity-90 transition`}
            >
                Cover Letter <Image src={isDarkMode ? assets.download_icon : assets.download_icon_dark} alt="" className="w-5" />
            </motion.a>
        </div>

    </div>
  )
}

export default Header