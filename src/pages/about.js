import Header  from "../components/asset/header";
import Footer from "../components/asset/footer";



const About = () => {
    return ( 
        <>
        <Header />
        <section>
       <section className='w-full h-[28rem] relative top-0'>
              <div className="bg-parallax bg-fixed absolute inset-0 bg-cover brightness-50 "></div>
              <div className="absolute inset-0 flex justify-center items-center text-center">
                <div>
                  <h1 className="text-white text-4xl font-bold font-semititle mb-3">
                    About Us
                  </h1>
                
                </div>
              </div>
            </section>

       </section>
        <Footer />
        </>
     );
}
 
export default About;