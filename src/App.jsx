// import { useState, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import SigninForm from './components/SigninForm/SignInForm';
import SignupForm from './components/SignupForm/SignupForm'
// import SignupForm from './components/SignupForm/SignupForm'


const App = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Landing />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signin' element={<SigninForm />}/>
        <Route path='/signup' element={<SignupForm />}/>
      </Routes>
      </>
  );
}

export default App;