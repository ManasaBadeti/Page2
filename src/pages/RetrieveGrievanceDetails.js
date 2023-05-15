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
import { useEffect, useState } from 'react'
const RetrieveGrievanceDetails = ({displayDetails}) => {
   
    const [selectedistrict, setSelectedistrict] = useState(null);
    const genderOptions = [
        { label: 'Male', id: 1 },
        { label: 'Female', id: 2 },
       
      ];
      const DistrictOptions = [
        { label: 'Guntur', id: 1 },
        { label: 'NTR', id: 2 }
      ];
      const VillageOptions = [
        { label: 'Atmakur', id: 1 },
       
      ];
      const MandalOptions = [
        { label: 'Chebrole-R', id: 1 },
        { label: 'mandal2', id: 2 }
      ];
      const covid19Options = [
        { label: 'Yes', id: 1 },
        { label: 'No', id: 2 }
      ];
      const relationOptions = [
        { label: 'self', id: 1 },
        { label: 'mother', id: 2 }
      ];
      const sampleOptions = [
        { label: 'HAEMODAILYSIS', id: 1 },
        { label: 'CHRONIC HAEMODAILYSIS', id: 2 }
      ];

  

    const heading1="Patient Details"
    const heading2="Grievance Details"
  return (
    <>
       {displayDetails && (
      <Card>
        <CardContent>
          <PageTitle name={heading1} />

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
                id="firstname"
                // onChange={(event, value) => {
                //   setName(event.target.value);
                // }}
                label="First Name"
                //value={Name}
                 value="Manasa"
                //  InputProps={{
                //   name: 'InputProps',placeholder:'First Name'}}
                 disabled
                name="firstname"
                size="small"
              />
           </Grid>
           <Grid item xs={12} sm={3} md={3} lg={3}>
           <TextField
                margin="normal"
                fullWidth
                id="lastname"
                // onChange={(event, value) => {
                //   setName(event.target.value);
                // }}
                label="Last Name"
                //value={Name}
                value="Badeti"
                 disabled
                name="lastname"
                size="small"
              />
           </Grid>
           <Grid item xs={12} sm={3} md={3} lg={3}>
           <TextField
                margin="normal"
                fullWidth
                id="age"
                // onChange={(event, value) => {
                //   setName(event.target.value);
                // }}
                label="Age"
                //value={Name}
                value="21"
                disabled
                name="age"
                size="small"
              />
              </Grid>
              <Grid item xs={12} sm={3} md={3} lg={3}>
              <Autocomplete
              disabled
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
                value="Female"

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
              <TextField
                margin="normal"
                fullWidth
                // onChange={(event) => {
                //   setNumberselected(event.target.value);
                // }}
                id="contactnumber"
                label="Contact Number"
                value="9876543210"
                type="number"
                disabled
                // {...register("contactnumber")}
                // error={errors.contactnumber ? true : false}
                name="contactnumber"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
                disablePortal
                disabled
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
                // value={selectedistrict}
                value="GUNTUR"
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
           
            </Grid>
           <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              disabled
                disablePortal
                margin="normal"
                fullWidth
                // onChange={(event, value) => {
                //   setMuncislected({
                //     label: value.label,
                //     id: value.id,
                //   });
                //   console.log(event);
                // }}
                size="small"
                id="mandal"
                name="mandal"
                options={MandalOptions}
                value="Chebrole-R"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Mandal"
               />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              disabled
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
                fullWidth
                size="small"
                id="village"
                name="village"
                 options={VillageOptions}
                value="Atmakur"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Village"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              disabled
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
                fullWidth
                size="small"
                id="covid19"
                name="covid19"
                 options={covid19Options}
                value="No"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Covid_19 Patient"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
                disabled
                fullWidth
                size="small"
                id="relation"
                name="relation"
                 options={relationOptions}
                value="self"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Relationship"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}></Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <PageTitle name={heading2} /> </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
                disabled
                fullWidth
                size="small"
                id="hospname"
                name="hospname"
                 options={sampleOptions}
                value="NRI ACADEMY OF SCIENCES"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Hosipital Name"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
               
                fullWidth
                size="small"
                id="docname"
                name="docname"
                 options={sampleOptions}
                value="DR. HARSHAVARDHAN"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Doctor Name"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
               
                fullWidth
                size="small"
                id="role"
                name="role"
                 options={sampleOptions}
                value="MEDICO"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Role"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
                disabled
                fullWidth
                size="small"
                id="grievancenature"
                name="grievancenature"
                 options={relationOptions}
                value="Money Collection"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Nature of Grievance"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
               
                fullWidth
                size="small"
                id="category"
                name="category"
                 options={sampleOptions}
                value="NEPHROLOGY (M6)"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Category"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
               
                fullWidth
                size="small"
                id="subcategory"
                name="subcategory"
                 options={sampleOptions}
                value="HAEMODAILYSIS OR PERITONEAL DAILYSIS (MG072)"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Sub Category"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
               
                fullWidth
                size="small"
                id="surgery"
                name="surgery"
                 options={sampleOptions}
                value="CHRONIC HAEMODAILYSIS (MG072D)"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Surgery"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Autocomplete
              
             
                disablePortal
                // onFocus={getvillagelist}
                // onChange={(event, value) => {
                //   setViallageselected({
                //     label: value.label,
                //     id: value.id,
                //   });
                // }}
                margin="normal"
               
                fullWidth
                size="small"
                id="templates"
                name="templates"
                 options={sampleOptions}
                value="Complaint on the Staff of NWH"
                sx={{ width: "100%", mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Templates"
               
                  />
                )}
              />
          
            </Grid> 
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                // value={crDesc}
                // onChange={(newValue) => setCrDesc(newValue.target.value)}
                multiline
                required
                fullWidth
                id="email"
                label="Grievance Description"
                name="grievancedesc"
                autoComplete="grievancedesc"
                size="small"
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                // value={crDesc}
                // onChange={(newValue) => setCrDesc(newValue.target.value)}
                multiline
                required
                fullWidth
                id="email"
                label="Grievance Action"
                name="grievanceact"
                autoComplete="grievanceact"
                size="small"
                rows={4}
              />
            </Grid>
           </Grid>
           <Stack direction="row" spacing={2} justifyContent='center'>
           <Button  variant="contained" >
                Save
              </Button>
              <Button  variant="contained" >
                Submit
              </Button>
           </Stack>
           </CardContent>
      
    </Card>

    )}
    </>
  )
}

export default RetrieveGrievanceDetails
