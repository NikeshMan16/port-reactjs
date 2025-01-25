import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from 'react-scroll';

export const Home = () => {
  
  
  
    return (
    <div name='home' className='w-full h-screen bg-[#0a192f] text-white'>
        
        {/* Container */}
        <div className='px-5 max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-pink-600' name='special text-lg' >Hi, my name is</p>
            <h1 className='text-5xl sm:8xl font-bold text-[#ccd6f6]'>Nikesh Man Shrestha</h1>
            <h2 className='text-5xl sm:8xl font-bold text-[#8892b0]'>I'm a Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] text-lg'>A Computer Engineer currently focusing in software development and learning <span className='font-semibold text-white'>REACTjs</span> for dynamic web applications and building responsive & reactive web applications.
            </p>


            <div>
            <Link to='work' smooth={true} duration={500} >
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-pink-600 hover:border-pink-600'>View Work
                    <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3' size={25} />
                    </span>
                    </button>
            </Link>
            </div>

        </div>
    </div>
  )
}
