import Header  from "../components/asset/header";
import Footer from "../components/asset/footer";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsClock } from "react-icons/bs";
import { PiPhoneCallLight } from "react-icons/pi";


const Connect = () => {
  const iconSize = 40 ;

  
    return ( 
        <>
        <Header />
        
       <section className='w-full h-[28rem] relative top-0'>
              <div className="bg-parallax bg-fixed absolute inset-0 bg-cover brightness-50 "></div>
              <div className="absolute inset-0 flex justify-center items-center text-center">
                <div>
                  <h1 className="text-white text-4xl font-bold font-semititle mb-3">
                    Contact Us
                  </h1>
                </div>
              </div>
       </section>
       <div className='mx-[20px]  lg:mx-[5rem]  xl:mx-[6rem] 2xl:mx-[10rem] border-b-[1px] border-r-[1px]  border-l-[1px] border-gray-300 grid grid-rows-1' >
          <div className='w-full flex justify-center mt-[4rem]  border-t-[1px]  border-gray-300'><h1 className=' font-title md:text-[3rem] text-[3rem] text-gray-800 mt-[2rem]'>Connect with DATA CENTER College<hr className='border-[3px] border-yellow-500 w-[10rem]'/></h1></div> 
          
          <div className=' flex justify-center md:py-[3rem]  border-b-[1px] border-gray-300  mb-[4rem]'>
            <p className='max-w-[70%] text-center font-para md:text-[1.2rem] text-[1rem] text-gray-800  sm:px-[4rem] px-4' >
            Welcome to Data Center contact page! Whether you're a prospective student, current student, alumni, parent, or visitor, we're here to assist you with any inquiries you may have about our programs, campus, or community.
          </p>
          </div>
          <section className=" mx-[8rem] my-[2rem]">
          <div className="grid grid-cols-4 gap-8">
            <div className="bg-blue-900 p-[1rem] font-para shadow-2xl shadow-gray-500 ">
              <div className="flex justify-center ">
                <CiLocationOn className="text-yellow-600 mt-2"  size={iconSize} />
              </div>
              <h1 className="flex justify-center my-4 text-white text-[1.2rem] font-semibold">Our Location</h1>
              <h2 className="mx-auto text-center max-w-[90%] text-gray-300 text-[15px] pb-4">
              118 Upper A. Bonifacio St.,Brgy. Holy Ghost Proper, Baguio City, Philippines
              </h2>
            </div>

            <div className=" p-[1rem] font-para shadow-2xl shadow-gray-500 ">
              <div className="flex justify-center ">
              <HiOutlineMailOpen  className="text-yellow-600 mt-2"  size={iconSize} />
              </div>
              <h1 className="flex justify-center my-4 text-blue-800 font-semibold text-[1.2rem]">Our Email</h1>
              <h2 className="mx-auto text-center max-w-[100%] ">
              baguio-campus@dccp.edu.ph
              </h2>
            </div>

            <div className="bg-blue-900 p-[1rem] font-para shadow-2xl shadow-gray-500 ">
              <div className="flex justify-center ">
              <PiPhoneCallLight className="text-yellow-600 mt-2"  size={iconSize} />
              </div>
              <h1 className="flex justify-center my-4 text-white text-[1.2rem] font-semibold">Phone Number</h1>
              <h2 className="mx-auto text-center max-w-[90%] text-gray-300 text-[15px] ">
              (074) 444 3539
              </h2>
            </div>
           
            <div className=" p-[1rem] font-para shadow-2xl shadow-gray-500 ">
              <div className="flex justify-center ">
              <BsClock  className="text-yellow-600 mt-2"  size={iconSize} />
              </div>
              <h1 className="flex justify-center my-4 text-blue-800 font-semibold text-[1.2rem]">Working Hours</h1>
              <h2 className="mx-auto text-center max-w-[100%] ">
              Mon-Fri 8:00-5:00
              </h2>
            </div>

          
           
        
          

          </div>

       
         
          </section> 
          <section className="border-b-[1px] border-gray-300 mb-[4rem] pb-[2rem]">
             <div className="mt-[6rem]  mx-[8rem] my-[2rem] ">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.189009164989!2d120.5968993761721!3d16.415224384315565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a15dadc3624b%3A0xeb147b4e62e6e276!2sData%20Center%20College%20of%20the%20Philippines%20of%20Baguio%20City%2C%20Inc.!5e0!3m2!1sen!2sph!4v1715067352006!5m2!1sen!2sph" 
           width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
           </iframe>
        </div>
        </section>
         
          
      </div>
       


    
        <Footer />
        </>
     );
}
 
export default Connect;