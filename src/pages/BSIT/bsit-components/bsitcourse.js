import React, { useState, useEffect } from 'react';
import './IT-style.css';
import Graduate from './ITimage/Bsit-course-images/graduate.jpg';
import Bsitcard from './bsit-course-components/Bsit-Mission-Vision';
import Faculty from './bsit-course-components/Bsit-faculty';
import Majors from './bsit-course-components/Bsit-majors';
import Requirements from '../../academics/academics-components/requirements';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RiBook3Line } from "react-icons/ri";



const BSIT = () => {
   
    const [isOpenBA1, setIsOpenBA1] = useState(false);
    const [isOpenIT, setIsOpenIT] = useState(false);
    const [isOpenIcon, setIsOpenIcon] = useState(false);

   
    const toggleDropdownIT = () => setIsOpenIT(!isOpenIT);
    const toggleDropdownIcon = () => setIsOpenIcon(!isOpenIcon);
    const toggleDropdownBA1 = () => setIsOpenBA1(!isOpenBA1);


    function scrollToElement(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const iconSize = 20;

    const boxSizeBA = isOpenIT ? 'w-[16rem] h-[8.5rem]' : 'w-[16rem] h-[4rem]';

    return (
        <>
            <div className="relative md:h-[50rem] h-[100rem]">
                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${Graduate})` }}>
                    {/* Inner Shadow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent shadow-inner w-[100rem] h-[150rem] "></div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* Text */}
                <div className="absolute inset-0 grid md:grid-cols-2 grid-cols-1 md:mx-[3rem] xl:mx-[4rem] 2xl:mx-[10rem]  3xl:mx-[15rem] my-[16px] mx-[1rem] ">
                    <div className="justify-self-center mt-[6rem]">
                        <h1 className="text-[4rem] font-title text-blue-900  pt-3">Information Technology</h1>
                        <hr className='border-[3px] border-yellow-400 w-[10rem]' />
                        <p className="font-para text-gray-950 text-[1.2rem] py-7">Information Technology course, students delve into the fundamentals of computer systems, programming languages, and network technologies, empowering them with the skills necessary to address contemporary technological challenges and innovate in various industries</p>
                        <div className={`p-4 transition-all duration-300 ease-in-out cursor-pointer shadow-xl bg-white rounded-lg ${boxSizeBA}`}>
                            <div className="flex" onClick={() => { toggleDropdownIT(); toggleDropdownIcon(); }}>
                                <h1 className="mr-auto font-para text-gray-800 text-[1.3rem]" onClick={toggleDropdownIT}>Majors</h1>
                                <IoIosArrowDropdownCircle size={iconSize} onClick={toggleDropdownIcon} className={isOpenIcon ? 'rotated' : 'not-rotated'} />
                            </div>
                            {isOpenIT && (
                                <div>
                                    <ul className="text-gray-800 text-[1.1rem] font-para p-2">
                                        <li className="flex py-1 hover:text-blue-700 hover:underline decoration-yellow-500" onClick={() => scrollToElement('web')}>
                                            <RiBook3Line className="mr-1" />
                                            <div>Web Development</div>
                                        </li>
                                        <li className="flex py-1 hover:text-blue-700 hover:underline decoration-yellow-500" onClick={() => scrollToElement('mobile')}>
                                            <RiBook3Line className="mr-1" />
                                            <div>Mobile Development</div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

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

                <div className="absolute -bottom-[2.5rem] 2xl:right-[20rem] xl:right-[10rem] md:right-[2rem] right-2 lg:pt-12 py-4 font-title font-medium md:text-[1.5rem] ">
                    <div className="flex">
                        <div className="mx-4 cursor-pointer bg-blue-900 p-4 md:px-10 px-6 text-white text-[1.3rem] flex hover:bg-blue-700  hover:-translate-y-1 transition ease-in-out delay-150" onClick={toggleDropdownBA1}>
                            <h1>requirements</h1>
                        </div>
                        {isOpenBA1 && (
                            <div className="lg:w-[70rem] w-full fixed inset-0  overflow-y-auto z-40 2xl:ml-[50rem] ml-[10rem] ">
                                <h1 className="p-1 px-7 mx-1 border-[1px] border-blue-800 text-blue-800 rounded-2xl hover:border-blue-400 hover:text-yellow-500 cursor-pointer" onClick={toggleDropdownBA1}>
                                    Requirements
                                </h1>
                                <div style={{ overflow: 'hidden' }}>
                                    {isOpenBA1 && (
                                        <Requirements />
                                    )}
                                </div>
                            </div>
                        )}
                        <h1 className="cursor-pointer bg-blue-900 p-4 md:px-10 px-6 text-white text-[1.3rem] flex hover:bg-blue-700  hover:-translate-y-1 transition ease-in-out delay-150">Contacts</h1>
                    </div>
                </div>
            </div>
            <Majors />
           
            <Faculty />
            <Bsitcard />
        </>
    );
};

export default BSIT;
