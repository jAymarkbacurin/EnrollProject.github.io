import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoRemoveOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import './style.css';



const CardCarousel = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
 
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
          <div key={index} className="px-5 ">
            <div class="card ">
              <div className="bg-white rounded-lg overflow-hidden h-[32rem] cursor-pointer   ">
                <img src={card.image} alt={card.title} className="text-blue-500  w-full h-[19rem] 
                object-cover rounded-lg hover:scale-105 transition duration-400  brightness-75 
                hover:brightness-100  " />   
        
                <div className="my-11 ml-1  ">
                  <div id='line'> <h2 className="text-[1rem] flex font-bold mb-2 text-blue-900  "><IoRemoveOutline className='mt-[5px] mr-2'/>{card.title}</h2>
                  </div>
                  <p className="text-black  text-xl hover:text-blue-800 font-title tracking-wide ">{card.text}</p>
              
                </div> <span className='flex items-end ml-1 absolute bottom-[50px] text-gray-400 text-[15px] font-para font-meduim'><LuCalendarHeart className='mb-[4px] ' /><h1 className='ml-2'>{card.date}</h1></span>
              </div>
            </div>
            
          </div>
   
      ))}
    
    </Slider>
  );
};

export default CardCarousel;
