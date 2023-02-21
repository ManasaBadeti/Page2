import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function RadioButton() {
  return (
    <FormControl>
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
       
        sx={{bgcolor:'#dbefff',border:"1px solid blue", paddingLeft:2,marginTop:3,marginBottom:0,marginLeft:0,marginRight:0}}
      >
        <FormControlLabel value="Aadhar ID" control={<Radio />} label="Aadhar ID" />
        <FormControlLabel value="Enrollment ID" control={<Radio />} label="Enrollment ID" />
        
        
      </RadioGroup>
    </FormControl>
  );
}