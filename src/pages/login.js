import { Box } from "@mui/system";
import React, { useState } from "react";
import MIBUTTON from "../components/mibutton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import firebaseMethods from "../confiq/firebase/firebaseMethods";
import CircularProgress from '@mui/material/CircularProgress';

function Login(props) {
  

  const [signInData, setSignInData] = useState({})
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()


  const signInUser = () =>{
    if(!signInData.email){
      alert("Email is Required")
      return
    }
    if(!signInData.password){
      alert("Password is Required")
      return
    }
    setLoader(true)

  const SignInPromise = firebaseMethods.SignInUser(signInData)
  SignInPromise.then((resolve) =>{
          
           navigate(`/dash`,{state:signInData})
           
           setLoader(false)}).catch((fail)=>{
               
                  setLoader(false)})
  
  }

  const SingUpPage = () =>{
    navigate('/signup')
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
              sx={{ height: "80%" }}
              direction="column"
              alignItems="center"
            >
              <Box>
                <Typography variant="h5">Login To Your Account</Typography>
                <Typography variant="caption">
                  Login using Social Networks
                </Typography>
              </Box>

              <Box width="400px">
                {/* <MIBUTTON type="text" placeholder="email" value={signInData.email}  onChange={(e) =>{setSignInData({...signInData,email:e.targt.value})}} /> */}
                <MIBUTTON type="text" placeholder="email" value={signInData.email}  onChange ={(e) => {setSignInData({...signInData,email:e.target.value})}} />
              </Box>
              <Box width="400px">
                {/* <MIBUTTON type="password" placeholder="password" value={signInData.password}  onChange ={(e) =>{setSignInData({...signInData,password:e.targt.value})}} /> */}
                <MIBUTTON type="password" placeholder="password" value={signInData.password}  onChange ={(e) => {setSignInData({...signInData,password:e.target.value})}} />
                
              </Box>
              <Box>
               {loader && <CircularProgress />} <Button disabled = {loader}
                  onClick={signInUser}
                  variant="contained"
                  sx={{ bgcolor: "#3CB1B9" }}
                >
                  Login
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
                <Typography>
                  sign up and discover great amount of new oppurtunities
                </Typography>
              </Box>
              <Box>
                <Button variant="contained" sx={{ bgcolor: "#3CB1B9" }} onClick = {SingUpPage}>
                  Sign UP
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Login;
