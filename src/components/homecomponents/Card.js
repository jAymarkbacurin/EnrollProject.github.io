import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoRemoveOutline } from "react-icons/io5";
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
          <div key={index} className="px-8 ">
            <div class="card ">
              <div className="bg-white  rounded-lg overflow-hidden h-[32rem] cursor-pointer   ">
                <img src={card.image} alt={card.title} className="text-blue-500  w-full h-[19rem] 
                object-cover rounded-lg hover:scale-105 transition duration-400  brightness-100 
                hover:brightness-80  " />   
        
                <div className="my-11  ">
                  <div id='line'> <h2 className="text-[1rem] flex font-bold mb-4 text-blue-900  "><IoRemoveOutline className='mt-[5px] mr-2'/>{card.title}</h2>
                  </div>
                  <p className="text-black  text-xl hover:text-blue-800 font-title ">{card.text}</p>
                </div>
              </div>
            </div>
          </div>
   
      ))}
      
    </Slider>
  );
};

export default CardCarousel;
