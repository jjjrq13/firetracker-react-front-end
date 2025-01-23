import { useState, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import SigninForm from './components/SigninForm/SignInForm';
import SignupForm from './components/SignupForm/SignupForm';
import UserDashboard from './components/UserDashboard/UserDashboard';
import * as authService from '../services/authService';

export const AuthedUserContext = createContext(null);

const App = () => {
    const [user, setUser] = useState(authService.getUser());

    const handleSignout = () => {
        authService.signout();
        setUser(null);
    };

    return (
        <>
            <AuthedUserContext.Provider value={user}>
                <NavBar user={user} handleSignout={handleSignout} />
                <Routes>
                  {user ? (
                    <Route path='/' element={<UserDashboard user={user}/>} />
                    ) : (
                      <Route path='/' element={<Navigate to='/home' />} />,
                      <Route path='/home' element={<Landing />} />
                    )}
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/signin' element={<SigninForm />} />
                    <Route path='/signup' element={<SignupForm />} />

                    <Route path='/users' element={<UserDashboard />} />
                </Routes>
            </AuthedUserContext.Provider>
        </>
    );
};

export default App;