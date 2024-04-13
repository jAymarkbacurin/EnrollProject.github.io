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
    <div className='py-6 pb-[6rem] '>
      {/* Blue div behind all cards */}
    
   
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2   ">
            <div class="card group">
              <div className="bg-gray-200 group-hover:bg-blue-950 overflow-hidden h-[32rem] cursor-pointer hover:shadow-md hover:shadow-gray-400 transition duration-500 transform hover:-translate-y-[4px] relative">
                {/* Here is your card content */}
                <img src={card.image} alt={card.title} className="text-gray-700 w-full h-[19rem] object-cover group-hover:scale-105 transition duration-150 ease-out brightness-50 group-hover:brightness-100" />
                <div className="my-11 ml-1">
                  <div>
                    <h2 className="text-[1.3rem] flex font-title mb-2 text-blue-800 group-hover:text-white group-hover:underline decoration-yellow-500 ">
                      <IoRemoveOutline className='mt-[5px] mr-2' />
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 group-hover:text-white text-[1.2rem] hover:underline decoration-yellow-500    font-para font-semibold tracking-wide ml-6">{card.text}</p>
                </div>
                <span className='flex items-end ml-6 bottom-4 absolute  text-gray-400 group-hover:text-gray-200 text-[15px] font-para font-medium '><LuCalendarHeart className='mb-[4px] ' /><h1 className='ml-2'>{card.date}</h1></span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
