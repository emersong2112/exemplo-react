import React from 'react';
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

export default Layout;
