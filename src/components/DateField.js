import dayjs from 'dayjs';
import React from "react";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export default function Date() {
// const current = new Date();
// const date = '${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}';   
 const [value, setValue] = React.useState(dayjs({}));
const handleChange = (newValue) => {
setValue(newValue); };
 return ( <LocalizationProvider dateAdapter={AdapterDayjs} >
 <DesktopDatePicker inputFormat="MM/DD/YYYY"
 value={value}
onChange={handleChange}
 renderInput={(params) => 
<TextField size="small" {...params} sx={{border:'1px solid blue'}}/>}/>
 </LocalizationProvider> ); }