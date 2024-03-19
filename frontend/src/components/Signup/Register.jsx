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
                    email:email, 
                    password:password
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

        <form class="flex justify-center items-center h-screen" onSubmit={handleSubmit}>
            <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                <div className='flex justify-center items-center'>
                    <img src="/assets/logo3.png" alt="" width="120vw"/>
                </div>
                <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i> Login</h1>
                <hr class="mt-3" />
                <div class="mt-3">
                    <label for="email" class="block text-base mb-2">Email</label>
                    <input type="email" id="email" name='email' class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Username..." />
                </div>
                <div class="mt-3">
                    <label for="password" class="block text-base mb-2">Password</label>
                    <input type="password" id="password" name='password' class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password..." />
                </div>
                <div class="mt-3 flex justify-between items-center">
                    <div>
                        <input type="checkbox" />
                        <label>Remember Me</label>
                    </div>
                    <div>
                        <a href="#" class="text-indigo-800 font-semibold">Forgot Password?</a>
                    </div>
                </div>
                <div class="mt-5">
                    <button type="submit" class="border-2 border-indigo-700 bg-#f4f6f8-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
                </div>
            </div>
        </form>



    );
}

export default Signup;
