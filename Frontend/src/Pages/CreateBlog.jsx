import { Box, Input, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/joy/Button';
import { Link, useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Textarea from '@mui/joy/Textarea';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function CreateBlog() {
    const [image,setimg]=useState('')
    const [inputs,setinputs]=useState('')
    const navigate=useNavigate()
    const handleChange=(e)=>{
        setinputs({...inputs,[e.target.name]:e.target.value})
      }
      const handlePublish= async()=>{
            if(inputs.title==undefined||inputs.categories==undefined||inputs.desc==undefined||image[0]==undefined||image[0].length==0||inputs.title.length==0||inputs.categories.length==0||inputs.desc.length==0){
           return alert('please fill all Inputs')  
          }
         const formdata=new FormData()
         formdata.append('avatar',image[0])
         formdata.append('title',inputs.title)
         formdata.append('categories',inputs.categories)
         formdata.append('desc',inputs.desc)
             
         await axios.post('/posts/',formdata).then((e)=>{
            if(e.data.status==true){
                toast.success(e.data.message)
                navigate('/')
            }
            if(e.data.status==false){
                return toast.error(e.data.message)
            }
         })
                  
      }
    return (
        <Box sx={{ marginTop: '5rem',marginX: '20px',display:'flex',flexDirection:'column',gap:2 ,alignItems:'Left'}}>
            <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>
{/* 
            <img style={{height:'30rem',width:'60rem'}} src='https://plus.unsplash.com/premium_photo-1689751148722-721230be7c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' alt="" srcset="" /> */}
            
            </Box>

            {/* <InputLabel htmlFor="file"> */}
            <label >Image _

                <Input type="file"  onChange={(e)=>{setimg(e.target.files)}} id="file"   />
            </label>
                {/* <AddCircleOutlineIcon sx={{fontSize:'5rem'}} /> */}
            {/* </InputLabel> */}
            <TextField name='title'  onChange={(e)=>{handleChange(e)}}  sx={{fontSize:'5rem'}}id="standard-basic" label="Title" variant="standard" />
            <TextField name='categories'  onChange={(e)=>{handleChange(e)}}  sx={{fontSize:'5rem'}}id="standard-basic" label="categories" variant="standard" />
            <Textarea name='desc'  onChange={(e)=>{handleChange(e)}} style={{border:'none'}} sx={{outline:'none'}}  id="outlined-basic" placeholder="Tell Your Story......" variant="outlined" />
           <Button onClick={handlePublish} sx={{textTransform:'none',background:'teal'}}>Publish</Button>
            
        </Box>
    )
}
