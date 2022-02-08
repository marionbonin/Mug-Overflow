import
{
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Navigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/header';
import Page from '../Page/page';
import Footer from '../Footer/footer';
import Card from './ProductCardCategory/productCardCategory';
import Loading from '../App/Loading';
import { findCategory } from '../../selectors/categories';
import { fetchProductsByCategory } from '../../actions/products';
import { saveSlug } from '../../actions/user';
import ScrollToTop from '../ScrollToTop/scrollToTop';
import './style.scss';

export default function Category() {
  const dispatch = useDispatch();
  // getting current slug with useParams
  const parameters = useParams();
  const navigate = useNavigate();
  const currentSlug = parameters.slug;
  // getting the category matching to the slug (if it exists)
  const category = useSelector((state) => findCategory(state.categories.list, currentSlug));

  const categories = useSelector((state) => state.categories.list);
  // console.log(categories);

  // if the categories array was found (always exists in state, empty by default)
  // but NOT the category matching the slug, return Error.
  if ((categories.length > 0) && !category) {
    return <Navigate to="/error" replace />;
  }
  // if ((categories.length > 0) && category) {
  //   console.log('On récupère les produits en fonction du slug');
  // }

  useEffect(() => {
    dispatch(saveSlug(currentSlug));
    dispatch(fetchProductsByCategory());
  }, []);

  const products = useSelector((state) => state.products.list);
  console.log(products);

  const handleChange = ((event) => {
    const slug = event.target.value;
    const base = '/categories/';
    const urlToRedirect = base + slug;
    navigate(urlToRedirect);
    dispatch(saveSlug(slug));
    dispatch(fetchProductsByCategory());
  });

  if ((categories.length === 0) || (!products)) {
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
      <ScrollToTop />
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
              value={category.slug}
              label="Catégorie"
              onChange={handleChange}
            >
              {categories.map(({ name, slug }) => (
                <MenuItem
                  className="link-dropdown"
                  value={slug}
                  key={slug}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="products-results">
          {products.map((product) => (
            <Card
              key={product.name}
              className="product-card"
              {...product}
            />
          ))}
        </div>
      </Page>
      <Footer />
    </>
  );
}
