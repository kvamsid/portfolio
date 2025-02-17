import { motion } from "framer-motion";
import { assets, experienceInfo } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const ExperiencePage = ({ isDarkMode }) => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 scroll-mt-20" id = 'experience'>
      {/* Section Title */}
      <motion.h2 initial={{opacity: 0, y:-20}} whileInView={{opacity: 1, y:0}} transition={{duration:0.5, delay:0.5}} className = 'text-center text-5xl font-Ovo'>
      Career Journey
      </motion.h2>

      {/* Experience Cards */}
      <div className="space-y-8 mt-5">
        {experienceInfo.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative border border-purple-300 dark:border-purple-700 
                       bg-[#F3E8FF] dark:bg-[#2A1B3D] rounded-2xl p-6 shadow-lg 
                       hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                            bg-gradient-to-br from-purple-200 to-purple-50 
                            dark:from-indigo-900 dark:to-purple-900 
                            hover:from-purple-300 hover:to-purple-100 
                            dark:hover:from-indigo-800 dark:hover:to-purple-700 opacity-40">
            </div>

            <div className="relative z-10">
              {/* Company & Role */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{exp.company}</p>

              {/* Location & Duration */}
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                <span>{exp.location}</span>
                <span>{exp.duration}</span>
              </div>

              {/* Bullet Points */}
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                {exp.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
