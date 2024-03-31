import { NavLink } from 'react-router-dom';
import ImageLogo from './sliderimage/finallogo.png';
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6"

const Footer = () => {
    return ( 
        <footer className=" bottom-0 left-0 right-0 h-[45rem] lg:h-[35rem] bg-blue-900">
            <section className='grid grid-cols-1 md:grid-cols-3 gap-5 text-white p-11 text-[1.1rem] font-para'>
                <section className='md:justify-self-center'>
                    <div>
                        <ul className='md:justify-self-center text-gray-400 font-medium'>
                            <li>
                                <a href=''> 
                                    <div className="flex items-center mb-3">
                                        <img
                                            width={90}
                                            height={90}
                                            src={ImageLogo} 
                                        />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <h1>@2024 DCCP</h1>
                            </li>
                            <li>
                                <h1>All rights reserved</h1>
                            </li>
                            <li>
                                <ul className='flex text-white my-2 '>
                                    <li className='px-1'><a><FaFacebook /></a></li>
                                    <li className='px-2'><a><MdEmail /></a></li>
                                    <li className='px-1'><a><FaFacebookMessenger /></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className='mt-[2rem]'>
                    <div>
                        <h1 className='text-[1.9rem] font-bold'>Get in touch</h1>
                        <p className='text-gray-400 font-medium mb-5'>118 Upper A. Bonifacio St.,Brgy. Holy Ghost Proper, Baguio City, Philippines</p>
                    </div>
                    <div>
                        <h1 className='text-[1.4rem] font-bold '>Message us via</h1>
                        <p className='text-gray-400 font-medium'>(074) 444 3539</p>
                    </div>
                </section>

                <section className='mt-[2rem]'>
                    <h1 className='text-[1.9rem] font-bold mb-1'>Learn More</h1>
                    <NavLink>
                        <h1 className='text-[1.1rem] font-semibold mb-1'>The Story of DCCP</h1>
                    </NavLink>
                    <NavLink>
                        <h1 className='text-[1.1rem] font-semibold'>DCCP Facebook Page</h1>
                    </NavLink>
                </section>
            </section>
        </footer>
     );
}
 
export default Footer;
