import React from 'react'
import { Box } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query';




const App = () => {


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus:false,
    },
  },
})

  return (
    <Box> <QueryClientProvider client={queryClient}>Hello App</QueryClientProvider> </Box>
    

  )
}

export default App