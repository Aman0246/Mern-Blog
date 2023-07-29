import React from 'react'
import { Box } from '@mui/material'
import BlogCard from '../Components/BlogCard'

export default function Home() {
  return (
    <Box sx={{position:'relative'}}>
      <Box sx={{width:'100%'}}><img style={{width:'100%',height:'70vh',position:'fixed',zIndex:-1}} src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80" alt="Background"  /></Box>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'10rem'}}>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      </Box>
      
    </Box>
  )
}
