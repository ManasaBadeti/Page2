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


// const radioColDef = {
//   field: 'radio',
//   headerName: 'Select',
//   width: 70,
//   sortable: false,
//   filterable: false,
//   renderCell: (params) => (
//     <RadioGroup
     
//       name="radio-buttons-group"
//       value={params.value}
//       onChange={(event) => {
//         params.setValue(event.target.value);
//       }}
//     >
//       <FormControlLabel
//         value="option1"
//         control={<Radio />}
//         label=""
//       />
//     </RadioGroup>
//   ),
// };



const PatientReg = () => {

  const heading1 = "Patient Registration"
  const heading2 = "Family Member Details"
  const heading3 = "Patient Details"
  const heading4 = "Card Address"
  const heading5 = "Communication Address"
  const heading6 = "Case Details"
  const heading7 = "Source"
  const[familyd,setFamilyd]=useState(false)
  const [selectedRow, setSelectedRow] = useState(null);
  const columns = [
    {
      field: 'id', headerName: 'SNo', width: 70, headerClassName: 'super-app-theme--header',
    },
    {
      field: 'cardNumber', headerName: 'Card Number', width: 150, headerClassName: 'super-app-theme--header',
    },
    {
      field: 'residentID', headerName: 'Resident ID', width: 130, headerClassName: 'super-app-theme--header',
    },
    {
      field: 'name',
      headerName: 'Name',
  
      width: 200,
      headerClassName: 'super-app-theme--header',
  
    },
    {
      field: 'age',
      headerName: 'Age',
      // type:'number',
      width: 90,
      headerClassName: 'super-app-theme--header',
  
    },
    {
      field: 'gender',
      headerName: 'Gender',
  
      width: 90,
      headerClassName: 'super-app-theme--header',
  
    },
    {
      field: 'relation',
      headerName: 'Relation',
  
      width: 130,
      headerClassName: 'super-app-theme--header',
  
    },
    {
      field: "radiobutton",
      headerName: "Select",
      headerClassName: 'super-app-theme--header',
      width: 100,
      sortable: false,
      renderCell: (params) => (
         <Radio checked={selectedRow === params.id}
         onChange={(e) => setSelectedRow(params.id)}
         value={params.id}
         inputProps={{ 'aria-label': `Select row ${params.id}` }}
         onClick={handleHideTable}/>
  
          // onChange={(event) => {
        //         params.setValue(event.target.value);
        //      }} value={params.id} />
      )
    },
  ];
  
  const rows = [
    { id: 1, cardNumber: 'WAP0734015A0105', residentID: 1242426350, name: 'Kallem Venkata Reddy', age: 40, gender: 'Male', relation: 'SELF' },
    { id: 2, cardNumber: 'WAP0734015A0105', residentID: 1242882033, name: 'Kallem SambiReddy', age: 15, gender: 'Male', relation: 'SON' },
    { id: 3, cardNumber: 'WAP0734015A0105', residentID: 1229334782, name: 'Kallem SivaKumari', age: 38, gender: 'Female', relation: 'WIFE' },
    { id: 4, cardNumber: 'WAP0734015A0105', residentID: 1224575423, name: 'Kallem Nagendramma', age: 70, gender: 'Female', relation: 'MOTHER' },
  
  ];
  
  // const [selectionModel, setSelectionModel] = React.useState();
 

  // const selectedRow = rows.filter((item) => {
  //   return item.id === selectionModel[0];
  // });

  const genderOptions = [
    { label: 'Male', id: 1 },
    { label: 'Female', id: 2 },
    { label: 'Child', id: 3 },
  ];
  const relationOptions = [
    { label: 'SELF', id: 1 },
    { label: 'MOTHER', id: 2 },
    { label: 'FATHER', id: 3 },
    { label: 'WIFE', id: 4 },
    { label: 'HUSBAND', id: 5 },
    { label: 'SON', id: 6 },
    { label: 'DAUGHTER', id: 7 },
  ];

  const casteOptions = [
    { label: 'General', id: 1 },
    { label: 'SC/ST', id: 3 },
    { label: 'OBC', id: 2 },

  ];

  const mrstatusOptions = [
    { label: 'Married', id: 1 },
    { label: 'UnMarried', id: 2 }
  ];
  const StateOptions = [
    { label: 'Andhra Pradesh', id: 1 },
    { label: 'Telangana', id: 2 }
  ];
  const DistrictOptions = [
    { label: 'Guntur', id: 1 },
    { label: 'NTR', id: 2 }
  ];
  const MandalOptions = [
    { label: 'Chebrole-R', id: 1 },
    { label: 'mandal2', id: 2 }
  ];
  const SachiwalayamOptions = [
    { label: 'sachiwalayam-1', id: 1 },
    { label: 'sachiwalayam-2', id: 2 }
  ];
  const VillageOptions = [
    { label: 'Village-1', id: 1 },
    { label: 'Village-2', id: 2 }
  ];
  const HamletOptions = [
    { label: 'Hamlet-1', id: 1 },
    { label: 'Hamlet-2', id: 2 }
  ];
  const HospitalOptions = [
    { label: 'Hosipital-1', id: 1 },
    { label: 'Government General Hosipital Guntur', id: 2 }
  ];
  
  

  const [dob, setDob] = React.useState(null);
  const [age, setAge] = useState(null);
  const [selectedmandal, setSelectedmandal] = useState(null);
  const [viallageselected, setViallageselected] = useState(null);
  const [selectdstate, setSelectdstate] = useState(null);
  const [selectedistrict, setSelectedistrict] = useState(null);
  const [muncislected, setMuncislected] = useState(null);
  const [houseselcted1, setHouseselcted] = useState("");
  const [streetselected, setStreetselected] = useState("");
  const [pinselected, setPinselected] = useState(null);
  const [streetcommunication, setStreetcommunication] = useState("");
  const [statecom, setStatecom] = useState(null);
  const [distcom, setDistcom] = useState(null);
  const [mandalcom, setMandalcom] = useState(null);
  const [muncicom, setMuncicom] = useState(null);
  const [villagecom, setVillagecom] = useState(null);
  const [pincosecom, setPincosecom] = useState("");
  const [isCommAddrsChecked, setisCommAddrsChecked] = useState(false);
  const [hsptnum, sethsptnum] = useState("");
  const [hospitalselected, setHospitalselected] = useState(null);
  const [datetime, setDateTime] = useState(new Date());

  const [sourcephc,setSourcePHC] = useState("");
  const [sourcehc,setSourceHC] = useState("");
  const [sourcesahiwalay,setSourceSachiwalay] = useState("");
 
  const[hidetable,setHideTable]=useState(true)
  const retrieve =(event)=>  {
    setFamilyd(true)
  }
  const handleHideTable = (event) => {
      // setFamilyd(false)
  }
  const handleDateChange = (date) => {

    setDob(dayjs(date).format('MM/DD/YYYY'));

    // if (Boolean(setDob) == true) {
    //   setDoberror(null);
    // }


    if (date) {

      const ageInYears = dayjs().diff(date, 'year');

      setAge(ageInYears);

    } else {
      setAge(null);

    }

  };


    const [selectedOption, setSelectedOption] = useState("direct");
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

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

            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                fullWidth
                id="uhid"
                // error={numbererror ? true : false}
                label="UHID"
                name="UHID"
                //   onChange={(e) => {
                //     setsearchednumber(e.target.value);

                //   }}
                //   value={searchednumber}
                size="small"
                autoFocus


              />
              {/* <Typography variant="inherit" color="error">
                  {numbererror}
                </Typography> */}
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Button variant="contained" onClick={retrieve}>
                Retrieve
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {familyd && (
         
      <Card >
        <PageTitle name={heading2} />
        <CardContent sx={{
          height: 300, width: '100%', '& .super-app-theme--header': {
            backgroundColor: '#F5FAFF',
          },
        }}>

          {/* <Box
      sx={{
        height: 400,
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: '#F5FAFF',
        },
      }}
    ></Box> */}
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            autoHeight
            
        // selectionModel={selectionModel}
        // onSelectionModelChange={(newSelectionModel) => {
        //   setSelectionModel(newSelectionModel);
        // }}
            // components={{ Toolbar: GridToolbar }}

          />
        </CardContent>

      </Card>
    )} 
      <Card>
        <CardContent>
          <PageTitle name={heading3} />

          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
          >
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                fullWidth
                id="name"
                // onChange={(event, value) => {
                //   setName(event.target.value);
                // }}
                label="Name"
                //value={Name}
                // value="Manasa"
                // disabled
                name="name"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                margin="normal"
                // onChange={(event, value) => {
                //   setSetgender({
                //     label: value.label,
                //     id: value.id,
                //   });
                //   console.log(event, value);
                // }}
                fullWidth
                size="small"
                id="gid"
                name="gender"
                label="Gender"
                // disabled
                options={genderOptions}
                // value={setgender}
                //value="Female"

                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Gender"
                  // {...register("gid")}
                  // error={errors.gid ? true : false}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Birth"
                  inputFormat="DD/MM/YYYY"

                  id="dob"
                  name="dob"
                  value={dob}
                  disableFuture={true}
                  onChange={handleDateChange}

                  renderInput={(params) => (
                    <TextField
                      size="small"
                      fullWidth
                      {...params}
                    // {...register("dob")}
                    // error={errors.dob ? true : false}
                    />
                  )}
                />

              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                fullWidth
                id="age"
                label="Age"
                value={age}
                InputLabelProps={{ shrink: dob ? true : false }}
                name={age}

                type="number"
                //value={age}
                // disabled
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onChange={(event, value) => {
                //   setRelationselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                //   console.log(event, value);
                // }}
                margin="normal"
                fullWidth
                size="small"
                id="relationship"
                name="relationship"
                options={relationOptions}
                // value={relationselected}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Relationship"
                  // {...register("relationship")}
                  // error={errors.relationship ? true : false}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onChange={(event, value) => {
                //   setRelationselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                //   console.log(event, value);
                // }}
                margin="normal"
                fullWidth
                size="small"
                id="caste"
                name="caste"
                options={casteOptions}
                // value={relationselected}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Caste"
                  // {...register("relationship")}
                  // error={errors.relationship ? true : false}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onChange={(event, value) => {
                //   setRelationselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                //   console.log(event, value);
                // }}
                margin="normal"
                fullWidth
                size="small"
                id="occupation"
                name="occupation"
                options={relationOptions}
                // value={relationselected}
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Occupation"
                  // {...register("relationship")}
                  // error={errors.relationship ? true : false}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                fullWidth
                // onChange={(event) => {
                //   setNumberselected(event.target.value);
                // }}
                id="contactnumber"
                label="Contact Number"
                // value={numberselected}
                type="number"
                // {...register("contactnumber")}
                // error={errors.contactnumber ? true : false}
                name="contactnumber"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                fullWidth
                id="familyheadname"
                // onChange={(event, value) => {
                //   setName(event.target.value);
                // }}
                label="Family Head Name"
                //value={Name}
                // value="Manasa"
                // disabled
                name="familyHeadName"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
                margin="normal"
                // onChange={(event, value) => {
                //   setSetgender({
                //     label: value.label,
                //     id: value.id,
                //   });
                //   console.log(event, value);
                // }}
                fullWidth
                size="small"
                id="mrstatus"
                name="mrstatus"

                // disabled
                options={mrstatusOptions}
                // value={setgender}
                //value="Female"

                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Martial Status"
                  // {...register("gid")}
                  // error={errors.gid ? true : false}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                fullWidth
                // onChange={(event) => {
                //   setNumberselected(event.target.value);
                // }}
                id="resid"
                label="Resident ID"
                // value={numberselected}

                // {...register("contactnumber")}
                // error={errors.contactnumber ? true : false}
                name="resid"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}></Grid></Grid>
            <PageTitle name={heading4} />
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
           
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                fullWidth
                onChange={(event) => {
                  setHouseselcted(event.target.value);
                  console.log(event);
                }}
                id="housenumber"
                label="House Number"
                // {...register("housenumber")}
                //error={errors.housenumber ? true : false}
                name="housenumber"
                size="small"
                value={houseselcted1}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.housenumber?.message}
                  </Typography> */}
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                onChange={(event) => {
                  setStreetselected(event.target.value);
                  console.log(event);
                }}
                fullWidth
                id="street"
                label="Street"
                value={streetselected}
                // {...register("street")}
                // error={errors.street ? true : false}
                name="street"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                onChange={(event, value) => {
                  setSelectdstate({
                    label: value.label,
                    id: value.id,
                  });
                  console.log(event, value);
                }}
                margin="normal"
                fullWidth
                size="small"
                id="state"
                name="state"
                value={selectdstate}
                options={StateOptions}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="State"
                  // {...register("state")}
                  // error={errors.state ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.state?.message}
                  </Typography> */}
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={() => getdistictlist(selectdstate.id)}
                onChange={(event, value) =>
                  setSelectedistrict({
                    label: value.label,
                    id: value.id,
                  })
                }
                margin="normal"
                fullWidth
                size="small"
                id="district"
                name="district"
                 options={DistrictOptions}
                value={selectedistrict}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="District"
                  // {...register("district")}
                  // error={errors.district ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.district?.message}
                  </Typography> */}
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                margin="normal"
                fullWidth
                onChange={(event, value) => {
                  setMuncislected({
                    label: value.label,
                    id: value.id,
                  });
                  console.log(event);
                }}
                size="small"
                id="munsi"
                name="munsi"
                options={MandalOptions}
                value={muncislected}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Mandal"
                  // {...register("munsi")}
                  // error={errors.munsi ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.mandal?.message}
                  </Typography> */}
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={() => getmandallist(selectedistrict.id)}
                onChange={(event, value) =>
                  setSelectedmandal({
                    label: value.label,
                    id: value.id,
                  })
                }
                margin="normal"
                fullWidth
                size="small"
                name="mandal"
                id="mandal"
                options={SachiwalayamOptions}
                value={selectedmandal}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Sachiwalayam"
                  // {...register("mandal")}
                  // error={errors.mandal ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.mandal?.message}
                  </Typography> */}
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={getvillagelist}
                onChange={(event, value) => {
                  setViallageselected({
                    label: value.label,
                    id: value.id,
                  });
                }}
                margin="normal"
                fullWidth
                size="small"
                id="city"
                name="city"
                 options={VillageOptions}
                value={viallageselected}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="City/Town/Village"
                  // {...register("city")}
                  // error={errors.city ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.city?.message}
                  </Typography> */}
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={() => getmandallist(selectedistrict.id)}
                onChange={(event, value) =>
                  setSelectedmandal({
                    label: value.label,
                    id: value.id,
                  })
                }
                margin="normal"
                fullWidth
                size="small"
                name="mandal"
                id="mandal"
               options={HamletOptions}
                value={selectedmandal}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Hamlet"
                  // {...register("mandal")}
                  // error={errors.mandal ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.mandal?.message}
                  </Typography> */}
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <TextField
                margin="normal"
                fullWidth
                id="pincode"
                label="Pincode"
                type="number"
                onChange={(event, value) => {
                  setPinselected(event.target.value);
                }}
                value={pinselected}
                name="pincode"
                size="small"
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.pincode?.message}
                  </Typography> */}
            </Grid>
          </Grid>
          <PageTitle name={heading5}/>
          {/* <span>If card address and Communication address are same</span> */}
          <FormControlLabel
            control={
              <Checkbox
                value={isCommAddrsChecked}
                color="primary"
                onChange={(e) => {
                  console.log(e);
                  setisCommAddrsChecked(e.target.checked);
                  if (e.target.checked) {
                    sethsptnum(houseselcted1);
                    console.log("stateee", selectdstate);
                    setStreetcommunication(streetselected);
                    setStatecom(selectdstate);

                    setDistcom(selectedistrict);
                    setMandalcom(selectedmandal);
                    setMuncicom(muncislected);
                    setVillagecom(viallageselected);
                    setPincosecom(pinselected);
                  } else {
                    sethsptnum("");
                    setStreetcommunication("");
                    setStatecom("");

                    setDistcom("");
                    setMandalcom("");
                    setMuncicom("");
                    setVillagecom("");
                    setPincosecom("");
                  }
                }}
              />
            }
            label="If card address and Communication address are same"
          />
          <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <>
                {isCommAddrsChecked === true ? (
                  <>
                    <TextField
                      disabled={hsptnum}
                      margin="normal"
                      fullWidth
                      id="house_number"
                      label="House Number"
                      name="house_number"
                      autoComplete="email"
                      value={hsptnum}
                      size="small"
                    />
                  </>
                ) : (
                  <>
                    <TextField
                      //disabled={hsptnum}
                      margin="normal"
                      fullWidth
                      onChange={(event) => {
                        sethsptnum(event.target.value);
                        console.log(event);
                      }}
                      id="house_number"
                      label="House Number"
                      name="house_number"
                      autoComplete="email"
                      value={hsptnum}
                      size="small"
                    />
                  </>
                )}
              </>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <>
                {isCommAddrsChecked === true ? (
                  <>
                    <TextField
                      margin="normal"
                      disabled={streetcommunication}
                      fullWidth
                      id="street"
                      label="Street"
                      name="street"
                      value={streetcommunication}
                      size="small"
                    />
                  </>
                ) : (
                  <>
                    <TextField
                      margin="normal"
                      onChange={(event) => {
                        setStreetcommunication(event.target.value);
                        console.log(event);
                      }}
                      fullWidth
                      id="street"
                      label="Street"
                      name="street"
                      value={streetcommunication}
                      size="small"
                    />
                  </>
                )}
              </>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <>
                {isCommAddrsChecked === true ? (
                  <>
                    <Autocomplete
                      disabled={statecom}
                      margin="normal"
                      fullWidth
                      size="small"
                      id="state"
                      name="state"
                      options={StateOptions}
                      value={statecom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField {...params} label="State" />
                      )}
                    />
                  </>
                ) : (
                  <>
                    <Autocomplete
                      onChange={(event, value) => {
                        setStatecom({
                          label: value.label,
                          id: value.id,
                        });
                        console.log(event, value);
                      }}
                      margin="normal"
                      fullWidth
                      size="small"
                      id="state"
                      name="state"
                      options={StateOptions}
                      value={statecom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField {...params} label="State" />
                      )}
                    />
                  </>
                )}
              </>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <>
                {isCommAddrsChecked === true ? (
                  <>
                    <Autocomplete
                      disabled={distcom}
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                       options={DistrictOptions}
                      value={distcom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField {...params} label="District" />
                      )}
                    />
                  </>
                ) : (
                  <>
                    <Autocomplete
                      // onFocus={() => getdistictlist(statecom.id)}
                      onChange={(event, value) =>
                        setDistcom({
                          label: value.label,
                          id: value.id,
                        })
                      }
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                      options={DistrictOptions}
                      value={distcom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField {...params} label="District" />
                      )}
                    />
                  </>
                )}
              </>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <>
                {isCommAddrsChecked === true ? (
                  <>
                    <Autocomplete
                      disabled={muncicom}
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                       options={MandalOptions}
                      value={muncicom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Mandal"
                        />
                      )}
                    />
                  </>
                ) : (
                  <>
                    <Autocomplete
                      onChange={(event, value) => {
                        setMuncicom({
                          label: value.label,
                          id: value.id,
                        });
                        console.log(event);
                      }}
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                       options={MandalOptions}
                      value={muncicom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Mandal"
                        />
                      )}
                    />
                  </>
                )}
              </>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <>
                {isCommAddrsChecked === true ? (
                  <>
                    <Autocomplete
                      disabled={mandalcom}
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                       options={SachiwalayamOptions}
                      value={mandalcom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Mandal" />
                      )}
                    />
                  </>
                ) : (
                  <>
                    <Autocomplete
                      disablePortal
                      // onFocus={() => getmandallist(distcom.id)}
                      onChange={(event, value) => {
                        setMandalcom({
                          label: value.label,
                          id: value.id,
                        });
                      }}
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                       options={SachiwalayamOptions}
                      value={mandalcom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Mandal" />
                      )}
                    />
                  </>
                )}
              </>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <>
                {isCommAddrsChecked === true ? (
                  <>
                    <Autocomplete
                      disabled={villagecom}
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                       options={VillageOptions}
                      value={villagecom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField {...params} label="City/Town/Village" />
                      )}
                    />
                  </>
                ) : (
                  <>
                    <Autocomplete
                      // onFocus={getvillagelist}
                      onChange={(event, value) =>
                        setVillagecom({
                          label: value.label,
                          id: value.id,
                        })
                      }
                      margin="normal"
                      fullWidth
                      size="small"
                      id="combo-box-demo"
                       options={VillageOptions}
                      value={villagecom}
                      sx={{ width: "100%", mt: 2 }}
                      renderInput={(params) => (
                        <TextField {...params} label="City/Town/Village" />
                      )}
                    />
                  </>
                )}
              </>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <>
                {isCommAddrsChecked === true ? (
                  <>
                    <TextField
                      margin="normal"
                      disabled={pincosecom}
                      fullWidth
                      id="Pincode"
                      label="Pincode"
                      value={pincosecom}
                      name="Pincode"
                      size="small"
                    />
                  </>
                ) : (
                  <>
                    <TextField
                      margin="normal"
                      onChange={(event, value) => {
                        setPincosecom(event.target.value);
                      }}
                      fullWidth
                      id="Pincode"
                      label="Pincode"
                      value={pincosecom}
                      name="Pincode"
                      size="small"
                    />
                  </>
                )}
              </>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextField
                margin="normal"
                fullWidth
                id="landmark"
                // onChange={(event, value) => {
                //   setName(event.target.value);
                // }}
                label="Nearest Landmark"
                //value={Name}
                // value="Manasa"
                // disabled
                name="landmark"
                size="small"
              />
            </Grid>
          </Grid>
          <PageTitle name={heading7} />
          <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            // justifyContent='center'
            // alignItems="center"
          >
            <Grid item xs={12} sm={6} md={6} lg={6}>
             <FormControl>
    
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedOption} onChange={handleOptionChange}
       
      >
        <FormControlLabel value="direct" control={<Radio />} label="Direct" />
        <FormControlLabel value="phc" control={<Radio />} label="PHC" />
        <FormControlLabel value="healthcamp" control={<Radio />} label="Health Camp" />
        <FormControlLabel value="sachiwalayam" control={<Radio />} label="Sachiwalayam" />
       
      </RadioGroup>
    
    </FormControl></Grid>
    <Grid item xs={12} sm={6} md={6} lg={6}/>
    {selectedOption === "phc" && (
      <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={() => getdistictlist(selectdstate.id)}
                onChange={(event, value) =>
                  setSelectedistrict({
                    label: value.label,
                    id: value.id,
                  })
                }
                margin="normal"
                fullWidth
                size="small"
                id="district"
                name="district"
                 options={DistrictOptions}
                value={selectedistrict}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="District"
                  // {...register("district")}
                  // error={errors.district ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.district?.message}
                  </Typography> */}
            </Grid>)}
            {selectedOption === "phc" && (
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                margin="normal"
                fullWidth
                onChange={(event, value) => {
                  setMuncislected({
                    label: value.label,
                    id: value.id,
                  });
                  console.log(event);
                }}
                size="small"
                id="munsi"
                name="munsi"
                options={MandalOptions}
                value={muncislected}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Mandal"
                  // {...register("munsi")}
                  // error={errors.munsi ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.mandal?.message}
                  </Typography> */}
            </Grid>)}
            {selectedOption === "phc" && (
      <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={() => getdistictlist(selectdstate.id)}
                onChange={(event, value) =>
                  setSourcePHC({
                    label: value.label,
                    id: value.id,
                  })
                }
                margin="normal"
                fullWidth
                size="small"
                id="phc"
                name="phc"
                 options={DistrictOptions}
                value={sourcephc}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="PHC"
                  // {...register("district")}
                  // error={errors.district ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.district?.message}
                  </Typography> */}
            </Grid>)}
            
            {selectedOption === "healthcamp" && (
      <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={() => getdistictlist(selectdstate.id)}
                onChange={(event, value) =>
                  setSelectedistrict({
                    label: value.label,
                    id: value.id,
                  })
                }
                margin="normal"
                fullWidth
                size="small"
                id="district"
                name="district"
                 options={DistrictOptions}
                value={selectedistrict}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="District"
                  // {...register("district")}
                  // error={errors.district ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.district?.message}
                  </Typography> */}
            </Grid>)}
            {selectedOption === "healthcamp" && (
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                margin="normal"
                fullWidth
                onChange={(event, value) => {
                  setMuncislected({
                    label: value.label,
                    id: value.id,
                  });
                  console.log(event);
                }}
                size="small"
                id="munsi"
                name="munsi"
                options={MandalOptions}
                value={muncislected}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Mandal"
                  // {...register("munsi")}
                  // error={errors.munsi ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.mandal?.message}
                  </Typography> */}
            </Grid>)}
            {selectedOption === "healthcamp" && (
      <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={() => getdistictlist(selectdstate.id)}
                onChange={(event, value) =>
                  setSourceHC({
                    label: value.label,
                    id: value.id,
                  })
                }
                margin="normal"
                fullWidth
                size="small"
                id="hc"
                name="hc"
                 options={DistrictOptions}
                value={sourcehc}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Health Camp"
                  // {...register("district")}
                  // error={errors.district ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.district?.message}
                  </Typography> */}
            </Grid>)}
           
              
            {selectedOption === "sachiwalayam" && (
      <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={() => getdistictlist(selectdstate.id)}
                onChange={(event, value) =>
                  setSelectedistrict({
                    label: value.label,
                    id: value.id,
                  })
                }
                margin="normal"
                fullWidth
                size="small"
                id="district"
                name="district"
                 options={DistrictOptions}
                value={selectedistrict}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="District"
                  // {...register("district")}
                  // error={errors.district ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.district?.message}
                  </Typography> */}
            </Grid>)}
            {selectedOption === "sachiwalayam" && (
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                margin="normal"
                fullWidth
                onChange={(event, value) => {
                  setMuncislected({
                    label: value.label,
                    id: value.id,
                  });
                  console.log(event);
                }}
                size="small"
                id="munsi"
                name="munsi"
                options={MandalOptions}
                value={muncislected}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Mandal"
                  // {...register("munsi")}
                  // error={errors.munsi ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.mandal?.message}
                  </Typography> */}
            </Grid>)}
            {selectedOption === "sachiwalayam" && (
      <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                // onFocus={() => getdistictlist(selectdstate.id)}
                onChange={(event, value) =>
                  setSourceSachiwalay({
                    label: value.label,
                    id: value.id,
                  })
                }
                margin="normal"
                fullWidth
                size="small"
                id="sachiwalaya"
                name="sachiwalayam"
                 options={DistrictOptions}
                value={sourcesahiwalay}
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Sachiwalayam"
                  // {...register("district")}
                  // error={errors.district ? true : false}
                  />
                )}
              />
              {/* <Typography variant="inherit" color="error">
                    {errors.district?.message}
                  </Typography> */}
            </Grid>)}


            </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <PageTitle name={heading6} />
          {/* <Typography variant="h5">Case Details</Typography> */}
          <Grid container direction="row" rowSpacing={0} columnSpacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Autocomplete
                margin="normal"
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                onChange={(event, value) => {
                  setHospitalselected({
                    label: value.label,
                    id: value.id,
                  });
                }}
                options={HospitalOptions}
                value={hospitalselected}
                size="small"
                sx={{ width: "100%", mt: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Hospital" />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Date and Time of Registration"
                name="email"
                autoComplete="email"
                size="small"

                InputLabelProps={{ shrink: true, required: true }}
                // defaultValue={values.currentDate}
                value={datetime.toLocaleString()}
                disabled={true}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default PatientReg
