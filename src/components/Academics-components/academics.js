import React, { useState, useEffect } from 'react';
import './stylee.css';
import { LiaBookSolid } from "react-icons/lia";
import { LuFiles } from "react-icons/lu";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import ChedLogo from './Academics-images/chedlogo.png';
import BA from "./Academics-images/HM.jpg";
import HM from "./Academics-images/HM.jpg";
import IT from "./Academics-images/HM.jpg";




import { NavLink } from 'react-router-dom';


const Courses = () => {

  

  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
    const iconSize = 20;
    const iconSize1 = 30 ;

  

  return (  
   

    <div className='bg-gray-100'>
      

      
{/* top*/} 
      <section className='w-full h-[38rem] relative top-0'>
        <div className="bg-parallax bg-fixed absolute inset-0 bg-cover brightness-50 "></div>
        <div className="absolute inset-0 flex justify-center items-center text-center">
          <div>
            <h1 className="text-white text-4xl font-bold font-semititle mb-3">
              DREAM, LEARN, ACHIEVE
            </h1>
            <h1 className='text-gray-300 font-bold font-semititle cursor-pointer hover:text-yellow-500'>
              <span className="inline-block align-middle mr-6"><LiaBookSolid /></span> 
              Start Your Journey with DCCP
            </h1>  
          </div>
        </div>
      </section>
{/* -top*/} 
      

{/* courses*/} 
<section className='bg-blue-950'>
    <div className='3xl:mx-[6rem] md:mx-[4rem] mb-12' >
    <div className='w-[26rem] mx-auto border-b-[10px] border-yellow-500'><h1 className=' font-title text-[4rem] text-white'>PROGRAMS WE OFFER</h1></div>
    
    <div className=' flex justify-center p-[3rem] '><p className='w-[60rem] text-center font-para text-[1.2rem] text-gray-100'>
        Welcome to our Courses Page, your gateway to knowledge, growth, and skill enhancement! Here, you'll discover a curated collection of enriching courses designed to empower you on your journey of lifelong learning. Whether you're a professional seeking to advance your career, an enthusiast pursuing a passion, or a curious mind eager to explore new horizons, our diverse selection of courses caters to learners of all backgrounds and interests. Dive into our virtual classroom, where expert instructors, innovative content, and interactive learning experiences await. Unleash your potential, expand your expertise, and embark on a transformative educational odyssey with us. Start your learning adventure today!
    </p></div>
    
</div> </section> 
    

  <section className=' bg-blue-950 '>
  
    
      <section  className="flex 3xl:mx-[12rem] md:mx-[6rem] mx-[2rem] pb-8">
     
       
     <section className="flex-grow flex-col p-1  ">
     <section className='flex items-center justify-start my-[2rem] '>
  <img
    src={ChedLogo} 
    width={80} 
    height={80}
    alt="Final Logo"
    className='mr-1'
  />
  <h1 className='font-title text-[3rem] text-white lg:text-[3rem]'>CHED COURSES</h1>
</section> 

<section className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 2xl:gap-8 gap-2 '>
    {[
        { id: 'bsba', imgSrc: BA, label: 'BA', name: 'Business Administration', to: '/bsba' },
        { id: 'bsit', imgSrc: IT, label: 'IT', name: 'Information Technology', to: '/bsit' },
        { id: 'bshm', imgSrc: HM, label: 'HM', name: 'Hospitality Management', to: '/bshm' }
    ].map((item, index) => (
        <section key={index} id={item.id} className="justify-center relative mb-14 bg-gray-100 group hover:bg-blue-950 hover:shadow-2xl hover:shadow-gray-700 transition duration-500 transform hover:-translate-y-[4px]">
            <section id='business-administration'>
                <div className="relative w-full md:h-[23rem] overflow-hidden bg-black group">
                    <img className="object-cover w-full h-full brightness-90 group-hover:brightness-50" src={item.imgSrc} alt={item.id} />
                    <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                    <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                        <div className="absolute w-full flex place-content-center mt-20">
                            <p className="font-para text-center w-4/5 text-white sm:mt-10 text-[1rem]">{`The Bachelor of Science in ${item.name} is a four-year program which provides professional education...`}</p>
                        </div>
                        <div className="absolute w-full bottom-6 flex justify-center text-white cursor-pointer ">
                            <NavLink to={item.to} onClick={scrollToTop}>
                                <span className='flex justify-center p-1 hover:text-yellow-500'>
                                    <h1 id='lineW' className='text-[1rem] font-semititle font-semibold text-white'>Learn More</h1>
                                    <FaCircleArrowRight className='ml-2' size={iconSize1} />
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='absolute h-14 w-14 -left-4 -top-4 bg-blue-800  flex justify-center items-center mx-3 md:mx-0'>
                    <h1 className='text-white text-[1.2rem] font-title tracking-wider'>{item.label}</h1>
                </div>
            </section>
            <div className=''>
                <div className='md:px-9 border-t-[10px] border-blue-900 group-hover:border-yellow-500 p-4 font-semititle'>
                    <div className={` p-4 transition-all duration-300 ease-in-out w-full`}>
                        <NavLink to={item.to} onClick={scrollToTop}>
                            <h1 className='flex cursor-pointer text-[1.3rem] font-title text-blue-800 group-hover:text-white group-hover:underline decoration-2 decoration-yellow-500 tracking-wide'>
                                <FaBook className='mr-1 mt-1' />
                                {`Bachelor of Science in ${item.name}`}
                            </h1>
                        </NavLink>
                    </div>
                </div>
                <div className="md:ml-11 ml-6  w-full flex  cursor-pointer pb-11">
                <NavLink to={item.to} onClick={scrollToTop}>
                    <span className='flex justify-center p-1 group-hover:text-white text-gray-200  '>
                        <BsArrowRightCircleFill className='mr-3' size={iconSize1} />
                        <h1 id='lineY' className='text-[1rem] font-semititle font-semibold mt-[5px] text-gray-200 group-hover:text-white '>Enroll Now</h1>
                    </span>
                    </NavLink>
                </div>
            </div>
        </section>
    ))}
</section>

</section>

        </section>
{/* -courses*/} 


{/* Side menu big screen */}

      

      </section>
      <section className='bg-blue-950 my-12'>

      <aside className="   3xl:mx-[18rem] md:mx-[4rem] grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                
                  <div className='content-center'>

                  <h1 className=' font-title text-[4rem] text-white border-b-[10px] border-yellow-500 w-[150px] mb-11'>REQUIREMENTS</h1>
                  <p  className=' font-para text-[1.2rem] text-white '>Explore our enrollment requirements! Discover what you need to join our prestigious university. Click here to find out more.</p>
                  </div>

              <section className='grid md:grid-rows-3 grid-rows-1 mx-1 p-5 border-l-2 border-white justify-self-center '>

                  <div className=' border-gray-400 rounded-lg text-white'>
                    <div className=''>
                        <h1 className='font-semibold font-para text-[1.3rem] flex  ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Incoming Freshmen</h1>
                    <ul className='list-disc p-2 font-para font-meduim ml-[3rem] text-[20px]'>
                        <li>Grade 12 Report Card (Form 138)</li>
                        <li>2 Photocopies of PSA Birth Certificate</li>
                        <li>4 Pieces 1x1 ID Picture</li>
                    </ul>
                    </div> <hr className="border-t-2 md:hidden border-gray-300 my-4 w-[22rem] ml-7" />
                  </div>
                 
                  <div className=' border-gray-400 rounded-lg text-white'>
                    <div className=''>
                    <h1 className='font-semibold font-para text-[1.3rem] flex  ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Transferee</h1>
                        <ul className='list-disc p-2 font-para font-meduim ml-[3rem] text-[20px]'>
                        <li>Transfer Credentials</li>
                        <li>2 Photocopies of PSA Birth Certificate</li>
                        <li>4 Pieces 1x1 ID Picture</li>
                    </ul>
                    </div><hr className="border-t-2 md:hidden border-gray-300 my-4 w-[22rem] ml-7" />
                  </div>


                  <div className=' border-gray-400 rounded-lg text-white'>
                    <div className=''>
                    <h1 className='font-semibold font-para text-[1.3rem] flex  ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For ALS Graduate</h1>
                    <ul className='list-disc p-2 font-para font-meduim ml-[3rem] text-[20px]'>
                        <li>ALS Certificate containing "Eligible for College"</li>
                        <li>Certificate of Rating</li>
                        <li>3 Pieces 1x1 ID Picture</li>
                        <li>1 Piece Photocopy PSA Birth Certificate</li>
                    </ul>
                    </div>
                  </div>
                </section>
        </aside>
        </section>

      
    </div>

  );
}

export default Courses;
