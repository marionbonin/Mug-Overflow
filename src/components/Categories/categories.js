import
{
  FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';

// import { useEffect } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/header';
import Page from '../Page/page';
import Footer from '../Footer/footer';
import Card from './ProductCardCategory/productCardCategory';
import Loading from '../App/Loading';
// un selector c'est simplement une fonction à qui on passe le state pour en déduire une valeur
import { findCategory } from '../../selectors/categories';
import { fetchProductsByCategory } from '../../actions/products';
import './style.scss';

export default function Category() {
  const dispatch = useDispatch();
  // getting current slug with useParams
  const parameters = useParams();
  const currentSlug = parameters.slug;
  // getting the category matching to the slug (if it exists)
  const category = useSelector((state) => findCategory(state.categories.list, currentSlug));

  const categories = useSelector((state) => state.categories.list);

  // const products = useSelector((state) => state.products.list);
  // console.log(products);


  // if the categories array was found
  //  (always exists in state, empty by default)
  // but NOT the category matching the slug, return Error.
  if ((categories.length > 0) && !category) {
    return <Navigate to="/error" replace />;
  }
  if ((categories.length > 0) && category) {
    console.log('On récupère les produits en fonction du slug');
    dispatch(fetchProductsByCategory());
  }

  const handleChange = ((event) => {
    console.log(event.target);
  });

  if (categories.length === 0) {
    return (
      <>
        <Header />
        <Page>
          <Loading />
        </Page>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <Page>
        <h1> {category.name} </h1>
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
              value={category.name}
              label="Catégorie"
              onChange={handleChange}
            >
              {categories.map(({ name, slug }) => (
                <MenuItem
                  className="link-dropdown"
                  value={name}
                  key={slug}
                >
                  <Link
                    to={`/categories/${slug}`}
                    key={name}
                  >
                    {name}
                  </Link>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div id="category-results">
          <Card key="1" className="product-card" props="" />
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
