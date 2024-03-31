import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose, IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import ImageLogo from './sliderimage/finallogo.png';
import { TiArrowSortedDown } from "react-icons/ti";
import { RiSearch2Line } from "react-icons/ri";



const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [smallDropdownOpen, setsmallDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchOpenS, setSearchOpenS] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);
    const [isOpenIT, setIsOpenIT] = useState(false);

   
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
     

        const handleResize = () => {
            setDropdownOpen(false); // Close dropdown on resize
            setMenuOpen(false); // Close menu on resize
            setSearchOpen(false);
            setsmallDropdownOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, [dropdownRef]);

    const toggleDropdownIT = () => {
            setIsOpenIT(!isOpenIT);
            setsmallDropdownOpen(!smallDropdownOpen);
        };
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
 
    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleSmallMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };
    const toggleSearchS = () => {
        setSearchOpenS(!searchOpenS);
    };
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        // You can add your search logic here, such as filtering results based on the search query
    };

    const boxSizeIT = isOpenIT ? 'w-[30rem] h-[15rem]' : 'w-[30rem]  h-[3rem]'; 

    return (
        <header className='shadow-2xl '>
            <div className=' p-2 bg-blue-900
           hidden sm:grid lg:grid-cols-2 m-auto overflow-x-auto font-header'>
                <div className=' flex  p-4  text-white justify-self-center '>
                    <IoLocationSharp  className='mr-[-38px]' />
                    <NavLink className='mx-11 text-[10px]  md:text-[13px] text-left '>118 Upper A. Bonifacio St.,Brgy. Holy Ghost Proper, Baguio City, Philippines</NavLink>
                </div>
                <div className=' flex text-white  text-[13px] justify-self-center lg:mt-3'>
                     <FaPhoneAlt className='mx-3 my-1' />
                     <NavLink  className='mb-3 font-header'>  (074) 444 3539</NavLink>
                </div>
            </div>

     {/* main nav */}
     <div className='grid grid-cols-2 bg-white p-5 md:p-3 '>
    <ul className='md:justify-self-center'>
        <li>
            <a href=''> 
                <div className="flex items-center">
                    <img
                        width={70}
                        height={70}
                        src={ImageLogo} 
                    />
                   <NavLink to="/home"> 
                    <h1 className="ml-2 font-title text-[2.5rem] text-blue-800">DCCP</h1>

                   </NavLink>  
              </div>
            </a>
        </li>
    </ul>

    <ul className='text-gray-800  flex md:col-start-2 justify-self-center font-header' ref={dropdownRef}>
        <li className='relative flex'>
            <li className="flex text-[16px] font-medium">
                <NavLink
                    className="hidden md:hidden lg:flex items-center mt-[21px] m-3 p-2 rounded-lg hover:text-blue-800"
                    onClick={toggleDropdown}
                >
                    Academics
                    <TiArrowSortedDown  className=" text-blue-900 mt-[2px] text-[1.2rem] " />
                </NavLink>
            </li>

            {/* Dropdown Content */}
            <div className={`absolute  lg:p-5 top-full mt-4 ml-[-9rem] w-[15rem] bg-white sm:w-[20rem] lg:w-[34rem] z-40 rounded-md shadow-lg ${dropdownOpen ? '' : 'hidden'}`}>
                <NavLink to="/academics" className='block px-4 py-2 text-blue-800 font-semibold font-semititle'>UNDERGRADUATE PROGRAMMES</NavLink>
                <hr className="border-gray-300 my-2"/>
                <HashLink smooth to='/academics/#bsba' className='block px-4 py-2 text-gray-800 hover:text-blue-800 font-semibold'>(BSBA) Bachelor of Science in Business Administration</HashLink>
                <HashLink smooth to='/academics/#bsit'className='block px-4 py-2 text-gray-800 hover:text-blue-800 font-semibold'>(BSIT) Bachelor of Science in Information Technology</HashLink>
                <HashLink smooth to='/academics/#bshm' className='block px-4 py-2 text-gray-800 hover:text-blue-800 font-semibold'>(BSHM) Bachelor of Science in Hotel Management</HashLink>
               
            </div>
        </li>
        <li className='text-[16px] font-medium hover:text-blue-800'>
            <NavLink to="/about" className='hidden md:hidden lg:block  mt-[21px] m-3 p-2 rounded-lg '>About</NavLink>
        </li>
        <li className='text-[16px] font-medium hover:text-blue-800'>
            <NavLink to="/connect" className=' hidden  md:hidden lg:block mt-[21px] m-3 p-2 rounded-lg '>Connect</NavLink>
        </li>


{/* Small screen */}       
                        <div className="flex items-center">
 {/* Search icon */}
                            <li onClick={toggleSearchS} className="cursor-pointer ml-2 mt-4 md:hidden">
                                <RiSearch2Line className='w-[1.3rem] h-[1.3rem]' />
                            </li>
                            {searchOpenS && (
                                <li className="relative" >
                                    <input
                                        type="text"
                                        className="border border-gray-300 p-2 rounded-md outline-none"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={handleSearchInputChange}
                                    />
                                    {/* You can add search results here */}
                                </li>
                            )}

 {/* Menu icon */}
                            <li onClick={toggleSmallMenu}>
                                <IoMenu className='text-gray-900 text-[2.3rem] ml-2 mt-5 lg:hidden justify-self-end cursor-pointer' />
                            </li>
                        </div>
{/* Small screen */}  

 {/* search icon*/}
                        <li  onClick={toggleSearch} className="cursor-pointer ml-2 mt-7 hidden lg:block">
                            <RiSearch2Line className='w-[1.2rem] h-[1.2rem]' />
                        </li>
                        {searchOpen && (
                            <li className="relative">
                                <input
                                    type="text"
                                    className="border border-gray-300 p-2 rounded-md outline-none"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={handleSearchInputChange}
                                />
                                {/* You can add search results here */}
                            </li>
                        )}
                    </ul>
                </div>
 {/* search icon*/}
{/* smaller screen menu */}
                    <div  className={`fixed z-30 h-full w-screen lg:hidden  top-0 right-0 ${menuOpen ? '' : 'hidden'}`}>
                            <div className='text-white font-title flex-col bg-blue-950 backdrop-blur-lg absolute right-0 top-0 h-screen p-8 gap-8 z-50 flex w-screen'>
                        
                                <IoClose className='text-[40px] font-bold cursor-pointer  absolute top-10 right-8' onClick={closeMenu} />
                        
                            <ul className='relative text-[2rem]'>
                                            <li>
                                                <a href=''> 
                                                    <div className="flex items-center mb-7  ml-3">
                                                        <img
                                                            width={100}
                                                            height={100}
                                                            src={ImageLogo} 
                                                        />
                                                </div>
                                                </a>
                                            </li>
 {/* Toggle dropdown for academics */}
                                            <li className={`bg-blue-950 rounded-lg w-[10rem] mb-2 transition-all duration-300 ease-in-out ${boxSizeIT}`}>
                                                    <h1  className='flex cursor-pointer text-[2.6rem]  text-white' onClick={toggleDropdownIT}>
                                                        Academics
                                                    </h1> 
                                                {isOpenIT && (
                                                    <div className="absolute ml-1 py-2 mx-1 ">
                                                        <NavLink  to="/academics" id='lineB' className=" mb-3 font-semititle font-semibold  flex text-[18px] text-white" onClick={closeMenu}> 
                                                            UNDERGRADUATE PROGRAMMES <FaArrowRight className='ml-2 mt-[2px] text-gray-600'/></NavLink>
                                                        <HashLink smooth to='/academics/#bsba'  id='lineB' className="ml-2  font-semititle font-meduim  flex text-[17px] text-white mt-1" onClick={closeMenu}>
                                                            Bachelor of Science in Business Administration</HashLink>
                                                        <HashLink smooth to='/academics/#bsit'   id='lineB' className="mb-3 ml-2 font-semititle font-meduim  flex text-[17px] text-white mt-1" onClick={closeMenu}>
                                                            Bachelor of Science in Information Technology</HashLink>
                                                        <HashLink smooth to='/academics/#bshm'  id='lineB' className="mb-3 ml-2  font-semititle font-meduim flex text-[17px] text-white mt-1" onClick={closeMenu}>
                                                            Bachelor of Science in Hotel Management</HashLink>
                                                    </div>
                                                
                                                )}
                                            </li>
                                            <li>
                                                    <NavLink to="/about"  className="mb-3  text-[2.6rem]" onClick={closeMenu}>
                                                    About</NavLink></li>
                                            <li>
                                                    <NavLink to="/connect " className=" text-[2.6rem]" onClick={closeMenu}>
                                                    Connect</NavLink></li>
                                </ul>
                            </div>
                        </div>
                
        </header>
    );
    
      
    

   
}

export default Header;
