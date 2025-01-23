import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../../services/authService';

const SigninForm = (props) => {
    const navigate = useNavigate();
    const [message, setMessage] = useState(['']);
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const updateMessage = (msg) => {
      setMessage(msg);
    };
  
    const handleChange = (e) => {
      updateMessage('');
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const user = await authService.signin(formData);
        console.log(user);
        props.getUser(user);
        navigate('/');
      } catch (err) {
        updateMessage(err.message);
      }
    };

    return (
        <main>
            <div className='form-container'>
                <h1>Welcome back</h1>
                <p>{message}</p>

                <form
                    autoComplete='off'
                    onSubmit={handleSubmit}
                    className='sign-form'
                >
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {console.log(formData)}
                    <button>Sign In</button>
                </form>
                <div className='cancel-button'>
                    <button>
                        <Link to='/'>Cancel</Link>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default SigninForm;
