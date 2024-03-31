import React, { useState, useEffect } from 'react';
import './stylee.css';
import { LiaBookSolid } from "react-icons/lia";
import { LuFiles } from "react-icons/lu";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import ImageLogo from './image/finallogo.png';
import ChedLogo from './image/chedlogo.png';
import BA from "./subjectsimages/BAimage/BA.jpg";
import HM from "./subjectsimages/HMimage/HM.jpg";
import IT from "./subjectsimages/ITimage/IT.jpg";



import { BsDot } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Courses = () => {
  const [isOpenBA, setIsOpenBA] = useState(false);
  const [isOpenIT, setIsOpenIT] = useState(false);
  

  
 
  const toggleDropdownBA = () => {
    setIsOpenBA(!isOpenBA);
  };
  const toggleDropdownIT = () => {
    setIsOpenIT(!isOpenIT);
  };

  // Calculate the margin top for the content below the dropdown
 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const iconSize = 20;
  const iconSize1 = 35 ;
  const boxSizeBA1 = isOpenBA ? 'md:w-[30rem]  h-[7rem]' : 'md:w-[30rem] h-[5rem] md:h-[4rem]'; 
  const boxSizeIT = isOpenIT ? 'md:w-[30rem] h-[8rem]' : 'md:w-[30rem] h-[5rem] md:h-[4rem]'; 
  

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
      <section className='flex items-center justify-start sm:ml-[2rem] 3xl:ml-[14rem] xl:ml-[10rem] my-11'>
        <img
          src={ChedLogo} 
          width={90} 
          height={90}
          alt="Final Logo"
          className='mr-1'
        />
        <h1 className='font-title text-[3rem] text-gray-800 lg:text-[5rem]'>CHED COURSES</h1>
      </section>


{/* courses*/}  
      <section  className="flex md:mx-[3rem] xl:mx-[10rem]  3xl:mx-[15rem]">
       
           <section className="flex-grow flex-col p-1 ">
{/* BSBA*/}

              <section id='bsba'  className="justify-center relative mb-14 ">
{/* BSBA image*/}       
              <section id='business-administration'>
                  <div class="relative group w-full  md:h-[25rem] overflow-hidden bg-black rounded-2xl">
                      <img class="object-cover w-full h-full brightness-50 " src={BA} />    
                      <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                      <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                          <div class="absolute w-full flex place-content-center mt-10">
                              <p class="capitalize font-serif font-bold text-base text-center shadow-2xl text-white mt-15 text-[26px]">BSBA</p>
                          </div>
                          <div class="absolute w-full flex place-content-center mt-20">
                              <p class="font-para text-center w-4/5 text-white sm:mt-10 text-[12px] sm:text-[22px]">
                                  The Bachelor of Science in Business Administration (BSBA) is a four-year program which provides 
                                  professional business and management education for those who would like to become entrepreneurs
                                  or pursue a career in any field of business such as economics, finance, human capital management, and marketing.
                              </p>
                          </div>
                          <div class="absolute w-full bottom-11 flex justify-center text-white cursor-pointer ">
                            <NavLink to='/bsba ' onClick={scrollToTop}><span className='flex justify-center  p-1 hover:text-blue-500  text-white '>
                              <h1 id='lineW' className='sm:text-[1.1rem] font-semititle font-semibold mt-[3px] text-white'>Learn More</h1>
                              <FaCircleArrowRight  className='ml-2   'size={iconSize1} />
                            </span></NavLink>
                          </div> 
                      </div>    
                     </div>
                  <div className='absolute h-14 w-14 -left-4 -top-4 bg-blue-800  flex justify-center items-center mx-3 md:mx-0'>
                      <h1 className='text-white text-[1.2rem] font-title tracking-wider '>BA</h1>
                  </div>
              </section>

{/* -image*/} 
{/*  card*/} 
              <div className=' p-2 md:px-9  md:mt-3 font-semititle   md:[1rem] '>
                <div className={`bg-white p-4 border-[1px] rounded-lg border-gray-300 transition-all duration-300 ease-in-out ${boxSizeBA1}`}>
                  <h1  className='flex cursor-pointer font-semibold hover:text-blue-800 text-gray-700' onClick={toggleDropdownBA}>
                    <FaBook className='mr-1 mt-1 ' />
                    Bachelor of Science in Business Administration
                  </h1> 
                {isOpenBA && (
                   <HashLink  smooth to='/bsba/#bsbaM' > <div className="absolute ml-11  py-2 ">
                      <a id='line' href="#" className=" font-semititle font-semibold flex text-blue-800 ">
                        <BsDot  className='mt-[2px] mr-3 'size={iconSize}/>Major in Financial Management</a>
                    </div></HashLink>
                )}
                </div>
              </div>
              <div class="ml-9 w-full bottom-11 flex  text-gray-800 cursor-pointer ">
                   <span className='flex justify-center  p-1 hover:text-blue-700  text-gray-700  '> 
                   <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                    <h1  className='text-[1.1rem] font-semititle font-meduim  mt-[5px] text-gray-800 hover:text-blue-700 '>Enroll Now</h1>
                   
                  </span>
               </div> 

{/* -card*/} 
            </section>
{/* BSBA*/}


{/* BSIT */}
          <section id='bsit' className="justify-center relative mb-14"> 
{/*  image*/}
                <section >
                  <div class="relative group w-full md:h-[25rem] overflow-hidden bg-black rounded-2xl">
                        <img class="object-cover w-full h-full brightness-50 " src={IT} />    
                        <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                    <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                        <div class="absolute w-full flex place-content-center mt-10">
                            <p class="capitalize font-serif font-bold text-base text-center shadow-2xl text-white mt-15 text-[26px]">BSIT</p>
                        </div>
                        <div class="absolute w-full flex place-content-center mt-20">
                            <p class="font-para text-center w-4/5 text-white sm:mt-10 text-[12px] sm:text-[22px]">
                              The Bachelor of Science in Information Technology (BSIT) program
                              is a four-year degree program which focuses on the study of computer
                              utilization and computer software to plan, install, customize, operate,
                              manage, administer and maintain information technology infrastructure.</p>
                        </div>
                        <div class="absolute w-full bottom-11 flex justify-center text-white cursor-pointer ">
                           <NavLink to='/bsit' onClick={scrollToTop}> <span className='flex justify-center  p-1 hover:text-violet-500  text-white '>
                              <h1 id='lineW' className='text-[1.1rem] font-semititle font-semibold mt-[3px] text-white'>Learn More</h1>
                              <FaCircleArrowRight  className='ml-2   'size={iconSize1} />
                            </span></NavLink>
                        </div> 
                      
                    </div> 
                  </div>  <div className='absolute h-14 w-14 -left-4 -top-4 bg-violet-800 z-10 flex justify-center items-center mx-3 md:mx-0'>
                    <h1 className='text-white text-[1.2rem] font-title  tracking-wider'>IT</h1>
                  </div>
                </section>
{/* -image*/}

{/*  card*/}
          <div className='p-2 md:px-9  md:mt-3 font-semititle '>
            <div className={`bg-white p-4 border-[1px] rounded-lg border-gray-300 transition-all duration-300 ease-in-out ${boxSizeIT}`}>
              <h1  className='flex cursor-pointer font-semibold hover:text-violet-800 text-gray-700' onClick={toggleDropdownIT}>
                <FaBook className='mr-1 mt-1 ' />
                Bachelor of Science in Information Technology
              </h1> 
           
              {isOpenIT && (
               <div className="absolute ml-11 py-2 ">
                 <HashLink  smooth to='/bsit/#bsitMW'>  <a href="#" id='lineB' className=" font-semititle font-semibold flex text-violet-800"> 
                    <BsDot className='mt-1 mr-3'/>Major in Web Development</a></HashLink>
                    <HashLink  smooth to='/bsit/#bsitMA'> <a href="#" id='lineB' className=" font-semititle font-semibold flex text-violet-800 mt-1">
                    <BsDot className='mt-1 mr-3'/>Major in Mobile Development</a></HashLink>
                
                </div>
              
              )}
            </div>
          </div>
          <div class="ml-9 w-full bottom-11 flex  text-gray-800 cursor-pointer ">
                   <span className='flex justify-center  p-1 hover:text-blue-700  text-gray-700  '> 
                   <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                    <h1  className='text-[1.1rem] font-semititle font-meduim  mt-[5px] text-gray-800 hover:text-blue-700 '>Enroll Now</h1>
                   
                  </span>
               </div> 
{/* -card*/}
          </section>
{/* BSIT */}



 {/* BSHM*/}
        <section id='bshm' className="justify-center relative mb-14">
 {/* image*/}
              <section >
                <div class="relative group w-full md:h-[25rem] overflow-hidden bg-black rounded-2xl ">
                      <img class="object-cover w-full h-full brightness-50 " src={HM} />    
                      <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                  <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                      <div class="absolute w-full flex place-content-center mt-10">
                          <p class="capitalize font-serif font-bold text-base text-center shadow-2xl text-white mt-15  text-[26px]">BSHM</p>
                      </div>
                      <div class="absolute w-full flex place-content-center mt-20">
                          <p class="font-para text-center w-4/5 text-white sm:mt-10 text-[12px] sm:text-[22px]">
                          The Bachelor of Science in Hospitality Management (BSHM) is a four-year 
                          degree program that covers the process of planning,development, human resource 
                          management of the different aspects of the hotel, restaurant, and resorts operations. 
                          The program also intends to teach entrepreneurship skills..</p>
                      </div>
                      <div class="absolute w-full bottom-11 flex justify-center text-white cursor-pointer ">
                          <NavLink to='/bshm' onClick={scrollToTop}>
                                <span className='flex justify-center  p-1 hover:text-yellow-500  text-white '>
                                  <h1 id='lineW' className='text-[1.1rem] font-semititle font-semibold mt-[3px] text-white'>Learn More</h1>
                                  <FaCircleArrowRight  className='ml-2   'size={iconSize1} />
                                </span>
                          </NavLink>
                        </div> 
                  </div> 
                </div>
                  <div className='absolute h-14 w-14 -left-4 -top-4 bg-yellow-500 flex justify-center items-center mx-3 md:mx-0'>
                    <h1 className='text-white text-[1.2rem] font-title tracking-wider '>HM</h1>
                  </div> 
              </section>
{/* -image*/}
{/*  card*/}
          <div className='p-2 md:px-9  md:mt-3  font-semititle '>
            <div className={`bg-white p-4 border-[1px] rounded-lg border-gray-300 transition-all duration-300 ease-in-out md:w-[30rem] h-[5rem] md:h-[4rem]`}>
              <NavLink to='/bshm' onClick={scrollToTop}> <h1 className='flex cursor-pointer font-semibold hover:text-yellow-500 text-gray-700' >
               <FaBook className='mr-1 mt-1 ' />
                Bachelor of Science in Hospitality Management
              </h1> </NavLink>
            </div>
          </div>
          <div class="ml-9 w-full bottom-11 flex  text-gray-800 cursor-pointer ">
                   <span className='flex justify-center  p-1 hover:text-blue-700  text-gray-700  '> 
                   <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                    <h1  className='text-[1.1rem] font-semititle font-meduim  mt-[5px] text-gray-800 hover:text-blue-700 '>Enroll Now</h1>
                   
                  </span>
               </div> 
{/*  -card*/}
          </section>
{/* BSHM*/}
        </section>
{/* -courses*/} 


{/* Side menu big screen */}

        <aside className="w-96  hidden lg:block ">
                <div className='p-9  flex items-center justify-center top-0'>
                                <img 
                                  src={ImageLogo} 
                                    width={200} 
                                    height={200}
                                    alt="Final Logo"
                                    className='mr-1'
                                    />
                  </div> 
                  <div>
                    <h1 className='flex items-center justify-center font-title text-[2rem] tracking-wide text-gray-700'>REQUIREMENTS</h1>
                  </div>

                  <div className=' p-3  border-gray-400 rounded-lg'>
                      <div className='p-4'>
                               <h1 className='font-semibold font-semititle text-[1.2rem] flex text-gray-700 ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Incoming Freshmen</h1>
                          <ul className='list-disc p-2 font-semititle font-meduim ml-[3rem]'>
                              <li id='line'>Grade 12 Report Card (Form 138)</li>
                              <li>2 Photocopies of PSA Birth Certificate</li>
                              <li>4 Pieces 1x1 ID Picture</li>
                          </ul>
                      </div> <hr className="border-t-2 border-gray-300 my-4 w-[22rem] ml-7" />
                  </div>
                 
                  <div className=' p-3  border-gray-400 rounded-lg'>
                      <div className='p-4'>
                              <h1 className='font-semibold font-semititle text-[1.2rem] flex text-gray-700 ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Transferee</h1>
                          <ul className='list-disc p-2 font-semititle font-meduim ml-[3rem]'>
                              <li>Transfer Credentials</li>
                              <li>2 Photocopies of PSA Birth Certificate</li>
                              <li>4 Pieces 1x1 ID Picture</li>
                          </ul>
                      </div><hr className="border-t-2 border-gray-300 my-4 w-[22rem] ml-7" />
                    </div>


                  <div className=' p-3  border-gray-400 rounded-lg'>
                    <div className='p-4'>
                            <h1 className='font-semibold font-semititle text-[1.2rem] flex text-gray-700 ml-[1.8rem] '><LuFiles className='mr-2 mt-1' />For ALS Graduate</h1>
                        <ul className='list-disc p-2 font-semititle font-meduim ml-[3rem]'>
                            <li>ALS Certificate containing "Eligible for College"</li>
                            <li>Certificate of Rating</li>
                            <li>3 Pieces 1x1 ID Picture</li>
                            <li>1 Piece Photocopy PSA Birth Certificate</li>
                        </ul>
                    </div>
                  </div>
         
        </aside>
       

      </section>

      <aside className="w-full  lg:hidden  block py-6">
                
                  <div>
                    <h1 className='flex items-center justify-center font-title text-[2rem] tracking-wide text-gray-700'>REQUIREMENTS</h1>
                  </div>

              <section className='grid md:grid-cols-3 grid-cols-1 mx-1 p-5 '>

                  <div className=' border-gray-400 rounded-lg'>
                    <div className=''>
                        <h1 className='font-semibold font-semititle text-[1.2rem] flex text-gray-700 ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Incoming Freshmen</h1>
                    <ul className='list-disc p-2 font-semititle font-meduim ml-[3rem] text-[14px]'>
                        <li >Grade 12 Report Card (Form 138)</li>
                        <li>2 Photocopies of PSA Birth Certificate</li>
                        <li>4 Pieces 1x1 ID Picture</li>
                    </ul>
                    </div> <hr className="border-t-2 md:hidden border-gray-300 my-4 w-[22rem] ml-7" />
                  </div>
                 
                  <div className='  border-gray-400 rounded-lg '>
                    <div className=''>
                        <h1 className='font-semibold font-semititle text-[1.2rem] flex text-gray-700 ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Transferee</h1>
                    <ul className='list-disc p-2 font-semititle font-meduim ml-[3rem] text-[14px]'>
                        <li>Transfer Credentials</li>
                        <li>2 Photocopies of PSA Birth Certificate</li>
                        <li>4 Pieces 1x1 ID Picture</li>
                    </ul>
                    </div><hr className="border-t-2 md:hidden border-gray-300 my-4 w-[22rem] ml-7" />
                  </div>


                  <div className=' border-gray-400 rounded-lg'>
                    <div className=''>
                        <h1 className='font-semibold font-semititle text-[1.2rem] flex text-gray-700 ml-[1.8rem] '><LuFiles className='mr-2 mt-1' />For ALS Graduate</h1>
                    <ul className='list-disc  font-semititle font-meduim ml-[3rem] text-[14px]'>
                        <li>ALS Certificate containing "Eligible for College"</li>
                        <li>Certificate of Rating</li>
                        <li>3 Pieces 1x1 ID Picture</li>
                        <li>1 Piece Photocopy PSA Birth Certificate</li>
                    </ul>
                    </div>
                  </div>
                </section>
        </aside>

      
    </div>

  );
}

export default Courses;
