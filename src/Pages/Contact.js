import { Typography, Box, Divider, Grid, TextField, Button } from '@mui/material'
import React, { useRef, useState } from 'react'
// import { styled } from "@mui/material/styles";
import { Link } from 'react-scroll'


import styled from "styled-components";

import emailjs from "emailjs-com";
import { Snackbar } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  color: white; /* Changed input text color to white */
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: white; /* Changed input text color to white */
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: white; /* Changed input text color to white */
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: ""
    },
    "&:hover fieldset": {
      borderColor: "aqua",
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: "Aqua"
    },
  }
});

function Contact() {
const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pitrwoi",
        "template_9z9c6in",
        form.current,
        "1GtQ2moaDAl6DQ-MF"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;

  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  var {  phone, email, subject, message } = userData;
  
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pitrwoi",
        "template_9z9c6in",
        e.target, // Use e.target to reference the form element
        "1GtQ2moaDAl6DQ-MF"
      )
      .then(
        (result) => {
          // setOpen(true);
          e.target.reset(); // Reset the form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
  //Connect with Firebase
  const submitData = async (e) => {
    e.preventDefault();

    const { name, phone, email, subject, message } = userData;

    if (name && email && subject && message && phone) {
      
      
      
      

 if (phone.length != 10) {
        alert("Invalid Mobile Number")
      }
      else if (!(email.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'))) {
        alert("Invalid Email")
      }
      

        //alert shown
        document.querySelector('.alert').style.display = "block";

        //alert remove
        setTimeout(() => {
          document.querySelector('.alert').style.display = "none"
        }, 3000);

      }

    }


    
  


  return (
    <div id="contact">
      <Box sx={{ height: "100%", backgroundColor: "#212529",padding:"50px 0%" }}>
        <Container>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography className="contact-title" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "110px", color: "white", opacity: ".1", letterSpacing: "4px" }}>CONTACT</Typography>
            <Box className="contact-title1" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography className='contact-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>Get in Touch</Typography>
              <Divider sx={{ bgcolor: "aqua", height: "4px", width: "80px", justifyContent: "center" }}></Divider>
            </Box>
          </Box>
        </Box>

        <Box>
          <Grid container rowSpacing={10} columnSpacing={10}>
            <Grid item xs={12} sm={12} md={7}>
              <Box >
                <Typography sx={{ fontSize: "24px", color: "#fff" }}>Send Us a Note</Typography>
                <Divider sx={{ bgcolor: "aqua", height: "4px", width: "60px", justifyContent: "center", marginTop: "10px" }}></Divider>
               


<>
<ContactForm ref={form} onSubmit={handleSubmit} sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}>
<Typography className='contact-quote' sx={{ textAlign: "center", fontWeight: "bold", fontSize: "25px", color: "white", marginTop: "-70px" }}>Email Me ✉️</Typography>
      
            {/* <ContactTitle sx={{ textAlign: "center", fontWeight: "bold", fontSize: "35px", color: "white", marginTop: "-100px" }}></ContactTitle> */}
            <ContactInput
              placeholder="Your Email"
              type="email"
              name="from_email"
            />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage
              placeholder="Message"
              rows="4"
              name="message"
            />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Email sent successfully!"
            severity="success"
          />
</>


              </Box>63
            </Grid>


            <Grid className='container' item xs={10} sm={10} md={5}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                  <Divider sx={{ bgcolor: "aqua", height: "30px", width: "3px", justifyContent: "center" }}></Divider>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>Contact Us</Typography>
                </Box>
                <Typography sx={{ color: "GrayText", fontSize: "13px" }}>If you have any questions regarding Me, please do not hesitate to get in touch with Me today.</Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "10px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                  <Divider sx={{ bgcolor: "aqua", height: "30px", width: "3px", justifyContent: "center" }}></Divider>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>Contact Details</Typography>
                </Box>

                <Box sx={{ display: "flex", gap: "15px", marginTop: '10px' }}>
                  <i class="fa-solid fa-location-dot"></i>
                  <Typography sx={{ color: "grey" }}>AP, India</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }} className="cnt-link">
                  <i class="fa-solid fa-phone"></i>
                  <Typography sx={{ color: "grey" }}><a href="tel:+91 7095392139">+91 7095392139</a></Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "15px" }} className="cnt-link">
                  <i class="fa-regular fa-envelope"></i>
                  <Typography type="email"  sx={{ color: "aqua"}}><a href="mailto:praveenpkumar.2024@gmail.com">praveenpkumar.2024@gmail.com</a></Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "40px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                  <Divider sx={{ bgcolor: "aqua", height: "30px", width: "3px", justifyContent: "center" }}></Divider>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>Follow Me</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                  <a href='https://www.instagram.com/praveen_9866/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                  <a href='https://www.linkedin.com/in/praveen-kumar-paradesi-99a53022a/' target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                  {/* <a href='#'><i className="fa-brands fa-facebook"></i></a> */}
                  <a href='https://github.com/praveenkumar-ui-developer' target='_blank'><i class="fa-brands fa-github"></i></a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#343A40!important" }}>
        <Box sx={{ padding: "3% 0% 2% 5%" }}>
          <Grid container rowSpacing={2} columnSpacing={0}>
            <Grid item xs={12} sm={6}>
              <Typography className='footer-typo' sx={{ color: "aqua", fontSize: "17px" }}>Thanks for visiting my Portfolio! <br/>We define Your project and Your goals together with You</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <ul className='footer-nav'>
                  <li ><Link to="home" spy={true} smooth={true} offset={0} duration={400}>Home</Link></li>
                  <li><Link to="about" spy={true} smooth={true} offset={0} duration={400}>About</Link></li>
                  <li><Link to="whatido" spy={true} smooth={true} offset={0} duration={400}>What I Do</Link></li>
                  <li><Link to="resume" spy={true} smooth={true} offset={0} duration={400}>Resume</Link></li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      
    </div>
  )
}

export default Contact

