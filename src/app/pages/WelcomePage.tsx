import React from 'react'
import Bienvenida from "../../assets/bienvenida.svg";
import { Box, Typography } from '@mui/material';


export const WelcomePage = () => {
  return (
    <Box display='flex' alignItems='center' height='100%'>
      <Box component='img' src={Bienvenida} width='600px' height='600px'></Box>
      <Box>
        <Typography component='div' variant='h3'>
          <Box>Bienvenido a&nbsp;
            <Box color='primary.main' component='span' fontWeight='bold'>
              Chat Center WhatsApp Yape
            </Box>
          </Box>
        </Typography>
      </Box>
    </Box>
  )
}
