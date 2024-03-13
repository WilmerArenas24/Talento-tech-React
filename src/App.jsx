import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Example from './components/example';
import UserList from './components/user/UserList';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="user" element={<UserList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
