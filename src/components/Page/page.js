import PropTypes from 'prop-types';

import './style.scss';

const Page = ({ children }) => (
  <main className="main-wrapper">
    <div className="page">
      {children}
    </div>
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
