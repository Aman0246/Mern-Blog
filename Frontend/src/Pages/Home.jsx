import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import BlogCard from '../Components/BlogCard'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  useEffect(()=>{
    const gettingAllblog=async()=>{
      await axios.get('/posts').then((e)=>{
        console.log(e)
      })
    }
    gettingAllblog()
  })
  return (
    <Box sx={{position:'relative'}}>
      <Box sx={{width:'100%'}}><img style={{width:'100%',height:'70vh',position:'fixed',zIndex:-1}} src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80" alt="Background"  /></Box>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'10rem'}}>
        <Link to={`/blog/id`} style={{textDecoration:'none'}}>
         <BlogCard/>

        </Link>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      </Box>
      
    </Box>
  )
}
