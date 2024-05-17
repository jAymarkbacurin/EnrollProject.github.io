import React from 'react';
import Header from '../../components/asset/courses-header/courseheader'
import Footer from '../../components/asset/footer'
import { IoRemoveOutline } from "react-icons/io5";
import image1 from './news-images/image6.jpg';
import image2 from './news-images/image7.jpg';
import image3 from './news-images/mr and ms intrams.jpg';
import graduate from './news-images/graduate.jpg'
import Logo from './news-images/finallogo.png'
import news from './news-images/news.jpg'

import { NavLink } from 'react-router-dom';

const NewsPage = () => {
    return ( 
      <>
      < Header />
      <section className=' grid  lg:py-[4rem] py-[2rem]  mx-[10px]  lg:mx-[1.3rem]  xl:mx-[2rem] 2xl:mx-[4rem]  justify-self-center '>
      <div className='flex justify-center items-center'>
        <div>
        <h1 className='font-title text-[6rem] text-blue-800'>
          News & Events
        </h1>
        <div className='relative max-w-[70rem] h-auto  '>
          <img 
          src={news}
          className=' w-full h-full object-cover '
          />
          <div className='absolute top-0 w-full h-full border-yellow-500 border-[1px] m-[18px] '></div>
        </div>
        </div>
      </div>
     <section className='grid-cols-1 lg:grid-cols-9 grid   2xl:py-[2rem]'>
      <div className='col-start-2 col-span-4'>
asdd
      </div>
      <div className=' col-start-4 col-span-5'>
       {[
            {
            title: 'TREE PLANTING ACTIVITIES', 
            text: 'Roots of Change: A Students Journey in Tree Planting', 
            imgSrc: image1,
            description: 'In a heartfelt initiative to combat climate change and beautify the campus, students have embarked on a transformative journey of tree planting. Dubbed "Roots of Change," this project highlights the dedication and hard work of young environmental stewards as they contribute to a greener future. Through their efforts, the community is witnessing the positive impact of unity and environmental responsibility.' ,
            date: 'March 1, 2023'
            },
         
            { 
             title: 'TREE PLANTING ACTIVITIES', 
             text: 'Roots of Change: A Students Journey in Tree Planting',
             imgSrc: image2, 
             description: 'In a heartfelt initiative to combat climate change and beautify the campus, students have embarked on a transformative journey of tree planting. Dubbed "Roots of Change," this project highlights the dedication and hard work of young environmental stewards as they contribute to a greener future. Through their efforts, the community is witnessing the positive impact of unity and environmental responsibility.' ,
             date: 'March 1, 2023'
            },
            { 
             title: 'TREE PLANTING ACTIVITIES', 
             text: 'Roots of Change: A Students Journey in Tree Planting',
             imgSrc: image3, 
             description: 'In a heartfelt initiative to combat climate change and beautify the campus, students have embarked on a transformative journey of tree planting. Dubbed "Roots of Change," this project highlights the dedication and hard work of young environmental stewards as they contribute to a greener future. Through their efforts, the community is witnessing the positive impact of unity and environmental responsibility.' ,
             date: 'March 1, 2023'
            },
            
          
          
        ].map((News, index) => (
            <section key={index} className="  p-[2rem]">
              <div className="gap-4 group ">
              <section className="cursor-pointer group-hover:bg-blue-100 bg-white border-[1px] rounded-lg overflow-hidden transition ease-in-out group-hover:-translate-y-[1px] group-hover:scale-105 duration-700">
              <div className="w-full md:h-[30rem] ">
                  <img
                      className="w-full h-full object-cover group-hover:scale-110 ease-in-out  duration-700 transform "
                      src={News.imgSrc}
                      alt={News.title}
                  />
              </div>
              <div className="mt-4  border-white group-hover:border-blue-200 border-b-[6px]">
                <div className='p-[20px] px-[50px]'>
                   <h2 id="lineY" className="w-[20rem] font-title text-[1.1rem] text-blue-800 flex items-center tracking-widest ">
                      <IoRemoveOutline className="mt-[1px] mr-2" />
                      {News.title}
                  </h2>
                  <p className="font-para text-[1.4rem] text-gray-800 font-semibold py-[10px] group-hover:underline decoration-blue-800">
                      {News.text}
                  </p>
                  <p className="font-para py-[10px] text-gray-600">{News.description}</p>
                  </div>
                 
                  <p className="font-para text-[14px]  text-gray-500 border-t-[1px] border-black p-[20px] px-[50px]">
                      {News.date}
                  </p>
              </div>
          </section>

                
            </div>

        </section>
        ))}
        </div>
        </section>
        </section>
<Footer/>
    </>
   
  );
};


export default NewsPage;
