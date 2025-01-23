import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import './NavBar.css';

const NavBar = ({ handleSignout }) => {
    const user = useContext(AuthedUserContext);
    return (
        <>
            <nav className='navigation'>
                {user ? (
                    <>
                        <Link to='/'>Dashboard</Link>
                        <Link to='' onClick={handleSignout}>Sign Out</Link>
                    </>
                ) : (
                    <>
                        <Link to='/home'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                    </>
                )}
            </nav>
        </>
    );
};

export default NavBar;
