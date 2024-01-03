import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const NavBar = ({ textColor, hoverColor, backgroundColor, text }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ backgroundColor: backgroundColor, border: "none", boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Conditional rendering based on screen size */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {/* Logo */}
              <Box
                component="img"
                sx={{ height: 60, width: 'auto', mx: 2, my: 3 }}
                alt="Personal logo"
                src="/images/logo2.png"
              />

              {/* Title */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: textColor,
                  textDecoration: 'none',
                  mx: 2,
                  '&:hover': {
                    color: hoverColor
                  }
                }}
              >
                {text.navBarTitle}
              </Typography>
            </Box>
          )}

          {/* Navigation Items */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {text.navBarOptions.map((page, i) => (
              <div style={{ 
                display: "flex", 
                flexDirection: isMobile ? "column" : "row", // Stack items in column for mobile
                alignItems: "center", 
                marginRight: '1rem',
                }}
              >
                {!isMobile && (<Typography
                    variant={isMobile ? "body1" : "h7"} // Adjust typography variant for mobile
                    noWrap
                    component="a"
                    sx={{
                      marginBottom: isMobile ? '0.5rem' : '1%', // Adjust bottom margin for mobile
                      fontFamily: 'monospace',
                      fontWeight: 900,
                      letterSpacing: '.3rem',
                      color: hoverColor,
                      textDecoration: 'none',
                      mx: 1,
                    }}
                  >
                    {`0${i}.`}
                  </Typography>)}
                  <Button
                    key={page}
                    sx={{ 
                        my: 2, 
                        color: textColor, 
                        display: 'inline-block', 
                        fontFamily: 'monospace', 
                        fontSize: 14,
                        '&:hover': {
                        color: hoverColor
                      }}}
                  >
                    {page}
                  </Button>
                </div>
              ))}
            </Box>

            {/* Resume Button */}
              <Button variant='outlined' sx={{
                fontSize: "0.8rem", 
                color: hoverColor,
                borderColor: hoverColor, // Set the border color here
                '&:hover': {
                  borderColor: hoverColor, // Optional: Change the border color on hover
                },}}  href="https://drive.google.com/file/d/1uYjyMinh9pcnmbt0iHFVFysCzV2l3I1q/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                resume
              </Button>

            {/* Mobile View */}
            {isMobile && (
              <Box
                component="img"
                sx={{ height: 40, width: 'auto' }}
                alt="Personal logo"
                src="/images/logo2.png"
              />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default NavBar;
