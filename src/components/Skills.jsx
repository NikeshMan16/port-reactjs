import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import AWS from '../assets/aws.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Django from '../assets/django.png';
import Python from '../assets/python.png';


export const Skills = () => {
  
  
    return (
    <div name = 'skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <h2 className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills

                </h2>
                
                <p className='py-4'>// These are the technologies I work with</p>

            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="htmlIcon" />
                    <h2 className='py-4'>HTML</h2>
                </div>
                
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="cssIcon" />
                    <h2 className='py-4'>CSS</h2>
                </div>
                
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="jsIcon" />
                    <h2 className='py-4'>JavaScript</h2>
                </div>
                
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="reactIcon" />
                    <h2 className='py-4'>REACT</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="githubIcon" />
                    <h2 className='py-4'>GitHub</h2>
                </div>
                
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="awsIcon" />
                    <h2 className='py-4'>AWS</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="tailwindIcon" />
                    <h2 className='py-4'>TailwindCSS</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Django} alt="djangoIcon" />
                    <h2 className='py-4'>Django</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="pythonIcon" />
                    <h2 className='py-4'>Python</h2>
                </div>

                

                
                
            </div>
        </div>

    </div>
  )
}
