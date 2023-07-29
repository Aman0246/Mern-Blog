import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';

export default function Edit({open} ) {
  return (
    <Dialog open={open} >
      <Box><img src="https://images.unsplash.com/photo-1690484813045-d27df776bc8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" srcset="" /></Box>
      <Box>a</Box>
    </Dialog>
  )
}
