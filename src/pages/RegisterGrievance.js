import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import PageTitle from '../layouts/PageTitle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchTable from '../components/table/SearchTable'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from 'dayjs'
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Modal from '../components/modal/Modal';
import RetrieveGrievanceDetails from './RetrieveGrievanceDetails';



const RegisterPatient = () => {
    const[caseD,setcaseD]=useState(false);
    const[familyd,setFamilyd] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
     const [selectedRow2, setSelectedRow2] = useState(null);
     const [openModal , setOpenModal] = React.useState(false);
     const [retrievedetails , setRetrievedetails] = React.useState(false);

     const [selectedistrict, setSelectedistrict] = useState(null);
     const [isDialogOpen, setIsDialogOpen] = useState(false);
     const [selectedregister, setSelectedRegister] = useState();
  const handleClickOpen = () => {
    
  setSelectedRow(null)
  setSelectedRow2(null)
   setFamilyd(true)
    // setOpen(true);
  };

  // const handleClose = () => {
  //   setFamilyd(false)
  //   setcaseD(false)
  //   setOpen(false);
  // };
  const proceed =(event)=>  {
        setFamilyd(true)
        setcaseD(true)
      }
  const retrieve = (event)=>{
    
    // setFamilyd(true);
      // setcaseD(false)
      if(selectedregister=='caseid' || selectedregister=='patientno'||selectedregister=='cmcno'){
        setOpenModal(false)
        setRetrievedetails(true)
      }
      else if(selectedregister=='uhid' || selectedregister=='residentid'||selectedregister=='amravati'){
        setOpenModal(true)
        setRetrievedetails(false)
      }

  }
  function handleStateChange(newValue) {
    setRetrievedetails(true);
    setOpenModal(false)
  }
  const handleButtonClick = () => {
    setIsDialogOpen(true);
    setRetrievedetails(true);
  };
  // const handleClose = () => {
  //   setOpenModal(false)
  // };
  const handleRadioChange = (event) => {
    setSelectedRegister(event.target.value);
  };

    const heading1 = "Register Grievance"
 
  return (
    <>
     <Card>
        <CardContent>
          {/* <Typography variant="h5">Search Patient Details</Typography> */}
          <PageTitle name={heading1} />
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            justifyContent='center'
            alignItems="center"
            
          >

            <Grid item xs={12} sm={12} md={12} lg={12} >
            <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" required>Register with</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedregister}
        onChange={handleRadioChange}
      >
        <FormControlLabel value="uhid" sx={{mr:6}} control={<Radio />} label="UHID" />
        <FormControlLabel value="residentid" sx={{mr:6}} control={<Radio />} label="ResidentID" />
        <FormControlLabel value="amravati" sx={{mr:6}} control={<Radio />} label="Amravati" />
        <FormControlLabel value="caseid" sx={{mr:6}} control={<Radio />} label="CaseID" />
        <FormControlLabel value="patientno" sx={{mr:6}} control={<Radio />} label="PatientNo." />
        <FormControlLabel value="cmcno" control={<Radio />} label="CmcNo." />
       
      </RadioGroup>
    </FormControl>
  
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={4} >
    <TextField  fullWidth id="outlined-basic" size='small' variant="outlined" />
    </Grid>
 
            <Grid item xs={12} sm={6} md={6} lg={8} sx={{mb:2.5}}>
              <Button  variant="contained" onClick={retrieve} sx={{m:0}}>
                Retrieve
              </Button> 
            </Grid>
          </Grid>
         
        </CardContent>
      </Card>
     
     {selectedregister=='caseid' &&(
     <RetrieveGrievanceDetails />
     )}
      {selectedregister=='patientno' &&(
    <RetrieveGrievanceDetails  />
     )}
      {selectedregister=='cmcno' &&(
     <RetrieveGrievanceDetails  />
     )}

      {openModal && <Modal closeModal={setOpenModal} retrieved={retrievedetails} onStateChange={handleStateChange} />}
      {retrievedetails && <RetrieveGrievanceDetails displayDetails ={setRetrievedetails} />} 
      
   
    </>
  )
}

export default RegisterPatient
