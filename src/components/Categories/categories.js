import
{
  FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
// import { useEffect } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header/header';
import Page from '../Page/page';
import Footer from '../Footer/footer';
import Card from '../ProductCard/productCard';
import Loading from '../App/Loading';
// un selector c'est simplement une fonction à qui on passe le state pour en déduire une valeur
import { findCategory } from '../../selectors/categories';
import './style.scss';

export default function Category() {
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
    console.log(category);
  }

  const handleChange = ((event) => {
    // console.log(event.target);
    // return <p>Hello</p>;
  
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
              {categories.map(({ name, slug }) => {
                const slugURL = `http://localhost:8080/categories/${slug}`;
                return (
                  <MenuItem
                    className="link-dropdown"
                    value={name}
                    key={slug}
                  >
                    <Link
                      to={slugURL}
                      key={name}
                    >
                      {name}
                    </Link>
                  </MenuItem>
                );
              })}
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
