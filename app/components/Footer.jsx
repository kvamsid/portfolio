import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className = 'mt-20'>
        <div className = 'text-center'>
            {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className = 'w-36 mx-auto mb-2'></Image> */}
            <div className = 'w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className = 'w-6'></Image>
                vkanakav@asu.edu
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Vamsi Deekshit Kanakavety. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a href = "https://github.com/kvamsid">
                        <Image src = {isDarkMode ? assets.github_dark : assets.github} alt = ""className='w-6' />
                    </a>
                </li>
                <li>
                    <a href = "https://www.linkedin.com/in/vamsi-deekshith/" className=''>
                        <Image src = {isDarkMode ? assets.linkedin : assets.linkedin} alt = ""className='w-6' />
                    </a>
                </li>
                <li>
                    <a href = "https://leetcode.com/u/vamsikanakavety144/" className=''>
                        <Image src = {isDarkMode ? assets.leetcode : assets.leetcode} alt = ""className='w-6' />
                    </a>
                </li>        
            </ul>
        </div>


    </div>
  )
}

export default Footer