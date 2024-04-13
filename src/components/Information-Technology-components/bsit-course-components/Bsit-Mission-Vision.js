import React from 'react';
import Bsit1 from '../ITimage/Mission-Vision-images/bsiti1.jpg';
import '../stylee.css';

const CardBsit = () => {
    return ( 
        <div className="bg-gray-900 my-[6rem] ">
                <div className='flex justify-center'>

                    <h1 className='font-title text-[3rem] border-b-[10px] border-blue-500 w-[31rem]'>Department Mission and vision</h1>
                </div>
                <section className='grid grid-cols-3 mx-[15rem] py-[4rem] gap-4'>
                    <div>
                        <div>
                            <img src={Bsit1}/>
                        </div>
                        <div className='bg-white'>
                            <h1 className='font-title text-[3rem] px-4'>mission</h1>
                            <p className='font-para  text-justify p-4'>To leverage cutting-edge technology to empower businesses and individuals, providing innovative solutions that streamline operations, enhance productivity, and drive sustainable growth in a rapidly evolving digital landscape. We aim to foster a culture of collaboration, creativity, and continuous learning, ensuring our clients stay ahead in an ever-changing technological world.</p>
                        </div>
                    </div>
                    <div>
                    <div>
                            <img src={Bsit1}/>
                        </div>
                        <div>
                            <h1 className='font-title text-[3rem]'>mission</h1>
                            <p className='font-para  text-justify'>To leverage cutting-edge technology to empower businesses and individuals, providing innovative solutions that streamline operations, enhance productivity, and drive sustainable growth in a rapidly evolving digital landscape. We aim to foster a culture of collaboration, creativity, and continuous learning, ensuring our clients stay ahead in an ever-changing technological world.</p>
                        </div>
                    </div>
                    <div>
                    <div>
                            <img src={Bsit1}/>
                        </div>
                        <div>
                            <h1 className='font-title text-[3rem]'>mission</h1>
                            <p className='font-para  text-justify'>To leverage cutting-edge technology to empower businesses and individuals, providing innovative solutions that streamline operations, enhance productivity, and drive sustainable growth in a rapidly evolving digital landscape. We aim to foster a culture of collaboration, creativity, and continuous learning, ensuring our clients stay ahead in an ever-changing technological world.</p>
                        </div>
                    </div>

                </section>
              


          


        </div>
     );
}
 
export default CardBsit;
