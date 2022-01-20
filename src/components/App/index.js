// == Import
import './styles.css';
import Header from '../Header/header';
import SignIn from '../Login/login';

// == Composant
const App = () => (
  <div className="app">
    {/* <Header /> */}
    <SignIn />
    {/* <Button id="button" variant="contained">Contained</Button> */}
  </div>
);

// == Export
export default App;
