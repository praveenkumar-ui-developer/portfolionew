import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const SkillBox = ({ logo, black, white, skill }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "100%",
        maxWidth: "200px", 
        height: "150px", 
        borderRadius: "12px",
        backgroundColor: black,
        color: white,
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        margin: "10px", // Adjust as needed for the margin between skill boxes
        "@media (max-width: 768px)": {
          width: "calc(33.333% - 20px)", // Adjust as needed for the maximum of three skills per row
        },
      }}
    >
      <div
        sx={{
          backgroundColor: white,
          color: black,
          width: "4rem", // Adjust as needed for the width of the logo
          height: "4rem", // Adjust as needed for the height of the logo
          padding: "0.5rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3.5rem", // Adjust as needed for the size of the logo
          marginBottom: "1rem", // Adjust as needed for the spacing between the logo and the skill text
          "@media (min-width: 600px)": {
            width: "3rem",
            height: "3rem",
            fontSize: "2.5rem",
          },
          "@media (max-width: 400px)": {
            width: "2.5rem",
            height: "2.5rem",
            fontSize: "2rem",
          },
        }}
      >
        {logo}
      </div>
      <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>
        {skill}
      </Typography>
    </Paper>
  );
};

export default SkillBox;
