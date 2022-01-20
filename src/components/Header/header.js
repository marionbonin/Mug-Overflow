// == Import
import './style.scss';
import ResponsiveAppBarTop from './NavbarTop/navbar';
import ResponsiveAppBar from './NavbarBottom/navbar';

// == Composant
const Header = () => (
  <div className="app">
    <ResponsiveAppBarTop />
    <ResponsiveAppBar />
  </div>
);

// == Export
export default Header;
