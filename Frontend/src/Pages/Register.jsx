import { Box } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast'
 
export default function Register() {
  const [inputs,setinputs]=useState('')
  let [value,setvalue]=useState("")
  const navigate=useNavigate()
const handleChange=(e)=>{
  setinputs({...inputs,[e.target.name]:e.target.value})
}
const handlesubmit=async(e)=>{
  e.preventDefault();
  let formData=new FormData()
  formData.append('avatar',value[0])
  formData.append('username',inputs.username)
  formData.append('email',inputs.email)
  formData.append('password',inputs.password)
  await axios.post("/auth/register",formData).then((data)=>{
    console.log(data)
    if(data.data.status==true){
       toast.success(data.data.message)
       navigate('/login')
    }
    if(data.data.status==false){
      return toast.error(data.data.message)
    }

  })
}
  return (
    <Box sx={{height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',backgroundImage:'url(https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)',backgroundPosition:'center'}}>
      <Box sx={{backgroundColor:'white',opacity:.8,width:'30%',paddingBottom:5}}>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:0}}>
            
        <TextField sx={{marginTop:2,width:'60%'}}  onChange={(e)=>{handleChange(e)}} name='username' color='success' id="standard-basic" label="username" variant="standard" />
        <TextField sx={{marginTop:2,width:'60%'}} onChange={(e)=>{handleChange(e)}} name='email' color='success' id="standard-basic" label="Email" variant="standard" />
        <TextField sx={{width:'60%',marginTop:2}} onChange={(e)=>{handleChange(e)}} name='password' type='password' color='success' id="standard-basic" label="Password" variant="standard" />
        <TextField sx={{width:'60%',marginTop:2}} name="avatar"  onChange={(e)=>{setvalue(e.target.files)}} accept="image/png, image/jpeg" type='file' color='success' id="standard-basic" label="Profile" variant="standard" />
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:2,mt:2}}>

        <Button onClick={handlesubmit} variant="contained" sx={{backgroundColor:'teal'}}>
        Sign up
      </Button>
      <Box sx={{cursor:'pointer',fontWeight:600}}>Already Registered ? <Link to={'/login'}>Login</Link> </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}
