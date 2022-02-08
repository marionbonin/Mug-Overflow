import PropTypes from 'prop-types';
import ScrollToTop from '../ScrollToTop/scrollToTop';

import './style.scss';

const Page = ({ children }) => (
  <>
    <ScrollToTop />
    <main className="main-wrapper">
      <div className="page">
        {children}
      </div>
    </main>
  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
