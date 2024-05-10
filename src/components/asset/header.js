import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose, IoLocationSharp } from "react-icons/io5";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import ImageLogo from './logo/finallogo.png';
import { TiArrowSortedDown } from "react-icons/ti";
import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [smallDropdownOpen, setSmallDropdownOpen] = useState(false);
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
            setSmallDropdownOpen(false);
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
        setSmallDropdownOpen(!smallDropdownOpen);
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

    const boxSizeIT = isOpenIT ? 'w-[30rem] h-[12rem]' : 'w-[30rem]  h-[3rem]'; 

    return (
        <header className='shadow-2xl tracking-[.030em]'>
            {/* Location and Contact Info */}
            <div className=' bg-blue-950 p-4 hidden sm:grid lg:grid-cols-2 m-auto overflow-x-auto font-header'>
                <div className='flex text-white justify-self-center'>
                    <IoLocationSharp className='mr-[-38px]' />
                    <NavLink className='mx-11 text-[10px] md:text-[13px] text-left'>
                        118 Upper A. Bonifacio St.,Brgy. Holy Ghost Proper, Baguio City, Philippines
                    </NavLink>
                </div>
                <div className='flex text-white text-[13px] justify-self-center'>
                    <FaPhoneAlt className='mx-3 my-1' />
                    <NavLink className='font-header'>(074) 444 3539</NavLink>
                </div>
            </div>

            {/* Main Navigation */}
            <div className='grid grid-cols-2 bg-white'>
                {/* Logo */}
                <ul className='md:justify-self-center p-2'>
                    <li>
                        <NavLink to="/home">
                            <div className="flex items-center">
                                <img width={70} height={70} src={ImageLogo} />
                                <h1 className="ml-2 font-title text-[2.5rem] text-blue-800">DCCP</h1>
                            </div>
                        </NavLink>
                    </li>
                </ul>

                {/* Menu */}
                <ul className='text-gray-800 flex md:col-start-2 justify-self-center font-header' ref={dropdownRef}>
                    <li className='relative flex'>
                        <li className="flex text-[1.1rem] font-medium font-para">
                            <NavLink className="hidden md:hidden lg:flex items-center mt-[9px] m-3 p-2 rounded-lg hover:text-blue-800" onClick={toggleDropdown}>
                                Academics
                                <TiArrowSortedDown className="text-blue-900 mt-[2px] text-[1.2rem]" />
                            </NavLink>
                        </li>

                        {/* Dropdown Content */}
                        <div className={`absolute lg:p-5 top-full mt-4 ml-[-9rem] w-[15rem] bg-white sm:w-[20rem] lg:w-[34rem] z-40 rounded-md shadow-lg ${dropdownOpen ? '' : 'hidden'}`}>
                            <NavLink to="/academics" className='block px-4 py-2 text-blue-800 text-[1.4rem] font-medium font-title'>
                                UNDERGRADUATE PROGRAMMES
                            </NavLink>
                            <hr className="border-yellow-300 my-2 border-1 "/>
                            <NavLink smooth to='/Bachelor of Science in Business Administration' id='lineY' className='block font-para px-4 py-2 text-gray-800 hover:text-blue-800 font-semibold'>
                                (BSBA) Bachelor of Science in Business Administration
                            </NavLink>
                            <NavLink smooth to='/Bachelor of Science in information Technology' id='lineY' className='block font-para px-4 py-2 text-gray-800 hover:text-blue-800 font-semibold'>
                                (BSIT) Bachelor of Science in Information Technology
                            </NavLink>
                            <NavLink smooth to='/Bachelor of Science in Hospitality Management' id='lineY'  className='block font-para px-4 py-2 text-gray-800 hover:text-blue-800 font-semibold'>
                                (BSHM) Bachelor of Science in Hospitality Management
                            </NavLink>
                        </div>
                    </li>
                    <li className='text-[1.1rem] font-medium font-para hover:text-blue-800'>
                        <NavLink to="/about" className='hidden md:hidden lg:block  mt-[21px] m-3 p-2 rounded-lg'>
                            About
                        </NavLink>
                    </li>
                    <li className='text-[1.1rem] font-medium font-para hover:text-blue-800'>
                        <NavLink to="/connect" className='hidden md:hidden lg:block mt-[21px] m-3 p-2 rounded-lg'>
                            Connect
                        </NavLink>
                    </li>
                    {/* Small screen */}
                    <div className="flex items-center">
                        {/* Menu icon */}
                        <li onClick={toggleSmallMenu}>
                            <IoMenu className='text-blue-800 text-[2.3rem] ml-[6rem] lg:hidden justify-self-end cursor-pointer' />
                        </li>
                    </div>
                    {/* Search icon */}
                    <li onClick={toggleSearch} className="cursor-pointer ml-2 mt-7 hidden lg:block">
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

            {/* Smaller screen menu */}
            <div className={`fixed z-30 h-full left-0 -top-[2rem] w-screen lg:hidden ${menuOpen ? 'translate-y-[1rem] ' : '-translate-y-full'} right-0 ease-in-out duration-300`}>
                <div className='text-white font-title flex-col bg-blue-950 backdrop-blur-lg absolute right-0 top-0 h-screen p-8 gap-8 z-50 flex w-screen'>
                    <IoClose className='text-[30px] cursor-pointer absolute top-10 right-8' onClick={closeMenu} />
                    <div className="flex items-center ml-1">
                        <img width={70} height={70} src={ImageLogo} />
                        <h1 className="ml-2 font-title text-[2.5rem] text-white">DCCP</h1>
                    </div>
                    <ul className='relative text-[2rem] p-4 '>
                        {/* Toggle dropdown for academics */}
                        <li className={`bg-blue-950 rounded-lg w-[10rem] mb-4 transition-all duration-300 ease-in-out ${boxSizeIT}`}>
                            <h1 id='lineW' className='flex cursor-pointer text-[2.6rem] w-[14rem] text-white ' onClick={toggleDropdownIT}>
                                Academics
                            </h1> 
                            {isOpenIT && (
                                <div className="absolute ml-1 py-2 mx-1 ">
                                    <NavLink to="/academics" id='lineY' className=" mb-3 font-semititle  flex text-[18px] text-white" onClick={closeMenu}> 
                                        UNDERGRADUATE PROGRAMMES <FaArrowRight className='ml-2 mt-[2px] text-gray-600'/>
                                    </NavLink>
                                    <HashLink smooth to='/Bachelor of Science in Business Administration'  id='lineY' className="ml-2  font-para flex text-[15px] text-white mt-1" onClick={closeMenu}>
                                        Bachelor of Science in Business Administration
                                    </HashLink>
                                    <HashLink smooth to='/Bachelor of Science in Information Technology'   id='lineY' className="mb-3 ml-2 font-para  flex text-[15px] text-white mt-1" onClick={closeMenu}>
                                        Bachelor of Science in Information Technology
                                    </HashLink>
                                    <HashLink smooth to='/Bachelor of Science in Hotel Management'  id='lineY' className="mb-3 ml-2  font-para flex text-[15px] text-white mt-1" onClick={closeMenu}>
                                        Bachelor of Science in Hotel Management
                                    </HashLink>
                                </div>
                            )}
                        </li>
                        <li id='lineW' className='mb-1 w-[8rem] '>
                            <NavLink to="/about"  className="mb-3  text-[2.6rem]" onClick={closeMenu}>
                                About
                            </NavLink>
                        </li>
                        <li id='lineW' className='mb-1 w-[11rem] ' >
                            <NavLink to="/connect " className=" text-[2.6rem]" onClick={closeMenu}>
                                Connect
                            </NavLink>
                        </li>
                        <li id='lineW' className='mb-1 w-[7rem] ' >
                            <NavLink to="/connect " className=" text-[2.6rem]" onClick={closeMenu}>
                                News
                            </NavLink>
                        </li>
                        <li  onClick={toggleSearch} className="cursor-pointer   flex lg:hidden">
                            <h1 id='lineW' className="mb-1 w-[9rem] text-[2.6rem]  " >Search</h1>
                            <RiSearch2Line className='w-[1.2rem] h-[1.2rem] mt-6' />
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
            </div>
        </header>
    );
}

export default Header;
