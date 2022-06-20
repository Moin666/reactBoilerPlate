import {
  Box,
  Button,
  Grid,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BTButton from "../components/btbutton";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import firebaseMethods from "../confiq/firebase/firebaseMethods";

import { useNavigate } from "react-router-dom";



function InstituteForm(props) {



  const [showCampus, setShowCapus] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("");
  let navigate = useNavigate();


  const [instData, setInstData] = useState({
    name:"",
    Location:"",
    cell1:"",
    cell2:"",
    mobileNumber:"",
    website:"",
    campus:[{name:"",campusName:"",campusLocation:"",campusCode:""}]
  });

  const handleChange = (data) => {
    setShowCapus(true);
    setDropDownValue(data)
  };

  const writeFirebase = () =>{
    console.log("as")
    // console.log("sdfd")
    if(!instData.name || !instData.location || !instData.cell1 || !instData.cell2 ||!instData.mobileNumber || !instData.website || !instData.campus[0].name || !instData.campus[0].campusName || !instData.campus[0].campusLocation  || !instData.campus[0].campusCode ){
      alert("Field Are Not Filled Completely")
      return
    }
    let promiseWrite = firebaseMethods.writeOperation('instituteForm',instData)
    console.log(promiseWrite)

    navigate("/dash/instituterecords",{state:instData})
  }

const deleteRecord = () =>{
   let deletePromise=  firebaseMethods.deleteData('instituteForm',',-N4uo6WSo4IWeBYzld-s')
   console.log(deletePromise)
}

return (
    <div>
      <Grid container>
  
        <Grid item xs={12} sm={12} md={12} lg ={12} xl ={12}  >
          <Box>
            <Stack spacing={1}>
              <Box>
                <Typography variant="h4" align="center">
                  Institute Form
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" sx={{ textDecoration: "underline" }}>
                  Registration Form
                </Typography>
                <Typography variant="caption">
                  This form is for the registration of new institues
                </Typography>
              </Box>
              <Stack direction="row">
                <Box sx={{ width: "100%" }}>
                  {/* <Typography variant="h6">Institute Info:</Typography> */}
                  <Box>
                    <Typography variant="caption">Institute Name</Typography>
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <BTButton
                      type="text"
                      placeholder="Institute Name"
                      widthCustom="w-75 form-control"
                      value={instData.name}
                      onChange={(e) => {
                        setInstData({ ...instData, name: e.target.value });
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Typography variant="caption">Location</Typography>
                  <Box sx={{ width: "100%" }}>
                    <BTButton
                      type="text"
                      placeholder="Institute Location"
                      widthCustom="w-75 form-control"
                      value={instData.location}
                      onChange={(e) => {
                        setInstData({ ...instData, location: e.target.value });
                      }}
                    />
                  </Box>
                </Box>
              </Stack>

              <Box>
                <Typography variant="h6">Contact:</Typography>
              </Box>
              <Stack direction="row">
                <Box sx={{ width: "100%" }}>
                  <Typography variant="caption">Cell-1</Typography>
                  <Box sx={{ width: "100%" }}>
                    <BTButton
                      type="text"
                      placeholder="Enter Cell Number 1"
                      widthCustom="w-75 form-control"
                      value={instData.cell1}
                      onChange={(e) => {
                        setInstData({ ...instData, cell1: e.target.value });
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Typography variant="caption">Cell-2</Typography>
                  <Box sx={{ width: "100%" }}>
                    <BTButton
                      type="text"
                      placeholder="Enter Cell Number 2"
                      widthCustom="w-75 form-control"
                      value={instData.cell2}
                      onChange={(e) => {
                        setInstData({ ...instData, cell2: e.target.value });
                      }}
                    />
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Typography variant="caption">Mobile</Typography>
                  <Box sx={{ width: "100%" }}>
                    <BTButton
                      type="text"
                      placeholder="Enter Mobile Number"
                      widthCustom="w-75 form-control"
                      value={instData.mobileNumber}
                      onChange={(e) => {
                        setInstData({
                          ...instData,
                          mobileNumber: e.target.value,
                        });
                      }}
                    />
                  </Box>
                </Box>
              </Stack>

              <Box>
                <Typography variant="h6">Website:</Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <Box sx={{ width: "50%" }}>
                  <BTButton
                    type="text"
                    placeholder="Please Enter Your Institute's Website"
                    widthCustom="w-100 form-control"
                    value={instData.website}
                    onChange={(e) => {
                      setInstData({ ...instData, website: e.target.value });
                    }}
                  />
                </Box>
                <Box sx={{ width: "50%" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select Campus
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      sx={{ height: "40px" }}
                      onChange={(e) =>{handleChange(e.target.value)}}
                    >
                      <MenuItem value={"northcapus"}>North Campus</MenuItem>
                      <MenuItem value={"southcapus"}>South Campus</MenuItem>
                      <MenuItem value={"centralcampus"}>Central Campus</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Stack>

              {showCampus && (
                <Stack direction="row">
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="caption">Campus Name</Typography>
                    <Box sx={{ width: "100%" }}>
                      <BTButton
                        type="text"
                        placeholder="Enter Campus Name"
                        widthCustom="w-75 form-control"
                        value={instData.campus[0].campusName}
                        onChange= {(e)=>{setInstData({...instData,campus:[{...instData.campus[0],name:dropDownValue,campusName:e.target.value}]})}}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="caption">Campus Location</Typography>
                    <Box sx={{ width: "100%" }}>
                      <BTButton
                        type="text"
                        placeholder="Enter Campus Location"
                        widthCustom="w-75 form-control"
                        value={instData.campus[0].campusLocation}
                        onChange= {(e)=>{setInstData({...instData,campus:[{...instData.campus[0],campusLocation:e.target.value}]})}}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="caption">Campus Code</Typography>
                    <Box sx={{ width: "100%" }}>
                      <BTButton
                        type="text"
                        placeholder="Enter Campus Code"
                        widthCustom="w-75 form-control"
                        value={instData.campus[0].campusCode}
                        onChange= {(e)=>{setInstData({...instData,campus:[{...instData.campus[0],campusCode:e.target.value}]})}}
                        
                      />
                    </Box>
                  </Box>
                </Stack>
              )}

              <Stack
                direction="row"
                spacing={2}
                mt={5}
                mr={5}
                justifyContent="right"
              >
                <Box>
                  <Button variant="outlined" onClick ={deleteRecord}>Cancel</Button>
                </Box>
                <Box>
                  <Button variant="contained" onClick = {writeFirebase}>Save</Button>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Grid>

      </Grid>
    </div>
  );
}

export default InstituteForm;
