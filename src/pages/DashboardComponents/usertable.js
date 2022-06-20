import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import firebaseMethods from '../../confiq/firebase/firebaseMethods';

import { useState } from 'react';
import { Typography } from '@mui/material';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function UserTable() {

  let [userDetails,setuserDetails] = useState([])
  const getData = async () =>{
    userDetails = firebaseMethods.readOperation('users/')
    setuserDetails(userDetails)
    console.log(userDetails)

    // setuserDetails([...userDetails,data])
  }
    React.useEffect(()=>{
        getData()
        console.log("refresh")
    },[]) 
    // console.log(userDetails,"sdfs")

 
    return (


      <TableContainer component={Paper} sx={{padding:"10px"}}>

        <Typography variant = 'h4' ml={2}>Users Details</Typography>
        {/* <Typography variant = 'h4' ml={2}>Users Details</Typography> */}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >  <Typography variant ='h5'> S.no</Typography></TableCell>
            <TableCell><Typography variant ='h5'>User Login Id</Typography></TableCell>
            <TableCell ><Typography variant ='h5'>User Email</Typography> </TableCell>
            <TableCell><Typography variant ='h5'>User Password</Typography></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {userDetails.map((row,index) => (
            <TableRow
              key={row.data.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

          <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.data.email}
              </TableCell>
              <TableCell >{row.data.password}</TableCell>
      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      

  );
}
