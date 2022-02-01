import { useSelector } from 'react-redux';

import Container from '@mui/material/Container';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import Page from '../Page/page';
import FavoriteCard from './FavoriteCard/favoriteCard';

import './style.scss';

export default function Profile() {
  const userName = useSelector((state) => state.user.firstname);
  console.log(userName);
  return (
    <>
      <Header />
      <Page>
        <Container>
          <h1> Bonjour {userName}  </h1>
          <div id="favorite-form">
            <form id="profile-form">
              <input className="profile-input" type="text" name="user_first_name" placeholder="Prénom" />
              <input className="profile-input" type="text" name="user_last_name" placeholder="Nom" />
              <input className="profile-input" type="text" name="user_promo" placeholder="Promo" />
              <input className="profile-input" type="email" name="user_email" placeholder="Email" />
              <input className="profile-input" type="password" name="user_password" placeholder="" />
              <input id="button-profile" type="submit" value="Sauvegarde" />
            </form>
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
