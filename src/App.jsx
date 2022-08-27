import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="*" />
    </Routes>
  );
}

export default App;

