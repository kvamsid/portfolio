import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1}} id='about' className = 'w-full px-[12%] py-10 scroll-mt-20'>
        {/* <motion.h4 initial={{y:-20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:0.5, delay:0.3}} className = 'text-center mb-2 text-lg font-Ovo'>
            Introduction
        </motion.h4> */}
        <motion.h2 initial={{y:-20, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:0.5, delay:0.5}} className = 'text-center text-5xl font-Ovo'>
            About Me 
        </motion.h2>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:0.8}} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20 justify-center'>
            <motion.div initial={{opacity: 0, scale:0.9}} whileInView={{opacity: 1, scale:1}} transition={{duration:0.6}} className ='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src = {assets.user_image} alt='user' className = 'w-full rounded-3xl'/>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:0.6, delay:0.8}} className = ''>
                <p className = 'mb-10 max-w-3xl font-Ovo text-justify'>
                I am a Computer Science Graduate Student at Arizona State University, graduating in May 2025, with over two years of experience as a Full-Stack Developer at Oracle.
                My professional journey is driven by a passion for developing scalable and impactful solutions, leveraging Java, Spring Boot, AWS, React.js, and SQL.
                Beyond my professional expertise, I am deeply engaged in artificial intelligence and machine learning projects, aiming to harness these technologies to solve complex challenges and push the boundaries of what's possible in tech.
                I am actively seeking full-time opportunities starting Summer 2025 as a Full-Stack Developer, Backend Engineer, Frontend Engineer, or AI/ML Engineer.
                </p>
                <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:0.8, delay:1}} className ='grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl'>
                    {infoList.map(({icon, iconDark, title, description, time, GPA}, index)=>(
                        <motion.li whileHover={{scale:1.05}} key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                            {/* <Image className = 'w-7 mt-3' src={isDarkMode ? iconDark : icon} alt = {title}/> */}
                            <h3 className = 'mb-4 font-semibold text-gray-700 dark:text-white'> {title} </h3>
                            <p className = 'text-gray-600 text-sm dark:text-white/80'> {description} </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span
                                className={`px-3 py-1 text-xs font-semibold rounded-md ${
                                    isDarkMode ? "bg-blue-800 text-blue-200" : "bg-blue-300 text-blue-900"
                                }`}
                                >
                                {time}
                                </span>
                                <span
                                className={`px-3 py-1 text-xs font-semibold rounded-md ${
                                    isDarkMode ? "bg-purple-700 text-white" : "bg-indigo-500 text-white"
                                }`}
                                >
                                GPA - {GPA}
                                </span>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
                {/* <motion.h4 initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0}} transition={{duration:0.5, delay:1.3}} className = 'my-6 text-gray-700 font-Ovo dark:text-white/80'> Tools I use</motion.h4>
                <motion.ul initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:0.6, delay:1.5}} className = 'flex flex-items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <motion.li whileHover={{scale:1.1}} key ={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square
                        border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src={tool} alt='Tool' className = 'w-5 sm:w-7'/>  
                        </motion.li>
                    ))}
                </motion.ul> */}
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About  