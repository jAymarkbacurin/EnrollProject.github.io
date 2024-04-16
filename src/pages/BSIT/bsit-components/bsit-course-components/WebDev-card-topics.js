import React, { useState } from 'react';
import { BsDot } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Requirements from '../../../../components/asset/requirements';

const TopicDropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const iconSize = 20;
  const boxSize = isOpen ? 'w-[25rem] md:w-[40rem] lg:w-[28rem] lg:h-[10rem] h-[12.5]' : 'w-[25rem] md:w-[40rem] lg:w-[28rem] h-[4.5rem]';

  return (
    <section className='flex justify-center'>
      <div className={`border-t-[3px] border-gray-200 p-4 transition-all duration-300 ease-in-out cursor-pointer ${boxSize}`}>
        <div className="flex" onClick={toggleDropdown}>
        <h1 className="mr-auto font-para text-[1rem] font-semibold  text-gray-800">{title}</h1>
          <IoIosArrowDropdownCircle size={iconSize} className={isOpen ? 'rotated  ' : 'not-rotated'} />
        </div>
        {isOpen && (
          <div>
            <ul className='font-para text-[1rem] ml-4'>
              {content.map((item, index) => (
                <li key={index} className='flex'><BsDot/> {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

const Mobiletopics = () => {
  const topics = [
    { title: 'Introduction to Programming', content: ['Overview of client-server architecture', 'Understanding the HTTP protocol', 'Introduction to HTML, CSS, and JavaScript'] },
    { title: 'Introduction to Mobile Development', content: ['Overview of mobile platforms (iOS, Android)', 'Native vs. cross-platform development', 'Understanding the mobile app lifecycle'] },
    { title: 'User Interface Design', content: ['Principles of mobile UI/UX design', 'Layouts, views, and components', 'Designing for various screen sizes and resolutions'] },
    { title: 'Mobile App Architecture', content: ['Model-View-Controller (MVC) architecture', 'Separation of concerns: Models, Views, and Controllers', 'Introduction to MVVM (Model-View-ViewModel) architecture'] },
    { title: 'Data Management', content: ['Storing data locally using SharedPreferences (Android) and UserDefaults (iOS)', 'SQLite database for persistent storage', 'Consuming RESTful APIs for data retrieval'] },
    { title: 'Mobile App Security', content: ['Secure storage of sensitive data', 'Authentication and authorization mechanisms', 'Securing network communications with HTTPS'] },
  ];

  return (
    <div className='3xl:right-[12rem] z-10'>
      <div className='flex justify-center'>
        <div className='bg-white border-t-[10px] lg:border-none border-blue-500 shadow-lg '>
          <h1 className='lg:w-[28rem] md:w-[40rem] w-[28rem] font-para font-bold text-[2rem] my-8 ml-9 text-blue-900 '>Web Development   <hr className='border-[2px] border-yellow-400 w-[10rem]' /> </h1>
          <h1 className='lg:w-[28rem] md:w-[40rem] w-[28rem] font-title text-[1.2rem] my-4 ml-9 text-gray-800 tracking-widest'> Topics Covered</h1>
          {topics.map((topic, index) => (
            <TopicDropdown key={index} title={topic.title} content={topic.content} />
          ))} <Requirements/>
        </div>
      </div>
      
    </div>
  );
};

export default Mobiletopics;
