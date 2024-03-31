import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylee.css';
import Bsit1 from '../subjectsimages/ITimage/bsiti1.jpg';
import Bsiti2 from '../subjectsimages/ITimage/bsiti2.png';
import Bsitcard from '../bsitcomp/cardbsit';
import { LuFiles } from 'react-icons/lu';
import { FaCircleArrowRight } from "react-icons/fa6";
import { IoIosArrowDropleft,IoIosArrowDropright } from "react-icons/io";
import { BsArrowRightCircleFill } from "react-icons/bs";



const BSIT = () => {
    const [isOpenBA, setIsOpenBA] = useState(false);
    const [isOpenBA1, setIsOpenBA1] = useState(false);

    const toggleDropdownBA = () => {
        setIsOpenBA(!isOpenBA);
    };
    const toggleDropdownBA1 = () => {
        setIsOpenBA1(!isOpenBA1);
    };
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    const iconSize = 20;
    const iconSize1 = 35 ;



    return (
        <>
        <section className='w-full h-[38rem] relative top-0'>
            <div className="bg-parallax1it bg-fixed absolute inset-0 bg-cover brightness-50 "></div>
            <div className="absolute inset-0 flex justify-center items-center text-center">
            <div>
                <div className='flex'>
                   <NavLink to='/bsba' >
                        <div className=' mx-1 cursor-pointer'>
                            <IoIosArrowDropleft  className='mr-3  text-white hover:text-blue-600' size={iconSize1} />
                        </div>
                    </NavLink>
                    
                         <h1 className="text-white md:text-[5rem] text-[3rem] font-title  mb-3">
                           Information Technology
                        </h1>
                 
                   
                </div>
                <h1 className='text-gray-300 font-bold font-semititle cursor-pointer hover:text-violet-500'>
                    <span className="inline-block align-middle mr-6"></span> 
                   Welcome to IT Department
                    </h1>  
            </div>   
                <NavLink to='/bshm' >
                            <div className=' mx-1  cursor-pointer mt-[5.5rem]'>
                                <IoIosArrowDropright  className='mr-3 text-white hover:text-yellow-600' size={iconSize1} />
                            </div>
                </NavLink>
            </div>
        </section>

<div className=' bg-gray-100'>
      

 <section id='bsitMW'  className="flex md:mx-[3rem] xl:mx-[9rem]  3xl:mx-[17rem]"> 

    <section className=" p-1 my-11 py-5 mx-2  rounded-lg  ">

                    <div className='grid md:grid-cols-2 grid-cols-1 text-gray-700'>
                        <div id='bsitMW' className='lg:mx-11  mx-2 mt-7  ' >
                            <div className='relative lg:h-[5rem] h-[4rem]  w-[29.7rem]  lg:w-[35rem] text-[2.5rem] lg:text-[3rem] drop-shadow-lg font-title text-gray-300'>Information Technology
                                <h1 className=' absolute p-4 -left-7 -top-6  font-title  text-[2.5rem] lg:text-[3rem] text-violet-800 '> 
                            Information Technology </h1>
                            </div>
                        </div>
                        <div className='lg:mt-8 font-para font-semibold'>
                            <h1>Delve deeper into the world of web and mobile development at Data Center with  offerings, and invaluable information to propel your journey forward.</h1>
                        </div>
                        
                    
                    </div>
                    <hr className="border-t-[6px] border-violet-700 mt-4 w-full  " />
                               
    
 {/*web development =======================web development==============================================*/}
        <div class="grid lg:grid-cols-3 grid-cols-1  my-3 lg:my-11">
                <div className='col-span-1'>
                        <div class="relative group w-full h-full overflow-hidden bg-black  brightness-75 
                            hover:brightness-90 ">
                                 <img className="object-cover w-full h-full  rounded-lg  " src={Bsit1} />
                                <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-1/3 group-hover:-inset-y-0">
                                    
                                    <div class="absolute w-full bottom-11 flex justify-center  cursor-pointer ">
                                        <span className='flex justify-center  p-1 hover:text-violet-600  text-white '>
                                        <h1 id='lineW' className='sm:text-[1.1rem] font-semititle font-semibold mt-[3px] text-white'>Enroll Now</h1>
                                        <FaCircleArrowRight  className='ml-2   'size={iconSize1} />
                                        </span>
                                    </div> 
                                    
                            </div> 
                        </div>
            </div>

                <div class=" col-span-2 p-4">
                    <div id='bsitMW' className='lg:mx-11  mx-2 mt-7  ' >
                        <div className='relative lg:h-[5rem] h-[4rem]  w-[20.7rem]  lg:w-[27.5rem] bg-gray-300 drop-shadow-lg '>
                            <h1 className=' absolute p-4 -left-4 -top-4 bg-violet-700 font-title text-white text-[1.5rem] lg:text-[2rem]  '>
                            Major in Web Development </h1>
                        </div>
                    </div>

                    <div >
                        <div className='p-4 font-para   mt-1 text-justify  text-gray-700 font-medium '>
                            <p>
                                A major   in Web Development is a specialized area of study within computer science or information technology
                                programs. It focuses specifically on equipping students with the knowledge and skills to design, develop,
                                and maintain websites and web applications. This includes proficiency in programming languages like HTML, 
                                CSS, JavaScript, and server-side scripting languages such as PHP, Python, or Ruby.
                            
                            </p>

                            <p className='mt-3'>
                            
                             Hands-on learning is at the core of our Web Development major. Students will tackle real-world challenges and projects, applying their knowledge and skills to develop fully functional websites and web applications. They will gain experience in both front-end development, focusing on the user interface and user experience, and back-end development, managing server-side operations and database interactions. Furthermore, students will learn about responsive design techniques to ensure their creations are accessible and optimized across various devices and screen sizes. Additionally, students will explore the principles of web security, learning how to protect websites from common vulnerabilities and cyber threats, ensuring the integrity and confidentiality of user data.
                            </p>
                            <div className=' hover:text-sky-300 md:mt-8'>
                                <div class="w-full bottom-11  flex  cursor-pointer py-2  ">
                                    <span className='flex justify-center p-1 hover:text-violet-800 md:hover:text-violet-500  text-violet-800   '> 
                                    <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                                        <h1 id='lineBL' className='text-[1.1rem] font-semititle font-semibold  mt-[5px] hover:text-gray-800 '>
                                            Enroll Now</h1>
                                    </span>
                                </div> 
                                
                            </div>
                            <div className=' hover:text-sky-300 '>
                                <div class="w-full bottom-11  flex  cursor-pointer  ">
                                    <span className='flex justify-center p-1 hover:text-violet-800 md:hover:text-violet-500  text-violet-800   '> 
                                    <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                                        <h1 id='lineBL' className='text-[1.1rem] font-semititle font-semibold  mt-[5px] hover:text-gray-800 '>
                                        Course Listings</h1>
                                    </span>
                                </div> 
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
{/*web development =======================web development==============================================*/}
            
                    

                     
                
{/*mobile development =======================mobile development========================================*/}
    <div class=" hidden lg:flex my-11 ">
            <div className='col-span-2'>
                    <div id='bsitMW' className='  lg:mx-11  mx-2 mt-7 ' >
                        <div className='relative lg:h-[5rem] h-[4rem]  w-[20.7rem]  lg:w-[30rem] bg-gray-300 drop-shadow-lg '>
                            <h1 className=' absolute p-4 -left-4 -top-4 bg-violet-700    font-title text-white text-[1.5rem] lg:text-[2rem]  '>
                            Major in Mobile Development </h1>
                        </div>
                    </div>
                    <div>
                    <div className='p-4 font-para mx-4  mt-1 text-justify  text-gray-700 font-medium '>
                            <p className='mb-3'>
                            Our Mobile Development major focuses on designing and building innovative mobile applications for smartphones, tablets, and other mobile devices.
                                In this major, students immerse themselves in the rapidly evolving world of mobile technology, where creativity and functionality intersect. They learn to conceptualize, design, and develop mobile applications that address the needs and preferences of today's mobile users. From gaming apps to productivity tools, students explore the full spectrum of mobile development possibilities, gaining the skills and knowledge to bring their ideas to life.
                            </p>
                            <p>
                            Our Mobile Development major focuses on designing and building innovative mobile applications for smartphones, tablets, and other mobile devices.
                                In this major, students immerse themselves in the rapidly evolving world of mobile technology, where creativity and functionality intersect. They learn to conceptualize, design, and develop mobile applications that address the needs and preferences of today's mobile users. From gaming apps to productivity tools, students explore the full spectrum of mobile development possibilities, gaining the skills and knowledge to bring their ideas to life.
                            </p>
                            <br/>
                        
                           
                            <div className=' hover:text-sky-300 md:mt-8'>
                                <div class="w-full bottom-11  flex  cursor-pointer py-2  ">
                                    <span className='flex justify-center p-1 hover:text-violet-800 md:hover:text-violet-500  text-violet-800   '> 
                                    <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                                        <h1 id='lineBL' className='text-[1.1rem] font-semititle font-semibold  mt-[5px] hover:text-gray-800 '>
                                            Enroll Now</h1>
                                    </span>
                                </div> 
                                
                            </div>
                            <div className=' hover:text-sky-300 '>
                                <div class="w-full bottom-11  flex  cursor-pointer  ">
                                    <span className='flex justify-center p-1 hover:text-violet-800 md:hover:text-violet-500  text-violet-800   '> 
                                    <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                                        <h1 id='lineBL' className='text-[1.1rem] font-semititle font-semibold  mt-[5px] hover:text-gray-800 '>
                                        Course Listings</h1>
                                    </span>
                                </div> 
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
 {/*mobile development ======================= 2nd image ========================================*/}
            <div class=" col-span-1  ">
                    <div class="relative group w-full lg:h-full  overflow-hidden bg-black  brightness-75 hover:brightness-90 ">
                            <img className="object-cover w-full h-full brightness-70 rounded-lg " src={Bsiti2} />    
                         <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-1/3 group-hover:-inset-y-0">
                                    
                            <div class="absolute w-full bottom-11 flex justify-center text-white cursor-pointer ">
                                    <span className='flex justify-center  p-1 hover:text-violet-600  text-white '>
                                    <h1 id='lineW' className='sm:text-[1.1rem] font-semititle font-semibold mt-[3px] text-white'>Enroll Now</h1>
                                    <FaCircleArrowRight  className='ml-2   'size={iconSize1} />
                                    </span>
                            </div> 
                                    
                         </div> 
                    </div> 
               </div>
    </div>

{/*mobile development ======================= SMALL SCREEN  mobile development========================================*/}

    <div class=" lg:hidden block  ">
            <div className='col-span-2'>
            <div class="relative group w-full h-[20rem] overflow-hidden bg-black  brightness-75 hover:brightness-90 ">
                            <img className="object-cover w-full h-full brightness-70 rounded-lg " src={Bsiti2} />    
                         <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-1/3 group-hover:-inset-y-0">
                                    
                            <div class="absolute w-full bottom-11 flex justify-center text-white cursor-pointer ">
                                    <span className='flex justify-center  p-1 hover:text-violet-600  text-white '>
                                    <h1 id='lineW' className='text-[1.2rem] font-semititle font-semibold mt-[3px] text-white'>Enroll Now</h1>
                                    <FaCircleArrowRight  className='ml-2   'size={iconSize1} />
                                    </span>
                            </div> 
                                    
                         </div> 
                    </div> 
                    
                    
                </div>
            <div class=" col-span-1  ">
                    <div id='bsitMW' className=' mx-2 mt-7 ' >
                        <div className='relative  h-[4rem]  w-[23rem]  bg-gray-300 drop-shadow-lg '>
                            <h1 className=' absolute p-4 -left-4 -top-4 bg-violet-700 font-title text-white text-[1.5rem] lg:text-[2rem]  '>
                            Major in Mobile Development </h1>
                        </div>
                    </div>

                  

                    <div >
                        <div className='p-4 font-para   mt-1 text-justify  text-gray-700 font-medium '>
                            <p className=''>
                                A major in Web Development is a specialized area of study within computer science or information technology
                                programs. It focuses specifically on equipping students with the knowledge and skills to design, develop,
                                and maintain websites and web applications. This includes proficiency in programming languages like HTML, 
                                CSS, JavaScript, and server-side scripting languages such as PHP, Python, or Ruby.
                            </p>
                            <br/>
                        
                            <p>
                                Upon completion of the program, graduates with a major in Web Development can pursue careers in a variety of 
                                industries, including software development firms, digital marketing agencies, e-commerce companies, and technology
                                startups. They may work as front-end developers, back-end developers, full-stack developers, UI/UX designers, or 
                                web administrators, contributing to the innovation and evolution of the digital landscape.
                            </p>
                            <div className=' '>
                                
                                <div className=''>
                                <div class="w-full bottom-11  flex  cursor-pointer py-2  ">
                                    <span className='flex justify-center p-1 hover:text-violet-800 md:hover:text-violet-500  text-violet-800   '> 
                                    <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                                        <h1 id='lineBL' className='text-[1.1rem] font-semititle font-semibold  mt-[5px] hover:text-gray-800 '>
                                            Enroll Now</h1>
                                    </span>
                                </div> 
                                
                            </div>
                            <div className=' '>
                                <div class="w-full bottom-11  flex  cursor-pointer  ">
                                    <span className='flex justify-center p-1 hover:text-violet-800 md:hover:text-violet-500  text-violet-800   '> 
                                    <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                                        <h1 id='lineBL' className='text-[1.1rem] font-semititle font-semibold  mt-[5px] hover:text-gray-800 '>
                                        Course Outline</h1>
                                    </span>
                                </div> 
                                
                            </div>
                            </div>
                        </div>
                    </div>
               </div>
    </div>
{/*mobile development ======================= SMALLS mobile development========================================*/}

            
{/*mobile development =======================mobile development========================================*/}
   </section>
   
</section>
<Bsitcard/>


        
      <aside className="w-full  lg:hidden  block py-6">
                
                  <div>
                    <h1 className='flex items-center justify-center font-title text-[2rem] tracking-wide text-gray-700 md:text-gray-100'>REQUIREMENTS</h1>
                  </div>

              <section className='grid md:grid-cols-3 grid-cols-1 mx-1 p-5 md:text-gray-100'>

                  <div className=' border-gray-400 rounded-lg'>
                    <div className=''>
                        <h1 className='font-semibold font-semititle text-[1.2rem] flex text-gray-700 ml-[1.8rem] md:text-gray-100'><LuFiles className='mr-2 mt-1' />For Incoming Freshmen</h1>
                    <ul className='list-disc p-2 font-semititle font-meduim ml-[3rem] text-[14px]'>
                        <li >Grade 12 Report Card (Form 138)</li>
                        <li>2 Photocopies of PSA Birth Certificate</li>
                        <li>4 Pieces 1x1 ID Picture</li>
                    </ul>
                    </div> <hr className="border-t-2 md:hidden border-gray-300 my-4 w-[22rem] ml-7" />
                  </div>
                 
                  <div className='  border-gray-400 rounded-lg '>
                    <div className=''>
                        <h1 className='font-semibold font-semititle text-[1.2rem] flex text-gray-700 ml-[1.8rem] md:text-gray-100'><LuFiles className='mr-2 mt-1' />For Transferee</h1>
                    <ul className='list-disc p-2 font-semititle font-meduim ml-[3rem] text-[14px]'>
                        <li>Transfer Credentials</li>
                        <li>2 Photocopies of PSA Birth Certificate</li>
                        <li>4 Pieces 1x1 ID Picture</li>
                    </ul>
                    </div><hr className="border-t-2 md:hidden border-gray-300 my-4 w-[22rem] ml-7" />
                  </div>


                  <div className=' border-gray-400 rounded-lg'>
                    <div className=''>
                        <h1 className='font-semibold font-semititle text-[1.2rem] flex text-gray-700 ml-[1.8rem] md:text-gray-100 '><LuFiles className='mr-2 mt-1' />For ALS Graduate</h1>
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
            
           
        </>
    );
};

export default BSIT;
