import React, { useState } from 'react';
import { BsDot } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";


const TopicDropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const iconSize = 20;
  const boxSize = isOpen ? '  lg:h-[10rem] h-[10rem]' : '  h-[5rem]';

  return (
    <section className='flex justify-center '>
      <div className={`border-t-[2px] border-gray-200 p-4 transition-all duration-300 ease-in-out cursor-pointer w-full ${boxSize}`}>
        <div className="flex" onClick={toggleDropdown}>
          <h1 className="mr-auto ml-[3rem] font-para  lg:text-[1.3rem] text-[1rem]    text-gray-800">{title}</h1>
          <IoIosArrowDropdownCircle size={iconSize} className={isOpen ? 'rotated -z-10' : 'not-rotated -z-10'} />
        </div>
        {isOpen && (
          <div>
            <ul className='font-para ml-[5rem] lg:mt-[1rem]'>
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

const HMtopics = () => {
  const topics = [
    { title: 'Introduction to Programming', content: ['Overview of client-server architecture', 'Understanding the HTTP protocol', 'Introduction to HTML, CSS, and JavaScript'] },
    { title: 'Introduction to Mobile Development', content: ['Overview of mobile platforms (iOS, Android)', 'Native vs. cross-platform development', 'Understanding the mobile app lifecycle'] },
    { title: 'User Interface Design', content: ['Principles of mobile UI/UX design', 'Layouts, views, and components', 'Designing for various screen sizes and resolutions'] },
    { title: 'Mobile App Architecture', content: ['Model-View-Controller (MVC) architecture', 'Separation of concerns: Models, Views, and Controllers', 'Introduction to MVVM (Model-View-ViewModel) architecture'] },
    { title: 'Data Management', content: ['Storing data locally using SharedPreferences (Android) and UserDefaults (iOS)', 'SQLite database for persistent storage', 'Consuming RESTful APIs for data retrieval'] },
    { title: 'Mobile App Security', content: ['Secure storage of sensitive data', 'Authentication and authorization mechanisms', 'Securing network communications with HTTPS'] },
  ];

  return (
    <div className='md:px-[4rem] px-[10px] z-10'>
 
    <div className='bg-gray-100 py-[1rem] w-full border-t-[10px] lg:border-none border-blue-500  sm:px-[4rem] '>
        <h1 className='w-full font-para font-bold md:text-[2rem] text-[1.5rem] my-8 ml-9 text-blue-900'>Hospitality Management  </h1>
          <h1 className=' w-full font-title  text-[1.2rem] my-4 ml-9 text-gray-800 tracking-widest'> Topics covered in this course include:</h1>
          {topics.map((topic, index) => (
            <TopicDropdown key={index} title={topic.title} content={topic.content} />
          ))}
        </div> 

     
      
    </div>
  );
};

export default HMtopics;
