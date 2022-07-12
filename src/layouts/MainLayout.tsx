import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { Footer } from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div>
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default MainLayout;
