// Register.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    
    const [password, setpassword] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    
                    password: password,
                    

                    
                }),
            });

            if (response.ok) {
                console.log('User registered successfully');
                window.alert("Login Successful");
                window.location.replace('/')
            } else {
                console.error('Failed to login');
            }
        } catch (error) {
            console.error('Error login:', error);
        }
    };

    return (
        <div>
            <div className="bg"></div>
            <div className="container">
                <h2 className="mt-5">Signup Form</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-row">
                        <div className="form-group col-md-6 input-container">
                            <input type="email" className="form-control input-field" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
                            <label htmlFor="email" className="label-field">Email</label>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group col-md-6 input-container">
                            <input type="password" className="form-control input-field" id="password" name='password' onChange={(e) => { setpassword(e.target.value) }} required />
                            <label htmlFor="password" className="label-field">Password</label>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>
        </div>

    );
}

export default Login;