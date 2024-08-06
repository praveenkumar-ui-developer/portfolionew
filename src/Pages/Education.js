import React from 'react';
import { Box, Typography, Divider, Grid, Container } from '@mui/material';

const Education = () => {
  return (
    <div>
      <div id="education">
        <Box sx={{ backgroundColor: "#343A40!important", textAlign: "center", padding: "50px 0%" }}>
          <Container>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box>
                <Typography className="resume-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>EDUCATION</Typography>
                <Box className="resume-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography className='resume-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>What I Learn</Typography>
                  <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
                </Box>
              </Box>

              <Box sx={{ marginTop: "2rem" }}>
                <Typography sx={{ fontSize: "26px", color: "#fff", fontWeight: "bold", textAlign: "left", padding: "20px 0px", marginTop: "10px" }}>My Education</Typography>
                <Grid container rowSpacing={5} columnSpacing={5} alignItems="center" justifyContent="center">
                  <Grid item xs={12} md={12}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "120px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>2018-2022</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>Bachelor of Technology</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>Santhiram Engineering College, Nandyal</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>Successfully completed my graduation in Mechanical Engineering with a 7.2 CGPA</Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Typography sx={{ fontSize: "26px", color: "#fff", fontWeight: "bold", textAlign: "left", padding: "20px 0px", marginTop: "10px" }}>My Certification</Typography>
                <Grid container rowSpacing={5} columnSpacing={5} alignItems="center" justifyContent="center">
                  <Grid item xs={12} md={5}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "120px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>2021</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>MERN Stack Development</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>Elearn Infotech</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>Complete Certification Course in Fullstack including HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, and MongoDB in a Private Institute</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "120px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>2022</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>React - The Complete Guide</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>Udemy</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>Completed my ReactJS including React Router Dom Certification Course on Udemy Platform</Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Typography sx={{ fontSize: "26px", color: "#fff", fontWeight: "bold", textAlign: "left", padding: "20px 0px", marginTop: "10px" }}>My Experience</Typography>
                <Grid container rowSpacing={5} columnSpacing={5} alignItems="center" justifyContent="center">
                  <Grid item xs={12} md={12}>
                    <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", padding: "5%", textAlign: "left", height: "250px" }}>
                      <Box sx={{ background: "linear-gradient(120deg, #3498db, #8e44ad)", width: "120px", borderRadius: "5px", textAlign: "center" }}>
                        <Typography sx={{ fontSize: "15px", color: "black", fontWeight: "bold", padding: "3px" }}>2022-Present</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "23px", color: "#fff", paddingTop: "7px" }}>Frontend Developer</Typography>
                      <Typography sx={{ fontSize: "18px", color: "aqua", paddingTop: "7px" }}>Saama Technologies</Typography>
                      <Typography sx={{ fontSize: "15px", color: "#fff", opacity: ".7", paddingTop: "7px" }}>Developing User Interfaces: Designing and developing interactive user interfaces using ReactJS, JavaScript, JSX, CSS, HTML, Bootstrap, and other related technologies</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </div>
  );
};

export default Education;
