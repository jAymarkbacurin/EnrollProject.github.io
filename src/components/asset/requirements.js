import React, { useState, useEffect } from 'react';
import { SlClose } from "react-icons/sl";
import Graduate from '../image/graduate.jpg';
import { LuFiles } from "react-icons/lu";
import { FiArrowLeft } from "react-icons/fi";


const Requirements = () => {
    const [isOpenBA1, setIsOpenBA1] = useState(false);

    const iconSize1 = 34;
    return ( 
        <>
       <div className="flex justify-start lg:pt-2 py-4 font-title font-medium md:text-[1.5rem] ml-[2.5rem] ">
                
                        <div className=" cursor-pointer px-[1rem]  flex  bg-yellow-500 hover:-translate-y-1 transition ease-in-out delay-150" onClick={() => setIsOpenBA1(!isOpenBA1)}>
                            <FiArrowLeft className='mt-[15px] text-white'/> 
                            <h1 className='text-white text-[1.3rem] p-3'>requirements</h1>
                           
                        </div>
                      
                    
                </div>
                <div className={`fixed  z-50 h-full right-0 top-0 2xl:w-[100rem] w-full bg-gray-100   ${isOpenBA1 ? 'translate-x-0 ' : 'translate-x-full'}  ease-in-out duration-300`}>
                    
                    
                    <div className='w-full h-[20rem]'>
                        <img src={Graduate} className='object-cover w-full h-full brightness-50'/>
                    </div>
                    <div className='text-white '>
                        <SlClose   className='text-[30px]  font-bold cursor-pointer  absolute  right-[2rem] top-[3rem] z-10'onClick={() => setIsOpenBA1(!isOpenBA1)}  size={iconSize1}/>
                        </div>
                
                 <section className=' my-12'>

                    <aside className="  3xl:mx-[18rem] md:mx-[4rem] grid lg:grid-cols-2 grid-cols-1 gap-[30px] ">
                            
                                <div className='content-start p-2'>

                                <h1 className=' font-title text-[4rem] text-gray-800 border-b-[10px] border-yellow-500 w-[150px] mb-11'>REQUIREMENTS</h1>
                                <p  className=' font-para text-[1.2rem] text-gray-800'>Explore our enrollment requirements! Discover what you need to join our prestigious university. Click here to find out more.</p>
                                </div>

                            <section className='grid md:grid-rows-3 grid-rows-1 mx-1  md:border-l-2 border-gray-800 justify-self-center '>

                                <div className=' border-gray-400 rounded-lg text-gray-800'>
                                <div className=''>
                                    <h1 className='font-semibold font-para text-[1.3rem] flex  ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Incoming Freshmen</h1>
                                <ul className='list-disc p-2 font-para font-meduim ml-[3rem] text-[20px]'>
                                    <li>Grade 12 Report Card (Form 138)</li>
                                    <li>2 Photocopies of PSA Birth Certificate</li>
                                    <li>4 Pieces 1x1 ID Picture</li>
                                </ul>
                                </div> 
                                </div>
                            
                                <div className=' border-gray-400 rounded-lg text-gray-800'>
                                <div className=''>
                                <h1 className='font-semibold font-para text-[1.3rem] flex  ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Transferee</h1>
                                    <ul className='list-disc p-2 font-para font-meduim ml-[3rem] text-[20px]'>
                                    <li>Transfer Credentials</li>
                                    <li>2 Photocopies of PSA Birth Certificate</li>
                                    <li>4 Pieces 1x1 ID Picture</li>
                                </ul>
                                </div><hr className="border-t-2 md:hidden border-gray-100 my-4 w-[22rem] ml-7" />
                                </div>


                                <div className=' border-gray-400 rounded-lg text-gray-800'>
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
                

        </>
     );
}
 
export default Requirements;