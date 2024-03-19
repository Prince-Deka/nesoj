import React, { useState } from 'react';
import './Register.css';
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', {
                email,
                password,
            });
            console.log(response.data); // Assuming the server returns some data upon successful registration
        } catch (error) {
            console.error('Error registering:', error);
        }
    };
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
            </div>
        </form>



    );
}

export default Signup;
