import Header  from "../components/asset/header";
import Footer from "../components/asset/footer";
import { CiLocationOn , CiFacebook  } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsClock } from "react-icons/bs";
import { PiPhoneCallLight } from "react-icons/pi";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";


const Connect = () => {
  const iconSize = 40 ;
  const iconSize2 = 30;

  
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
       <div className='mx-[20px]  lg:mx-[5rem]  xl:mx-[6rem] 2xl:mx-[6rem] border-b-[1px] border-r-[1px]  border-l-[1px] border-gray-300 grid grid-rows-1' >
          <div className='w-full flex justify-center mt-[4rem]  border-t-[1px]  border-gray-300'><h1 className=' font-title md:text-[3rem] text-[2rem] text-gray-800 mt-[2rem]'>Connect with DATA CENTER College</h1></div> 
          
          <div className=' flex justify-center md:py-[3rem] py-[2rem] border-b-[1px] border-gray-300  mb-[4rem]'>
            <p className='md:max-w-[70%] text-center font-para md:text-[1.2rem] text-[1rem] text-gray-800  sm:px-[4rem] px-4' >
            Welcome to Data Center contact page! Whether you're a prospective student, current student, alumni, parent, or visitor, we're here to assist you with any inquiries you may have about our programs, campus, or community.
          </p>
          </div>
          <section className=" 2xl:mx-[8rem] md:mx-[4rem] mx-[1rem] my-[2rem]">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
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
             <div className="mt-[6rem]  2xl:mx-[8rem] md:mx-[4rem] mx-[1rem]  ">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.189009164989!2d120.5968993761721!3d16.415224384315565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a15dadc3624b%3A0xeb147b4e62e6e276!2sData%20Center%20College%20of%20the%20Philippines%20of%20Baguio%20City%2C%20Inc.!5e0!3m2!1sen!2sph!4v1715067352006!5m2!1sen!2sph" 
           width="100%" height="550"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
           </iframe>
        </div>
        <div className="grid md:grid-cols-2  2xl:mx-[8rem] md:mx-[4rem] mx-[1rem] my-[2rem]">
          <div className="bg-blue-900 font-para ">
          <div className='w-full flex justify-start  pt-10 ml-10'><h1 className=' text-[2rem] text-white font-bold'>Get in touch<hr className='border-[1px] border-yellow-500 w-[8rem]'/></h1></div> 
          
            <p className="text-gray-300 pl-2  py-10 text-left max-w-[90%] mx-auto">We're here to assist you on your educational journey. Whether you have questions about admissions, programs, campus life, or anything else, we're ready to help. </p>
            <ul className="flex text-white justify-start pb-10 ml-10">
              <li><CiFacebook  size={iconSize2}/></li>
              <li><HiOutlineMailOpen className="mx-4" size={iconSize2}/></li>
              <li>< AiOutlineMessage  size={iconSize2}/></li>
            </ul>
          </div>
          <div>
          <div className='w-full flex justify-start  pt-10 ml-10'><h1 className=' text-[2rem] text-blue-800 font-bold font-para'>Message Us<hr className='border-[1px] border-yellow-500 w-[8rem]'/></h1></div> 
          
            <form className="mx-[2.5rem] ">
            <div class="mb-4">
                <label for="name" class="block text-[1rem] font-para font-medium text-gray-950 mt-4 ">Name</label>
                <input type="text" id="name" name="name" class="mt-1  block w-full shadow-sm sm:text-sm border-[1px]  border-yellow-500 p-2"/>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-[1rem] font-para font-medium text-gray-950">Email</label>
                <input type="email" id="email" name="email" class="mt-1 focus:ring-blue-500 focus:border-blue-200 block w-full shadow-sm sm:text-sm border-[1px]  border-yellow-500 p-2"/>
            </div>
            <div class="mb-4">
                <label for="message" class="block text-[1rem]  font-para font-medium text-gray-950">Message</label>
                <textarea id="message" name="message" rows="4"  class="mt-1  block w-full shadow-sm sm:text-sm border-[1px]  border-yellow-500 p-4"></textarea>
            </div>
            <div class="flex justify-end">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </div>
            </form>
          </div>

        

        </div>
        </section>
         
          
      </div>
       


    
        <Footer />
        </>
     );
}
 
export default Connect;