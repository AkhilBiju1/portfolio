import React from 'react'
import {  FaLinkedinIn, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Footer() {
  return (
      <div className='mx-auto w-10/12 mt-8 pb-3 grid grid-cols-1  ' id='Contact'>
          <div className='flex  justify-between mt-1 text-gray-900 dark:text-gray-200'>
              <p className='text-sm'>Developed by <a href='mailto:akhilbiju013@gmail.com' className='hover:text-fuchsia-700'>Akhil Biju</a></p>
              <a href="mailto:akhilbiju013@gmail.com" className='hidden md:inline hover:text-fuchsia-700' >akhilbiju013@gmail.com</a>
              <div className="flex mt-1">
                  <div className=' hover:scale-105 transition-transform  text-gray-900 dark:text-gray-50 rounded-full mx-1'>

                      <a href="http://www.linkedin.com/in/akhil-biju-719607268" target="_blank"><FaLinkedinIn className='text-lg ' /></a>
                  </div>
                 
                  <div className=' hover:scale-105 transition-transform  text-gray-900 dark:text-gray-50 rounded-full mx-1'>

                      <a href="mailto:akhilbiju013@gmail.com"><SiGmail className='text-lg' /></a>

                  </div>
              </div>


          </div>
    </div>
  )
}
