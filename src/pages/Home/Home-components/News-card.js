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
  },
  { 
    title: 'BENGUET EXPLOSION MARTIAL ARTS', 
    text: ' The Triumph of a Martial Arts Scholar',
    image: image2,
    date: 'March 1, 2024',
  },
  { 
    title: 'Ms. AND Mr. INTRAMS', 
    text: 'Bakunawas Best:  Ms. & Mr. Intramurals Champions',
    image: image3,
    date: 'March 1, 2024',
  },
 
];

const App = () => {
  return (
    <div className='bg-gray-100 relative   mx-[10px]  lg:mx-[3rem]  xl:mx-[4rem] 2xl:mx-[7rem] pt-[4rem] border-r-[1px] border-l-[1px] border-gray-300 '>
   
    
            <div class=" w-full mb-3 ">
              
            <h1 class="text-blue-800 text-[4rem] px-[3rem] pt-[2rem]   font-medium font-title relative   border-t-[1px] border-gray-300  w-full">
      
              <NavLink to="/news" class="z-10  w-full  ">
                  News & 
                   Events
              </NavLink>
          </h1>

       
            </div>
           
             
     
     <div> <CardCarousel cards={cards} /></div>
    </div>
  );
};

export default App;
