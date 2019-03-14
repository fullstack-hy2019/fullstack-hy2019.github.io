import './layout.css';
import './index.scss';

import PropTypes from 'prop-types';
import React from 'react';

import DeprecationMessage from './DeprecationMessage/DeprecationMessage';
import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <DeprecationMessage />

      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
