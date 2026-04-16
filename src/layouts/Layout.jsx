import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-[150vh] bg-[#F8F5F0] text-[#111] overflow-hidden selection:bg-[#0f86ff] selection:text-white">
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
