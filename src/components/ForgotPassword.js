import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/forgot-password', { email });
            setMessage('Password reset link sent to your email');
        } catch (err) {
            setMessage('Failed to send reset link');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form class='form-container' onSubmit={handleForgotPassword}>
                <input
                    class='form-group input'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className='btn-primary' type="submit">Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
