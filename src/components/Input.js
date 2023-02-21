import * as React from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

export default function Inputs() {
  return (
    <Stack spacing={2}>
      
      <Input size="md" placeholder="xxxxxxxxxxx" sx={{bgcolor:'#FFFFFF'}}/>
      <Input size="md" placeholder="xxxxxxxxxxx" sx={{bgcolor:'#FFFFFF'}} />
      
    </Stack>
  );
}