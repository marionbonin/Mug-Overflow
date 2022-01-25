import Box from '@mui/material/Box';
import Page from '../Page/page';
import Header from '../Header/header';
import Footer from '../Footer/footer';

import './style.scss';

export default function Error() {
  return (
    <>
      <Header />
      <Page>
        <Box className="box-error-page">
          <h1> Error 404 </h1>
          <h2>Mug not found </h2>
        </Box>
      </Page>
      <Footer />
    </>
  );
}
