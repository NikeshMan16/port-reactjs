import React, { useState } from 'react'

import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

export const Navbar = () => {

    const [nav, setNav] = useState(false)


    const handleClick = () => setNav(!nav)
    

    return(
        <>
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-400'>
            <div>
                <p className='text-pink-600 font-bold text-3xl border outline border-pink-500 cursor-pointer'><Link to='home' smooth={true} duration={500}>NS</Link></p>
                {/* <img src={Logo} alt="MainLogo" style={{ width: '50px' }} /> */}
            </div>
        
        
            <ul className='hidden md:flex '>
                <li className='text-2xl'>
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li className='text-2xl'>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li className='text-2xl'>
                <Link to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
                </li>
                <li className='text-2xl'>
                <Link to='work' smooth={true} duration={500}>
                    Work
                </Link>
                </li>
                
            </ul>

        

        {/* HamburgerMenu */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {
            !nav ? <FaBars/> 
            : <FaTimes/>}
        
        </div>


        {/* MobileMenu */}
        
        
            <ul className={
                !nav ? 'hidden' 
                : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-inherit'
            }>
                <li className='text-3xl py-3'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link>
                </li>
                <li className='text-3xl py-3'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li className='text-3xl py-3'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
                </li>
                <li className='text-3xl py-3'>
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Work
                </Link>
                </li>
                
            </ul>


        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='nav-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-blue-500 border rounded-sm'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/nikesh-man-shrestha-28a119268/">
                      LinkedIn<FaLinkedin size={30}/>
                    </a>

                </li>

                <li className='nav-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-gray-700 border rounded-sm'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/NikeshMan16">
                      Github<FaGithub size={30}/>
                    </a>

                </li>


                <li className='nav-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-orange-600 border rounded-sm'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="mailto:nikeshmanshrestha@gmail.com">
                      Mail<HiOutlineMail size={30}/>
                    </a>

                </li>
                <li className='nav-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[2px] duration-300 bg-green-800 border rounded-sm'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="">
                      Resume<BsFillPersonLinesFill size={30}/>
                    </a>

                </li>

            </ul>

        </div>
         
        </div>
        </>
    )
}
