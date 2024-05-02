import React from 'react'
import { Box, Typography, Divider, Grid, Button, Container } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Skills from './Skills';


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
    
      <Box sx={{ backgroundColor: "#212529!important", textAlign: "center",padding:"50px 0%" }}>
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
What excites me most about web development is the opportunity to create innovative solutions and bring ideas to life through code. I thrive on challenges and enjoy pushing the boundaries of what's possible on the web. Whether it's optimizing performance, creating engaging user experiences, or diving into new technologies, I'm always eager to learn and grow as a developer.</Typography>

          <Box sx={{ marginTop: "5rem" }}>
            <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "26px" }}>My Skills</Typography>

            {/* <Grid container rowSpacing={4} columnSpacing={5} marginTop={0}>

             

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>HTML/CSS</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>80%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={80} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>JavaScript</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>70%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={70} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>React JS</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>75%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={75} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>Responsive Design</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>90%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={90} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>Bootstrap</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>85%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={85} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>JQuery</Typography>
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>45%</Typography>
                  </Box>
                  <BorderLinearProgress variant="determinate" value={45} />
                </Box>
              </Grid>
            </Grid> */}
            <Skills/>
            
          </Box>


          <Box>
            <a href='https://drive.google.com/file/d/1ha9LblWr46vg-k3Z_ZjQBwhQbm_FMNHa/view' target="_blank" rel="noopener noreferrer">
              <Button variant="outlined"
                sx={{
                  padding: "10px", marginTop: "2%", borderRadius: "25px", width: "200px", color: "aqua", borderColor: "aqua"
                  , ":hover": {
                    background  :'linear-gradient(120deg, #3498db, #8e44ad)',
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

  )
}

export default Resume