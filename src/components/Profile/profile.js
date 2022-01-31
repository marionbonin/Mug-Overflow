import Container from '@mui/material/Container';


import Header from '../Header/header';
import Footer from '../Footer/footer';
import Page from '../Page/page';
import FavoriteCard from './FavoriteCard/favoriteCard';

import './style.scss';

export default function Profile () {
  

  return (
    <>
      <Header />
      <Page>
        <Container>
          <h1>oui</h1>
          <div>
            <form  id="profile-form" >
                <input className="profile-input" type="text" name="user_name" placeholder="Prénom" />
                <input className="profile-input" type="text" name="user_email" placeholder="Nom" />
                <input className="profile-input" type="text" name="user_email" placeholder="Promo" />
                <input className="profile-input" type="email" name="user_email" placeholder="Email" />
                <input id="button-profile" type="submit" value="Sauvegarde" />
            </form>
          </div>
          <div>
            <FavoriteCard  key="1" />
            <FavoriteCard  key="2" />
            <FavoriteCard  key="3" />
          </div>
        </Container>
      </Page>
      <Footer /> 
    </>
  )
}
