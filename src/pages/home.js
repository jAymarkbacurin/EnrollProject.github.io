import Header  from "../components/asset/header";
import Footer from "../components/asset/footer";
import Slider  from "../components/homecomponents/slider";
import  Learning from "../components/homecomponents/learning mv";
import CardNews from "../components/homecomponents/cardsNews";
import Maps from "../components/homecomponents/maps";




const Home = () => {
    return ( 
        <>
        <Header />
        <Slider />
        <Learning />
        <CardNews />
        <Maps />

        <Footer />
        
      
        </>
     );
}
 
export default Home;