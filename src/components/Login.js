import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { email, password });
            localStorage.setItem('token', response.data.token); // Store JWT token
            // Redirect to dashboard
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form class='form-container' onSubmit={handleLogin}>
                <input
                class='form-group input'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                class='form-group input'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                            <Link className="nav-link" to="/forgot-password">Forgot Password</Link>
                        

                <button className='btn-primary' type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
