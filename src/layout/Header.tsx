import { alpha, Avatar, Box, InputAdornment, InputBase, TextField, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { dammiLogo, NotificationIcon } from '../assets';

const Header = () => {
  return (
  <Box sx={{width:"95%",height:"40px", display:"flex", flexDirection:"row", justifyContent:"space-between",padding:"20px",border:"3px solid yellow",overflowY:"hidden"}}>
    <Box sx={{display:"flex",border:"2px solid green",justifyContent:"space-between"}}>
      <img src={dammiLogo} alt="noLogo" />
      <TextField sx={{width:"60%",}} placeholder='Search' slotProps={{
              input: {
                sx:{height:"40px"},
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}/>


        
    </Box>
    <Box sx={{border:"1px solid red", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
    <img src={NotificationIcon} alt="loho" />
    <Typography>Basha Mohammad</Typography>
    <Avatar>H</Avatar>

    </Box>
  </Box>
  )
}

export default Header