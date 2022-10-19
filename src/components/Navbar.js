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

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

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
    <Box sx={{ flexGrow: 1 }}>
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
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
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
          </StyledMenu>
          
          <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>
            Maintenance
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;