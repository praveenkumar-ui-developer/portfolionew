import React from 'react';
import { Box, Typography, Divider, Button, Container } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Skills from './Skills';
import Education from './Education';
// import Certification from './Certification';
// import Experience from './Experience';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'dark' ? 200 : 100],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: theme.palette.mode === 'light' ? 'linear-gradient(120deg, #3498db, #8e44ad)' : '#308fe8',
  },
}));

const Resume = () => {
  return (
    <div id="resume">
      <Box sx={{ backgroundColor: "#212529!important", textAlign: "center", padding: "50px 0%" }}>
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography className="resume-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>SUMMARY</Typography>
              <Box className="resume-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography className='resume-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>Resume</Typography>
                <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
              </Box>
            </Box>
            <Typography sx={{ textAlign: "left", fontSize: "15px", color: "white", marginTop: "-10px" }}>
              What excites me most about web development is the opportunity to create innovative solutions and bring ideas to life through code. I thrive on challenges and enjoy pushing the boundaries of what's possible on the web. Whether it's optimizing performance, creating engaging user experiences, or diving into new technologies, I'm always eager to learn and grow as a developer.
            </Typography>
             <Education />
            {/* <Certification />
            <Experience />  */}
            <Box sx={{ marginTop: "5rem" }}>
              <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "26px" }}>My Skills</Typography>
              <Skills />
            </Box>
            <Box>
              <a href='https://drive.google.com/file/d/1JiFhOME6rEJL66ghYqhb5B7MNxhEa6cM/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                <Button variant="outlined"
                  sx={{
                    padding: "10px", marginTop: "2%", borderRadius: "25px", width: "200px", color: "aqua", borderColor: "aqua"
                    , ":hover": {
                      background: 'linear-gradient(120deg, #3498db, #8e44ad)',
                      borderColor: "white",
                      borderWidth: "1.4px",
                      color: "white"
                    }
                  }}>
                  View Resume
                </Button></a>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Resume;
