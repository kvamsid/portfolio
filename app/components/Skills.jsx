import { assets, serviceData, skillsInfo } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Skills = ({isDarkMode}) => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1}} id = 'skills' className = 'w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h2 initial={{opacity: 0, y:-20}} whileInView={{opacity: 1, y:0}} transition={{duration:0.5,delay:0.5}} className = 'text-center text-5xl font-Ovo'>
        Skills & Proficiencies
        </motion.h2>
        <motion.div 
  initial={{ opacity: 0 }} 
  whileInView={{ opacity: 1 }} 
  transition={{ duration: 0.6, delay: 0.9 }} 
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10"
>
    {skillsInfo.map((category, index) => (
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
                {/* Category Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {category.title}
                </h3>

                {/* Skill List with Progress Bars */}
                <div className="flex flex-col gap-4 mb-4">
                    {category.skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-col mb-4">
                            <div className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-300">
                                <span className="font-medium">{skill.name}</span>
                                <span className={`font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                                    {skill.level}
                                </span>
                            </div>
                            {/* Progress Bar */}
                            <div className="w-full h-2 bg-gray-300 rounded-full mt-2">
                                <div
                                  className={`h-full rounded-full ${
                                    skill.level === 'Experienced' ? 'bg-green-500' :
                                    skill.level === 'Intermediate' ? 'bg-yellow-500' :
                                    skill.level === 'Beginner' ? 'bg-blue-500' :
                                    'bg-gray-400'
                                  }`}
                                  style={{ width: skill.level === 'Experienced' ? '100%' : skill.level === 'Intermediate' ? '67%' : '33%' }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    ))}
</motion.div>
    </motion.div>
  )
}

export default Skills