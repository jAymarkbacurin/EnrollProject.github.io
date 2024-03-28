import React from 'react';
import CardCarousel from './Card'; 
import image1 from './image/image6.jpg';
import image2 from './image/image7.jpg';
import image3 from './image/mr and ms intrams.jpg';
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
    <div className=' md:mx-[1rem] 2xl:mx-[10rem]'>
        <div class="container mx-auto my-[6rem] ">
            <div class="grid grid-cols-1 md:grid-cols-2 w-full mb-3 p-3 mx-5   ">
                <hr class="w-[60rem]  my-8  border-0 " />
                    <h1 class="absolute   text-blue-900 text-[2.8rem] font-meduim font-title ">
                       <NavLink to="/news">
                          News & Events
                       </NavLink>
                    </h1>
                    <button className='p-3 lg:justify-self-end justify-self-start mr-9 rounded-full font-medium
                     font-semititle  transform hover:scale-105 text-white bg-blue-900 '>
                      <NavLink className="p-8 ">
                        View all
                      </NavLink> 
                    </button>
            </div>
          <CardCarousel cards={cards} /> 
        </div>
    </div>
  );
};

export default App;
