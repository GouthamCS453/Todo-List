import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  return (
    <div class='center'>
         <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="UserId" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Item-Description" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Completion Status" variant="outlined" />
      <br />
    <Button variant="contained">ADD</Button>
    </Box>
    </div>
  )
}

export default Add