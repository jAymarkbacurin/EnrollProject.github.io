import React, { useState, useEffect } from 'react';
import './stylee.css';
import baStudent from './BAimages/BA.jpg';
import Course from '../bsba-components/bsba-course-components/Course';





const BSBA = () => {
   
 

    return (
        <>
           {/* Background image */}
            <div className="relative md:h-[40rem] h-[50rem] ">
                {/* Background image */}
                <div className="absolute inset-0 w-full h-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${baStudent})` }}>
                    {/* Inner Shadow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent shadow-inner w-[100rem] h-[150rem] "></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* Text */}
                <div className="absolute inset-0 grid md:grid-cols-2 grid-cols-1 md:mx-[3rem] xl:mx-[4rem] 2xl:mx-[10rem]  3xl:mx-[15rem] my-[16px] mx-[1rem] ">
                    <div className="justify-self-center mt-[6rem]">
                        <h1 className="text-[4rem] font-title text-blue-900  pt-3">Business Administration</h1>
                        <hr className='border-[3px] border-yellow-400 w-[10rem]' />
                        <p className="font-para text-gray-950 text-[1.2rem] py-7">
                            "Information technology revolutionizes how we communicate, work, and innovate, driving efficiency and connectivity across the globe."</p>
                     
                        <button className="bg-blue-900 rounded-lg mt-11 hover:bg-blue-700">
                            <div className="p-4 px-7 text-white font-bold font-para text-[1.2rem]">
                                ENROLL NOW
                            </div>
                        </button>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>

              
            </div>
          

            
            <Course/>
           
           
        
        </>
    );
};

export default BSBA;
