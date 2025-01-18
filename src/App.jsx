import { useState, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';


const App = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Landing />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </>
  );
}

export default App;