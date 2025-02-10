import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Projects = ({isDarkMode}) => {
    const[visibleProjects, setVisibleProjects] = useState(6);
    const allProjectsVisible = visibleProjects === workData.length;
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1}} id = 'projects' className = 'w-full px-[12%] py-10 scroll-mt-20'>
        {/* <motion.h4 initial={{opacity: 0, y:-20}} whileInView={{opacity: 1, y:0}} transition={{duration:0.5, delay:0.3}} className = 'text-center mb-2 text-lg font-Ovo'>
            My Recent Work
        </motion.h4> */}
        <motion.h2 initial={{opacity: 0, y:-20}} whileInView={{opacity: 1, y:0}} transition={{duration:0.5, delay:0.5}} className = 'text-center text-5xl font-Ovo'>
        Work Samples
        </motion.h2>

<motion.div 
  initial={{ opacity: 0 }} 
  whileInView={{ opacity: 1 }} 
  transition={{ duration: 0.6, delay: 0.9 }} 
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10"
>
    {workData.slice(0, visibleProjects).map((project, index) => (
        <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="relative border border-purple-300 dark:border-purple-700 
                       bg-[#F3E8FF] dark:bg-[#2A1B3D] 
                       rounded-2xl p-8 shadow-lg hover:shadow-xl 
                       transition-all duration-500 cursor-pointer transform hover:-translate-y-1"
        >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                            bg-gradient-to-br from-purple-200 to-purple-50 
                            dark:from-indigo-900 dark:to-purple-900 
                            hover:from-purple-300 hover:to-purple-100 
                            dark:hover:from-indigo-800 dark:hover:to-purple-700 opacity-40">
            </div>

            <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-6 mb-4">
                    {project.description}
                </p>

                {/* Tech Stack Section */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-medium 
                                      ${isDarkMode ? "bg-blue-800 text-blue-200 hover:bg-blue-700" : "bg-blue-300 text-blue-900 hover:bg-blue-400"} 
                                    rounded-full shadow-sm`}
                        >
                            {/* Optionally use icons if you have them */}
                            {/* <Image src={tech.icon} alt={tech.name} className="w-4 h-4" /> */}
                            {tech}
                        </span>
                    ))}
                </div>

                

                <div className="flex items-center gap-4 mt-4 mx-4 gap-10">
                    {/* GitHub Link */}
                    <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <Image 
                        src={isDarkMode ? assets.github_dark : assets.github} 
                        alt='' 
                        className={isDarkMode ? 'w-12' : 'w-14'}
                        />
                    </a>
                    {/* Live Demo Link */}
                    <a 
                    href={project.Live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        <Image 
                        src={isDarkMode ? assets.website_dark : assets.website} 
                        alt='' 
                        className="w-10"
                        />
                    </a>
                </div>
            </div>
        </motion.div>
    ))}
</motion.div>




        {!allProjectsVisible && (<motion.a initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay:0.5, duration:0.5}} href="#projects" onClick={()=> setVisibleProjects(workData.length)} className = 'w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
            Show More <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className = 'w-4'/>
        </motion.a>)}
        {allProjectsVisible && (<motion.a initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:0.5}} href="#projects" onClick={()=> setVisibleProjects(6)} className = 'w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
            Show Less <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className = 'w-4'/>
        </motion.a>)}
    </motion.div>
  )
}

export default Projects