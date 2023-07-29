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


export default function BlogCard() {
    const [Hert,setHert]=useState(false)



    return (
        <Box sx={{ marginX: '3rem', background: '',width:'25rem',paddingY:'20px',cursor:'pointer'}}>
            <Card sx={{ color: 'black', background: '#d7e3ed' }} >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '10px', background: '#d7e3ed' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Box>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPglJHJLsk1ZBbHAROLEtY15NuFV_wf57swTt3ZbtTuG2V147-5VfAf0j-asxfk6KJvA&usqp=CAU" alt="DP" style={{ borderRadius: '50%', width: '3rem', height: '3rem', paddingRight: '5px' }} />
                        </Box>
                        <Box sx={{ fontWeight: 600 }}>
                            Mark
                        </Box>
                    </Box>
                    <Box>
                        <LinearScaleSharpIcon />
                    </Box>
                </Box>
                <CardMedia sx={{ height:'10rem',width:'100%' }}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPglJHJLsk1ZBbHAROLEtY15NuFV_wf57swTt3ZbtTuG2V147-5VfAf0j-asxfk6KJvA&usqp=CAU"
                    title="green iguana" />

                <Box>
                    <Box sx={{ display: 'flex', gap: 3, margin: '5px' }}><FavoriteBorderIcon onClick={()=>{setHert(!Hert)}} sx={{color:Hert?"red":"",cursor:'pointer'}} /><MapsUgcIcon onClick={()=>{setDialogOpen(true)}} sx={{cursor:'pointer'}}  /></Box>
                </Box>
                <Box sx={{ margin: '5px', paddingBottom:'1rem'}}>
                    <Typography sx={{fontWeight:600}}>Title</Typography>
                    <Typography sx={{color:'#8a8a8a'}}>Category</Typography>
                    <Typography>Lorem ipsum dolor sit amet,e, illum repudiandae. Harum minus rerum expedita pariatur aut. At nulla deleniti repellat qui reprehenderit ab vel quae, accusantium et explicabo.</Typography>
                
                </Box>

            </Card>
        </Box>
    )
}
