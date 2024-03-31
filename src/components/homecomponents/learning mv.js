import React from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import ImageLogo from './image/finallogo.png';
import Olive from './image/OLIVE.png';


const Learning = () => {
    return (  

<div className='lg:mt-11 mt-3 '>
        <section className='grid lg:my-[5rem]  lg:grid-cols-1   xl:grid-cols-2 mx-[1rem] md:mx-[3rem]  xl:mx-[2rem] 2xl:mx-[8rem] justify-self-center ' >
            <div className='p-4 '>
                    <h1 className='md:text-[3rem] text-[3rem]  ml-8 font-title text-blue-900'>
                            Future-Oriented Education
                    </h1>
                  <section className='text-[1.3rem] p-6 md:ml-4 md:text-[1.6rem] font-para md:text-left text-gray-600'> 
                        <p className='md:mb-4 mb-1'>  At DCCP, we're dedicated to fostering a community of learners,
                            thinkers, and leaders. Our commitment to academic excellence, innovation, 
                            and inclusivity sets us apart as a hub for knowledge and discovery.</p>
                    
                        <p >  Join us as we strive to create a brighter future through education, innovation,
                            and collaboration. 
                            <span className='text-blue-900  font-semibold ml-1'> 
                            Applications are Ongoing,
                            </span>
                                and we can't wait to welcome you to
                            <span className='text-blue-900  font-semibold ml-1'> 
                                Data Center College.
                            </span>
                        </p>
                  </section> 
            </div>
            <div className='bg-gradient-to-r cursor-pointer from-blue-800 from-10% via-blue-900 via-30% to-blue-950 to-90% 
            rounded-lg w-full flex justify-center mx-1'>
                <div className='grid grid-rows-2 'style={{ height: '500px' }}>
                    <div className='p-9 '>
                        <img 
                           src={ImageLogo} 
                            width={240} 
                            height={240}
                            alt="Final Logo"
                            className='mr-1'
                            />
                    </div> 
                    <div className='flex justify-center '>
                       <button className='align-center  transform transition-all hover:scale-110 hover:text-blue-800 '>
                                <NavLink to='/academics' className=' border-4 p-5 border-white text-white
                            rounded-full font-bold font-semititle  hover:text-blue-800 hover:bg-white' >
                                    Start your DCCP Journey
                                </NavLink>
                        </button>
                    </div>
            </div>
            </div>
        </section>


{/* mv */}
  <div className=' w-full mt-9 flex justify-center items-center' style={{backgroundImage: `url(${Olive})`}}>
 
        <section className=' grid my-[5rem] lg:my-[10rem] grid-cols-1  lg:grid-cols-2  xl:grid-cols-3 mx-9 2xl:mx-[11rem] gap-4 p-3 '>
            {/* First Row */}
            <div className=' md:p-11 p-9  font-para border-[6px] border-solid border-blue-900 
             bg-blue-900 overflow-hidden transform transition-all hover:scale-105 text-white
             hover:text-violet-800 hover:border-violet-800 shadow-3xl hover:rounded-3xl hover:bg-white'>
                <h1 className=' md:text-[1.6rem] text-[1rem]  mb-4 font-title'>
                    Undergraduate Programmes</h1>
                <ul className='font-medium text-[15px]  md:text-[1.1rem]'>
                    <li className='flex hover:text-blue-950'>
                        <MdKeyboardDoubleArrowRight  /> 
                        <NavLink>Undergraduate Degrees</NavLink>
                    </li>
                    <li className=' hover:text-violet-800 text-[1rem] mt-3 ml-5 font-normal'>
                       
                        <NavLink>Bachelor of Science in Information Technology</NavLink> 
                    </li>
                    <li className=' hover:text-violet-800 text-[1rem] mt-3 ml-5 font-normal '> 

                        <NavLink>Bachelor of Science in Hotel Management</NavLink>
                    </li>
                    <li className=' hover:text-violet-800 text-[1rem] mt-3 ml-5 font-normal '> 

                        <NavLink>Bachelor of Science in Business Administration</NavLink>
                    </li>
                </ul>
            </div>

            {/* Second Row */}
           
            <div className=' p-9  border-[6px] font-para border-solid text-white
              border-blue-900  bg-blue-900 hover:rounded-3xl shadow-3xl overflow-hidden
               transform transition-all hover:scale-105 hover:text-yellow-500 hover:border-yellow-400 hover:bg-white'>
                <h1 className='md:text-[1.7rem]  font-title '>Our Mission</h1>
                <p className='mt-1 ml-4 text-[14px] md:text-[1rem]  hover:text-yellow-500 text-justify'> 
                Data Center College of the Philippines envisions itself as one of the 
                    leaders of the tertiary education in the education in the country 
                    consistently producing graduates who are able participate actively 
                    in local, regional and national development and who will be 
                    globally competitive to find employment here and abroad.</p>
            </div>
            
             {/* Third Row */}
            <div className='hover:bg-white text-white p-9 font-para border-[6px] border-solid border-blue-900  bg-blue-900
             hover:rounded-3xl overflow-hidden transform transition-all hover:scale-105 hover:text-blue-800
              hover:border-blue-800 shadow-3xl'>
                <h1 className='md:text-[1.7rem] font-title '>Our Vision</h1>
                <p className='mt-1 ml-4 text-[14px] md:text-[1rem]  hover:text-blue-800 text-justify'>
                     Pursuant to its vision, Data Center College of the Philippines is committed
                    to nurture the physical, socio-cultural, and moral potentials of its students
                    for their total development as human beings, and to provide them with relevant 
                    and quality education in their fields of specialization to enable them to pursue
                    competently their chosen professions with honor and dignity.</p>
            </div>
        </section>
 
    </div>
     
    </div>
    );
}
 
export default Learning;
