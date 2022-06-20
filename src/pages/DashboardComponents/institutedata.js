import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import firebaseMethods from '../../confiq/firebase/firebaseMethods'
import { useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';







export default function InstituteData() {

    //let location = useLocation();
    const [data,setData] = useState([])
    const [instObj,setInstObj] = useState([])

   
    const db = getDatabase();
    const dbRef = ref(db, 'instituteForm');
    

    const readOperation = () => {
              onValue(dbRef, (snapshot) => {
                const todoObj = snapshot.val();
                console.log(todoObj)
                const tempObj = []
                for(let id in todoObj){
                    tempObj.push(todoObj[id])                       
                     console.log(instObj)
                 }
                 setInstObj(tempObj)
                 console.log(instObj)

          }, {
            onlyOnce: true
          });
    }

    React.useEffect(()=>{
        readOperation() 
    },[])

    const deleteRecord = ({id}) =>{
      console.log(id)
      firebaseMethods.deleteData('instituteForm',`,${id}`)
      readOperation() 
      // console.log(delRecord)
    }



  return (

    <Grid container>
      <Grid item xs={12} sm={12} md ={12} lg={12} xl ={12} >
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size = "small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Cell 1</TableCell>
            <TableCell align="right">Cell 2</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Website</TableCell>
            <TableCell align="right">Sel Campus</TableCell>
            <TableCell align="right">Campus Location</TableCell>
            <TableCell align="right"> Campus Code</TableCell>
            {/* <TableCell align="right">Selected Campus Code</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {instObj.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.location}</TableCell>
              <TableCell align="right">{item.cell1}</TableCell>
              <TableCell align="right">{item.cell2}</TableCell>
              <TableCell align="right">{item.mobileNumber}</TableCell>
              <TableCell align="right">{item.website}</TableCell>
               {item.campus.map(item => 
                        <> <TableCell align="right">{item.campusName})</TableCell> 
                            <TableCell align="right">{item.campusLocation})</TableCell>
                            <TableCell align="right">{item.campusCode})</TableCell>
                        </> )}

                
              <Box >
                
              <Button variant = 'contained'   size="small"  sx={{marginRight:"5px"}}   >Add</Button>
              <Button variant = 'contained'  color="error"size="small"  onClick={()=>{deleteRecord(item)}} >delete</Button>
                </Box>  
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>

    </Grid>
   
  );
}
