import { useState, useEffect } from 'react'
import AOS from "aos";
import './App.css'

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
    <div>
      
    </div>
  )

}

export default App
