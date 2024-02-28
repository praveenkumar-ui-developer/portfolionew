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
            <Typography className="testimonial-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>TESTIMONIAL</Typography>
            <Box className="testimonial-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography className='testimonial-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>Client Speak</Typography>
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
                <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <img className="client-image" src="assets/media/testimonial/client-sm-1.jpg" width={70} height={70} />
                    <Box>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>Dennis Jacque</Typography>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: "GrayText" }}>
                    "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry."
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <img className="client-image" src="assets/media/testimonial/client-sm-2.jpg" width={70} height={70} />
                    <Box>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>4Dennis Jacque</Typography>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: "GrayText" }}>
                    "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry."
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <img className="client-image" src="assets/media/testimonial/client-sm-3.jpg" width={70} height={70} />
                    <Box>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>Dennis Jacque</Typography>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: "GrayText" }}>
                    "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry."
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>

            <SwiperSlide>
              <Box sx={{ bgcolor: "#212529!important", padding: "4% 5% 15% 5%" }}>
                <Box sx={{ bgcolor: "black", borderRadius: "5px", opacity: ".8", display: "flex", flexDirection: "column", gap: "25px", padding: "30px" }}>
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <img className="client-image" src="assets/media/testimonial/client-sm-4.jpg" width={70} height={70} />
                    <Box>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}>Dennis Jacque</Typography>
                      <Typography sx={{ fontWeight: "bold", color: "#fff", fontSize: "14px", opacity: ".6" }}>User from USA</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: "GrayText" }}>
                    "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry."
                  </Typography>
                </Box>
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