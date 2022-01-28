import PropTypes from 'prop-types';

import './style.scss';

const Page = ({ children }) => {

  //const screenWidth = window.innerWidth;
  //const widthOver1200 = (screenWidth > 200) ? true : false;
  //console.log(screenWidth);
  //console.log(widthOver500);

  return(
  <main className="main-wrapper">
    <div className="page">
    {children}
    </div>
  </main>
  )
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
