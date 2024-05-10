// Import necessary components and icons
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import ImageLogo from './logo/finallogo.png';

// Footer component
const Footer = () => {
    return ( 
        <footer className="h-[50rem] lg:h-[40rem] bg-gray-900 border-t-[8px] border-yellow-700 ">
            {/* Footer content */}
            <section className='grid grid-cols-1 md:grid-cols-3 gap-5 text-white p-11 text-[1.1rem] font-para mx-[1rem] md:mx-[3rem] xl:mx-[2rem] 2xl:mx-[10rem]'>
                {/* Left section */}
                <section className='md:justify-self-center mt-[2rem] col-span-2'>
                    <div className='md:justify-self-center text-gray-400 font-medium'>
                        <div className="flex items-center mb-6 lg:ml-9">
                            <img
                                width={90}
                                height={90}
                                src={ImageLogo} 
                            />
                        </div>
                    </div>
                    {/* Contact information */}
                    <div>
                        <h1 className='text-[1.9rem] font-bold'>Get in touch</h1>
                        <p className='text-gray-400 font-medium mb-6 font-header'>118 Upper A. Bonifacio St., Brgy. Holy Ghost Proper, Baguio City, Philippines</p>
                    </div>
                    <div>
                        <h1 className='text-[1.4rem] font-bold'>Message us via</h1>
                        <p className='text-gray-400 font-medium font-header'>(074) 444 3539</p>
                    </div>
                </section>

                {/* Right section */}
                <section className='md:mt-[5rem] md:content-center md:justify-self-center'>
                    <h1 className='text-[1.9rem] font-bold mb-1'>Learn More</h1>
                    <NavLink to="/dccp-story">
                        <h1 className='text-[1.1rem] font-semibold mb-1 font-header'>The Story of DCCP</h1>
                    </NavLink>
                    <NavLink to="/dccp-facebook">
                        <h1 className='text-[1.1rem] font-semibold font-header'>DCCP Facebook Page</h1>
                    </NavLink>
                </section>
            </section>

            {/* Divider */}
            <section className='mx-[1rem] md:mx-[3rem] xl:mx-[2rem] 2xl:mx-[20rem] mt-4'>
                <hr className="lg:block hidden border-t-[1px] -mt-4 border-gray-600 w-full" />

                {/* Bottom section */}
                <div className='grid md:grid-cols-3 grid-cols-1 mt-8 px-11'>
                    <div className='lg:block hidden justify-self-start cursor-pointer text-white     font-title text-[2rem] ml-2'>DCCP</div>
                    <div className='md:justify-self-center justify-self-start'>
                        <ul className='flex mt-2'>
                            <li className='bg-gray-800 rounded-full p-4 cursor-pointer'><FaFacebookF className='text-white'/></li>
                            <li className='bg-gray-800 rounded-full p-4 mx-4 cursor-pointer'><MdEmail className='text-white'/></li>
                            <li className='bg-gray-800 rounded-full p-4 cursor-pointer'><RiMessengerFill className='text-white'/></li>
                        </ul>
                    </div>
                    <div className='lg:block hidden justify-self-end font-header mt-2 text-white text-[1.1rem]'>baguio-campus@dccp.edu.ph</div>
                </div>
            </section>

            {/* Copyright */}
            <h1 className='flex justify-center pt-[6rem] text-gray-400  font-para'>Copyright © 2024 Data Center College. All rights reserved.</h1>
        </footer>
    );
}

export default Footer;
