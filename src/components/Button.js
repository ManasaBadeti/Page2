import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';


export default function SubmitButton() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap'}}>
     
      <Button variant="solid" size="md"  sx={{bgcolor:'#2196f3',':hover': { bgcolor: '#2196f3',color:'white'}, marginTop:7, width:170,fontSize:15,color:'white'}} >
        Retrieve</Button>
     
    </Box>
  );
}