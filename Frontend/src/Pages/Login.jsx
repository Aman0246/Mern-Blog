import { Box } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import {auth,provider} from "../Components/FireBase/Firebase"
import axios from 'axios';
import {signInWithPopup} from "firebase/auth"

import toast from 'react-hot-toast';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch, useSelector,} from 'react-redux'
import {loginSuccess} from "../Redux/userSlice"

const inputsStructure={
  username:'',
  email:'',
  password:'',
  profilePic:''
}

export default function Login() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [inputs,setinputs]=useState(inputsStructure)
  const handleChange=(e)=>{  
    setinputs({...inputs,[e.target.name]:e.target.value})
  }
  const signInWithGoogle=()=>{
  
    signInWithPopup(auth,provider).then((result)=>{
      axios.post("/auth/google",{username:result.user.displayName ,email:result.user.email,profilePic:result.user.photoURL}).then((e)=>{
        
        if(e.data.status==true){
          toast.success(e.data.message)
          dispatch(loginSuccess(e.data.data))
          localStorage.setItem('id',true)
          navigate("/")
        }
        if(e.data.status==false){
          return toast.error(e.data.message)
        }
       
        
      })
    }).catch((e)=>{console.log(e)})}
  const handleLogin=async()=>{
    
    if(inputs.Email==0 || inputs.password.length==0){
      return  toast.error("Empty Field")
    }
  
      await axios.post("/auth/login",{...inputs}).then((e)=>{
        if(e.data.status==false){return toast.error(e.data.message)}
        if(e.data.status==true){
          localStorage.setItem('id',true)
          dispatch(loginSuccess(e.data.data))
          navigate('/')
           toast.success(e.data.message)}
        
      })
  }
  return (
    <Box sx={{height:'100vh',justifyContent:'center',alignItems:'center',display:'flex',backgroundImage:'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)'}}>
      <Box sx={{backgroundColor:'white',opacity:.8,width:'30%',paddingBottom:5}}>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:5}}>
        <TextField sx={{marginTop:5,width:'60%'}} name='Email' onChange={(e)=>{handleChange(e)}} type='email' color='success' id="standard-basic" label="Email" variant="standard" />
        <TextField sx={{width:'60%'}} color='success' name='password' onChange={(e)=>{handleChange(e)}} type='Password' id="standard-basic" label="Password" variant="standard" />
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>

        <Button onClick={handleLogin} variant="contained" sx={{backgroundColor:'teal'}}>
        Login
      </Button>
      Or
      <Button onClick={signInWithGoogle} sx={{backgroundColor:'teal',fontWeight:600,color:'black'}}><GoogleIcon sx={{marginRight:1,color:'#00cbff'}}/> Google</Button>
      <Box sx={{cursor:'pointer',fontWeight:600}}>New User ?<Link to={'/signup'}>Register</Link> </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}
