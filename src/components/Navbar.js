import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Button
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            sx={{ top: 10, left: -20 }}
            onClose={handleClose}
          >
            <MenuItem to="/" component={RouterLink} onClick={handleClose} disableRipple>
              Home
            </MenuItem>
            <MenuItem to="/clean-time" component={RouterLink} onClick={handleClose} disableRipple>
              Clean Time
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem to="/meditations" component={RouterLink} onClick={handleClose} disableRipple>
              Meditations
            </MenuItem>
            <MenuItem to="/prayers" component={RouterLink} onClick={handleClose} disableRipple>
              Prayers
            </MenuItem>
            <MenuItem to="/gratitude" component={RouterLink} onClick={handleClose} disableRipple>
              Gratitude List
            </MenuItem>
            <MenuItem to="/step-10" component={RouterLink} onClick={handleClose} disableRipple>
              Step 10 Questions
            </MenuItem>
            <MenuItem to="/meetings" component={RouterLink} onClick={handleClose} disableRipple>
              Meetings
            </MenuItem>
          </Menu>
          
          <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>
            Maintenance
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;