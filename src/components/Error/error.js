import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Page from '../Page/page';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import spilledMug from 'src/assets/images/spilled-mug.svg';
import './style.scss';

export default function Error() {
  return (
    <>
      <Header />
      <Page>
        <Box className="box-error-page">
          <h1> 404 </h1>
          <h2> Mug not found </h2>
          <p>
            On peut commander un mug  404 fois.
          </p>
          <p>
            On peut commander 404 mugs une fois.
          </p>
          <p>
            Mais on ne peut pas commander 404 mugs, 404 fois.
          </p>
          <img src={spilledMug} alt="mug spilled" className="spilled-mug" />
          <Link
            to="/"
            // sx={{ order: { xs: 1, sm: 2 } }}
            id="link-home"
          >
            <Button
              id="button"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Revenir à l'accueil
            </Button>
          </Link>

        </Box>
      </Page>
      <Footer />
    </>
  );
}
