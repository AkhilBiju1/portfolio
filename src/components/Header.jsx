'use client'
import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClose, MdDarkMode } from "react-icons/md";


export default function Header() {
    const [menu, setMenu] = useState(false)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check the user's saved theme or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    const scroll = (e,id) => {
        e.preventDefault(); // Prevent default browser behavior
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' }); 
    }
   
    return (


        <nav className="border-b-2 dark:border-0  ">
            <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
                <div>
                    <MdDarkMode onClick={toggleTheme}  className="hover:scale-105  transition-all inline-flex items-center p-2 w-10 h-10 text-gray-700 justify-center text-xl dark:text-white rounded-lg  dark:hover:text-gray-100  " />
                </div>
                <div className="">
                   
                    {
                        menu ?
                            <MdOutlineClose onClick={() => setMenu(!menu)} className="hover:scale-105  transition-all inline-flex text-fuchsia-700 hover:text-fuchsia-500 items-center p-2 w-10 h-10 justify-center text-md dark:text-white rounded-lg md:hidden dark:hover:text-fuchsia-700  " aria-controls="navbar-default" aria-expanded="false" />

                        :
                            <RiMenu3Fill onClick={() => setMenu(!menu)} className="hover:scale-105  transition-all inline-flex text-fuchsia-700 hover:text-fuchsia-500 items-center p-2 w-10 h-10 justify-center text-sm dark:text-white rounded-lg md:hidden dark:hover:text-fuchsia-700  " aria-controls="navbar-default" aria-expanded="false" />

                    }

                   
                </div>
               
                   
                
                <div className={menu ? 'w-full md:block md:w-auto ' : 'hidden w-full md:block md:w-auto '} >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg dark:bg-gray-950 dark:md:bg-black md:flex-row md:space-x-7 rtl:space-x-reverse md:mt-0 md:border-0  ">
                        <li>
                            <a onClick={(e)=>scroll(e,'Home')} className="block py-2 px-3 text-fuchsia-700 hover:text-fuchsia-500 dark:text-white rounded-sm hover:bg-gray-200 dark:hover:bg-gray-900 md:hover:bg-transparent md:border-0 dark:hover:text-fuchsia-700 md:p-0 " aria-current="page">Home</a>
                        </li>
                        <li>
                            <a onClick={(e)=>scroll(e,'About')} className="block py-2 px-3 text-fuchsia-700 hover:text-fuchsia-500 dark:text-white rounded-sm hover:bg-gray-200 dark:hover:bg-gray-900 md:hover:bg-transparent md:border-0 dark:hover:text-fuchsia-700 md:p-0 ">About</a>
                        </li>
                        
                        <li>
                            <a onClick={(e)=>scroll(e,'Projects')} className="block py-2 px-3 text-fuchsia-700 hover:text-fuchsia-500 dark:text-white rounded-sm hover:bg-gray-200 dark:hover:bg-gray-900 md:hover:bg-transparent md:border-0 dark:hover:text-fuchsia-700 md:p-0 ">Projects</a>
                        </li>
                        <li>
                            <a onClick={(e)=>scroll(e,'Education')} className="block py-2 px-3 text-fuchsia-700 hover:text-fuchsia-500 dark:text-white rounded-sm hover:bg-gray-200 dark:hover:bg-gray-900 md:hover:bg-transparent md:border-0 dark:hover:text-fuchsia-700 md:p-0 ">Education</a>
                        </li>
                        <li>
                            <a href="/akhilbiju_cv.pdf" download="akhilbiju_cv.pdf"  className="block py-2 px-3 text-fuchsia-700 hover:text-fuchsia-500 dark:text-white rounded-sm hover:bg-gray-200 dark:hover:bg-gray-900 md:hover:bg-transparent md:border-0 dark:hover:text-fuchsia-700 md:p-0 ">Resume</a>
                        </li>

                        
                        <li>
                            <a onClick={(e)=>scroll(e,'Contact')} className="block py-2 px-3 text-fuchsia-700 hover:text-fuchsia-500 dark:text-white rounded-sm hover:bg-gray-200 dark:hover:bg-gray-900 md:hover:bg-transparent md:border-0 dark:hover:text-fuchsia-700 md:p-0 ">Contact</a>
                        </li>
                        <li>
                            
                        </li>
                    </ul>

                </div>
                
            </div>
        </nav>

    )
}
