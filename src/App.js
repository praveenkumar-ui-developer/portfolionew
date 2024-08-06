import React, { useState, useEffect } from 'react';
import './Styles/home.css';
import AboutMe from './Pages/AboutMe';
import Resume from './Pages/Resume';
import Navbar from './Component/Navbar';
import WhatIDo from './Pages/WhatIDo';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import RiseLoader from 'react-spinners/RiseLoader';
import GoToTop from './Component/GoToTop';
import Testimonial from './Pages/Testimonial';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Skills from './Pages/Skills';
import Projects from './Pages/project/projects';
import Project from './Pages/pro';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Praveen | Software Development | Frontend Developer</title>
        <meta name="description" content="Innovative Front-End Developer with years of Experience in Web Development, Software Development, and SEO." />
        <meta name="keywords" content="Praveen Kumar, portfolio, software development, react developer, frontend developer, javascript developer, seo expert, digital marketing" />
      </Helmet>
      {loading ? (
        <div className='loader d-flex justify-content-center align-items-center'>
          <RiseLoader
            color={'#00FFFF'}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <GoToTop />
          <Home />
          <AboutMe />
          <Resume />
          <WhatIDo />
          <Testimonial />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
