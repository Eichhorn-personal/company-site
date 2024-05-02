import * as React from 'react';

import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function FooterBar() {

    const iconSize = 25;
    const iconColor = '#b3b3b3';
  
    return (

        <Grid
            style={{
                position: 'fixed',
                height: '40px',
                bottom: 0,
                left: 0,
                width: '100%',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 1)',
                backgroundColor: '#ffffff',
                paddingLeft: '16px'
            }}
        >

            <Button style={{ minWidth: 0 }}>
                <FacebookRoundedIcon style={{ fontSize: iconSize, color: iconColor }}/>
            </Button>

            <Button style={{ minWidth: 0 }}>
                <LinkedInIcon style={{ fontSize: iconSize, color: iconColor }}/>
            </Button>

            <Button style={{ minWidth: 0 }}>
                <InstagramIcon style={{ fontSize: iconSize, color: iconColor }}/>
            </Button>

            <Button style={{ minWidth: 0 }}>
                <EmailIcon style={{ fontSize: iconSize, color: iconColor }}/>
            </Button>

        </Grid>
    );
}
