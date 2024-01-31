import { AppBar, Box, ButtonBase, Container, Toolbar, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";


const links = {
  "About Me": "/",
  "Experiences": "/experiences",
  "Contact Me": "/contact"
};

function DesktopNavigation() {
  const location = useLocation();
  const theme = useTheme();
  console.log(location);
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

function Navigation() {
  return (<DesktopNavigation />)
}

export default Navigation;