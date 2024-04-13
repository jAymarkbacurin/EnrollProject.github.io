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
    <div className='bg-blue-950 relative'>
   
    <div className='mx-[0rem] md:mx-[6rem] 2xl:mx-[10rem] 3xl:mx-[16rem]  '>
        <div class="container mx-auto mt-12 ">
            <div class=" w-full mb-3 p-3  flex justify-center ">
              
            <h1 class="text-white text-[3.3rem] font-medium font-title relative">
              <span class="hidden lg:block absolute left-[16rem] top-1/2 w-[20rem]  h-[3px] bg-yellow-500"></span>
              <span class="hidden lg:block absolute right-[16rem] top-1/2  w-[20rem]   h-[3px] bg-yellow-500"></span>
              <NavLink to="/news" class="z-10 relative lg:decoration-blue-950 underline decoration-yellow-500">
                  News & 
                   Events
              </NavLink>
          </h1>


            </div>
           <div> <CardCarousel cards={cards} /></div>
             
        </div> 
    </div> 
    </div>
  );
};

export default App;
