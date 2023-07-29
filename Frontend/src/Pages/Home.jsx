import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import BlogCard from '../Components/BlogCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { allBlog } from '../Redux/allBlogs'
import { useDispatch, useSelector} from 'react-redux'
export default function Home() {
  const dispatch = useDispatch()
  const selector=useSelector(state=>state.allBlog)

  useEffect(()=>{
    const gettingAllblog=async()=>{
      await axios.get('/posts').then((e)=>{
        dispatch(allBlog(e.data.data))
      })
    }
    gettingAllblog()
  },[dispatch])
  return (
    <Box sx={{position:'relative'}}>
      <Box sx={{width:'100%'}}><img style={{width:'100%',height:'70vh',position:'fixed',zIndex:-1}} src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80" alt="Background"  /></Box>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',paddingTop:'10rem'}}>
        

        {selector.map((e)=>
        <Box key={e._id}>
          <Link to={`/blog/${e._id}`} style={{textDecoration:'none'}}>
          <BlogCard e={e}></BlogCard>
          </Link>
          </Box>
          )}
 
      </Box>
      
    </Box>
  )
}
