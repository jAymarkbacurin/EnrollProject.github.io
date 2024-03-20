import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose, IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import ImageLogo from './sliderimage/finallogo.png';
import { MdArrowDropDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";


const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);

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
        };

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
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
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        // You can add your search logic here, such as filtering results based on the search query
    };

    

    return (
        <header className='shadow-2xl '>
            <div className=' p-2 bg-gradient-to-r  from-blue-800 from-7% via-blue-900 via-40% to-blue-950 to-80% 
             grid hidden sm:grid lg:grid-cols-2 m-auto overflow-x-auto font-header'>
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
            <li className='text-[16px] font-medium '>
            <NavLink  className=' hidden  md:hidden lg:block mt-[21px] m-3 p-2 rounded-lg hover:text-blue-800' onClick={toggleDropdown}>Academics </NavLink>
             </li>

                        
            {/* Dropdown Content */}
           <div className={`absolute  lg:p-5 top-full mt-4 ml-[-9rem] w-[15rem] bg-white sm:w-[20rem] lg:w-[34rem] z-40 rounded-md shadow-lg ${dropdownOpen ? '' : 'hidden'}`}>
                <NavLink to="/courses" className='block px-4 py-2 text-blue-800 font-semibold font-semititle'>UNDERGRADUATE PROGRAMMES</NavLink>
                <hr className="border-gray-300 my-2"/>
                <NavLink to="/courses" className='block px-4 py-2 text-gray-800 hover:text-blue-800 font-semibold'>(BSIT) Bachelor of Science in Information Technology</NavLink>
                <NavLink to="/courses" className='block px-4 py-2 text-gray-800 hover:text-blue-800 font-semibold'>(BSHM) Bachelor of Science in Hotel Management</NavLink>
                <NavLink to="/courses" className='block px-4 py-2 text-gray-800 hover:text-blue-800 font-semibold'>(BSBA) Bachelor of Science in Business Administration</NavLink>
            </div>
        </li>
        <li className='text-[16px] font-medium hover:text-blue-800'>
            <NavLink to="/about" className='hidden md:hidden lg:block  mt-[21px] m-3 p-2 rounded-lg '>About</NavLink>
        </li>
        <li className='text-[16px] font-medium hover:text-blue-800'>
            <NavLink to="/connect" className=' hidden  md:hidden lg:block mt-[21px] m-3 p-2 rounded-lg '>Connect</NavLink>
        </li>

  {/* menu icon*/}
        <li onClick={toggleSmallMenu}>
            <IoMenu className='text-gray-900 text-[2.3rem] ml-[5rem] mt-5 lg:hidden justify-self-end cursor-pointer' />
        </li><li className={` flex items-center justify-self-center space-x-4 text-gray-800`}>

  {/* search icon*/}
        <li  onClick={toggleSearch} className="cursor-pointer ml-2 mt-1">
            <RiSearch2Line className='w-[1.2rem] h-[1.2rem] '/>
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
       
    </li>
    </ul>
    {/* Search line inside the main navigation */}
    
</div>
{/* smaller screen menu */}
 <div className={`fixed z-30 h-full w-screen lg:hidden  top-0 right-0 ${menuOpen ? '' : 'hidden'}`}>
                <div className='text-white font-title flex-col bg-gray-900/80 backdrop-blur-lg absolute right-0 top-0 h-screen p-8 gap-8 z-50 flex w-screen'>
                    <IoClose className='text-[40px] font-bold cursor-pointer' onClick={closeMenu} />
                    <ul  className='relative text-[1.7rem]'>
                        <li>
                            <NavLink  onClick={toggleDropdown}>PROGRAMMES</NavLink>
                        </li>
                        <li><NavLink to="/programmes/category1" >ABOUT</NavLink></li>
                        <li><NavLink to="/programmes/category1" >CONNECT</NavLink></li>
                    </ul>
                </div>
            </div>

                
        </header>
    );
}

export default Header;
