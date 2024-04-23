
import React, { useState, useRef } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import TopicsHMcovered from './HM-card-topics';
import { FaCheck } from "react-icons/fa6";
import students from '../HM-images/bshm-course-images/HM-images.jpg';
import { PiArrowCircleRightThin } from "react-icons/pi";
import Faculty from './Faculty';
import Requirements from '../../../../components/asset/requirements';




const CareerOpportunities = ({ title, opportunities }) => (
    <section>
        <div className="my-[2rem]">
            <div className="sm:px-[4rem] px-[2rem]">
                <h1 className="font-para font-bold text-[1.8rem] text-blue-900">{title}</h1>
                <p className="font-para text-[1.2rem] mt-[1rem]">
                    This field offers a diverse range of career paths, appealing to individuals with various interests and specialties, including:
                </p>
                <div className='flex justify-start w-full'> 
                    <ul className="font-para text-[1rem] sm:ml-11 my-6 text-gray-800 grid sm:grid-cols-3 grid-cols-1  ">
                    {opportunities.map((opportunity, index) => (
                        <li key={index} className=" flex  p-4 border-b-2 border-gray-300  w-full">
                            <FaCheck className="mt-1 text-blue-500 mr-1  " />
                            {opportunity}
                        </li>
                    ))}
                    </ul>
                </div>
               
            </div>
        </div>
    </section>
);

const CourseDescription = ({Description})=>(
    <section className='sm:px-[3rem] pb-[2rem]'>
      <h1 className="font-para text-[1.8rem] font-bold text-blue-900 pl-3">Course Description</h1>
        <div>
               {Description.map((description, index) => (
                 <p key={index} className="text-left font-para text-[1.2rem] text-gray-800 p-4">
                     {description}
                 </p>
               ))} 
       </div>

    </section>


 )

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
        <section className=' mx-[10px]  lg:mx-[3rem]  xl:mx-[4rem] 2xl:mx-[7rem]'> 
            <div className="relative  lg:py-11 text-gray-700  grid  lg:grid-cols-6 grid-cols-1 lg:gap-4 bg-white border-l-[1px]  border-r-[1px]  border-gray-300"> 
                    <div className=' col-start-1 col-span-6  border-t-[1px] border-gray-300 md:p-[4rem] p-[1rem] mt-[2rem]'>
                        <div className='grid lg:grid-cols-2 grid-cols-1 mt-[1rem]'>
                            <div className='w-full h-full'>
                                <img src={students} className='object-cover w-full h-full'/>
                            </div>
                            <div className=' font-para px-[2rem] py-[2rem]   bg-gray-100 '>
                                <h1 className=' font-semibold text-blue-900 sm:text-[2rem] text-[1.7rem]  py-[2rem]'>Bachelor of Science in Hospitality Management</h1>
                                <p className='text-[1.1rem] text-gray-800 pb-[2rem]'> Information Technology course, students delve into the fundamentals of computer systems, programming languages, and network technologies, empowering them with the skills necessary to address contemporary technological challenges and innovate in various industries</p>
                                <div className='grid grid-cols-2 gap-4 font-para pb-[2rem]'>
                                  <div className='p-4  border-t-2 border-b-2 border-gray-400 w-full'>
                                    <h1 className='flex justify-center'>Four years Course </h1>
                                    </div>
                                    <div className='p-4  border-t-2 border-b-2 border-gray-400 w-full'>
                                    <h1 className='flex justify-center'>Two Semesters per Academic year</h1>
                                    </div>
                                </div>
                                <div ref={ref} className='pb-[2rem] cursor-pointer flex'
                                    onClick={() => scrollToElement('id1')}>
                                   <PiArrowCircleRightThin size={iconSize} className='text-yellow-600' />
                                    <h1 id='lineY' className='w-[19rem] font-title tracking-widest text-[1.5rem] mt-[10px] ml-[15px]' >Explore the majors we offer</h1> </div>
                            </div>
                            

                        </div>
                        
                    </div>
                <div id='id1'    className=' col-start-1 col-end-3 ml-[4rem]' > 
                    <div className='sticky hidden lg:block top-[6rem] bg-blue-950 p-4 py-11 rounded-xl  '  >
            
                        <div >
                        <h1 className={`font-title 2xl:text-[2rem] text-[1.5rem] cursor-pointer flex items-center underline decoration-yellow-400 text-white`}  onClick={handleClick}>
                                <BiSolidRightArrow className={`mr-2 ${isOpenweb ? 'text-yellow-400' : ''}`} size={iconSize1} />Hospitality Management
                            </h1>
                       
                            <button className='text-white font-title text-[1rem] tracking-wide border-white border-2 p-2 w-full mt-[2rem] rounded-xl hover:border-yellow-500 hover:text-yellow-500 hover:-translate-y-1 transition ease-in-out delay-150'>
                                <h1>  Apply Now</h1>
                            
                            </button >
                             <Requirements/>
                            
                    
                 
                     
                        </div>
                    </div> 
                </div>  
                <div  className='lg:col-start-3 col-start-1 col-span-5 '>
                    <div className='sticky top-[4rem] lg:hidden  bg-blue-950 p-4 py-6 z-10'>
                        <div className='flex  justify-center'>
                            <h1 className={`font-title sm:text-[2rem] text-[1.3rem] cursor-pointer text-gray-600 flex items-center ${isOpenweb ? 'underline decoration-yellow-400 text-white' : ''}`} onClick={handleClick}>
                                <BiSolidRightArrow className={`mr-2 ${isOpenweb ? 'text-yellow-400' : 'text-blue-950'}`} size={iconSize1} />Web Application
                            </h1>
                           
                        </div>
                    </div> 

                <div    className="lg:p-2 pt-[1rem]   ">
                                    {isOpenweb && (
                                        <CourseDescription
                                        Description={["Web Application Development Essentials is a comprehensive course designed to provide students with the fundamental knowledge and practical skills required to develop dynamic and interactive web applications. The course covers key concepts, tools, and techniques essential for creating modern web applications that are responsive, secure, and user-friendly.",
                                        "Throughout the course, students will learn about web development technologies, including HTML, CSS, JavaScript, and server-side scripting languages such as Python, PHP, or Node.js. They will gain hands-on experience with popular web development frameworks and libraries, such as React.js, Angular, or Vue.js, to build dynamic user interfaces and interactive web experiences."    
                                        ]}
                                        />
                                    )} 
                                     
                        </div>

                        <div >
                  
                     <TopicsHMcovered  />
                        </div>

                 <div className='grid grid-cols-1 mt-[1rem]'>
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
                   
                    </div>
               
                    <div className='bg-gray-100 mt-[2rem] md:mx-[4rem] '>
                       <Faculty />
                    
                    </div>
                    
                   
                </div> 
                
             
               
    
            </div>
        
            </section>
        
    </>

    );
}

export default Course;