import {useEffect } from 'react'
import AOS from "aos";
import Navbar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Service from './components/Services/Service';

function App() {
  const setAos = () => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 200,
    });
  }

  useEffect(() => {
    setAos()
    AOS.refresh();
  }, []);

  return(
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-400 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Service />
    </div>
  )

}

export default App
