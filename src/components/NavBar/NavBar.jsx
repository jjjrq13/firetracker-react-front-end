import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <nav className='navigation'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </>
    );
};

export default NavBar;
