import React, { useState, useEffect } from 'react';
import './stylee.css';
import Bsit1 from './ITimage/Bsit-course-images/web-background-laptop.jpg';
import Bsiti2 from './ITimage/Bsit-course-images/mobile-background-cellphone.jpg';
import Graduate from './ITimage/Bsit-course-images/graduate.jpg';
import Bsitcard from './bsit-course-components/Bsit-Mission-Vision';
import Faculty from './bsit-course-components/Bsit-faculty';
import Requirements from '../Academics-components/requirements';
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { RiBook3Line } from "react-icons/ri";
import { BiSolidRightArrow } from "react-icons/bi";
import TopicsMobilecovered from './bsit-course-components/MobileDev-card-topics';
import TopicsWebcovered from './bsit-course-components/WebDev-card-topics';

const BSIT = () => {
    const [isOpenweb, setIsOpenweb] = useState(false);
    const [isOpenmobile, setIsOpenmobile] = useState(true);
    const [isOpenBA1, setIsOpenBA1] = useState(false);
    const [isOpenIT, setIsOpenIT] = useState(false);
    const [isOpenIcon, setIsOpenIcon] = useState(false);

    const toggleMenuweb = () => setIsOpenweb(!isOpenweb);
    const toggleMenumobile = () => setIsOpenmobile(!isOpenmobile);
    const toggleDropdownIT = () => setIsOpenIT(!isOpenIT);
    const toggleDropdownIcon = () => setIsOpenIcon(!isOpenIcon);
    const toggleDropdownBA1 = () => setIsOpenBA1(!isOpenBA1);

    useEffect(() => {
        setIsOpenmobile(true);
    }, []);

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
    const iconSize1 = 30;
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
                        <h1 className="text-[4rem] font-title text-blue-500 pt-3">Information Technology</h1>
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

                        <button className="bg-blue-500 rounded-lg mt-11 hover:bg-blue-300">
                            <div className="p-4 px-7 text-white font-bold font-para text-[1.2rem]">
                                ENROLL NOW
                            </div>
                        </button>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>

                <div className="-bottom-[2.5rem] 2xl:right-[20rem] xl:right-[10rem] md:right-[2rem] right-2 lg:pt-12 py-4 font-title font-medium md:text-[1.5rem] ">
                    <div className="flex">
                        <div className="mx-4 cursor-pointer bg-blue-700 p-4 md:px-10 px-6 text-white text-[1.3rem] flex hover:bg-blue-500  hover:-translate-y-1 transition ease-in-out delay-150" onClick={toggleDropdownBA1}>
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
                        <h1 className="cursor-pointer bg-blue-700 p-4 md:px-10 px-6 text-white text-[1.3rem] flex hover:bg-blue-500  hover:-translate-y-1 transition ease-in-out delay-150">Contacts</h1>
                    </div>
                </div>
            </div>

            <section className="lg:pl-[3rem] 3xl:pl-[10rem] lg:p-2 p-6 my-11 mt-[7rem]">
                <h1 className={`font-title lg:pl-[3rem] text-[4rem] cursor-pointer text-gray-300 flex ${isOpenweb ? 'activeIT' : ''}`} onClick={() => { setIsOpenweb(!isOpenweb); setIsOpenmobile(false); }}>
                    <BiSolidRightArrow className={`icon ${isOpenweb ? 'activeIcon' : ''}`} size={iconSize1} />Web Application
                </h1>
                <h1 className={`font-title lg:pl-[3rem] text-[4rem] cursor-pointer text-gray-300 flex ${isOpenmobile ? 'activeIT' : ''}`} onClick={() => { setIsOpenmobile(!isOpenmobile); setIsOpenweb(false); }}>
                    <BiSolidRightArrow className={`icon ${isOpenmobile ? 'activeIcon' : ''}`} size={iconSize1} />Mobile Development
                </h1>
            </section>

            <section>
                <div className="relative bg-gray-50 lg:py-11 text-gray-700">
                    <div className="lg:pl-[3rem] 3xl:pl-[10rem] lg:p-2 p-6">
                        <h1 className="font-title text-[3rem] text-gray-800">Course Description</h1>
                    </div>
                    {isOpenweb && (
                        <div className="flex justify-start lg:pl-[3rem] lg:p-2 p-6 3xl:pl-[10rem] ">
                            <p className="2xl:w-[60rem] xl:w-[45rem] lg:w-[30rem] w-[60rem] text-left font-para text-[1.2rem] text-gray-800 ">
                                Web Application course serves as an introduction to the fundamentals of web application development, covering essential concepts, technologies, and best practices. Students will gain a comprehensive understanding of the principles behind developing dynamic and interactive web applications.
                            </p>
                        </div>
                    )}
                    {isOpenmobile && (
                        <div className="flex justify-start lg:pl-[3rem] lg:p-2 p-6 3xl:pl-[10rem] ">
                            <p className="2xl:w-[60rem] xl:w-[45rem] lg:w-[30rem] w-[60rem] text-left font-para text-[1.2rem] text-gray-800 ">
                                Mobile Development course provides a comprehensive introduction to mobile application development, focusing on both iOS and Android platforms. Students will learn the fundamental concepts, tools, and techniques required to develop native and cross-platform mobile applications.
                            </p>
                        </div>
                    )}

                    {isOpenweb && <TopicsWebcovered />}
                    {isOpenmobile && <TopicsMobilecovered />}
                </div>
            </section>

            {isOpenweb && (
                <section>
                    <div className="grid md:grid-cols-2 grid-cols-1 my-4 ">
                        <div className="bg-gray-50 lg:pl-[3rem] 3xl:pl-[10rem] lg:p-2 p-6">
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
                        <div className="w-full h-full hidden md:block">
                            <img src={Bsit1} alt="background-computer-image" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>
            )}

            {isOpenmobile && (
                <section>
                    <div className="grid md:grid-cols-2 grid-cols-1 my-4 ">
                        <div className="bg-gray-50 lg:pl-[3rem] 3xl:pl-[10rem] lg:p-2 p-6 ">
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
                        <div className="w-full h-full hidden md:block">
                            <img src={Bsiti2} alt="background-mobile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>
            )}

            <Faculty />
            <Bsitcard />
        </>
    );
};

export default BSIT;
