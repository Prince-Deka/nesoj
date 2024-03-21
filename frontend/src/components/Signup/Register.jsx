import React, { useState } from 'react';
import './Register.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginForm, setIsLoginForm] = useState(true); // State to track active form

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

    const switchForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div>
            <div className="bg"></div>
            <div className="top-section">
                neso@jalandhar.org ||| Phone: 9999900000
            </div>
            <div id="registerContainer" className="container white z-depth-2">
                <ul className="tabs teal">
                    <li className={`tab col s3 ${isLoginForm ? 'active' : ''}`}><a className="white-text" href="#" onClick={switchForm}>login</a></li>
                    <li className={`tab col s3 ${!isLoginForm ? 'active' : ''}`}><a className="white-text" href="#" onClick={switchForm}>register</a></li>
                </ul>
                {isLoginForm ? (
                    <div id="login" className="col s12">
                        <form onSubmit={handleSubmit} className="col s12">
                            <div className="form-container">
                                <h3 className="teal-text">Hello</h3>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password" type="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <br />
                                <center>
                                    <button className="btn waves-effect waves-light teal" type="submit" name="action">Connect</button>
                                    <br />
                                    <br />
                                    <a href="">Forgotten password?</a>
                                </center>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div id="register" className="col s12">
                        <form onSubmit={handleSubmit} className="col s12">
                            <div className="form-container">
                                <h3 className="teal-text">Welcome</h3>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" className="validate" />
                                        <label htmlFor="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="last_name" type="text" className="validate" />
                                        <label htmlFor="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="register-email" type="email" className="validate" />
                                        <label htmlFor="register-email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email-confirm" type="email" className="validate" />
                                        <label htmlFor="email-confirm">Email Confirmation</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="register-password" type="password" className="validate" />
                                        <label htmlFor="register-password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="password-confirm" type="password" className="validate" />
                                        <label htmlFor="password-confirm">Password Confirmation</label>
                                    </div>
                                </div>
                                <center>
                                    <button className="btn waves-effect waves-light teal" type="submit" name="action">Submit</button>
                                </center>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Signup;
