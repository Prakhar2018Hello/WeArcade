import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import Checkbox from "@material-ui/core/Checkbox";
const Forgotpass = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover":{
              boxShadow:"10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h5" padding={3} textAlign="center">Forgot Password</Typography>
          
          
          <TextField margin="normal" type={'email'} variant="outlined" placeholder="Email"/>
         
          <Button
          sx={{marginTop:3,borderRadius:3}}
          variant="contained"
          color="warning"
          >Forgot Password</Button>

        
        </Box>
      </form>
    </div>
  );
};

export default Forgotpass;
