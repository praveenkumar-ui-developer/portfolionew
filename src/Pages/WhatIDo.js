import { Typography, Box, Divider, Grid, Container } from '@mui/material'
import React from 'react'
import '../Styles/home.css'

const WhatIDo = () => {
  return (
    <div id="whatido">
      <Box sx={{ backgroundColor: "#343A40",padding:"50px 0%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", }}>
          <Box>
            <Typography className="whatido-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>SERVICES</Typography>
            <Box className="whatido-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography className='whatido-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>What I Do?</Typography>
              <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
            </Box>
          </Box>
        </Box>

<Container>
        <Box>
          <Grid container rowSpacing={10} columnSpacing={5}>

            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ display: "flex", flexDirection: 'row', gap: "20px" }}>
                <Box sx={{ height: "70px", width: "70px", backgroundColor: "#212529!important", borderRadius: "8px", padding: "15px 15px 15px 15px" }}>
                <i className="fa-sharp fa-solid fa-desktop"></i>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>Website Development</Typography>
                  <Typography sx={{ color: "#fff", opacity: ".5" }}>Designing and building websites tailored to clients' needs, whether it's a simple portfolio site, an e-commerce platform, or a complex web application. </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ display: "flex", flexDirection: 'row', gap: "20px" }}>
                <Box sx={{ height: "70px", width: "70px", backgroundColor: "#212529!important", padding: "15px 15px 15px 15px",borderRadius:"8px" }}>
                <i class="fa-solid fa-tablet-button"></i>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>Responsive Web Design</Typography>
                  <Typography sx={{ color: "#fff", opacity: ".5" }}>Ensuring that websites are optimized for various devices and screen sizes, providing a seamless user experience across desktops, tablets, and mobile devices.</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ display: "flex", flexDirection: 'row', gap: "20px" }}>
                <Box sx={{ height: "70px", width: "70px", backgroundColor: "#212529!important", borderRadius: "8px", padding: "15px 15px 15px 15px" }}>
                <i class="fa-regular fa-handshake"></i>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>Website Maintenance and Support</Typography>
                  <Typography sx={{ color: "#fff", opacity: ".5" }}>Providing ongoing maintenance and support services to ensure websites remain secure, up-to-date, and functioning properly.</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ display: "flex", flexDirection: 'row', gap: "20px" }}>
                <Box sx={{ height: "70px", width: "70px", backgroundColor: "#212529!important", borderRadius: "8px",  padding: "15px 15px 15px 15px" }}>
                <i class="fa-brands fa-searchengin"></i>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>Search Engine Optimization </Typography>
                  <Typography sx={{ color: "#fff", opacity: ".5" }}>Optimizing websites to improve their visibility and ranking in search engine results pages (SERPs).</Typography>
                </Box>
              </Box>
            </Grid>

            {/* <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ display: "flex", flexDirection: 'row', gap: "20px" }}>
                <Box sx={{ height: "70px", width: "70px", backgroundColor: "#212529!important", borderRadius: "8px", textAlign: "center", padding: "15px 5px 5px 5px" }}>
                  <i className="fa-solid fa-chart-line"></i>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>Business Analysis</Typography>
                  <Typography sx={{ color: "#fff", opacity: ".5" }}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ display: "flex", flexDirection: 'row', gap: "20px" }}>
                <Box sx={{ height: "70px", width: "70px", backgroundColor: "#212529!important", borderRadius: "8px", textAlign: "center", padding: "15px 5px 5px 5px" }}>
                  <i class="fa-sharp fa-solid fa-people-group"></i>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>Marketing</Typography>
                  <Typography sx={{ color: "#fff", opacity: ".5" }}>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure</Typography>
                </Box>
              </Box>
            </Grid> */}
          </Grid>
        </Box>
        </Container>
      </Box>

    </div>
  )
}

export default WhatIDo