import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Category2 from './Category2';
import Category3 from './Category3';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Category2" element={<Category2 />} />
      <Route path="/Category3" element={<Category3 />} />
    </Routes>
  );
};

export default AppRoutes;
