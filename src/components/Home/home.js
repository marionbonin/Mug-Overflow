import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Page from '../Page/page';

export default function Home() {
  return (
    < >
      <Header />
      <Page>
        <Box>
          <Typography id="infoDisclaimer">
            <h3> Tous les mugs sont au prix unitaire de 12€. Sélectionnez, personnalisez, et recevez le mug de vos rêves directement chez vous !</h3>
          </Typography>
        </Box>
        <Box>
          
        </Box>
      </Page>
      <Footer />
    </>
  )
}
