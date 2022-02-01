import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import LinkMUI from '@mui/material/Link';
import { Link } from 'react-router-dom';
import logoOclock from 'src/assets/images/logo-oclock.svg';
import logoInsta from 'src/assets/images/logos-social/logo-insta.png';
import logoFB from 'src/assets/images/logos-social/logo-FB.png';
import logoTikTok from 'src/assets/images/logos-social/logo-tiktok.png';
import logoGmail from 'src/assets/images/logos-social/logo-gmail.png';
import './style.scss';

function Copyright(props) {
  return (
    <Typography id="copyright-typo" variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <a href="https://oclock.io/">
        Mug OverFlow
      </a>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
export default function Footer() {
  return (
    <footer>
      <Box
        id="footer"
        sx={{
          position: 'absolute',
        }}
      >
        {/* Footer container - max width = "Large" breakpoint */}
        <Container maxWidth="xl">
          {/* 3 columns container */}
          <Grid container>
            {/* First column - social media links -
            display 12/12 on mobile, 4/12 or 1/3 of the page on other devices */}
            <Grid
              item
              xs={12}
              sm={4}
              sx={
                {
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  order: { xs: 3, sm: 1 },
                }
              }
              id="social-container"
            >
              <a href="#">
                <img
                  className="social-icon"
                  src={logoFB}
                  alt="logo FB"
                />
              </a>
              <a href="#">
                <img
                  className="social-icon"
                  src={logoInsta}
                  alt="logo insta"
                />
              </a>
              <a href="#">
                <img
                  className="social-icon"
                  src={logoTikTok}
                  alt="logo TikTok"
                />
              </a>
              <a href="#">
                <img
                  className="social-icon"
                  src={logoGmail}
                  alt="logo Gmail"
                />
              </a>
            </Grid>

            {/* 2nd column - Oclock logo */}
            <Grid
              item
              xs={12}
              sm={4}
              id="logo-container"
              sx={
                {
                  order: { xs: 1, sm: 2 },
                }
              }
            >
              <img src={logoOclock} alt="logo O'clock" id="logo-image" />
            </Grid>

            {/* 3rd column - page links */}
            <Grid
              item
              xs={12}
              sm={4}
              id="page-links-container"
              sx={
                {
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center', sm: 'space-between' },
                  order: { xs: 2, sm: 3 },

                }
              }
            >
              <Link to="/mentions-legales"> Mentions légales </Link>
              <Link to="/cgu"> CGU </Link>
              <Link to="/faq"> FAQ </Link>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </Box>
    </footer>
  );
}
