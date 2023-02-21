import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Date from './DateField';
import RadioButtons from './RadioButton';
import Inputs from './Input';
import Typography from '@mui/material/Typography';
import SubmitButton from './Button';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#F1F1F1', height: 250, margin: 5,  border: '2px solid black',padding:1 }}>
      <Grid container  sx={{marginTop:0,padding:1}}>
        <Grid item xs={2} direction="row" justifyContent="center" alignItems="flex-start"  >
          <Item sx={{ fontFamily: 'sans-serif', fontSize: 15, textAlign: 'center', color: '#2196f3', bgcolor: '#dbefff', border: "1px solid blue", margin: 1, fontWeight: 'bold' }}>Date of Birth <Date/></Item>
        </Grid>
        <Grid item xs={4}  >
          <RadioButtons />

        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={2} />
        <Grid item xs={2} >
        
        </Grid >
        <Grid item xs={3} sx={{marginRight:1}}>
          <Item sx={{ fontSize: 15, textAlign: 'center', color: '#2196f3', bgcolor: '#dbefff', border: "1px solid blue", fontWeight: 'bold'}}>Family Member Aadhar No</Item>
          <Typography variant="h6" component="h6" mt={3} align="center" sx={{ fontSize: 15 }}>
            Confirm Aadhar
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{marginRight:2}}>
          <Inputs />
        </Grid>
        <Grid item xs={2} >
          <SubmitButton />
        </Grid>

      </Grid>
    </Box>
  );
}
