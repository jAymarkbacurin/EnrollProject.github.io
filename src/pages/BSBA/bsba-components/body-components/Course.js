
import React, { useState, useRef } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import TopicsHMcovered from './BA-card-topics';
import { FaCheck } from "react-icons/fa6";
import students from '../BAimages/BA.jpg';
import { PiArrowCircleRightThin } from "react-icons/pi";
import Faculty from './faculty';
import Requirements from '../../../../components/asset/requirements';




const CareerOpportunities = ({ title, opportunities }) => (
    <section>
        <div className="my-[2rem]">
            <div className="sm:px-[4rem] px-[2rem]">
                <h1 className="font-para font-bold text-[1.8rem] text-blue-900">{title}</h1>
                <p className="font-para text-[1.2rem] mt-[1rem] text-gray-950">
                    This field offers a diverse range of career paths, appealing to individuals with various interests and specialties, including:
                </p>
                <div className='flex justify-start w-full'> 
                    <ul className="font-para text-[1.1rem] sm:ml-11 my-6 text-gray-800 grid sm:grid-cols-3 grid-cols-1 text-gray-950 ">
                    {opportunities.map((opportunity, index) => (
                        <li key={index} className=" flex  p-4 border-b-[1px] border-gray-400  w-full">
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


 );
 const BenefitsHM = ({title,Benefits}) =>(  
    <>  
       <h1 className='font-para text-[1.2rem] mt-[2rem] text-gray-950 '>{title}</h1>
       <section >
           <ul className='grid lg:grid-cols-2 grid-cols-1  my-[2rem] text-gray-950'>
               {Benefits.map((Benefits, index)=> (
                   <li key={index} className=' flex   w-full'>
                       <FaCheck className="mt-1 text-blue-500 mr-1  " />
                       {Benefits}

                   </li>
               ))}
           </ul>
      

       </section>
       </>
   );


const  Course= () => {
const [isOpenweb, setIsOpenweb] = useState(false);
const [isOpenmobile, setIsOpenmobile] = useState(true);
const ref = useRef(null);
const iconSize1 = 20;
const iconSize = 55;


const handleClick = () => {
    setIsOpenweb(!isOpenweb);
    setIsOpenmobile(true);
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
        <section className='mx-[10px]  lg:mx-[2rem]  xl:mx-[3rem] 2xl:mx-[5rem]'> 
            <div className="relative  lg:py-11 text-gray-700  grid  lg:grid-cols-6 grid-cols-1  bg-white border-l-[1px]  border-r-[1px]  border-gray-300"> 
            <div className=' col-start-1 col-span-6  border-t-[1px]  border-gray-300  md:p-[4rem] p-[1rem] mt-[2rem]'>
                        <div className='grid lg:grid-cols-2 grid-cols-1 mt-[1rem]'>
                            <div className='w-full h-full'>
                                <img src={students} className='object-cover w-full h-full'/>
                            </div>
                            <div className=' font-para px-[2rem] py-[2rem]   bg-gray-100 '>
                                <h1 className=' font-semibold text-blue-900 sm:text-[2rem] text-[1.7rem]  py-[2rem]'>Bachelor of Science in Information Technology</h1>
                                <p className='text-[1.1rem] text-gray-950 pb-[2rem]'> Information Technology course, students delve into the fundamentals of computer systems, programming languages, and network technologies, empowering them with the skills necessary to address contemporary technological challenges and innovate in various industries</p>
                                <div className='grid grid-cols-2 gap-4 font-para pb-[2rem] text-gray-950'>
                                  <div className='p-4  border-t-2 border-b-2 border-gray-400 w-full'>
                                    <h1 className='flex justify-center '>Four years Course </h1>
                                    </div>
                                    <div className='p-4  border-t-2 border-b-2 border-gray-400 w-full'>
                                    <h1 className='flex justify-center'>Two Semesters per Academic year</h1>
                                    </div>
                                </div>
                                <div  className='pb-[2rem] cursor-pointer flex'
                                    onClick={() => scrollToElement('id1')}>
                                   <PiArrowCircleRightThin size={iconSize} className='text-yellow-600' />
                                    <h1 id='lineY' className='w-[19rem] font-title tracking-widest text-[1.5rem] mt-[10px] ml-[15px]' >Explore the majors we offer</h1> </div>
                            </div>
                            

                        </div>
                        <div className='border-b-[8px] border-blue-800 '>
                             <div className='2xl:mx-[7rem] lg:mx-[5rem] my-[4rem] '>
                            <div className='font-para text-[1.2rem] text-gray-950'>
                                <p className='text-justify'>Welcome to the <span className='text-yellow-600'> Bachelor of Science in Information Technology</span> program at <span className='text-yellow-600'>Data Center!</span> Our program offers a gateway to a world of endless possibilities in the ever-evolving realm of technology. In today's digital age, the demand for skilled IT professionals has never been higher, and our comprehensive curriculum is designed to equip students with the knowledge, skills, and practical experience needed to excel in this dynamic field.Our program provides a solid foundation to pursue diverse career paths in the exciting world of technology.</p>
                                <div>
                                    <BenefitsHM
                                    title="Choosing to pursue a Bachelor of Science in Information Technology (IT) can lead to a wide range of benefits. Here are some of the key advantages:"
                                    Benefits={[
                                        "High demand for IT professionals across industries",   
                                        "Global employment opportunities and collaboration.",                                 
                                        "Diverse career paths including software development, network administration, cybersecurity, and more",
                                        "Development of problem-solving skills through resolving complex technical issues",
                                        "Job security due to society's increasing reliance on technology",
                                        "Contribution to societal advancement by improving efficiency and connectivity",
                                        "Potential for financial stability and intellectual growth",
                                    ]}
                                    />
                                </div>
                            </div>
                        </div>
                        </div>
                       
                        
                    </div>
                <div id='id1'   className=' col-start-1 col-end-3 ml-[4rem]' > 
                    <div className='sticky hidden lg:block top-[6rem] bg-blue-900 p-4 py-11 rounded-xl  '  >
                    <div className='3xl:ml-[4rem] ml-[2rem]' >
                        <h1 className={`font-title 3xl:text-[2.5rem] 2xl:text-[2.3rem] text-[1.5rem] cursor-pointer flex items-center underline decoration-yellow-400 text-white`}  onClick={handleClick}>
                                <BiSolidRightArrow className={`mr-2  text-yellow-400`} size={iconSize1} />Business Administration
                            </h1>

                        </div>
                    </div> 
                </div>  
                <div  className='lg:col-start-3 col-start-1 col-span-5 '>
                    <div className='sticky top-[4rem] lg:hidden  bg-blue-900  p-4 py-6 z-10'>
                        <div className='flex  justify-center'>
                        <h1 className={`font-title 2xl:text-[2.5rem] text-[1.5rem] cursor-pointer flex items-center underline decoration-yellow-400 text-white`}  onClick={handleClick}>
                            <BiSolidRightArrow className={`mr-2  text-yellow-400`} size={iconSize1} />Business Administration
                            </h1>
                           
                        </div>
                    </div> 

                <div  ref={ref}  className="lg:p-2 pt-[1rem] text-gray-950  ">
                                
                                        <CourseDescription
                                        Description={["Web Application Development Essentials is a comprehensive course designed to provide students with the fundamental knowledge and practical skills required to develop dynamic and interactive web applications. The course covers key concepts, tools, and techniques essential for creating modern web applications that are responsive, secure, and user-friendly.",
                                        "Throughout the course, students will learn about web development technologies, including HTML, CSS, JavaScript, and server-side scripting languages such as Python, PHP, or Node.js. They will gain hands-on experience with popular web development frameworks and libraries, such as React.js, Angular, or Vue.js, to build dynamic user interfaces and interactive web experiences."    
                                        ]}
                                        />
                                   
                                     
                        </div>

                        <div >
                  
                     <TopicsHMcovered  />
                        </div>

                 <div className='grid grid-cols-1 mt-[1rem] '>
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
               
                    <div className='bg-gray-300 mt-[2rem] md:mx-[2rem] '>
                       <Faculty />
                    
                    </div>
                    
                   
                </div> 
                
             
               
    
            </div>
            <section className='col-start-1 col-span-6 md:p-[4rem] p-[1rem] '>
                <div className=' border-t-[8px] border-blue-800 w-full'>
                    <div className='p-[4rem]  my-[2rem] '>
                        <div >
                              <h1 className='font-para text-[2rem] flex justify-center text-blue-900 font-semibold'>Ready to take the next step?</h1>
                              <p className='mx-auto font-para text-[1.3rem] text-center py-[2rem] max-w-[70%]'>Join us as we explore the boundless opportunities and benefits that await you in the Bachelor of Science in Information Technology program at Data Center.</p>
                       </div>
                      <div className='flex justify-center gap-4'> 
                            <Requirements/>
                         <button className='p-[15px] px-[2rem] cursor-pointer  border-2  border-yellow-600 rounded-lg hover:border-blue-600 group'>
                                    <h1  className=' font-title tracking-widest text-[1.2rem]  text-yellow-600 group-hover:text-blue-600' >ENROLL now</h1>
                         </button>
                     
                      </div>    
                      

                    </div>
                    <div>
                     
                    </div>
            
                </div>
                
            </section>
        
            </section>
        
    </>

    );
}

export default Course;