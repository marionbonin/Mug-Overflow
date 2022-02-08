import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Page from '../Page/page';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Loading from '../App/Loading';
import Card from '../ProductCard/ProductCardCategory/productCardCategory';
import { changeValue } from '../../actions/user';

import './style.scss';

export default function SearchResults() {
//   // getting current slug with useParams
//   const parameters = useParams();
//   const currentSlug = parameters.slug;
//   console.log(currentSlug);
  // getting the fetched searched results
  const dispatch = useDispatch;
  const searchedProducts = useSelector((state) => state.products.list);
  const isLoading = useSelector((state) => state.products.loading);
  const searchValue = useSelector((state) => state.user.searchValue);
  console.log(searchedProducts);
  const nbOfProducts = searchedProducts.length;

  // // if the page reload, or if we go back from a product page to our
  // // search page, it will display no results. Cause we need to get the
  // // informations once more. In that case, searchValue will be empty.
  // if (!searchValue) {
  //   // We get the slug search from the url
  //   const slugFromSearchBar = window.location.pathname;
  //   const lastSegment = slugFromSearchBar.split('/').pop();
  //   console.log(lastSegment);
  //   const searchedValue = 'searchValue';
  //   // Then we dispatch this value in the store, to be able to
  //   // call API again, with correct value in the user store.
  //   dispatch(changeValue(searchedValue, lastSegment));
  //   console.log(searchValue);
  // }

  return (
    <>
      <Header />
      <Page>
        {isLoading && (
          <Box className="search-content">
            <Loading />
          </Box>
        )}
        {!isLoading && (
          <Box className="search-content">
            <h1> Résultats de la recherche </h1>
            {!searchedProducts[0] && (
              <p>Aucun résultat pour la recherche</p>
            )}
            {searchedProducts[0] && (
              <>
                <p id="results-message">{nbOfProducts} mugs correspondants</p>
                <div className="products-results">
                  {searchedProducts.map((product) => (
                    <Card
                      key={product.name}
                      className="product-card"
                      {...product}
                    />
                  ))}
                </div>
              </>
            )}
          </Box>
        )}
      </Page>
      <Footer />
    </>
  );
}
