// == Import
import './styles.scss';
import Header from '../Header/header';
import SignIn from '../Login/login';
import Footer from '../Footer/footer';
import CreateAccount from '../CreateAccount/createAccount';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <SignIn />
    <Footer />
    <CreateAccount />
    {/* <Button id="button" variant="contained">Contained</Button> */}
  </div>
);

// == Export
export default App;
