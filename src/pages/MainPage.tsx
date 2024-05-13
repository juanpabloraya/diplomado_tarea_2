import React from 'react'
import { Box } from '@mui/material'
import BodyPage from '../components/Body'
import Offers from '../components/Offers'
import Navbar from '../components/Navbar';
import Opinions from '../components/Opinions'
import Footer from '../components/Footer'

function MainPage() {
  return (
    <Box>
      <Navbar />
      <Box style={{ paddingTop: '80px' }}>
        <BodyPage />
        <Offers />
        <Opinions />
        <Footer />
      </Box>
    </Box>
  )
}

export default MainPage
