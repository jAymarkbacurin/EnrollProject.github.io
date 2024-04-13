import { NavLink } from "react-router-dom";
import ImageLogo from '../sliderimage/finallogo.png';
import { useState } from 'react';
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti"; 
import { MdOutlineClose } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';

const CoursesHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpenIT, setIsOpenIT] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleSmallMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    const closeMenu = () => {
        setMenuOpen(false);
    };
    const toggleDropdownIT = () => {
        setIsOpenIT(!isOpenIT);
   
    };
    const iconSize1 = 16;
    const boxSizeIT = isOpenIT ? 'w-[30rem] h-[12rem]' : 'w-[30rem]  h-[3rem]'; 
    return (
        <>
            <section className="sticky top-0 z-30 bg-blue-800 shadow-[0_5px_20px_-15px_rgba(0,0,0,4)]">
                <div className="grid lg:grid-cols-3 grid-cols-2 ">
                    <section className="justify-self-start  ml-[2rem]">
                        <div className="flex items-center ">
                            <img
                                width={80}
                                height={80}
                                src={ImageLogo}
                                className="absolute top-1 left-11 border-solid border-[5px] border-blue-800 rounded-full bg-blue-900"
                            />
                            <NavLink to="/home">
                                <h1 className="ml-[6rem] font-title text-[3rem] text-white ">DCCP</h1>
                            </NavLink>
                        </div>
                    </section>

                    {/* Small screen */}
                    <section className="justify-self-center content-center mr-11">
                        <div className="md:hidden">
                            <button onClick={toggleSmallMenu} className="text-white focus:outline-none">
                                <IoMdMenu className="text-[35px]" />
                            </button>
                        </div>
                        <div className="hidden md:block ">
                            <ul className="flex font-title text-white">
                                <div className="flex mx-4 relative">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="mx-1 flex items-center text-[1.5rem]"
                                    >
                                        Courses
                          
                                    </button>
                                    {isOpen && (
                                        <div className="absolute -right-[15rem] top-2 bg-white font-para text-[1.1rem] shadow-lg w-[28rem] mt-14 p-4   ">
                                            <a href="#" className="block px-4 py-2 text-gray-900 border-white border-l-4 hover:border-blue-500 hover:text-blue-700">Bachelor of Science in Business Administration</a>
                                            <a href="#" className="block px-4 py-2 text-gray-900 border-white border-l-4 hover:border-blue-500 hover:text-blue-700">Bachelor of Science in Information Technology</a>
                                            <a href="#" className="block px-4 py-2 text-gray-900 border-white border-l-4 hover:border-blue-500 hover:text-blue-700  ">Bachelor of Science in Hospitality Management</a>
                                        </div>
                                    )}
                                </div>
                                <li className="mx-4 text-[1.5rem]">About</li>
                                <li className="mx-4 text-[1.5rem]">Contacts</li>
                            </ul>
                        </div>
                    </section>

                    <section className="justify-self-end content-center mr-[4rem]">
                        <div className="lg:block hidden font-title text-white">
                            <div className="flex">
                                <h1 className="mx-1 text-[1.5rem]">Search</h1>
                                <FiSearch className="mt-[6px]" />
                            </div>
                            
                        </div>
                    </section>
                    {/* Small screen */}
                    
                </div>
               
                <div  className={`fixed z-30 h-full w-screen lg:hidden  top-0 right-0 ${menuOpen ? '' : 'hidden'}`}>
                            <div className='text-white  flex-col bg-blue-900 backdrop-blur-lg absolute right-0 top-0 h-screen p-8 gap-8 z-50 flex w-screen'>
                        
                                <MdOutlineClose  className='text-[30px] font-bold cursor-pointer  absolute  right-8' onClick={closeMenu} />
                        
                            <ul className='relative'>
                                            <li>
                                                <a href=''> 
                                                    <div className="flex items-center mb-7  ml-3">
                                                        <img
                                                            width={70}
                                                            height={70}
                                                            src={ImageLogo} 
                                                        />
                                                        <h1 className=" font-title text-[3rem] px-2">DCCP </h1>
                                                </div>
                                                </a>
                                            </li>
 {/* Toggle dropdown for academics */}
                                            <li className={`bg-blue-900 rounded-lg w-[10rem] transition-all duration-300 ease-in-out ${boxSizeIT}`}>
                                                    <h1  className='grid grid-cols-2 cursor-pointer text-[2.5rem] font-title px-4 border-l-4 border-yellow-500  text-white' onClick={toggleDropdownIT}>
                                                        Courses
                                                        <TiArrowSortedDown  className=" justify-self-center content-center   text-white mt-[11px] text-[1.2rem] " />
                                                    </h1> 
                                                {isOpenIT && (
                                                    <div className="absolute ml-1 mt-4 px-3">
                                                        <NavLink  to="/academics" id='lineW' className=" mb-3 font-semititle font-semibold  flex text-[15px] text-white" onClick={closeMenu}> 
                                                            UNDERGRADUATE PROGRAMMES <FaArrowRight className='ml-2 mt-[2px] text-gray-600'/></NavLink>
                                                        <HashLink smooth to='/academics/#bsba'  id='lineW' className="ml-2  font-semititle font-meduim  flex text-[14px] text-white mt-1" onClick={closeMenu}>
                                                            Bachelor of Science in Business Administration</HashLink>
                                                        <HashLink smooth to='/academics/#bsit'   id='lineW' className="mb-3 ml-2 font-semititle font-meduim  flex text-[14px] text-white mt-1" onClick={closeMenu}>
                                                            Bachelor of Science in Information Technology</HashLink>
                                                        <HashLink smooth to='/academics/#bshm'  id='lineW' className=" ml-2  font-semititle font-meduim flex text-[14px] text-white mt-1" onClick={closeMenu}>
                                                            Bachelor of Science in Hotel Management</HashLink>
                                                    </div>
                                                
                                                )}
                                            </li>
                                            <li >
                                                <div className="text-[2.5rem] font-title  h-[4rem] pt-2  px-4  border-l-4 mt-3 border-blue-900 hover:border-yellow-500 " >
                                                     <NavLink to="/about"  onClick={closeMenu}>
                                                    About</NavLink>
                                                </div>
                                             </li>
                                            <li >
                                                <div className="text-[2.5rem] font-title  h-[4rem] pt-2 px-4 border-l-4 border-blue-900 hover:border-yellow-500 " >
                                                    <NavLink to="/connect " onClick={closeMenu}>
                                                    Connect</NavLink>
                                                </div>
                                            </li>
                                                    
                                             <li>
                                              <div className="text-[2.5rem] font-title  h-[4rem] pt-2 px-4  border-l-4 border-blue-900 hover:border-yellow-500 "  onClick={closeMenu}>
                                                 <div className="flex">
                                                   <h1 className="">Search</h1>
                                                   <FiSearch className="mt-[9px] ml-2" size={iconSize1} />
                                                 </div>
                                                        
                                              </div>
                                            </li>
                                </ul>
                            </div>
                        </div>
                
            </section>

          
        </>
    );
}

export default CoursesHeader;
