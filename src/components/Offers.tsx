import React from 'react';
import { Typography, Box, CardContent, colors } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function Offers() {
    return (
        <Box bgcolor="lightgrey">
            <Box display="flex" flexDirection="column" alignItems="static" style={{ paddingTop: '10px', margin: '0 150px' }}>
            <Box style={{ paddingLeft: '150px'}}>
                <Typography variant="h5" fontWeight={'bold'} sx={{ mb: 4 }} style={{ paddingTop: '40px'}}>
                    Nuestros Servicios
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-around" width="100%" style={{ paddingBottom: '50px' }}>
                <Box bgcolor="white" display="flex" flexDirection="column" alignItems="center" p={1} m={1} flexGrow={1} style={{borderRadius: '50px'}}>
                    <img src="/static/images/img/imagen 4.png" alt="Logo" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                    <CardContent>
                        <Typography variant="h6" fontWeight={'bold'} sx={{ mb: 4 }}>
                            Odontologia Cosmetica
                        </Typography>
                        <Typography fontWeight={'bold'} sx={{ mb: 4, color: 'green', textAlign: 'center' }}>
                            Mas Informacion
                            <ArrowOutwardIcon sx={{ color: 'green' }}/>
                        </Typography>
                    </CardContent>
                </Box>
                <Box bgcolor="white" display="flex" flexDirection="column" alignItems="center" p={1} m={1} flexGrow={1} style={{borderRadius: '50px'}}>
                    <img src="/static/images/img/imagen 3.png" alt="Logo" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                    <CardContent>
                        <Typography variant="h6" fontWeight={'bold'} sx={{ mb: 4 }}>
                            Odontologia Restaurativa
                        </Typography>
                        <Typography fontWeight={'bold'} sx={{ mb: 4, color: 'green', textAlign: 'center' }}>
                            Mas Informacion
                            <ArrowOutwardIcon sx={{ color: 'green' }}/>
                        </Typography>
                    </CardContent>
                </Box>
                <Box bgcolor="white" display="flex" flexDirection="column" alignItems="center" p={1} m={1} flexGrow={1} style={{borderRadius: '50px'}}>
                    <img src="/static/images/img/imagen 6.png" alt="Logo" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                    <CardContent>
                        <Typography variant="h6" fontWeight={'bold'} sx={{ mb: 4, textAlign: 'center' }}>
                            Odontopediatria
                        </Typography>
                        <Typography fontWeight={'bold'} sx={{ mb: 4, color: 'green', textAlign: 'center' }}>
                            Mas Informacion
                            <ArrowOutwardIcon sx={{ color: 'green' }}/>
                        </Typography>
                    </CardContent>
                </Box>
                <Box bgcolor="white" display="flex" flexDirection="column" alignItems="center" p={1} m={1} flexGrow={1} style={{borderRadius: '50px'}}>
                    <img src="/static/images/img/imagen 5.png" alt="Logo" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                    <CardContent>
                        <Typography variant="h6" fontWeight={'bold'} sx={{ mb: 4, textAlign: 'center' }}>
                            Ortodoncia
                        </Typography>
                        <Typography fontWeight={'bold'} sx={{ mb: 4, color: 'green', textAlign: 'center' }}>
                            Mas Informacion
                            <ArrowOutwardIcon sx={{ color: 'green' }}/>
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
        </Box>
        </Box>
    )
}

export default Offers;
