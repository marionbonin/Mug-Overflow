import Box from '@mui/material/Box';
import Page from '../Page/page';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Accordion from './Accordion/Accordion';
import './style.scss';

export default function FAQ() {
  return (
    <>
      <Header />
      <Page>
        <Accordion />
      </Page>
      <Footer />
    </>
  );
}
