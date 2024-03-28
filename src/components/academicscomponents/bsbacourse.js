import React, { useState } from 'react';
import './stylee.css';
import BSBAbg from './image/BSBAbg.jpg';
import Bsba1 from './image/bsba1.jpg';
import ImageLogo from './image/finallogo.png';
import { LuFiles } from 'react-icons/lu';
import { FaCircleArrowRight } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";

const BSBA = () => {
    const [isOpenBA, setIsOpenBA] = useState(false);
    const [isOpenBA1, setIsOpenBA1] = useState(false);

    const toggleDropdownBA = () => {
        setIsOpenBA(!isOpenBA);
    };
    const toggleDropdownBA1 = () => {
        setIsOpenBA1(!isOpenBA1);
    };
    const expandedContentHeight = isOpenBA ? 'auto' : '0';

 
    const contentMarginTopBA = {
        marginTop: isOpenBA ? '4rem' : '0',
        transition: 'margin-top 0.3s ease-in-out',
    };
    const iconSize = 20;
    const iconSize1 = 35 ;

    const boxSizeBA = isOpenBA ? 'md:w-[30rem]  md:h-[18rem] h-[19rem]' : 'w-[18rem] h-[5rem] md:h-[4rem]'; 
    const boxSizeBA1 = isOpenBA1 ? 'md:w-[30rem]  md:h-[18rem] h-[19rem]' : 'w-[18rem] h-[5rem] md:h-[4rem]'; 

    return (
        <>
            <section>
                <div className="relative w-full md:h-[35rem]">
                    <img src={BSBAbg} alt="Final Logo" className="w-full h-full object-contain md:object-cover brightness-100" />
                    <div className="absolute bottom-0 left-[14rem] text-white p-4"></div>
                </div>
            </section>

<div className='bg-gray-200'>
      

 <section  className="flex md:mx-[3rem] xl:mx-[9rem]  3xl:mx-[15rem]">
       
        <section className="flex-grow flex-col p-1 my-11 py-5 mx-2 bg-white rounded-lg ">
            <div className='mx-4'> 
            <div class="relative group w-full lg:h-[28rem] overflow-hidden bg-black  ">
                      <img class="object-cover w-full h-full brightness-50 rounded-lg " src={Bsba1} />    
                      <div class="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                      <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-1/3 group-hover:-inset-y-0">
                          <div class="absolute w-full flex place-content-center  mt-10">
                              <p class="font-title  text-base text-center shadow-2xl text-white text-[49px]">
                              BS in Business Administration</p>
                          </div>
                          <div class="absolute w-full bottom-11 flex justify-center text-white cursor-pointer ">
                            <span className='flex justify-center  p-1 hover:text-sky-300  text-white '>
                              <h1 id='lineW' className='sm:text-[1.1rem] font-semititle font-semibold mt-[3px] text-white'>Enroll Now</h1>
                              <FaCircleArrowRight  className='ml-2   'size={iconSize1} />
                            </span>
                          </div> 
                         
                      </div> 
                     </div>
                <div className='lg:mx-11  mx-2 mt-3' >
                    <div className='relative lg:h-[5rem] h-[4rem]  w-[24rem]  lg:w-[32rem] bg-gray-300 drop-shadow-lg '>
                        <h1 className=' absolute p-4 -left-4 -top-4 bg-sky-300 font-title text-white text-[1.5rem] lg:text-[2rem] '>
                        Major in Financial Management </h1>
                     </div>
                </div>

                <div >
                    <div className=' p-4 font-para mx-5 md:mx-11 mt-1 '>
                         <p>
                            A major in Financial Management is a specialized area of study within a Bachelor of Science in
                            Business Administration (BSBA) or a related program. It focuses specifically on understanding
                            and managing the financial aspects of businesses and organizations. This includes topics such 
                            as financial analysis, investment management, risk assessment, corporate finance, and financial
                            planning.
                        </p>
                        <br/>
                        <p>
                            Students who major in Financial Management learn how to make strategic financial decisions,
                            analyze financial data, manage investments, and assess risks to help businesses achieve their
                            financial goals. They study concepts related to budgeting, financial markets, capital structure, 
                            and financial instruments.
                        </p>
                        <br/>
                        <p>
                            Upon completion of the program, graduates with a major in Financial Management can pursue careers 
                            in various areas such as corporate finance, investment banking, financial planning, risk management,
                            and consulting. They may work for corporations, financial institutions, investment firms, government 
                            agencies, or start their own financial advisory businesses.
                        </p>
                        <div className=' hover:text-sky-300 md:mt-8'>
                            <div class=" w-full bottom-11 flex  text-gray-800 cursor-pointer mt-3 ">
                                <span className='flex justify-center  p-1 hover:text-sky-300  text-gray-700  '> 
                                <BsArrowRightCircleFill  className='mr-3  'size={iconSize1} />
                                    <h1 id='lineBL' className='text-[1.1rem] font-semititle font-semibold  mt-[5px] text-gray-800 hover:text-sky-300 '>
                                        Enroll Now</h1>
                                </span>
                            </div> 
                         </div>
                    </div>
                </div>
                <div className='ml-5'>
                        <div className=' p-2 md:px-9   md:mt-3 font-semititle   md:[1rem] '>
                            <div className={`bg-white p-4 border-[1px] rounded-lg border-gray-300 transition-all duration-300 ease-in-out ${boxSizeBA}`}>
                                    <h1  className='flex cursor-pointer font-semibold hover:text-sky-300 text-gray-700' onClick={toggleDropdownBA}>
                                    <MdLibraryBooks className='mt-1 mr-1'/> Mission
                                    </h1> 
                                    {isOpenBA && (
                                        <div className="absolute ml-1  py-2 ">
                                            <a  className=" font-para flex text-gray-800 md:w-[28rem]  w-[23rem] text-[15px] text-justify">
                                            Our mission is to provide students with a comprehensive education in Business Finance within the
                                            framework of a Bachelor of Science in Business Administration program. We aim to equip students
                                            with the knowledge, skills, and ethical values necessary to excel in the dynamic field of finance.
                                            Through rigorous academic instruction, practical experience, and engagement with industry professionals,
                                            we prepare our graduates to become competent financial leaders capable of making informed decisions in 
                                            a global business environment.</a>
                                        </div>
                                    )}
                            </div>
                            
                        </div>
                        <div className=' p-2 md:px-9   md:mt-1 font-semititle   md:[1rem] '>
                            <div className={`bg-white p-4 border-[1px] rounded-lg border-gray-300 transition-all duration-300 ease-in-out ${boxSizeBA1}`}>
                                    <h1  className='flex cursor-pointer font-semibold hover:text-sky-300 text-gray-700' onClick={toggleDropdownBA1}>
                                    <MdLibraryBooks className='mt-1 mr-1'/> Vission
                                    </h1> 
                                    {isOpenBA1 && (
                                        <div className="absolute ml-1  py-2 ">
                                            <a  className=" font-para flex text-gray-800 md:w-[28rem]  w-[23rem] text-[15px] text-justify">
                                            Our mission is to provide students with a comprehensive education in Business Finance within the
                                            framework of a Bachelor of Science in Business Administration program. We aim to equip students
                                            with the knowledge, skills, and ethical values necessary to excel in the dynamic field of finance.
                                            Through rigorous academic instruction, practical experience, and engagement with industry professionals,
                                            we prepare our graduates to become competent financial leaders capable of making informed decisions in 
                                            a global business environment.</a>
                                        </div>
                                    )}
                            </div>
                            
                        </div>
                </div>
                
              
            </div>

        </section>



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
            
           
        </>
    );
};

export default BSBA;
