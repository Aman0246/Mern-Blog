import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import blogo from "./blogo.png"
import { Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function Navebar() {
  return (
    <AppBar>
        <Toolbar sx={{background:'white',color:'black'}}>
            <Box sx={{display:'flex',justifyContent:'space-between',width:'100%',paddingX:'5rem',alignItems:'center'}}>
                  <Box> <img src={blogo} style={{width:'10rem',height:'4rem'}} alt=""/></Box>
                  <Box sx={{display:'flex',gap:5}}>
                    <Box><Link to={'/'} style={{textDecoration:'none'}}>HOME</Link> </Box>
                    <Box>ABOUT</Box>
                    <Box>CONTACT</Box>
                    <Box>WRITE</Box>
                    <Box>LOGOUT</Box>
                  </Box>
                  <Box sx={{display:'flex',gap:3,alignItems:'center'}}>
                    <Box>Name</Box>
                    <Box><AccountCircleIcon  sx={{width:'2rem',height:'2rem'}}/></Box>
                  </Box>
            </Box>
        </Toolbar>
      
    </AppBar>
  )
}