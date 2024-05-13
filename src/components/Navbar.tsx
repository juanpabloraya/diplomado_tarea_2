import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Box paddingLeft={15}>
        <img src="/static/images/img/imagen 1.png" alt="Logo"/>
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit" sx={{ color: 'black' }}>Nosotros</Button>
          <Button color="inherit" sx={{ color: 'black' }}>Servicios</Button>
          <Button color="inherit" sx={{ color: 'black' }}>Nuevos pacientes</Button>
          <Button color="inherit" sx={{ color: 'black' }}>Contacto</Button>
        </Box>
        
        {/* COLOR VERDE */}
        <Box sx={{ flexGrow: 1 }} />
        <ZoomInOutlinedIcon sx={{ color: 'green', marginRight: 5 }} />
        <DarkModeOutlinedIcon sx={{ color: 'green', marginRight: 5 }} />
        
        <Button variant="contained" color="primary" style={{borderRadius: '50px'}}>
          Reservar
        </Button>
        <Box sx={{ flexGrow: 0.5 }} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
