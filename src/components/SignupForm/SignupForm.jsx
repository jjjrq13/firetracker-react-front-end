import { Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
    return (
        <div>
            <h1>Create new account</h1>

            <form className='sign-form'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' name='firstName' id='firstName' required />

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' name='lastName' id='lastName' required />

                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id='username' required />

                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' required />

                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    required
                />
                <button type='submit'>Sign Up</button>
            </form>
            <div className='cancel-button'>
                <button>
                    <Link to='/'>Cancel</Link>
                </button>
            </div>
        </div>
    );
};

export default SignupForm;
