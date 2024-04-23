import sophia from '../BAimages/faculty-images/sophia-faculty.jpg';
import jake from '../BAimages/faculty-images/jake-faculty.jpg';
import soren from '../BAimages/faculty-images/soren-faculty.jpg';
import zed from '../BAimages/faculty-images/zed-faculty.jpg';
import lukkanit from '../BAimages/faculty-images/lukkanit-faculty.jpg';
import angelica from '../BAimages/faculty-images/angelica-faculty.jpg';
import paul from '../BAimages/faculty-images/paul-faculty.jpg';
import jelmar from '../BAimages/faculty-images/jelmar-faculty.jpg';
import rose from '../BAimages/faculty-images/rose-faculty.jpg';

const Faculty = () => {
    return ( 
    
<div >
<div className='font-para pt-[4rem] ml-[6rem]'>
    <h1 className='text-[2rem] font-bold text-blue-900'>Our Faculty</h1>
    <p className='max-w-[70%] py-4'>Meet your dedicated teachers, the guiding force behind your academic journey. With passion, expertise, and a commitment to your success, they're here to inspire and support you every step of the way.</p>
</div>
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-[2rem] mx-[2rem] py-[2rem] pb-[4rem]'>
       
        {[
            { name: 'Sophia Panget', imgSrc: sophia, discription: 'Department Head'  },
            { name: 'Angelica Songleo', imgSrc: angelica, discription: 'Assistant Professor of Information Technology'  },
            { name: 'Jake Agustin', imgSrc: jake, discription: 'Assistant Professor of Information Technology'  },
          
          
        ].map((faculty, index) => (
            <div key={index} className='font-para text-[1.3rem] 2xl:pt-[3rem] py-[1rem]'>
                <div className='flex justify-center ' >
                    <div className='rounded-full  w-[14rem] h-[14rem] '>
                        <img src={faculty.imgSrc} alt={`${faculty.name}-profile-picture`} className='w-full h-full rounded-full  '/>
                    </div>
                </div>
                <div className='p-4  mt-[1rem]'>
                    <h1 className='flex justify-center pb-2 underline decoration-yellow-500 text-gray-800'> {faculty.name}</h1>
                    <p className='text-center font-title tracking-widest text-[1rem] text-gray-700'>{faculty.discription}</p>
                </div>
            </div>
        ))}
    </div>
</div>

                
   
            
  
     );
}
 
export default Faculty;