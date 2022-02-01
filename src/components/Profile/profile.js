import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import Page from '../Page/page';
import FavoriteCard from './FavoriteCard/favoriteCard';

import './style.scss';

export default function Profile() {
  const userFirstName = useSelector((state) => state.user.firstname);
  const userLastName = useSelector((state) => state.user.lastname);
  const userPromo = useSelector((state) => state.user.promo);
  const userEmail = useSelector((state) => state.user.email);
  const userPass = useSelector((state) => state.user.password);


  return (
    <>
      <Header />
      <Page>
        <Container>
          <h1> Bonjour {userFirstName} </h1>

          <div id="favorite-form">
            <Box id="profile-form">
              <TextField className="profile-input" id="pi-1" label={userFirstName} variant="outlined" />
              <TextField className="profile-input" id="pi-2" label={userLastName} variant="outlined" />
              <TextField className="profile-input" id="pi-3" label={userPromo} variant="outlined" />
              <TextField className="profile-input" id="pi-4" label={userEmail} variant="outlined" />
              <TextField className="profile-input" id="pi-5" label={userPass} variant="outlined" />
              <Button
                id="button-profile"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sauvegarder
              </Button>
            </Box>
          </div>
          <h2> Tes Mugs Favoris </h2>
          <div id="favorite-card">
            <FavoriteCard key="1" />
            <FavoriteCard key="2" />
            <FavoriteCard key="3" />
          </div>
        </Container>
      </Page>
      <Footer />
    </>
  );
}
