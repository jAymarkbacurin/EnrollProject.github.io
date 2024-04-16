import React from 'react';
import Bsit1 from '../ITimage/Mission-Vision-images/bsiti1.jpg';
import { GiTechnoHeart } from "react-icons/gi";
import '../../style.css';

const CardBsit = () => {
    const iconSize = 60;
    return ( 
        <div className="bg-gray-100 my-[3rem] ">
                <div className='flex justify-center pt-[2rem]'>

                    <h1 className='font-title text-[3rem] border-b-[10px]  text-blue-950 border-yellow-500 '>Department Mission and vision</h1>
                </div>
                <section className='grid xl:grid-cols-3 md:grid-cols-2 2xl:mx-[15rem]  mx-[3rem] py-[4rem] gap-4'>
                <div className=' relative bg-white hover:bg-blue-100 overflow-hidden group  hover:shadow-md shadow-gray-400 transition duration-500 transform hover:-translate-y-[4px]  shadow-xl'>
                        <div>
                            <img src={Bsit1} className=' group-hover:scale-105 transition duration-150 ease-out brightness-50 group-hover:brightness-100'/>
                        </div> <h1  className='font-title text-[3rem] px-6 text-blue-900 group-hover:underline decoration-yellow-500'>mission</h1>
                        <div className=' '>
                           
                            <p className='font-para  text-justify p-6'>To leverage cutting-edge technology to empower businesses and individuals, providing innovative solutions that streamline operations, enhance productivity, and drive sustainable growth in a rapidly evolving digital landscape. We aim to foster a culture of collaboration, creativity, and continuous learning, ensuring our clients stay ahead in an ever-changing technological world.</p>
                        </div>
                    </div>
               

                </section>
              


          


        </div>
     );
}
 
export default CardBsit;
