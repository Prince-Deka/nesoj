import React, { useState } from 'react';
import './Register.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: email, 
                    password: password
                }),
            });

            if (response.ok) {
                console.log('User registered successfully');
            } else {
                console.error('Failed to register user');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div>
            <div className="bg"></div>
            <div className="top-section">
                neso@jalandhar.org | Phone: 9999900000
            </div>
            <div className="main-section">
                <div className="login-details">
                    <h2>LOG-IN</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email_phone">Email or Phone:</label>
                            <input 
                                type="text" 
                                id="email_phone" 
                                name="email_phone" 
                                placeholder="Enter your email or phone" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div className="form-group">
                            <button type="submit">Login</button>
                        </div>
                        <div className="form-group">
                            <p>Not a member? <a href="#">Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="logo">
                    <img src="src/components/Signup/nesoj.png" alt="NESOJ" />
                </div>
            </div>
        </div>
    );
}

export default Signup;
