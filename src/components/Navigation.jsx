import { AppBar, Box, ButtonBase, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const links = {
  "About Me": "/",
  "Experiences": "/experiences",
  "Contact Me": "/contact",
  "Projects": "/projects"

};

function DesktopNavigation() {
  const location = useLocation();
  const theme = useTheme();
  return ( 
    <AppBar position="relative" color="default" elevation={0} sx={{mb: 3}}>
      <Container>
        <Toolbar disableGutters sx={{alignItems:'stretch'}}>
          <ButtonBase as={Link} to="/" sx={{pl: 2, pr: 2}}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontWeight: 700,
                color: 'inherit'
              }}
            >
              Frank Li
            </Typography>
          </ButtonBase>
          <Box flexGrow={1}/>
          {
            Object.entries(links).map(([label, path], i) => (
              <ButtonBase key={i} as={Link} to={path} sx={{pl: 2, pr: 2, width: '150px'}}>
                {
                  (location.pathname.toLowerCase() == path) ? (
                  <Typography sx={{fontWeight: 700, color: theme.palette.primary[500]}} variant="navbar">
                    {label}
                  </Typography>) : 
                  (<Typography variant="navbar">
                    {label}
                  </Typography>)
                }
                
              </ButtonBase>
            ))
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function MobileNavigation() {
  const [menuElement, setMenuElement] = useState(null);
  const menuClick = (e) => {
    setMenuElement(e.target);
  };
  const menuClose = () => {
    setMenuElement(null);
  };
  return ( 
    <AppBar position="relative" color="default" elevation={0} sx={{mb: 3}}>
      <Container>
        <Toolbar disableGutters sx={{alignItems:'stretch'}}>
          <ButtonBase as={Link} to="/" sx={{pl: 2, pr: 2}}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontWeight: 700,
                color: 'inherit'
              }}
            >
              Person Name
            </Typography>
          </ButtonBase>
          <Box flexGrow={1}/>
          <Stack alignItems="center" justifyContent="center">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={menuClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={menuElement}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(menuElement)}
              onClose={menuClose}
            >
              {Object.entries(links).map(([label, path], i) => (
                <MenuItem key={i} onClick={menuClose} as={Link} to={path}>
                  <Typography variant="navbar">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (isMobile ? (<MobileNavigation />) : (<DesktopNavigation/>))
}

export default Navigation;