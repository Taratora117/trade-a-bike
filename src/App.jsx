import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';
import Page from './components/Page/Page';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate replace to="home" />} />
      <Route path="home" element={<Page><Home /></Page>} />
      <Route path="*" />
    </Routes>
  );
}

export default App;

