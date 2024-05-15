import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoRemoveOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import './style.css';

const CardCarousel = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
    <div className='py-6 pb-[4rem] border-b-[1px] border-gray-300 p-4 '>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-[1rem]">
            <NavLink to={card.link} className="block group">
              <div className="card bg-gray-100 hover:bg-blue-100 overflow-hidden h-[32rem] cursor-pointer hover:shadow-md shadow-gray-400 transition duration-500 transform hover:-translate-y-[4px] relative">
                <img src={card.image} alt={card.title} className="text-gray-700 w-full h-[19rem] object-cover group-hover:scale-105 transition duration-150 ease-out brightness-70 group-hover:brightness-100" />
                <div className="my-11 ml-1">
                  <div>
                    <h2 className="text-[1.3rem] flex font-title mb-2 text-blue-900 group-hover:underline decoration-yellow-500">
                      <IoRemoveOutline className='mt-[5px] mr-2' />
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 text-[1.2rem] hover:underline decoration-yellow-500 font-para font-semibold tracking-wide ml-6">{card.text}</p>
                </div>
                <span className='flex items-end ml-6 bottom-4 absolute text-gray-300 group-hover:text-gray-400 text-[15px] font-para font-medium'>
                  <LuCalendarHeart className='mb-[4px]' />
                  <h1 className='ml-2'>{card.date}</h1>
                </span>
              </div>
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
