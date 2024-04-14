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
    <div className='bg-gray-100 relative py-[3rem]'>
   
    <div className='mx-[0rem]    '>
        <div class="container mx-auto mt-12 ">
            <div class=" w-full mb-3 p-3  flex justify-start">
              
            <h1 class="text-gray-700 text-[4rem] font-medium font-title relative">
      
              <NavLink to="/news" class="z-10  underline decoration-yellow-500">
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
