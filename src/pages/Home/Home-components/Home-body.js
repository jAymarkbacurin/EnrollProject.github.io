import React from 'react';
import { NavLink } from 'react-router-dom';
import Gallery from './image/introduction/gallery-pictures-introduction.png';
import { HashLink } from 'react-router-hash-link';
import { BsArrowRightCircleFill } from "react-icons/bs";
import dot from './image/introduction/dot1.png';
import studentdance from './image/introduction/pic3.jpg';

import CardNews from "./News-card";

const Learning = () => {
    const iconSize1 = 30 ;
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    return (  
        <div className='  bg-gray-100 '>
            {/* First Section */}
            <section className='grid lg:py-[8rem] py-[2rem] grid-cols-1 lg:grid-cols-2 mx-[10px]  lg:mx-[3rem]  xl:mx-[4rem] 2xl:mx-[7rem]  justify-self-center '>
                <div className='p-4'>
                    <h1 className='lg:text-[4rem] text-[2.7rem]    font-title text-gray-800 '>
                        Future-Oriented Education
                        <hr className='border-[4px] border-yellow-500 w-[10rem]'/>
                    </h1>
                    <section className='   2xl:mt-[1.5rem] md:text-[1.4rem] font-para md:text-left text-gray-600'> 
                        <p className='md:mb-4 mb-1'>
                           
                            At DCCP, we believe in nurturing a vibrant community where every individual's potential is unlocked and celebrated. Our dedication to academic excellence serves as the cornerstone of our institution, guiding our students to reach new heights of achievement and intellectual growth. Through a culture of innovation, we empower our community to push boundaries, explore new ideas, and shape the future.
                        </p>
                        <div className='flex lg:mt-16 2xl:py-[1rem] py-6 font-title '> 
                            <div className=''> <div className=' cursor-pointer bg-blue-950 border-blue-950  border-2 p-4 md:px-10 text-white md:text-[1.3rem]  hover:bg-blue-700 hover:-translate-y-1 transition ease-in-out delay-150  '> <h1>LEARN MORE</h1></div></div>
                            <div className='ml-4'><div className='cursor-pointer border-blue-950  border-2 p-4 md:px-10 text-blue-950 md:text-[1.3rem] flex hover:bg-blue-700 hover:text-white hover:-translate-y-1 transition ease-in-out delay-150 '><h1>CONTACT US</h1></div></div>
                       
                        </div>
                       
                    </section> 
                </div>
         
                    <div className=' md:h-[38rem] h-[34rem] rounded-lg w-full '>
                    <img src={Gallery} alt='Your Image' className='object-cover w-full h-full ' />
                    </div>
     


            </section>

            {/* Second Section */}
            <section className='grid lg:grid-cols-2 grid-cols-1 bg-blue-950 w-full h-full lg:py-4'>
                <div>
                <div className='relative'>
                        <div className='z-10 relative'><img src={studentdance} className='lg:mt-[2rem]   ' /></div>
                        <div className="hidden lg:block lg:absolute h-full w-full left-4 -top-4  border-yellow-500 border-[1px] z-0"></div>
                    </div>
                </div>

                    <div className='flex flex-col justify-center items-start p-[3rem]'>
                        <h1 className='font-title xl:text-[3rem] text-[2rem] text-white '>
                                We provide an excellent programs
                            <hr className='border-[3px] border-yellow-500 w-[10rem]' />
                        </h1>
                        <div className=' py-[2rem]  xl:py-[3rem] text-left'>
                            <p className=' font-para text-[1.2rem] text-white'>
                                Welcome to our premier program designed to meet your needs with excellence. At [Organization Name], we take pride in offering an exceptional program tailored to exceed your expectations. Our commitment to excellence ensures that you receive top-tier service and support. Join us as we embark on a journey of growth, learning, and success together.
                            </p>
                        </div>
                        <div className="  flex  cursor-pointer pb-11 w-[10rem] group">
                        <NavLink to="/academics" onClick={scrollToTop}>
    <span className="flex justify-center p-1 text-white">
        <BsArrowRightCircleFill className="mr-3 group-hover:text-yellow-500" size={iconSize1} />
        <h1 id="lineY" className="text-[1rem] font-semititle font-semibold mt-[5px] text-white">Learn More</h1>
    </span>
</NavLink>
                            </div>
                    </div>

            </section>

            <section className='hidden lg:grid  grid-cols-2  bg-blue-950 w-full h-full py-4'>

                    <div className='flex flex-col justify-center items-start p-[3rem]'>
                    <h1 className='font-title xl:text-[3rem] text-[2rem] text-white '>
                            <span className="align-baseline">WE MAKE COLLEGE AFFORDABLE</span>
                            <hr className='border-[3px] border-yellow-500 w-[10rem]' />
                        </h1>
                        <div className=' py-[2rem]  xl:py-[3rem] text-left'>
                            <p className=' font-para text-[1.2rem] text-white'>
                                At Data, we're dedicated to making college education accessible to all students, regardless of financial constraints.
                            </p>
                        </div>
                        <div className=" w-[10rem] flex  cursor-pointer pb-11 group">
                        <span className='flex justify-center p-1 text-white '>
                            <BsArrowRightCircleFill className='mr-3 group-hover:text-yellow-500' size={iconSize1} />
                            <h1 id='lineY' className='text-[1rem] font-semititle font-semibold mt-[5px] text-white'>Learn More</h1>
                        </span>
                            </div>
                    </div>
                <div>
                    <div className='relative'>
                    <div className='z-10 relative'><img src={studentdance} className='lg:mb-[2rem] m-[2rem] lg:m-0'  /></div>
                        <div className="lg:absolute h-full w-full -left-4 top-4 border-yellow-500 border-[1px] z-0"></div>
                    </div>
                </div>
            </section>
              {/* Small screen */}
            <section className=' lg:hidden grid lg:grid-cols-2 grid-cols-1 bg-blue-950 w-full h-full py-4'>   
                         <div className='relative'>
                        <div className='z-10 relative'><img src={studentdance} className='mr-4  ' /></div>
                        <div className="hidden lg:block absolute h-full w-full right-4 -top-4  border-yellow-500 border-[1px] z-0"></div>
                    </div>
                <div className='flex flex-col justify-center items-start p-[3rem]'>
                    <h1 className='font-title xl:text-[3rem] text-[2rem] text-white '>
                            <span className="align-baseline">WE MAKE COLLEGE AFFORDABLE</span>
                            <hr className='border-[3px] border-yellow-500 w-[10rem]' />
                        </h1>
                        <div className=' py-[2rem]  xl:py-[3rem] text-left'>
                            <p className=' font-para text-[1.2rem] text-white'>
                                At Data, we're dedicated to making college education accessible to all students, regardless of financial constraints.
                            </p>
                        </div>
                        <div className=" w-[10rem] flex  cursor-pointer pb-11 group">
                        <span className='flex justify-center p-1 text-white '>
                            <BsArrowRightCircleFill className='mr-3 group-hover:text-yellow-500' size={iconSize1} />
                            <h1 id='lineY' className='text-[1rem] font-semititle font-semibold mt-[5px] text-white'>Learn More</h1>
                        </span>
                            </div>
                    </div>
            </section>



            <CardNews/>

           

         
           

          
        </div>   
     

    );
}

export default Learning;
