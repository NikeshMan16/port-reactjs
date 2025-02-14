import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

export const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f] text-white'>
        
            {/* Container */}
            <div className='px-5 max-w-[1000px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-pink-600' name='special text-lg'>Hi, my name is</p>
                <h1 className='text-5xl sm:8xl font-bold text-[#ccd6f6]'>Nikesh Man Shrestha</h1>
                <h2 className='text-5xl sm:8xl font-bold text-[#8892b0]'>
                    I'm a{' '}
                    <span className="text-[#8892b0]">
                        <Typewriter
                            words={[ 'Computer Engineer', 'QA Engineer']}
                            loop={0} // Infinite loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </span>
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px] text-lg'>
                    A Computer Engineer currently focusing in <span className='font-semibold text-white'>delivering quality software </span>through proper software testing and automation tests. For my creative side, using {' '}
                    <span className='font-semibold text-white'>REACTjs</span> for building responsive & reactive web applications.
                </p>

                <div>
                    <Link to='work' smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-pink-600 hover:border-pink-600'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' size={25} />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
