import React, { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import {RxDotFilled} from "react-icons/rx";
import image1 from './image/image3.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image4.jpg';
import image4 from './image/image5.jpg';

const Slider = () => {
    const images = [
        { src: image1,},
        { src: image2 },
        { src: image3 },
        { src: image4 }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex ===  images.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
     {/*  const goToSlide = (imagesIndex) => {
        setCurrentIndex(imagesIndex);
    } */}

    return ( 
        <div className='max-w-[1000px] z-0 h-[380px]  lg:max-w-[2400px] lg:h-[890px] top-0 w-full m-auto  relative group'>
            <div style={{backgroundImage: `url(${images[currentIndex].src})`}} className='w-full h-full bg-center bg-cover duration-500 brightness-50'></div>
            {/* left arrow */}
            
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white/60 cursor-pointer'>
                <FaChevronCircleLeft onClick={prevSlide} size={30}/>
            </div>
            {/* right arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white/60 cursor-pointer'>
                <FaChevronCircleRight onClick={nextSlide} size={30}/>
            </div>
            {/* <div className='flex justify-center '>
                {images.map((images, imagesIndex) => (
                    <div  
                    key={imagesIndex} 
                    onClick={() => goToSlide(imagesIndex) }
                     className='text-2xl cursor-pointer'><RxDotFilled /></div>
                ))}
                
            </div> */}
            
        </div>
    );
}
 
export default Slider;
