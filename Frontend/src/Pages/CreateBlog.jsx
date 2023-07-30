import { Box, Input, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/joy/Button';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';
import Textarea from '@mui/joy/Textarea';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function CreateBlog() {
    const[loading,setLoading]=useState(false)
    const selector=useSelector(state=>state)
    let data=localStorage.getItem('id')
    // console.log(data)
    

    const [image,setimg]=useState('')
    const [inputs,setinputs]=useState('')
    const navigate=useNavigate()
    const handleChange=(e)=>{
        if(data==true||data==null) {return toast.error('login First')}
        setinputs({...inputs,[e.target.name]:e.target.value})
      }
      const handlePublish= async()=>{
        setLoading(true)
        if(data==true||data==null) {return toast.error('login First')}
            if(inputs.title==undefined||inputs.categories==undefined||inputs.desc==undefined||image[0]==undefined||image[0].length==0||inputs.title.length==0||inputs.categories.length==0||inputs.desc.length==0){
           return alert('please fill all Inputs')  
          }
         const formdata=new FormData()
         formdata.append('avatar',image[0])
         formdata.append('title',inputs.title)
         formdata.append('categories',inputs.categories)
         formdata.append('desc',inputs.desc)
         formdata.append('profilePic',selector.user.profilePic)
             
         await axios.post('/posts/',formdata).then((e)=>{
            setLoading(false)
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
             {loading&&<Box sx={{position:'absolute'}}><CircularProgress variant="solid" /></Box>} 
            <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>

            
            </Box>

            <label >Image _

                <Input type="file"  onChange={(e)=>{setimg(e.target.files)}} id="file"   />
            </label>
                  <TextField name='title'  onChange={(e)=>{handleChange(e)}}  sx={{fontSize:'5rem'}}id="standard-basic" label="Title" variant="standard" />
            <TextField name='categories'  onChange={(e)=>{handleChange(e)}}  sx={{fontSize:'5rem'}}id="standard-basic" label="categories" variant="standard" />
            <Textarea name='desc'  onChange={(e)=>{handleChange(e)}} style={{border:'none'}} sx={{outline:'none'}}  id="outlined-basic" placeholder="Tell Your Story......" variant="outlined" />
           <Button onClick={handlePublish} sx={{textTransform:'none',background:'teal'}}>Publish</Button>
            
        </Box>
    )
}
