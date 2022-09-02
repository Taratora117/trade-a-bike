import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Page from './components/Page/Page';
import AppContext from './context/AppContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
import Categories from './pages/Categories/Categories';
import Saved from './pages/Saved/Saved';
import About from './pages/About/About';

import './App.css';


function App() {
  const [appState, setAppState] = useState({
    user: null,
    userData: null,
  });

  return (
    <AppContext.Provider value={{...appState, setContext: setAppState}}>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="/home" element={<Page><Home /></Page>} />
        <Route path="/search" element={<Page><Search /></Page>} />
        <Route path="/categories" element={<Page><Categories /></Page>} />
        <Route path="/saved" element={<Page><Saved /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/login" element={<Page><Login /></Page>} />
        <Route path="/register" element={<Page><Register /></Page>} />
        <Route path="*" />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
