import sophia from '../ITimage/faculty-images/sophia-faculty.jpg';
import jake from '../ITimage/faculty-images/jake-faculty.jpg';
import soren from '../ITimage/faculty-images/soren-faculty.jpg';
import zed from '../ITimage/faculty-images/zed-faculty.jpg';
import lukkanit from '../ITimage/faculty-images/lukkanit-faculty.jpg';
import angelica from '../ITimage/faculty-images/angelica-faculty.jpg';
import paul from '../ITimage/faculty-images/paul-faculty.jpg';
import jelmar from '../ITimage/faculty-images/jelmar-faculty.jpg';
import rose from '../ITimage/faculty-images/rose-faculty.jpg';

const Faculty = () => {
    return ( 
        <div >
            
   <section className='bg-gray-50'>
     <div className="lg:pl-[3rem] 3xl:mx-[10rem] lg:p-2 p-6 my-4">
                
                <div className='flex lg:justify-start justify-center lg:ml-[5rem]  mb-[2rem]'>
                <h1 className='font-title text-[3rem] text-gray-700 ml-[1rem] py-[2rem] flex justify-center items-center'>Department Head</h1>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 mb-[2rem]">
                    <div className="col-span-1 justify-self-center pb-[4rem]">
                     <div className='flex justify-center items-center'><div className=' rounded-tr-[5rem]  w-[20rem] h-[20rem]'>
                        <img src={sophia} alt='sophia-profile-picture' className='rounded-tr-[5rem] rounded-bl-[5rem] border-[10px] border-white w-full h-full'/>
                    </div>
                    </div>
                     

                     </div>
                    <div className="col-span-2 ">
                        <p className='font-para text-[1.1rem] text-justify lg:mr-[5rem] p-4'>
                               <span className='text-blue-500'>Dr. Sophia Hagnaya,</span>  Head of the Information Technology Department, is a powerhouse in the tech realm. Armed with a Master's degree in Computer Science and over a decade of industry experience, Sophia leads with a vision for innovation and efficiency. She's renowned for her ability to implement cutting-edge solutions that drive organizational success, all while fostering an environment of collaboration and creativity. Sophia's leadership is marked by a relentless pursuit of knowledge and a commitment to diversity and inclusion, making her not just a leader but a visionary shaping the digital landscape of tomorrow.
                        </p>
                    </div>
                </div>
            
            </div></section>
      <section className='bg-gray-50'>
    <div className='md:mx-[13rem] 3xl:mx-[17]'>
    <h1 className='font-title text-[3rem] text-gray-700 flex justify-center p-4 py-[5rem]'>meet the teachers</h1>

    <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 pb-[4rem]'>
        {[
            { name: 'Jake Agustin', imgSrc: jake },
            { name: 'Soren Smith', imgSrc: soren },
            { name: 'Zed Zim', imgSrc: zed },
            { name: 'Paul Pierce', imgSrc: paul },
            { name: 'Angelica Dumsang', imgSrc: angelica },
            { name: 'Lukanit Loreano', imgSrc: lukkanit },
            { name: 'Jelmar Tinong', imgSrc: jelmar},
            { name: 'Rose Blackpink', imgSrc: rose }
        ].map((faculty, index) => (
            <div key={index} className='font-para text-[1.3rem]'>
                <div className='flex justify-center ' >
                    <div className='rounded-full  w-[14rem] h-[14rem]'>
                        <img src={faculty.imgSrc} alt={`${faculty.name}-profile-picture`} className='w-full h-full rounded-full border-[10px] border-white'/>
                    </div>
                </div>
                <div className='p-4'>
                    <h1 className='flex justify-center p-4 underline decoration-blue-500'> {faculty.name}</h1>
                    <p className='text-center text-[1.1rem]'>Assistant Professor of Information Technology</p>
                </div>
            </div>
        ))}
    </div>
</div>

                

            </section>     
            
        </div>
     );
}
 
export default Faculty;