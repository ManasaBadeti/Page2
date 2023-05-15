import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import Autocomplete from '@mui/material/Autocomplete';
import RetrieveGrievanceDetails from "../../pages/RetrieveGrievanceDetails";
import tr from 'date-fns/esm/locale/tr/index.js';
import Alert from '@mui/material/Alert';

// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm,
//       Controller,
// 	Formprovider,
// 	useFormContext} from "react-hook-form";


const useStyles = makeStyles({
  // paper: { minWidth: "700px" },

  table: {
    minWidth: 500,
    "& .MuiTableCell-root": {
      // border: "1px solid black",
      padding: "6px 0px 6px 16px"
    },
    "& .MuiTableCell-sizeSmall": {
      padding: "0px 0px 0px 0px" // <-- arbitrary value
    }
  }
});


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const {closeModal,retreived,onStateChange} = props
  const [open, setOpen] = React.useState(true);
  const [close, setClose] = React.useState(false);
  const [familyd, setFamilyd] = useState(false);
  const [caseD, setcaseD] = useState(false);
  const [openModal, setOpenModal] = React.useState(true);
  const [showbutton, setShowButton] = useState(true);
  const [natureofgrievance, setNatureofGrievance] = useState();
  const [retrievedetails, setRetrievedetails] = useState(false);
  const [rowselected,setRowSelected] = useState(false);
  const [rowselected2,setRowSelected2] = useState(false);
  const [showalert, setShowAlert] = useState(false);
  const [showalert2, setShowAlert2] = useState(false);
  const [hideHelperText, setHideHelperText] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  // const validationschema = yup.object().shape({
  //   grievancenature: yup.string()
  //   .required("Please select Nature of grievance")
  // })

  // const { register,
  //   control,
  //   handleSubmit,
  //   formState: { errors } } = useForm({ resolver: yupResolver(validationschema) });
   
  

  const handleClose = () => {
    setOpen(closeModal);
    setOpen(closeModal)
   
    // setFamilyd(false)
    // setcaseD(false)
    // setOpenModal(false)

  };
  const retrieve = () => {
    if(rowselected2){
    setOpen(closeModal);
    onStateChange(true);
    setShowAlert2(false);
  }
  else{
    setShowAlert2(true)
  }
    
   
  }

  const grievancenature = [
    { label: 'Denial of Admission', id: 1 },
    { label: 'Money Collection', id: 2 },



  ]

  const name = 'Details';

  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



  const rows = [
    { id: 1, name: 'Kallem Venkata Reddy', gender: 'Male', relation: 'SELF' },
    { id: 2, name: 'Kallem SambiReddy', gender: 'Male', relation: 'SON' },
    { id: 3, name: 'Kallem SivaKumari', gender: 'Female', relation: 'WIFE' },
    // { id: 4, name: 'Kallem Nagendramma', gender: 'Female', relation: 'MOTHER' },

  ];

  const rows2 = [
    { id: 1, caseid: 1001, hosipitalname: 'AIMS Hosipital' },
    { id: 2, caseid: 1002, hosipitalname: 'NRI Hosipital' },


  ];

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRow2, setSelectedRow2] = useState(null);

  const proceed = (event) => {
    
   if(rowselected){
    setShowAlert(false);
    if ( natureofgrievance.label === 'Denial of Admission') {
      setRowSelected(true)
      setOpen(closeModal);
      onStateChange(true)
      setShowAlert(false)
      
    } 
    
    else  {
      setRowSelected(true)
      setFamilyd(true)
      setcaseD(true)
      setShowButton(false)
      setShowAlert(false)
     
    }
  }
    else{
     setShowAlert(true)
    }
  
  }

  return (
    
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Verify Image
      </Button> */}
      <Dialog
        open={closeModal}
        TransitionComponent={Transition}
        fullScreen={fullScreen}
        keepMounted
        onClose={open}

        // classes={{ paper: classes.paper }}

        aria-describedby="alert-dialog-slide-description"

      >
        <DialogTitle><b variant='h4' textAlign={"center"} textDecoration='underline'>{name}</b><CloseIcon sx={{ float: "right", ":hover": { color: 'white', backgroundColor: '#286cb4' } }} onClick={handleClose} /></DialogTitle>
        <DialogContent>
          <Typography><b>Family Details</b></Typography>
          <Grid item display={'flex'} justifyContent={'center'} mt={1}>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-aria-label='simple table'>
                <TableHead>
                  <TableRow >
                    <TableCell sx={{ fontWeight: "bold" }}>Select</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Gender</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} >Relationship</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell > <Radio checked={selectedRow === row.id}
                        onChange={(e) => {setSelectedRow(row.id); setRowSelected(true); setShowAlert(false)}}
                        value={row.id}
                      //  inputProps={{ 'aria-label': `Select row ${params.id}` }}
                      /></TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.gender}</TableCell>
                      <TableCell>{row.relation}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>


        
          {showalert &&
           <DialogActions style={{justifyContent:'flex-start'}}>
        <Alert  variant='standard' severity="error" >Please select a row in table</Alert>
</DialogActions>}

        </DialogContent>
     
        {showbutton &&
          <DialogActions style={{ justifyContent: "space-between" }}>
            <Autocomplete
              onChange={(event, value) => {
                setNatureofGrievance({
                  label: value.label,
                  id: value.id,
                });
                setHideHelperText(true);
               console.log(natureofgrievance)
              }}
              disablePortal
             
              id="combo-box-demo"
              size='small'
              options={grievancenature}
              value={natureofgrievance}
              sx={{ width: 200, ml: 1 }}
              renderInput={(params) => <TextField {...params} label="Nature of grievance" required  helperText={hideHelperText?'': "Please select Nature of grievance"} />}
            />



            <Button variant='contained' autoFocus onClick={proceed} sx={{ mb: 3 }}>
              Proceed
            </Button>
          </DialogActions>}
        {/* <br/> */}

        <DialogContent>
          {caseD && (
            <Typography><b>Case Details</b></Typography>)}
          {caseD && (
            <Grid item display={'flex'} justifyContent={'center'} mt={1}>

              <TableContainer component={Paper} >
                <Table className={classes.table} aria-aria-label='simple table'>
                  <TableHead>
                    <TableRow >
                      <TableCell sx={{ fontWeight: "bold" }}>Select</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Case Id</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Hosipital Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows2.map((row2) => (
                      <TableRow key={row2.id}>
                        <TableCell> <Radio checked={selectedRow2 === row2.id}
                          onChange={(e) => { setSelectedRow2(row2.id); setRowSelected2(true); setShowAlert2(false)}}
                          value={row2.id} /></TableCell>
                        <TableCell>{row2.caseid}</TableCell>
                        <TableCell>{row2.hosipitalname}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>)}

            {showalert2 &&
           <DialogActions style={{justifyContent:'flex-start'}}>
        <Alert  variant='standard' severity="error" >Please select a row in table</Alert>
</DialogActions>}


        </DialogContent>

        {caseD && (

          <DialogActions sx={{ mr: 5 }}>
            <Button variant='contained' autoFocus onClick={retrieve}>
              Proceed
            </Button>
          </DialogActions>

        )}

      </Dialog>
     {/* <>  {retrievedetails && <RetrieveGrievanceDetails displayDetails ={setRetrievedetails} />}</> */}
    </div>
  );
}
