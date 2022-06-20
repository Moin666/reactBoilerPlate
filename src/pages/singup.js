import { Box } from "@mui/system";
import React, { useState } from "react";
import MIBUTTON from "../components/mibutton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import firebaseMethods from '../confiq/firebase/firebaseMethods'

function SignUp(props) {

  const [signUpData,setSignUpData] = useState({})
  
  const navigate = useNavigate();
  const loginPage = () => {
    navigate("/");
  };

const signUpUser = () =>{
  if(!signUpData.email){
        alert("Email is Required")
        return
      }
   if(!signUpData.password){
    alert("Password is Required")
    return
  }

  let signUp = firebaseMethods.signUpUser(signUpData)
  signUp.then((success)=>{
    console.log(success)
  }).catch((failure)=>{
    console.log(failure)
  })
  navigate("/");

}
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} margin="auto">
        <Stack
          direction="row"
          alignItems="center"
          mt={34}
          spacing={1}
          justifyContent="center"
          sx={{ height: "40vh" }}
        >
          <Box
            width="70%"
            padding={3}
            sx={{ height: "40vh", border: "1px solid", borderRadius: "5px" }}
          >
            <Stack
              spacing={2}
              justifyContent="center"
              sx={{ height: "90%" }}
              direction="column"
              alignItems="center"
            >
              <Box>
                <Typography variant="h5">Creating Your Account</Typography>
                <Typography variant="caption">
                  Login using Social Networks
                </Typography>
              </Box>

              <Box width="400px">
                <MIBUTTON type="text" placeholder="name" value={signUpData.name}  onChange ={(e) => {setSignUpData({...signUpData,name:e.target.value})}} />
              </Box>
              <Box width="400px">
                <MIBUTTON type="email" placeholder="email" value={signUpData.email}  onChange = {(e) => {setSignUpData({...signUpData,email:e.target.value})}}/>
              </Box>
              <Box width="400px">
                <MIBUTTON type="password" placeholder="password" value={signUpData.password}  onChange ={(e) => {setSignUpData({...signUpData,password:e.target.value})}}/>
              </Box>
              <Box>
                <Button
                    onClick ={signUpUser}
                  variant="contained"
                  sx={{ bgcolor: "#3CB1B9" }}
                >
                  Sign Up
                </Button>
              </Box>
            </Stack>
          </Box>
          <Box
            p={1}
            width="30%"
            bgcolor="#99f2c8"
            sx={{ height: "40vh", borderRadius: "5px" }}
          >
            <Stack
              spacing={3}
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
            >
              <Box>
                <Typography variant="h5">Login To Your Account</Typography>
              </Box>
              <Box>
                <Typography>Already have account ? Click to Login</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#3CB1B9" }}
                  onClick={loginPage}
                >
                  Login
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default SignUp;
