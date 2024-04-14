import React from 'react';
import BA from '../BAimages/BA.jpg';
import '../stylee.css';

const CardBsba = () => {
    return ( 
        <div className="bg-gray-900">
            <div className='mx-[1rem] lg:mx-[3rem] xl:mx-[9rem] 3xl:mx-[17rem]  '>
                <div className='lg:my-11 my-5'>
             
                <h1 className='font-title  text-[2.5rem] md:text-[3rem] text-gray-100  py-4'>Department Mission and Vision</h1>
                <hr className="border-t-[4px] border-gray-200 mt-4 w-full  " />
                
                <section className="grid md:grid-cols-2 grid-cols-1 gap-6 py-4 ">

            <div id='container' className='bg-gray-800 md:my-11 my-2 relative overflow-hidden  lg:mx-4'>
                <div class='image'>
                    <img className="object-cover w-full h-full   " src={BA} alt="Bsit1" />
                </div>
                <div className=' p-4 my-5'>
                    <div class='lineh1 w-[10rem]'>
                        <h1 className='font-title text-[2rem] font-medium text-blue-600'>Mission</h1>
                    </div>
                    
                    <p className='text-white font-header px-2 mt-4 text-justify'>
                        To empower students with the knowledge, skills, and creativity to excel in the rapidly evolving fields of web and mobile development. Through innovative curriculum, hands-on experiences, and collaborative learning, we strive to cultivate a community of forward-thinking developers poised to make meaningful contributions to the digital landscape.
                    </p>
                </div>
            </div>

            <div id='container' className='bg-gray-800  md:my-11 my-2 relative overflow-hidden lg:mx-4 '>
                <div class='image'>
                    <img className="object-cover w-full h-full   " src={BA} alt="Bsit1" />
                </div>
                <div className=' p-4 my-5'>
                    <div class='lineh1 w-[10rem]'>
                        <h1 className='font-title text-[2rem] font-medium text-blue-600'>Vission</h1>
                    </div>
                    
                    <p className='text-white font-header px-2 mt-4 text-justify'>
                        To empower students with the knowledge, skills, and creativity to excel in the rapidly evolving fields of web and mobile development. Through innovative curriculum, hands-on experiences, and collaborative learning, we strive to cultivate a community of forward-thinking developers poised to make meaningful contributions to the digital landscape.
                    </p>
                </div>
            </div>

            </section>
        </div>
        </div>
        </div>
     );
}
 
export default CardBsba;
