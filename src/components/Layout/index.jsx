import React from 'react';
import PropTypes from 'prop-types';
import Back from '../general/Back';
import Header from './Header';
import './style.scss';

const Layout = ({ children, backRoute, title, id }) => {
  return (
    <>
      <Header />
      <main id={id}>
        <article>
          {backRoute && <Back to={backRoute} />}
          {title && <h1>{title}</h1>}
          {children}
        </article>
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backRoute: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};

Layout.defaultProps = {
  backRoute: '',
  title: '',
  id: '',
};

export default Layout;
