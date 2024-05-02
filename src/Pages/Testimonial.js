import { Typography, Box, Divider, Avatar, Container } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonial() {
  return (
    <div id="testimonial">
      <Box sx={{ backgroundColor: "#212529!important",padding:"50px 0%" }}>
        <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography className="testimonial-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>PORTFOLIO</Typography>
            <Box className="testimonial-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography className='testimonial-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>Personal Projects</Typography>
              <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
            </Box>
          </Box>
        </Box>

        <Box>
          <Swiper
            breakpoints={{

              400: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },

              600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              950: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              }
            }
            }
            autoplay={{ delay: 5000 }}
            pagination={{
              clickable: true,

            }}
            loop={true}
            speed={1000}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            navigation={true}

          >
            <SwiperSlide>
              <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
              <a href="https://dailytaskcrud.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <img className="client-image cursor-pointer" src="assets/media/testimonial/dailytask.png" width={70} height={70} />
                    <Box>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>Daily Task Update</Typography>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>Task Tracker</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: "GrayText" }}>
                    "TaskTracker is a user-friendly web application designed to help individuals efficiently track and manage their daily tasks. With TaskTracker."
                  </Typography>
                </Box>
                </a>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
              <a href="https://city-weather-webapplication.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
           
                <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <img className="client-image" src="assets/media/testimonial/whether.png" width={70} height={70} />
                    <Box>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>Weather Application</Typography>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>Real-Time Weather Updates</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: "GrayText" }}>
                    " Get instant access to current weather conditions, including temperature, humidity, wind speed, and more, for any location worldwide."
                  </Typography>
                </Box>
                </a>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
              <a href="https://super-shoping.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
           
                <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <img className="client-image" src="assets/media/testimonial/shopify.png" width={70} height={70} />
                    <Box>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>Ecommerece website</Typography>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>Shopify</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: "GrayText" }}>
                    "you can explore  products, add items to your cart, manage your shopping list, and complete purchases with ease.."
                  </Typography>
                </Box>
                </a>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
              <a href="https://browser-url.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          
                <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <img className="client-image" src="assets/media/testimonial/browser.png" width={70} height={70} />
                    <Box>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>Browser</Typography>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>Wikipidia & Iframes browser</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: "GrayText" }}>
                    "This web browser application allows users to search for information using URLs,The content displayed in the browser is sourced from the websites linked to the provided URL."
                  </Typography>
                </Box>
                </a>
              </Box>
            </SwiperSlide>

          </Swiper>
        </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Testimonial