import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import '../Styles/home.css';
import Typed from 'react-typed';
import Navbar from '../Component/Navbar';

function Home() {
  return (
    <section id="home">
      <video preload='none' autoPlay loop muted playsInline className='backgroung-clip' controls>
        <source src="assets/media/bgvideo1.mp4" type="video/mp4" />
      </video>

      <Container>
        <Box 
          className="home-display" 
          sx={{ 
            display: "flex", 
            flexDirection: { xs: "column", md: "row" }, 
            alignItems: "center", 
            justifyContent: "space-around",
            height: { xs: "auto", md: "100vh" } // Adjust height based on screen size
          }}
        >
          <Box 
            className="title" 
            sx={{ 
              display: "flex", 
              height: { xs: "auto", md: "100vh" }, // Adjust height based on screen size
              flexDirection: "column", 
              gap: "10px", 
              alignItems: "left", 
              justifyContent: "center"
            }}
          >
            <Typography className='title-name' sx={{ fontSize: { xs: "30px", md: "40px" }, color: "white" }}>Hi,</Typography>
            <Typography sx={{ fontSize: { xs: "35px", md: "45px" }, backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text" }}>
              <span style={{ color: "white", fontSize: { xs: "10px", md: "40px" }, paddingRight: "10px" }}>I'm</span>Praveen Kumar
            </Typography>
            <Typed
              className='animation-type'
              strings={[
                'Frontend Developer',
                'Web Developer',
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
            <Link to="contact">
              <Button variant="outlined" sx={{
                borderRadius: '25px',
                background: 'linear-gradient(120deg, #3498db, #8e44ad)',
                borderColor: "aqua",
                marginTop: "10px",
                color: "aqua",
                opacity: '.8',
                textTransform: 'capitalize',
                fontSize: "19px",
                padding: "10px 30px 10px 30px",
                ":hover": {
                  backgroundColor: "aqua",
                  borderColor: "white",
                  borderWidth: "2px",
                  color: "white"
                }
              }}>Contact Me</Button>
            </Link>
            <Link to='about' spy={true} smooth={true} offset={0} duration={400} className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </Box>
          <Box className="img-container">
            <img className='praveenbg' src="assets/media/home/praveenbg.png" width={400} height={450} alt="Background Image" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Home;
