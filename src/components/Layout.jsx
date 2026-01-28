import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToHash from './ScrollToHash';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-black">
      <ScrollToHash />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
