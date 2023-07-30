import { Box, Button, Typography } from '@mui/material'
import React ,{useState} from 'react'
import Card from '@mui/material/Card';
import LinearScaleSharpIcon from '@mui/icons-material/LinearScaleSharp';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'


export default function BlogCard({e}) {
    const [Hert,setHert]=useState(false)

    return (
        <Box  sx={{ marginX: '3rem', background: '',width:'25rem',paddingY:'20px',cursor:'pointer'}}>
            <Card sx={{ color: 'black', background: '#d7e3ed','@media (max-width: 863px)':{marginLeft:'3rem'},'@media (max-width: 272px)':{marginLeft:'10rem'} }} >
                <Box sx={{ display: 'flex', justifyContent: 'space-between' , alignItems: 'center', paddingX: '10px', background: '#d7e3ed' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Box>
                            
                            <img src={e.profilePic} alt="DP" style={{ borderRadius: '50%', width: '3rem', height: '3rem', paddingRight: '5px',paddingTop:'3px' }} />
                        </Box>
                        <Box sx={{ fontWeight: 600 }}>
                            {e.username}
                        </Box>
                    </Box>
                    <Box>
                        <LinearScaleSharpIcon />
                    </Box>
                </Box>
                <CardMedia sx={{ height:'10rem',width:'100%' }}
                    image={e?e.photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPglJHJLsk1ZBbHAROLEtY15NuFV_wf57swTt3ZbtTuG2V147-5VfAf0j-asxfk6KJvA&usqp=CAU"}
                    title="green iguana" />

                <Box>
                    <Box sx={{ display: 'flex', gap: 3, margin: '5px' }}><FavoriteBorderIcon onClick={()=>{setHert(!Hert)}} sx={{color:Hert?"red":"",cursor:'pointer'}} /><MapsUgcIcon onClick={()=>{setDialogOpen(true)}} sx={{cursor:'pointer'}}  /></Box>
                </Box>
                <Box sx={{ margin: '5px', paddingBottom:'1rem'}}>
                <Typography sx={{ fontWeight: 600 }} noWrap>
                                    {e.title && e.title.length > 20 ? `${e.title.slice(0, 20)}...` : e.title}
                                    </Typography>
 
                    <Typography sx={{color:'#8a8a8a'}}>{e.categories[0]}</Typography>
                    <Typography sx={{ lineBreak: 'anywhere' }}>
                    {e.desc && e.desc.length > 100 ? `${e.desc.slice(0, 100)}...` : e.desc}
                    </Typography>

                
                </Box>

            </Card>
        </Box>
    )
}
