import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Products', 'Services', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function HeaderBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar 
            position="static"
            style={{
                height: '40px',
                backgroundColor: '#ffffff',
                color: 'black'
            }}
        >

            <Container maxWidth="xl">

                <Toolbar disableGutters>

                    <Typography
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Some Company Consulting

                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            >
                            <MenuIcon />

                        </IconButton>
                
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            {pages.map((page) => (

                                <MenuItem key={page} onClick={handleCloseNavMenu}>

                                    <Typography textAlign="center">{page}</Typography>

                                </MenuItem>

                            ))}

                        </Menu>

                    </Box>

                    <Typography
                        sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1 }} >
                        
                        Some Company Consulting

                    </Typography>

                    <Box sx={{ flexGrow: 1 }} /> 

                        <Box sx={{ display:'flex', alignItems:'center' }}>        

                            {pages.map((page, index) => (

                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ mx: 1, color: 'black' }}
                                    >
                                    
                                    {page}

                                    </Button>

                            ))}

                        <Box sx={{ width: 24 }} />

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Account settings">

                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

                            </IconButton>

                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>

                                <Typography textAlign="center">{setting}</Typography>
                                
                                </MenuItem>
                            ))}
                        
                        </Menu>

                    </Box>

                </Toolbar>

            </Container>

        </AppBar>
    );
}
