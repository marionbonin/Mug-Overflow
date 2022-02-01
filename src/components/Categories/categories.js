import
{
  FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Error from '../Error/error';
import Header from '../Header/header';
import Page from '../Page/page';
import Footer from '../Footer/footer';
import Card from '../ProductCard/productCard';

// un selector c'est simplement une fonction à qui on passe le state pour en déduire une valeur
import { findCategory } from '../../selectors/categories';
import './style.scss';

export default function CategoryDropdown() {
  // getting current slug with useParams
  const parameters = useParams();
  const currentSlug = parameters.slug;
  // getting the category matching to the slug (if it exists)
  const category = useSelector((state) => findCategory(state.categories.list, currentSlug));
  // if the categories array was found
  //  (always exists in state, empty by default)
  // but NOT the category matching the slug, return Error.
  const categories = useSelector((state) => state.categories.list);
  if ((categories.length > 0) && !category) {
    return <Navigate to="/error" replace />;
  }
  if ((categories.length > 0) && category) {
    console.log(category.name);
  }

  return (
    <>
      <Header />
      <Page>
        <h1> Titre Catégorie </h1>
        <div id="dropdown-container">
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
            >
              Catégorie
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="catég 1"
              label="Catégorie"
              placeholder="test value"
              onChange={() => {
                console.log("appel API et modif de l'affichage des produits au changement de catégorie");
              }}
            >
              <MenuItem value="catég 1">Catég 1
              </MenuItem>
              <MenuItem value="catég 2">Catég 2
              </MenuItem>
              <MenuItem value="catég 3">Catég 3
              </MenuItem>
              <MenuItem value="catég 4">Catég 4
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div id="category-results">
          <Card key="1" className="product-card" />
          <Card key="2" className="product-card" />
          <Card key="3" className="product-card" />
          <Card key="4" className="product-card" />
          <Card key="5" className="product-card" />
          <Card key="6" className="product-card" />
        </div>
      </Page>
      <Footer />
    </>
  );
}
