import React, { useState, useEffect } from 'react'
import './Styles/home.css'
import { Box } from '@mui/material'
import AboutMe from './Pages/AboutMe'
import Resume from './Pages/Resume'
import Navbar from './Component/Navbar'
import WhatIDo from './Pages/WhatIDo'
import Contact from './Pages/Contact'
import Home from './Pages/Home';
import RiseLoader from "react-spinners/RiseLoader";
import GoToTop from './Component/GoToTop'
import Education from './Pages/Education'
import Testimonial from './Pages/Testimonial'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Skills from './Pages/Skills'


function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init(2000);
  }, [])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 600)
  }, [])

  return (
    <div>
      {
        loading ?
          <Box className='loader'>
            <RiseLoader
              color={'#00FFFF'}
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </Box>
          :
          
          <div>
            
            <Navbar />
            <GoToTop />
            <Home />
            <AboutMe />
            <Education />
            <Resume />
            <WhatIDo />
            {/* <Portfolio /> */}
            {/* <Skills/> */}
            <Testimonial />
            <Contact />
          
          </div>
      }
    </div>
  
  );
}

export default App;
