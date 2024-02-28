import React from 'react'
import { Box, Button, Typography, Grid, colors } from '@mui/material'
import '../Styles/home.css'

const Error = () => {
  return (
    <div className="error-page">
      <Box sx={{ marginLeft: "auto", marginRight: "auto", paddingTop: "10%", textAlign: "center", width: "70%" }}>
        <Grid container rowSpacing={1} columnSpacing={5}>

          <Grid item xs={12} sm={6}>
            <img src="assets/media/404-page.jpg" />
          </Grid>


          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ color: "aqua", fontSize: "27px" }}>
                MyWebsite
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                404. PAGE NOT FOUND
              </Typography>
              <Typography sx={{ color: "grey" }}>
                The requested URL was not found on this server.
              </Typography>
              <Button variant="outlined" href='/' sx={{
                borderRadius: "10px", color: "black", bgcolor: "aqua", width: '150px', ":hover": {
                  backgroundColor: "aqua",
                  borderColor: "white",
                  borderWidth: "1.4px",
                  color: "white"
                }
              }}>Back to home</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Error