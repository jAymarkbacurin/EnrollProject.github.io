
import React, { useState, useRef } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import TopicsHMcovered from './HM-card-topics';
import { FaCheck } from "react-icons/fa6";
import students from '../HM-images/bshm-course-images/HM-images.jpg';
import { PiArrowCircleRightThin } from "react-icons/pi";
import Faculty from './Faculty';




const CareerOpportunities = ({ title, opportunities }) => (
    <section>
        <div className="my-4">
            <div className="lg:px-2 px-4">
                <h1 className="font-para font-bold text-[1.8rem] text-blue-900">{title}</h1>
                <p className="font-para text-[1.2rem] mt-[1rem]">
                    This field offers a diverse range of career paths, appealing to individuals with various interests and specialties, including:
                </p>
                <div className='flex justify-center'> 
                    <ul className="font-para text-[1rem] ml-11 my-6 text-gray-800 ">
                    {opportunities.map((opportunity, index) => (
                        <li key={index} className=" flex  p-4 border-b-2 border-gray-300 lg:w-[30rem]">
                            <FaCheck className="mt-1 text-blue-500 mr-1" />
                            {opportunity}
                        </li>
                    ))}
                    </ul>
                </div>
               
            </div>
        </div>
    </section>
);

const  Course= () => {
const [isOpenweb, setIsOpenweb] = useState(false);
const [isOpenmobile, setIsOpenmobile] = useState(true);
const ref = useRef(null);
const iconSize1 = 20;
const iconSize = 55;


const handleClick = () => {
    setIsOpenweb(!isOpenweb);
    setIsOpenmobile(false);
    ref.current?.scrollIntoView({behavior: 'smooth'});
};
const handleClickMobile = () => {
    setIsOpenmobile(!isOpenmobile);
    setIsOpenweb(false);
    ref.current?.scrollIntoView({behavior: 'smooth'});
};



const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};  

    return ( 
        <>
        <section className='3xl:mx-[14rem] 2xl:mx-[10rem] xl:mt-[2rem]'> 
        <div className="relative  lg:py-11 text-gray-700  grid  lg:grid-cols-5 grid-cols-1 lg:gap-4 bg-white"> 
                <div className=' col-start-1 col-end-6 mb-[3rem]'>
                    <div className='grid lg:grid-cols-2 grid-cols-1 mt-[1rem]'>
                        <div className='w-full h-full'>
                            <img src={students} className='object-cover w-full h-full'/>
                        </div>
                        <div className=' font-para px-[2rem] py-[2rem]   bg-gray-100 '>
                            <h1 className=' font-semibold text-blue-900 text-[2rem] py-[2rem]'>Bachelor of Science in Hospitality Management</h1>
                            <p className='text-[1.1rem] text-gray-800 pb-[2rem]'> Information Technology course, students delve into the fundamentals of computer systems, programming languages, and network technologies, empowering them with the skills necessary to address contemporary technological challenges and innovate in various industries</p>
                            <div className='grid grid-cols-2 gap-4 font-para pb-[2rem]'>
                              <div className='p-4  border-t-2 border-b-2 border-gray-400 w-full'>
                                <h1 className='flex justify-center'>Four years Course </h1>
                                </div>
                                <div className='p-4  border-t-2 border-b-2 border-gray-400 w-full'>
                                <h1 className='flex justify-center'>Two Semesters per Academic year</h1>
                                </div>
                            </div>
                            <div className='pb-[2rem] cursor-pointer flex'
                                onClick={() => scrollToElement('id1')}>
                               <PiArrowCircleRightThin size={iconSize} className='text-yellow-600' />
                                <h1 id='lineY' className='w-[19rem] font-title tracking-widest text-[1.5rem] mt-[10px] ml-[15px]' >Explore the majors we offer</h1> </div>
                        </div>
                        

                    </div>
                    
                </div>
            <div  className=' col-start-1 col-end-2 ' > 
                <div className='sticky hidden lg:block top-[2rem] bg-blue-950 p-4 py-11 rounded-xl'  >
        
                    <div >
                    <h1 className={`font-title text-[2rem] cursor-pointer  flex items-center  ${isOpenweb ? 'underline decoration-yellow-400 text-white' : 'text-white'}`} onClick={handleClick}>
                            <BiSolidRightArrow className={`mr-2 ${isOpenweb ? 'text-yellow-400' : 'text-yellow-400'}`} size={iconSize1} />Hospitality Management
                        </h1>
                     
                 
                    </div>
                </div> 
            </div>  
            <div   className='col-start-2 col-span-4 '>
             
            <div id='id1'  ref={ref}  className="lg:p-2 pt-[1rem] ">
                        <h1 className="font-para text-[1.8rem] font-bold text-blue-900">Course Description</h1>
                        <div className="flex justify-start p-4">
                            <p className="text-left font-para text-[1.2rem] text-gray-800">
                             
                            Web Application course serves as an introduction to the fundamentals of web application development, covering essential concepts, technologies, and best practices. Students will gain a comprehensive understanding of the principles behind developing dynamic and interactive web applications.
                           
                            </p>
                        </div>
                    </div>

             <div className='grid xl:grid-cols-2 grid-cols-1 mt-[1rem]'>
                <div>
                    
                        <CareerOpportunities
                            title="Web Developer Career Opportunities"
                            opportunities={[
                                "Front-end Developer",
                                "Back-end Developer",
                                "Freelancing and Entrepreneurship",
                                "User Interface (UI) and User Experience (UX) Design",
                                "Internet of Things (IoT) Development",
                                "Project Management and Product Ownership"
                               
                            ]}
                        />
                
                 
                </div>
                <div >
                        <TopicsHMcovered/>
                      
                    </div>
                </div>
                <div className='bg-gray-100 mt-[2rem]'>
                   <Faculty />
                
                </div>
               
            </div> 
         
           

        </div>
    
        </section>
        <section>

            
        </section>

    </>

    );
}

export default Course;