import React from 'react';
import { Toolbar, Typography, Button, Grid } from '@mui/material';

function BodyPage() {
    return (
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
           <Grid item xs={4} style={{paddingLeft: '10px'}}>
                <Typography>
                    Clinica odontologica especialista
                    <Typography variant="h5" style={{ paddingTop: '20px', fontSize: '2.5em', color: 'gray'}}>Atencion para todas las edades</Typography>
                    <Button variant="contained" color="primary" style={{borderRadius: '50px', }}>
                        Reservar en linea
                    </Button>
                    <Typography variant="h6" style={{ paddingTop: '20px' }}>o llama al 800-10-01-02</Typography>
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Toolbar>
                    <img src="/static/images/img/imagen 2.png" alt="Logo" />
                </Toolbar>
            </Grid>
        </Grid>
    )
}
export default BodyPage;