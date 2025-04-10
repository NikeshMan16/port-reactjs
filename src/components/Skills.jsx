import React from 'react';
// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import AWS from '../assets/aws.png';
import Selenium from '../assets/selenium.png';
import Python from '../assets/python.png';
import Jira from '../assets/jira.png';
import Postman from '../assets/postman.png';
import JMeter from '../assets/jmeter.png'
import Zap from '../assets/zap.png'
import Appium from '../assets/appium.png'
import SonarQube from '../assets/sq.png'

export const Skills = () => {
  
  
    return (
    <div name = 'skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <h2 className='text-4xl font-bold inline border-b-4 border-pink-600 mt-3'>Skills

                </h2>
                
                <p className='py-4'>// These are the technologies I work with</p>

            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="pythonIcon" />
                    <h2 className='py-4'>Python</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="jsIcon" />
                    <h2 className='py-4'>JavaScript</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Selenium} alt="seleniumIcon" />
                    <h2 className='py-4'>Selenium</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Jira} alt="jiraIcon" />
                    <h2 className='py-4'>Atlassian Jira</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Postman} alt="postmanIcon" />
                    <h2 className='py-4'>Postman API</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JMeter} alt="jmeterIcon" />
                    <h2 className='py-4'>JMeter</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Zap} alt="zapIcon" />
                    <h2 className='py-4'>OWASP ZAP</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Appium} alt="appiumIcon" />
                    <h2 className='py-4'>Appium</h2>
                </div>

                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SonarQube} alt="sonarIcon" />
                    <h2 className='py-4'>SonarQube</h2>
                </div>
                
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="reactIcon" />
                    <h2 className='py-4'>REACT</h2>
                </div>

                {/* <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="githubIcon" />
                    <h2 className='py-4'>GitHub</h2>
                </div> */}
                
                <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AWS} alt="awsIcon" />
                    <h2 className='py-4'>AWS</h2>
                </div>


                {/* <div className='shadow-md shadow-[#040c161] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="tailwindIcon" />
                    <h2 className='py-4'>TailwindCSS</h2>
                </div> */}



                

                
                
            </div>
        </div>

    </div>
  )
}
