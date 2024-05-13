import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
    return (
        <Box bgcolor="lightgrey" paddingTop={5}>
            <Grid container direction="column" alignItems="center" style={{ paddingTop: '10px'}}>
            <Grid item xs={12}>
                <Typography variant="h5" fontWeight={'bold'} sx={{ mb: 4 }}>
                    Síguenos en redes sociales
                </Typography>
            </Grid>
            <Grid item container xs={12} justifyContent="center" spacing={1}>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                    <WhatsAppIcon></WhatsAppIcon>
                    <Typography variant="body1">
                        WhatsApp
                    </Typography>
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                    <FacebookIcon></FacebookIcon>
                    <Typography variant="body1">
                        Facebook
                    </Typography>
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                    <YouTubeIcon></YouTubeIcon>
                    <Typography variant="body1">
                        YouTube
                    </Typography>
                </Grid>
                <Grid item xs={1} style={{ textAlign: 'center' }}>
                    <TelegramIcon></TelegramIcon>
                    <Typography variant="body1">
                        Telegram
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} fontWeight={'bold'} sx={{ mb: 4 }}>
                <Typography variant="body1">
                    Política de privacidad
                </Typography>
            </Grid>
        </Grid>
        </Box>
    )
}

export default Footer;
