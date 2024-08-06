import React from 'react';
import { Box, Typography, Grid, Divider, Container } from '@mui/material';
import { Helmet } from 'react-helmet';

const AboutMe = () => {
  return (
    <div id="about">
      <Helmet>
        <title>Praveen | Software Development | Frontend Developer</title>
        <meta
          name="description"
          content="I am an Innovative Front-End Developer with multiple Years of Experience in Web Development, Software Development, and SEO."
        />
        <meta
          name="keywords"
          content="Praveen Kumar, praveen kumar portfolio, praveen kumar paradesi, praveen portfolio, software development, praveen kumar software developer, praveen kumar react developer, praveen kumar frontend developer, react developer, javascript developer, praveen kumar seo expert, seo expert, frontend developer, praveen kumar digital marketing"
        />
      </Helmet>
      <Box sx={{ backgroundColor: "#212529!important", width: "100%", padding: "50px 0%" }}>
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box className="about-box">
              <Typography className="about-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>ABOUT ME</Typography>
              <Box className="about-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography className='about-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>Know Me More</Typography>
                <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
              </Box>
            </Box>
            <Box sx={{ padding: "5% 0% 10% 5%" }}>
              <Grid container rowSpacing={5} columnSpacing={5}>
                <Grid item xs={12} sm={12} md={8}>
                  <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                    <Typography className='about-typo' sx={{ color: "white", fontSize: "30px" }}>I'm</Typography>
                    <Typography className='about-typo' sx={{ fontSize: "30px", backgroundImage: "linear-gradient(120deg, #3498db, #8e44ad)", color: "transparent", backgroundClip: "text" }}>Praveen,</Typography>
                    <Typography className='about-typo' sx={{ color: "white", fontSize: "30px" }}> a Web Developer</Typography>
                  </Box>
                  <br></br>
                  <Typography sx={{ color: "white", fontSize: "17px", opacity: ".5" }}>
                    Experienced Front-End Developer proficient
                    in HTML, CSS, and JavaScript, with expertise
                    in modern frameworks like ReactJs. Skilled in
                    creating responsive and visually appealing
                    web applications while ensuring cross-browser compatibility and performance
                    optimization.
                    <br></br><br></br>

                    What excites me most about web development is the opportunity to create innovative solutions and bring ideas to life through code.
                    I thrive on challenges and enjoy pushing the boundaries of what's possible on the web. Whether it's optimizing performance,
                    creating engaging user experiences, or diving into new technologies, I'm always eager to learn and grow as a developer.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Box sx={{ display: "flex", flexDirection: "column" }} className="cnt-link">
                    <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>Name: Praveen Kumar</Typography>
                    <Divider sx={{ bgcolor: "white", width: '70%', margin: "10px 0px 10px 0px" }}></Divider>
                    <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>Email: <a href="mailto:praveenpkumar.2024@gmail.com" alt="Email Link">praveenpkumar.2024@gmail.com</a></Typography>
                    <Divider sx={{ bgcolor: "white", width: '70%', margin: "10px 0px 10px 0px" }}></Divider>
                    <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>Phone: <a href="tel:+91 7095392139" alt="Phone Link">+91 7095392139</a></Typography>
                    <Divider sx={{ bgcolor: "white", width: '70%', margin: "10px 0px 10px 0px" }}></Divider>
                    <Typography sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>From: AP, India</Typography>
                    <Box sx={{ width: "200px" }}>
                      <a href='https://drive.google.com/file/d/1JiFhOME6rEJL66ghYqhb5B7MNxhEa6cM/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                        <button className='resume-btn' variant='contained' type="submit">View My Resume</button>
                      </a>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {/* <section className="count-down">
              <Box sx={{ padding: "0% 10% 0% 25%" }}>
                <Grid container rowSpacing={4} columnSpacing={4}>
                  <Grid className="count-grid" item xs={6} sm={6} md={3} >
                    <Box className="countdown-box" sx={{ marginLeft: "20px", paddingLeft: "10px" }}>
                      <Box display={"flex"}>
                        <Typography className="counter" sx={{ fontSize: '20px', fontWeight: "700", color: "white" }}>
                          2.5
                        </Typography>
                        <Typography sx={{ fontSize: '20px', fontWeight: "700", color: "white" }}>
                          
                        </Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 'bold', fontSize: "15px", color: "white" }}>Years Experience</Typography>
                    </Box>
                  </Grid>
                  <Grid className="count-grid" item xs={6} sm={6} md={3}>
                    <Box className="countdown-box" sx={{ marginLeft: "20px", paddingLeft: "10px" }}>
                      <Box display={"flex"}>
                        <Typography className="counter" sx={{ fontSize: '20px', fontWeight: "700", color: "white" }}>
                          3
                        </Typography>
                        <Typography sx={{ fontSize: '20px', fontWeight: "700", color: "white" }}>
                          +
                        </Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 'bold', fontSize: "15px", color: "white" }}>Happy Clients</Typography>
                    </Box>
                  </Grid>
                  <Grid className="count-grid" item xs={6} sm={6} md={3}>
                    <Box className="countdown-box" sx={{ marginLeft: "20px", paddingLeft: "10px" }}>
                      <Box display={"flex"}>
                        <Typography className="counter" sx={{ fontSize: '20px', fontWeight: "700", color: "white" }}>
                          7
                        </Typography>
                        <Typography sx={{ fontSize: '20px', fontWeight: "700", color: "white" }}>
                          +
                        </Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 'bold', fontSize: "15px", color: "white" }}>Project Done</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </section> */}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default AboutMe;
