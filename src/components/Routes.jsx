import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
