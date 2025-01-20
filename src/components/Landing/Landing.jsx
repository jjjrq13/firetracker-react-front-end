/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './Landing.css';


const Landing = () => {
    return (
        <>
            <div>
                <h1>Firetracker: The World's #1 Kakeibo-Style Tracker</h1>
                <p>
                    New here? Click the sign-up button below to start a simple,
                    effective journey toward mastering your expenses with ease.
                </p>
            </div>
            <div className='landing-button'>
                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
                <Link to='/Signin'>
                    <button>Sign In</button>
                </Link>
            </div>
        </>
    );
};

export default Landing;
