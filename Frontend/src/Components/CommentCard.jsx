import { Box, Typography } from '@mui/material'
import React from 'react'

export default function CommentCard({e}) {
  console.log(e)
  return (
    <Box sx={{width:'100%',display:'flex',gap:2,paddingBottom:1,borderBottom:'1px solid #4c4a4a',background:'gray',paddingTop:'5px',paddingLeft:'5px'}}>
         
    <Box>
            <img  style={{width:'2.5rem',height:'2.5rem',borderRadius:'50%'}} src={e&&e.profilePic} alt=""  />
    </Box>

    <Box sx={{color:'white',width:'80%'}}>
        <Typography  sx={{ fontSize:'16px',color:'#fffdfd'}}>{e&&e.username}</Typography>
        <Typography  sx={{ fontSize:'13px',color:'#d2fffd'}}>{e&&e.email}</Typography>
        <Typography  sx={{ fontSize:'15px',wordSpacing:5,marginTop:2,color:'black'}}>{e&&e.desc}</Typography>
    </Box>
</Box>
  )
}
