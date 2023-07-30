import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import BlogCard from '../Components/BlogCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CircularProgress from '@mui/joy/CircularProgress';
import { allBlog } from '../Redux/allBlogs'
import { useDispatch, useSelector} from 'react-redux'
export default function Home() {
  const[loading,setLoading]=useState(false)
  const dispatch = useDispatch()
  const selector=useSelector(state=>state.allBlog)

  useEffect(()=>{
    const gettingAllblog=async()=>{
      setLoading(true)
      await axios.get('/posts').then((e)=>{
        setLoading(false)
        dispatch(allBlog(e.data.data))
      })
    }
    gettingAllblog()
  },[dispatch])
  return (
    <Box sx={{position:'relative'}}>
       {loading&&<Box sx={{position:'absolute'}}><CircularProgress variant="solid" /></Box>} 
      <Box sx={{width:'100%'}}><img style={{width:'100%',height:'130vh',position:'fixed',zIndex:-1}} src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Background"  /></Box>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'10rem'}}>
        

        {selector.map((e)=>
        <Box  key={e._id}>
          <Link to={`/blog/${e._id}`} style={{textDecoration:'none'}}>
          <BlogCard e={e}></BlogCard>
          </Link>
          </Box>
          )}
 
      </Box>
      
    </Box>
  )
}
