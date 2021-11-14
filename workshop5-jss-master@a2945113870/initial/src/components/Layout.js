import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <main className="content">{children}</main>
    </>
  );
};

export default Layout;
