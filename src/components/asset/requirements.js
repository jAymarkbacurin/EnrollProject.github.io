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
                 <div className="  font-title font-medium md:text-[1.5rem]  ">
                
                       
                 <button className='p-[15px] px-[2rem] cursor-pointer  bg-blue-600 rounded-lg group hover:bg-yellow-600' onClick={() => setIsOpenBA1(!isOpenBA1)}>
                                    <h1  className=' font-title tracking-widest text-[1.2rem] text-white' >Requirements</h1>
                         </button>

                </div>
                <div className={`fixed  z-50 h-full right-0 top-0 3xl:w-[100rem] w-full bg-gray-100   ${isOpenBA1 ? 'translate-x-0 ' : 'translate-x-full'}  ease-in-out duration-300`}>
                    
                    
                    <div className='w-full 2xl:h-[17rem] h-[10rem] '>
                        <img src={Graduate} className='object-cover w-full h-full brightness-50 '/>
                    </div>
                    <div className='text-white '>
                        <SlClose   className='text-[30px]  font-bold cursor-pointer  absolute  right-[2rem] top-[2rem] z-10 'onClick={() => setIsOpenBA1(!isOpenBA1)}  size={iconSize1}/>
                        </div>
                
                 <section className=' my-8'>

                    <aside className="  3xl:mx-[18rem] md:mx-[4rem] grid lg:grid-cols-2 grid-cols-1 gap-[30px] ">
                            
                                <div className='content-start p-2'>

                                <h1 className=' font-title text-[4rem] text-gray-800 border-b-[10px] border-yellow-500 w-[150px] mb-11'>REQUIREMENTS</h1>
                                <p  className=' font-para text-[1.2rem] text-gray-800'>Explore our enrollment requirements! Discover what you need to join our prestigious university. Click here to find out more.</p>
                                </div>

                            <section className='grid md:grid-rows-3 grid-rows-1 mx-1  md:border-l-2 border-gray-800 justify-self-center '>

                                <div className=' border-gray-400 rounded-lg text-gray-800'>
                                <div className=''>
                                    <h1 className='font-semibold font-para text-[1.3rem] flex  ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Incoming Freshmen</h1>
                                <ul className='list-disc p-2 font-para font-meduim ml-[3rem] text-[17px]'>
                                    <li>Grade 12 Report Card (Form 138)</li>
                                    <li>2 Photocopies of PSA Birth Certificate</li>
                                    <li>4 Pieces 1x1 ID Picture</li>
                                </ul>
                                </div> 
                                </div>
                            
                                <div className=' border-gray-400 rounded-lg text-gray-800'>
                                <div className=''>
                                <h1 className='font-semibold font-para text-[1.3rem] flex  ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For Transferee</h1>
                                    <ul className='list-disc p-2 font-para font-meduim ml-[3rem] text-[17px]'>
                                    <li>Transfer Credentials</li>
                                    <li>2 Photocopies of PSA Birth Certificate</li>
                                    <li>4 Pieces 1x1 ID Picture</li>
                                </ul>
                                </div><hr className="border-t-2 md:hidden border-gray-100 my-4 w-[22rem] ml-7" />
                                </div>


                                <div className=' border-gray-400 rounded-lg text-gray-800'>
                                <div className=''>
                                <h1 className='font-semibold font-para text-[1.3rem] flex  ml-[1.8rem]'><LuFiles className='mr-2 mt-1' />For ALS Graduate</h1>
                                <ul className='list-disc p-2 font-para font-meduim ml-[3rem] text-[17px]'>
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