import Image from 'next/image';
import project1 from "../../public/project1.png"
import project2 from "../../public/project2.jpg"
import project3 from "../../public/project3.png"
import project4 from "../../public/project4.png"
import React from 'react'


export default function Project() {
  return (
      <div className="mx-auto w-10/12 my-8 border-b-2" id="Projects">
          <h1 className='text-4xl mb-9 italic'>
              <b> Recent <span className='text-fuchsia-700'>Project</span></b>
          </h1>
          <ul className='grid grid-cols- sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-11/12 mx-auto'>
              
              <li className="shadow-lg border-2 dark:border-0 rounded-xl pb-2 hover:scale-105  transition-all">
                  <div className=''>
                      <Image className='h-52 lg:h-44  rounded-xl' src={project1} alt="" />
                      <h3 className='text-lg text-center my-2 px-1 '><b>Retreat Centre Management System</b></h3>
                      <p className='px-1  text-center text-gray-900 dark:text-gray-200 ' >Built with Node.js, Express, and MongoDB.</p>
                  </div>
              </li>

              <li className="shadow-lg  border-2 dark:border-0 rounded-xl pb-2 hover:scale-105  transition-all">
                  <div>
                      <Image className='h-52 lg:h-44  rounded-xl' src={project3} alt="" />
                      <h3 className='text-lg text-center my-2 px-1'><b>AEM Premium Heathcare</b></h3>
                      <p className='px-1  text-center text-gray-900 dark:text-gray-200 ' >Built using HTML, CSS, and Bootstrap</p>
                  </div>
              </li>

              <li className="shadow-lg  border-2 dark:border-0 rounded-xl pb-2 hover:scale-105  transition-all">
                  <div>
                      <Image className='h-52 lg:h-44 rounded-xl' src={project2} alt="" />
                      <h3 className='text-lg text-center my-2 px-1'><b>Online Store</b></h3>
                      <p className='px-1  text-center text-gray-900 dark:text-gray-200 ' >Built with Node.js, Express, and MongoDB.</p>
                  </div>
              </li>
              
              <li className="shadow-lg  border-2 dark:border-0 rounded-xl pb-2 hover:scale-105  transition-all">
                  <div>
                      <Image className='h-52 lg:h-44 rounded-xl' src={project4} alt="" />
                      <h3 className='text-lg text-center my-2 px-1'><b>Real-Time Chat Application</b></h3>
                      <p className='px-1  text-center text-gray-900 dark:text-gray-200 ' >Chat Application using React, Express.js , Socket.io, and MongoDB.</p>
                  </div>
              </li>

          </ul>
      </div>
  )
}


