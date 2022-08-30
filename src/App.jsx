import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';
import Page from './components/Page/Page';
import AppContext from './context/AppContext';
import Login from './pages/Login';
import Register from './pages/Register';

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
        <Route path="/login" element={<Page><Login /></Page>} />
        <Route path="/register" element={<Page><Register /></Page>} />
        <Route path="*" />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

