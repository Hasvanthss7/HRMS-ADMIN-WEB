import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query';
import {  ThemeProvider } from '@mui/material/styles';
import { Theme } from '../Theme/Theme';




const App = () => {


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus:false,
    },
  },
})

  return (
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
       <Typography variant='h1'>Hello</Typography>  <Button variant="contained">hello</Button>
        <Typography></Typography>
      </QueryClientProvider> 
    </ThemeProvider>
    

  )
}

export default App