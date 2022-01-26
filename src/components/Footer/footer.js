import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
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
      <Link color="inherit" href="https://mui.com/">
        Mug OverFlow
      </Link>{' '}
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
          {/* 3 colums container */}
          <Grid container>
            {/* First column - display 12/12 on mobile, 4/12 or 1/3 of the page on other devices */}
            <Grid
              item
              xs={12}
              sm={4}
              sx={
                {
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                }
              }
              id="footer-social"
            >
              <a href="#">
                <img
                  className="footer-social-icon"
                  src={logoFB}
                  alt="logo FB"
                />
              </a>
              <a href="#">
                <img
                  className="footer-social-icon"
                  src={logoInsta}
                  alt="logo insta"
                />
              </a>
              <a href="#">
                <img
                  className="footer-social-icon"
                  src={logoTikTok}
                  alt="logo TikTok"
                />
              </a>
              <a href="#">
                <img
                  className="footer-social-icon"
                  src={logoGmail}
                  alt="logo Gmail"
                />
              </a>
            </Grid>

            {/* Seconde colone du footer */}
            <Grid item xs={12} sm={4}>
              <img src={logoOclock} alt="logo O'clock" id="logo-footer" />
            </Grid>

            {/* Troisième tiers du footer */}
            <Grid
              item
              xs={12}
              sm={4}
              id="footer-links"
              sx={
                {
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center', sm: 'space-between' },
                }
              }
            >
              <Link href="#" px={3}> Mentions légales </Link>
              <Link href="#" px={3}> CGV </Link>
              <Link href="/faq" px={3}> FAQ </Link>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </Box>
    </footer>
  );
}
