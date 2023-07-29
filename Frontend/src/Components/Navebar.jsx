import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import blogo from "./blogo.png"
import { Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {logout} from '../Redux/userSlice'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Navebar() {
  const selector=useSelector(state=>state.user)
  const dispatch=useDispatch()
  
  const handleLogout=()=>{
    localStorage.clear('persist:root')
    localStorage.clear('id')
    localStorage.clear('FeatureFlags')
    dispatch(logout('a'))
  }
  console.log(selector)
  return (
    <AppBar>
        <Toolbar sx={{background:'white',color:'black'}}>
            <Box sx={{display:'flex',justifyContent:'space-between',width:'100%',paddingX:'5rem',alignItems:'center'}}>
            <Box><Link to={'/'} ><img src={blogo} style={{width:'10rem',height:'4rem'}} alt=""/></Link> </Box>
              
                  <Box sx={{display:'flex',gap:5}}>
                    <Box><Link to={'/'} style={{textDecoration:'none',color:'black'}}>HOME</Link> </Box>
                    <Box sx={{cursor:'pointer'}}>ABOUT</Box>
                    <Box sx={{cursor:'pointer'}}>CONTACT</Box> 
                    <Box> <Link to={'/create'} style={{textDecoration:'none',color:'black'}}>WRITE</Link></Box>
                    {selector.email?<Box onClick={handleLogout} style={{textDecoration:'none',color:'black',cursor:'pointer'}}>LogOut</Box>:<Box> <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>Login</Link></Box>}
                    
                    
                  </Box>
                  <Box sx={{display:'flex',gap:3,alignItems:'center'}}>
                    {selector&&
                    <Box>{selector.username}</Box>}

                    <Box>{selector.email?<img style={{width:'2rem',borderRadius:'50%'}} src={selector.profilePic} alt="Dp"/>:<AccountCircleIcon  sx={{width:'2rem',height:'2rem'}}/>}</Box>
                  </Box>
            </Box>
        </Toolbar>
      
    </AppBar>
  )
}
