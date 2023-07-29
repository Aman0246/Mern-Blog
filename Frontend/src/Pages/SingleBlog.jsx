import { Box } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Edit from './Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';

export default function SingleBlog() {
  const[open,setopen]=useState(false)
  const navigate=useNavigate()
  const handleDelete=()=>{
    navigate('/')
  }
  return (
    <Box sx={{marginTop:'10vh'}}>
      <Box sx={{justifyContent:'center',alignItems:'center',display:'flex'}}><img style={{width:'50rem',maxWidth:'100%',maxHeight:'100%'}} src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="blogPhoto"/></Box>    
      <Box sx={{justifyContent:'center',alignItems:'left',display:'flex',padding:'5px 20px',flexDirection:'column'}}>
             <Box sx={{fontSize:'8rem',color:'#545151'}}>Title</Box>
             <Box sx={{fontSize:'2rem',color:'#8a8a8a'}}>Type/Category</Box>

        <Box sx={{display:'flex',justifyContent:'space-between'}}>
             <Box sx={{fontSize:'1.7rem',color:'#8a8a8a'}}>Author</Box>
             <Box sx={{display:'flex'}}>
             <EditIcon  onClick={()=>{setopen(true)}} sx={{cursor:'pointer',color:'#8a8a8a',fontSize:'40px'}}/>
                  <Edit open={open} setopen={setopen} ></Edit>
                  <Box ><DeleteForeverIcon onClick={handleDelete} sx={{cursor:'pointer',color:'#f94f4f',fontSize:'40px'}}/></Box>
             </Box>

        </Box>
             <Box sx={{fontSize:'1.5rem',color:'#8a8a8a'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, repellendus. Ipsum ab culpa dolorum voluptatum rerum non quis quibusdam blanditiis adipisci dolor aut, magnam officiis delectus animi minima, eveniet aperiam, veritatis nobis tenetur libero illo quo! Reprehenderit vitae voluptatum quibusdam dolores officia doloremque, magni dolor quod quos qui excepturi rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor nisi maxime officia aperiam obcaecati quam excepturi, ipsa unde, architecto reprehenderit corporis enim? Distinctio alias atque animi voluptatem molestiae mollitia, voluptate veritatis at sit recusandae cumque a dolorum vel consequuntur vitae esse minus? Et rem dolorem laboriosam, possimus ducimus deleniti?</Box>
        </Box>    
    </Box>
  )
}
