import {useEffect } from 'react'
import AOS from "aos";
import Navbar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Service from './components/Services/Service';
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore/AppStore';
import Testimonials from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 200,
    });
    AOS.refresh();
  }, []);

  return(
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-400 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  )

}

export default App
