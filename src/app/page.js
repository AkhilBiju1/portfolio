import Image from 'next/image';
import Header from '../components/Header'
import Project from "../components/Project";
import Footer from "../components/Footer";
import akhilImg from '../../public/akhil.jpg'
import {  FaLinkedinIn, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";


export default function Home() {


  return (
    <div className="dark:bg-black  dark:text-white ">
      <Header />

      <div className='mt-11 flex-col items-center '>
        <h1 className='text-4xl text-center  dark:text-white'><b>AKHIL BIJU</b></h1>
        <div className='mt-12'>
          <Image className='rounded-full mx-auto' src={akhilImg} width='200' height='200' alt="" />

        </div>
      </div >
      {/* About */}

      <div className='mx-auto w-10/12 my-8 border-b-2' id='About'>
        <div className='my-2'>
          <h1 className='text-2xl'><b>I’m <span className='text-fuchsia-700'>Akhil</span> - Web Developer </b></h1>
          <p className='mt-1 text-gray-900 dark:text-gray-200 dark:text-gray-100'>Hi there!  I’m a freelance web developer with a passion for building functional, user-friendly, and scalable web applications. Whether you’re looking for a skilled developer to bring your ideas to life or a dedicated professional to join your team, I’m here to help.</p>
        </div>
        <div className='my-2'>
          <h1 className='text-lg'><b>SKILLs</b></h1>
          <p className='mt-1 text-gray-900 dark:text-gray-200 dark:text-gray-100'>Web Development● Graphic Design● Version Control</p>
        </div>
        <div className='mt-2 mb-4'>
          <h1 className='text-lg'><b>CONNECT</b></h1>
          <div className='flex  mt-1 text-gray-900 dark:text-gray-200'>
            <div className=' hover:scale-105 transition-transform p-2 bg-fuchsia-700 text-white rounded-full mx-1'>

              <a href="http://www.linkedin.com/in/akhil-biju-719607268" target="_blank" ><FaLinkedinIn className='text-lg ' /></a>
            </div>
           
            <div className=' hover:scale-105 transition-transform p-2 bg-fuchsia-700 text-white rounded-full mx-1'>
              <a href="mailto:akhilbiju013@gmail.com"><SiGmail className='text-lg' /></a>
            </div>

          </div>

        </div>
      </div>
      {/* service */}
      <div className="mx-auto w-10/12 my-8 border-b-2">
        <h1 className='text-4xl  mb-3'><b><i>What I <span className='text-fuchsia-700'>Do</span></i></b></h1>
        <div className='grid md:gap-4 md:grid-cols-3 mb-8'>
          <div className='mb-2 p-4 rounded-lg   shadow-lg  border-2 hover:scale-105 transition-transform' >
            <h1 className='text-lg'><b>Frontend Development</b></h1>
            <p className='text-gray-900 dark:text-gray-200'>Creating visually appealing, responsive, and user-friendly interfaces using React, Nextjs, HTML, CSS, and JavaScript.</p>
          </div>
          <div className='mb-2 p-4 rounded-lg shadow-lg border-2 hover:scale-105 transition-transform'>
            <h1 className='text-lg '><b>Backend Development</b></h1>
            <p className='text-gray-900 dark:text-gray-200'>Building scalable and efficient back-end systems with Nodejs, Expressjs, MongoDB and MySQL.</p>
          </div>
          <div className='mb-8 md:mb-2 p-4 rounded-lg shadow-lg border-2 hover:scale-105 transition-transform'>
            <h1 className='text-lg'><b>Graphic Design</b></h1>
            <p className='text-gray-900 dark:text-gray-200'>Skilled in using Adobe Photoshop and other Adobe Creative Suite tools for creating logos, web graphics, and visual designs.</p>
          </div>
        </div>
      </div>
      {/* Project */}
      <Project  />
      {/* education */}
      <div className="mx-auto w-10/12 my-8  border-b-2" id='Education'>
        <h1 className='text-4xl  mb-8 italic '><b>Academic <span className='text-fuchsia-700'>Profile</span></b></h1>
        <ul className='grid grid-cols-7 mb-8 grid-row-4'>
          <li className=" h-30  col-span-3 text-right hover:scale-105 transition-transform">
            <h2 className='text-fuchsia-700 text-lg'>2021-2024</h2>
            <h1>Bachelor of Computer Applications</h1>
            <p className='text-sm italic'>Mahatma Gandhi University</p>
          </li>
          <li className=" h-30 w-1 bg-fuchsia-700 col-start-4 mx-auto"><div className="relative top-1/2 left-0 w-7 h-7 bg-fuchsia-700 rounded-full transform -translate-x-3 -translate-y-3"><IoIosArrowUp className='text-2xl mx-auto text-white' /></div></li>
          <li className=" h-30 w-1 bg-fuchsia-700 col-start-4 row-start-2 mx-auto"><div className="relative top-1/2 left-0 w-7 h-7 bg-fuchsia-700 rounded-full transform -translate-x-3 -translate-y-3"><IoIosArrowUp className='text-2xl mx-auto text-white' /></div></li>
          <li className=" h-30  col-span-3 col-start-5 row-start-2 hover:scale-105 transition-transform">
            <h2 className='text-fuchsia-700 text-lg'>2019-2021</h2>
            <h1>Higher Secondary (12th Grade)</h1>
            <p className='text-sm italic'>Government Higher Secondary School, Kallar</p>
          </li>
          <li className=" h-30  col-span-3 row-start-3 text-right hover:scale-105 transition-transform">
            <h2 className='text-fuchsia-700 text-lg'>2018-2019</h2>
            <h1>SSLC</h1>
            <p className='text-sm italic'>Government Higher Secondary School, Kallar</p>
          </li>
          <li className=" h-30 w-1 bg-fuchsia-700 col-start-4 mx-auto">
            <div className="relative top-1/2 left-0 w-7 h-7 bg-fuchsia-700 rounded-full transform -translate-x-3 -translate-y-3"><IoIosArrowUp className='text-2xl mx-auto text-white' /></div>
          </li>

        </ul>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
