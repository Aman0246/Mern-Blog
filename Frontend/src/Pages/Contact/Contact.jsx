import React from 'react'
import contact from "./contact.gif"
import { Box } from '@mui/material'

export default function Contact() {
  return (
    <Box sx={{display:'flex',flexDirection:'column',flexWrap:'wrap',marginX:'10px',justifyContent:'center',alignItems:'center'}}>
        <Box >
      <img src={contact} alt="Contact"  />

        </Box>
        <Box sx={{background:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box sx={{backgroundColor:'#ffcfda'}}>
              <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
                <Box sx={{fontSize:'25px',display:'flex',color:'black',fontWeight:600}}>Email:<Box sx={{color:'#9b2525'}}>amankashyap0246@gmail.com</Box></Box>
                <Box sx={{fontSize:'25px',display:'flex',color:'black',fontWeight:600}}>Linkedin:<Box sx={{color:'#9b2525'}}><a style={{textDecoration:'none',color:'#9b2525'}} href="http://www.linkedin.com/in/aman-kashyap-bb1249172/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/aman-kashyap-bb1249172/</a></Box></Box>
                <Box sx={{fontSize:'25px',display:'flex',color:'black',fontWeight:600}}>GitHub:<Box sx={{color:'#9b2525'}}> <a style={{textDecoration:'none',color:'#9b2525'}} href="https://github.com/Aman0246" target="_blank" rel="noopener noreferrer">https://github.com/Aman0246</a></Box></Box>

              </Box>

            </Box>
        </Box>
    </Box>
  )
}
