import Header  from "../../components/asset/header";
import Footer from "../../components/asset/footer";
import logo  from "../academics/Academics-images/finallogo.png";
import mission from "./about-images/graduate.jpg";
import sophia from './about-images/faculty-images/sophia-faculty.jpg';
import jake from './about-images/faculty-images/jake-faculty.jpg';
import soren from './about-images/faculty-images/soren-faculty.jpg';
import zed from './about-images/faculty-images/zed-faculty.jpg';
import lukkanit from './about-images/faculty-images/lukkanit-faculty.jpg';
import angelica from './about-images/faculty-images/angelica-faculty.jpg';
import paul from './about-images/faculty-images/paul-faculty.jpg';
import jelmar from './about-images/faculty-images/jelmar-faculty.jpg';
import rose from './about-images/faculty-images/rose-faculty.jpg';
import { NavLink } from "react-router-dom";



const About = () => {
    return ( 
        < div className="bg-gray-50">
        <Header />
        <section className=' mx-[10px]  lg:mx-[3rem]  xl:mx-[4rem] 2xl:mx-[7rem]'> 
            <div className="relative  lg:py-11 text-gray-700  grid  lg:grid-cols-6 grid-cols-1   border-l-[1px]  border-r-[1px]  border-gray-300"> 
            <section className="col-start-1 col-span-6 border-t-[1px] border-gray-300  ">
              
            <div className=" relative w-full lg:h-[45rem]  h-[40rem]  mx-auto  2xl:px-[12rem] xl:px-[10rem] lg:px-[6rem] px-[1rem]  pt-[4rem]">
                      <img
                        src={mission} 
                        alt="Final Logo"
                        className=" w-full h-full object-cover "
                      />  
                     
                      </div>
            </section>
                    <div className=' col-start-1 col-span-6   border-b-[1px]  border-gray-300 md:p-[2rem] p-[1rem] mt-[2rem]'>
                      <div className="grid md:grid-cols-5 ">
                        <div className="col-start-1 ">
                        <ul className="font-para text-[1.5rem] xl:p-[2rem] p-[1rem] sm:block hidden">
                          <NavLink><li id="lineY" >HISTORY</li></NavLink>
                          <NavLink><li id="lineY">MISSION & VISSION</li></NavLink>
                          <NavLink><li id="lineY">LEADERS</li></NavLink>
                        </ul>
                        </div>
                        <div className="col-start-2 lg:col-span-3 col-span-4  pb-[2rem]  xl:px-[4rem] ">
                          <h1 className="font-title 2xl:text-[6rem] text-[4rem] ">WELCOME TO DATA CENTER</h1>
                          <p className="font-para text-[1.2rem]">Founded in 1960 by visionary educators who sought to create an institution dedicated to academic excellence and social progress, Unity University has a rich history rooted in innovation and service. Originally established as a small college with a handful of faculty members and students, Unity University quickly gained recognition for its rigorous academic programs and commitment to nurturing intellectual curiosity and critical thinking skills.
                            <br/>   <br/>
                            In its early years, Unity University faced numerous challenges, from limited resources to societal barriers, yet it persevered with determination and resilience. Through the dedication and hard work of its founders, faculty, and students, the university gradually expanded its offerings and infrastructure, laying the foundation for future growth and success.
                            <br/>   <br/>
                            Throughout the decades, Unity University has been a trailblazer in higher education, pioneering new approaches to teaching, research, and community engagement. From launching innovative interdisciplinary programs to fostering partnerships with local industries and organizations, the university has continuously evolved to meet the changing needs of society and prepare students for success in a rapidly changing world.
                            <br/>   <br/>
                            Today, Unity University stands as a beacon of hope and opportunity, inspiring generations of students to dream big, pursue their passions, and make a positive impact on the world. As we celebrate our past achievements and look to the future, we remain dedicated to our founding principles of unity, excellence, and service, continuing our journey of discovery, innovation, and social transformation.</p>

                        </div>
                        <div className="col-start-5 hidden lg:block ">
                          <div className=" flex justify-center p-[2rem]">
                            <img
                        src={logo} 
                        width={160} 
                        height={160}
                        alt="Final Logo"
                      />
                      </div>
                      <div className="px-[2rem]">
                        <ul className="font-para text-[1.2rem]">
                          <li className="text-center">Data Center College of the Philippines of Baguio City Inc. </li>
                        </ul>
                      </div>
         

                  </div>

                      </div>
                       
                     
                       
                        
                    </div>  
                    <section  className="col-start-1 col-span-6 border-b-[1px]  border-gray-300 pb-[4rem]">
                      <div className=" grid md:grid-cols-2 p-4 md:p-0">   
                      <div className="relative ">
                      <div className="md:absolute  bottom-[5rem] -right-10 3xl:ml-[12rem] 2xl:ml-[10rem] lg:ml-[6rem] md:ml-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-white z-50 p-6 font-para"> 
                       <h1 className=" text-[2rem] ">Our Mission</h1>
                      <p className="py-[2rem] ">In the ever-evolving landscape of technology, the data center becomes the crucible where competitive souls are refined into the architects of tomorrow's progress.  In the ever-evolving landscape of technology, the data center becomes the crucible where competitive souls are refined into the architects of tomorrow's progress</p>
                    </div>
                      </div>
                      <div className=" relative w-full h-[30rem] mx-auto  lg:pr-[4rem] lg:pt-[4rem] md:p-[2rem]  hidden md:block">
                      <img
                        src={mission} 
                        alt="Final Logo"
                        className=" w-full h-full object-cover hidden md:block"
                      />  
                     
                      </div>
                      </div>
                      <div className="grid md:grid-cols-2 p-4 md:p-0">  
                     <div className=" relative w-full h-[30rem] mx-auto   lg:pl-[4rem] lg:pt-[4rem] md:p-[2rem]  hidden md:block ">
                      <img
                        src={mission} 
                        alt="Final Logo"
                        className=" w-full h-full object-cover hidden md:block"
                      />  
                     
                      </div>
                       <div className="relative ">
                      <div className="md:absolute w-full bottom-[5rem] -left-10 3xl:mr-[14rem] 2xl:mr-[12rem] lg:mr-[6rem] md:mr-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-white z-50 p-6 font-para"> 
                       <h1 className=" text-[2rem] ">Our Vission</h1>
                      <p className="py-[2rem] ">In the ever-evolving landscape of technology, the data center becomes the crucible where competitive souls are refined into the architects of tomorrow's progress.  In the ever-evolving landscape of technology, the data center becomes the crucible where competitive souls are refined into the architects of tomorrow's progress</p>
                    </div>
                      </div>
                      </div>
                    
                 </section> 
                 <section className="col-start-1 col-span-6">
                      
<div >
<div className='font-para pt-[4rem]  mx-[2rem]'>
    <h1 className='text-[4.8rem]  text-gray-700 font-title flex justify-center'>LEADERS</h1>
    <p className='sm:max-w-[70%] 2xl:max-w-[80%] py-4 text-[1.1rem] mx-auto text-center'>Meet your dedicated teachers, the guiding force behind your academic journey. With passion, expertise, and a commitment to your success, they're here to inspire and support you every step of the way.</p>
</div>
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-[2rem] 2xl:mx-[14rem] mx-[10px] sm:py-[2rem] pb-[4rem]'>
       
        {[
            { name: 'Sophia Panget', imgSrc: sophia, discription: 'Department Head'  },
            { name: 'Angelica Songleo', imgSrc: soren, discription: 'Assistant Professor of Information Technology'  },
            { name: 'Jake Agustin', imgSrc: jake, discription: 'Assistant Professor of Information Technology'  },
          
          
        ].map((faculty, index) => (
            <div key={index} className='font-para text-[1.3rem] 2xl:pt-[3rem] py-[1rem]'>
                <div className='flex justify-center ' >
                    <div className='rounded-full  max-w-[14rem] max-h-[14rem] '>
                        <img src={faculty.imgSrc} alt={`${faculty.name}-profile-picture`} className='w-full h-full rounded-full  '/>
                    </div>
                </div>
                <div className='p-4  mt-[1rem]'>
                    <h1 className='flex justify-center text-center  pb-2 underline decoration-yellow-500 text-gray-800'> {faculty.name}</h1>
                    <p className='text-center font-title tracking-widest text-[1rem] text-gray-700'>{faculty.discription}</p>
                </div>
            </div>
        ))}
    </div>
</div>

          

                 </section>
              
            </div>  
                  
          
            </section>

                 

          

        <Footer />
        </ div>
     );
}
 
export default About;