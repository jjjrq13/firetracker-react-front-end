import { Link } from 'react-router-dom';

const SigninForm = () => {
    return (
        <div className='form-container'>
            <h1>Welcome back</h1>

            <form className='sign-form'>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' id='username' required />

                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' required />
                <button>Sign In</button>
            </form>
            <div className='cancel-button'>
                <button>
                    <Link to='/'>Cancel</Link>
                </button>
            </div>
        </div>
    );
};

export default SigninForm;
