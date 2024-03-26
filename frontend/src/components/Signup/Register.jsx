import React, { useState } from 'react';
import './Register.css';
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
<<<<<<< HEAD
=======
    const [isLoginForm, setIsLoginForm] = useState(true); // State to track active form
>>>>>>> 8a4b1352a7278c8afcaa5979fadc40a98409f207

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
<<<<<<< HEAD
            const response = await axios.post('http://localhost:3000/register', {
                email,
                password,
=======
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: email, 
                    password: password
                }),
>>>>>>> 8a4b1352a7278c8afcaa5979fadc40a98409f207
            });
            console.log(response.data); // Assuming the server returns some data upon successful registration
        } catch (error) {
            console.error('Error registering:', error);
        }
    };
<<<<<<< HEAD
    return (

        <form className="flex justify-center items-center h-screen" onSubmit={handleSubmit}>
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <div className='flex justify-center items-center'>
                    <img src="/assets/logo3.png" alt="" width="120vw" />
                </div>
                <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i> Login</h1>
                <hr className="mt-3" />
                <div className="mt-3">
                    <label htmlFor="email" className="block text-base mb-2">Email</label>
                    <input type="email" id="email" name='email' className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Username..." />
                </div>
                <div className="mt-3">
                    <label htmlFor="password" className="block text-base mb-2">Password</label>
                    <input type="password" id="password" name='password' className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password..." />
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <div>
                        <input type="checkbox" />
                        <label>Remember Me</label>
                    </div>
                    <div>
                        <a href="#" className="text-indigo-800 font-semibold">Forgot Password?</a>
                    </div>
                </div>
                <div className="mt-5">
                    <button type="submit" className="border-2 border-indigo-700 bg-#f4f6f8-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
                </div>
=======

    const switchForm = () => {
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div>
            <div className="bg"></div>
            <div className="top-section">
                neso@jalandhar.org ||| Phone: 9999900000
>>>>>>> 8a4b1352a7278c8afcaa5979fadc40a98409f207
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
