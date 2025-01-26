import React from 'react'

export const About = () => {



  return (
    <div name='about' className='w-full h-screen bg-[#0c2040] text-gray-300'>

        {/* Container for all */}

        <div className='flex flex-col justify-center items-center w-full h-full'>

            {/* GRID type div for two sides */}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-10 pl-4'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-pink-600 '>About</h2>  
                </div>

                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-wrap text-3xl font-bold '>
                        <h2>Hi. I'm Nikesh. <br />Great to see you here!</h2>
                    </div>
                    <div>
                        <p className='text-lg'>Currently focusing on being Software developer & exploring new technologies day by day. I do have a professional certificate in Quality Assurance as well as Python with Django. Academically qualified as a Computer Engineer.</p>
                    </div>
                

            </div>
            

        </div>

    </div>
  )
}
