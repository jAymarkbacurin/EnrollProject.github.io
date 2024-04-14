import React, { useState, useEffect } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import TopicsMobilecovered from './MobileDev-card-topics';
import TopicsWebcovered from './WebDev-card-topics';
import { FaCheck } from "react-icons/fa6";
import './ITin-style.css';


const  Majors= () => {
    const [isOpenweb, setIsOpenweb] = useState(false);
    const [isOpenmobile, setIsOpenmobile] = useState(true);


    const iconSize1 = 20;
    return ( 
        <section className='3xl:mx-[14rem] 2xl:mx-[10rem] xl:mt-[2rem]'> 
        <div className="relative  lg:py-11 text-gray-700  grid  lg:grid-cols-5 grid-cols-1 lg:gap-4 bg-white"> 
            <div className=' col-start-1 col-end-2 '> 
                <div className='sticky hidden lg:block top-[3rem] bg-blue-950 p-4 py-11'>
                    <h1 className="font-title text-[1.5rem]   text-yellow-500">majors</h1>
                    <div>
                        <h1 className={`font-title text-[2rem]  cursor-pointer text-gray-600 flex ${isOpenweb ? 'activeIT' : ''}`} onClick={() => { setIsOpenweb(!isOpenweb); setIsOpenmobile(false); }}>
                            <BiSolidRightArrow className={`icon ${isOpenweb ? 'activeIcon' : ''}`} size={iconSize1} />Web Application
                        </h1>
                        <h1 className={`font-title text-[2rem]  cursor-pointer text-gray-600 flex ${isOpenmobile ? 'activeIT' : ''}`} onClick={() => { setIsOpenmobile(!isOpenmobile); setIsOpenweb(false); }}>
                            <BiSolidRightArrow className={`icon ${isOpenmobile ? 'activeIcon' : ''}`} size={iconSize1} />Mobile Development
                        </h1>
                    </div>
                </div> 
            </div>  
            <div className='col-start-2 col-span-4'>
                <div className='sticky lg:hidden top-[3rem] bg-blue-950 p-4 py-6 z-20'>
                    <div className='flex  justify-center'>
                        <h1 className={`font-title text-[2rem]  cursor-pointer text-gray-600 flex ${isOpenweb ? 'activeIT' : ''}`} onClick={() => { setIsOpenweb(!isOpenweb); setIsOpenmobile(false); }}>
                            <BiSolidRightArrow className={`icon ${isOpenweb ? 'activeIcon' : ''}`} size={iconSize1} />Web Application
                        </h1>
                        <h1 className={`font-title text-[2rem]  cursor-pointer text-gray-600 flex ${isOpenmobile ? 'activeIT' : ''}`} onClick={() => { setIsOpenmobile(!isOpenmobile); setIsOpenweb(false); }}>
                            <BiSolidRightArrow className={`icon ${isOpenmobile ? 'activeIcon' : ''}`} size={iconSize1} />Mobile Development
                        </h1>
                    </div>
                </div> 
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div> 
                        <div className=" lg:p-2 p-6">
                            <h1 className="font-title text-[3rem] text-blue-950">Course Description</h1>
                            <hr className='border-[3px] border-yellow-400 w-[10rem]' />
                        </div>
                        {isOpenweb && (
                            <div className="flex justify-start  lg:p-2 p-6  ">
                                <p className=" text-left font-para text-[1.2rem] text-gray-800 ">
                                    Web Application course serves as an introduction to the fundamentals of web application development, covering essential concepts, technologies, and best practices. Students will gain a comprehensive understanding of the principles behind developing dynamic and interactive web applications.
                                </p>
                            </div>
                        )}
                        {isOpenweb && (
                            <section>
                                <div className=" my-4 ">
                                    <div className="  lg:p-2 p-6">
                                        <h1 className="font-title text-[2rem] py-4 mt-6">web developer Career Opportunities</h1>
                                        <p className="font-para text-[1.2rem]">
                                            This field offers a diverse range of career paths, appealing to individuals with various interests and specialties, including:
                                        </p>
                                        <ul className="font-para text-[1rem] ml-11 my-6">
                                            <li className="flex p-4 border-b-2 border-gray-300 w-[30rem]"> <FaCheck className="mt-1 text-blue-500 mr-1" />Front-end Developer</li>
                                            <li className="flex p-4 border-b-2 border-gray-300 w-[30rem]"> <FaCheck className="mt-1 text-blue-500 mr-1" />Back-end Developer</li>
                                            {/* Add more career opportunities */}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        )}
                        {isOpenmobile && (
                            <div className="flex justify-start  lg:p-2 p-6  ">
                                <p className=" text-left font-para text-[1.2rem] text-gray-800 ">
                                    Mobile Development course provides a comprehensive introduction to mobile application development, focusing on both iOS and Android platforms. Students will learn the fundamental concepts, tools, and techniques required to develop native and cross-platform mobile applications.
                                </p>
                            </div>
                        )}
                        {isOpenmobile && (
                            <section>
                                <div className="my-4 ">
                                    <div className="lg:p-2 p-6 ">
                                        <h1 className="font-title text-[2rem] py-4 mt-[2rem] text-gray-800 ">Mobile development Career Opportunities</h1>
                                        <p className="font-para text-[1.2rem]">
                                            This field offers a diverse range of career paths, appealing to individuals with various interests and specialties, including:
                                        </p>
                                        <ul className="font-para text-[1rem] ml-11 my-6 text-gray-800 ">
                                            <li className="flex p-4 border-b-2 border-gray-300 w-[30rem]"> <FaCheck className="mt-1 text-blue-500 mr-1" />Mobile App Developer</li>
                                            <li className="flex p-4 border-b-2 border-gray-300 w-[30rem]"> <FaCheck className="mt-1 text-blue-500 mr-1" />iOS Developer</li>
                                            {/* Add more career opportunities */}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                    <div>  
                        {isOpenweb && <TopicsWebcovered />}
                        {isOpenmobile && <TopicsMobilecovered />}
                    </div>
                </div>
            </div>
        </div>
    </section>

     );
}
 
export default Majors;