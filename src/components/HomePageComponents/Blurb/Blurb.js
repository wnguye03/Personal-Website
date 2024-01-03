import Typography from '@mui/material/Typography';
import { TypeAnimation } from 'react-type-animation';

const Blurb = ({ primaryTextColor, hoverColor, secondaryTextColor, introTexts }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', height: '50vh', alignItems: 'center' }}>
        <div style={{ width: '30%', textAlign: 'left', marginTop: '2%' }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  display: 'block',
                  marginBottom: '1%',
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  letterSpacing: '.3rem',
                  color: hoverColor,
                  textDecoration: 'none',
                  mx: 2,
                }}
              >
                {introTexts.blurbStarterText}
            </Typography>
            <Typography
                variant="h2"
                noWrap
                component="a"
                sx={{
                  display: 'block',
                  marginBottom: '1%',
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  letterSpacing: '.3rem',
                  color: primaryTextColor,
                  textDecoration: 'none',
                  mx: 2,
                }}
              >
                {introTexts.title}
            </Typography>
            <Typography
                variant="h4"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 900,
                  letterSpacing: '.3rem',
                  color: secondaryTextColor,
                  textDecoration: 'none',
                  mx: 2,
                }}
              >
                {introTexts.introductionText}
            </Typography>
            <TypeAnimation
              sequence={introTexts.introTypedTextArr}
              wrapper="span"
              speed={50}
              style={{ 
                fontFamily: 'monospace',
                fontWeight: 900,
                letterSpacing: '.3rem',
                color: secondaryTextColor,
                textDecoration: 'none',
                fontSize: '2rem',
                display: 'inline-block' }}
              repeat={Infinity}
          />
        </div>
      </div>
    )
}

export default Blurb