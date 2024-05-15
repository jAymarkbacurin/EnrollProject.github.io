import React from 'react';
import CardCarousel from './Card'; 
import image1 from './image/news-images/image6.jpg';
import image2 from './image/news-images/image7.jpg';
import image3 from './image/news-images/mr and ms intrams.jpg';
import { NavLink } from 'react-router-dom';

const cards = [
  { 
    title: 'TREE PLANTING ACTIVITIES', 
    text: 'Roots of Change: A Students Journey in Tree Planting',
    image: image1,
    date: 'March 1, 2024',
    link: '/news/tree-planting-activities'
  },
  { 
    title: 'BENGUET EXPLOSION MARTIAL ARTS', 
    text: 'The Triumph of a Martial Arts Scholar',
    image: image2,
    date: 'March 1, 2024',
    link: '/news/benguet-explosion-martial-arts'
  },
  { 
    title: 'Ms. AND Mr. INTRAMS', 
    text: 'Bakunawas Best: Ms. & Mr. Intramurals Champions',
    image: image3,
    date: 'March 1, 2024',
    link: '/news/ms-and-mr-intrams'
  },

 
];

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
  return (
    <div className='bg-gray-100 relative  mx-[10px]  lg:mx-[1.3rem]  xl:mx-[2rem] 2xl:mx-[4rem] pt-[4rem] border-r-[1px] border-l-[1px] border-t-[1px] border-gray-300 '>
   
    
            <div class=" w-full mb-3 grid md:grid-cols-2 border-t-[1px] border-gray-300 pt-[4rem] ">
              
            <div class="text-blue-800 text-[4rem] px-[3rem]   font-medium font-title relative     w-full">
      
              <NavLink to="/news" class="z-10  w-full  ">
                  News & 
                  Events
              </NavLink>
          </div>
          <div className="text-white text-[1.3rem] font-medium font-para relative w-full flex md:justify-end items-center px-[3rem]">
            <NavLink to="/news" onClick={scrollToTop}>
              <h1 className=" px-[3rem] py-3 rounded-full  transition ease-in-out delay-150 bg-blue-800 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 duration-300">
                View All
              </h1>
            </NavLink>
          </div>

            </div>
     <div> <CardCarousel cards={cards} /></div>
    </div>
  );
};

export default App;
