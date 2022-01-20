// == Import
import './styles.css';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../Header/Navbar/navbar';

// == Composant
const App = () => (
  <div className="app">
    <ResponsiveAppBar />
    <h1>Composant : App</h1>
    {/* <Button id="button" variant="contained">Contained</Button> */}
  </div>
);

// == Export
export default App;
