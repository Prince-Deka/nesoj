// Register.js
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
        <div class="bg"></div>
        <div class="container">
            <h2 class="mt-5">Signup Form</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-4 input-container">
                        <input type="text" class="form-control input-field" id="firstName" required />
                        <label for="firstName" class="label-field">First Name</label>
                    </div>
                    <div class="form-group col-md-4 input-container">
                        <input type="text" class="form-control input-field" id="middleName" required />
                        <label for="middleName" class="label-field">Middle Name</label>
                    </div>
                    <div class="form-group col-md-4 input-container">
                        <input type="text" class="form-control input-field" id="lastName" required />
                        <label for="lastName" class="label-field">Last Name</label>
                    </div>
                </div>
                <div class="form-row">
            <div class="form-group col-md-6 input-container">
                <input type="text" class="form-control input-field" id="username" required/>
                <label for="username" class="label-field">Username</label>
            </div>
            <div class="form-group col-md-6 input-container">
                <input type="email" class="form-control input-field" id="email" required/>
                <label for="email" class="label-field">Email</label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6 input-container">
                <input type="text" class="form-control input-field" id="university" required/>
                <label for="university" class="label-field">University</label>
            </div>
            <div class="form-group col-md-6 input-container">
                <input type="text" class="form-control input-field" id="universityID" required/>
                <label for="universityID" class="label-field">University ID/Registration ID</label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="course">Course</label>
                <select id="course" class="form-control" required>
                    <option id="Default">Select Course</option>
                    <option id="BTech-CSE">B.Tech(CSE)</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="year">Year</label>
                <input type="number" class="form-control" id="year" required/>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="residence">Residence</label><br/>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="residence" id="hosteller" value="Hosteller" required/>
                    <label class="form-check-label" for="hosteller">Hosteller</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="residence" id="outsider" value="Outsider" required/>
                    <label class="form-check-label" for="outsider">Outsider</label>
                </div>
            </div>
        <div class="form-row">
            <div class="form-group col-md-6">             
                <label for="gender">Gender</label><br/>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="male" value="Male" required/>
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="female" value="Female" required/>
                    <label class="form-check-label" for="female">Female</label>
                </div>    
            </div>  
        </div>
            <div class="form-group col-md-6 input-container">
                <input type="number" class="form-control input-field" id="aadharID" required/>
                <label for="aadharID" class="label-field">Aadhar ID</label>
            </div>
            <div class="form-group col-md-6">
                <label for="dob">Date-of-Birth </label>
                <input type="date" class="form-control" id="dob" required/>
            </div>
            
        </div>
        <div class="form-row">
            <div class="form-group col-md-6 input-container">
                <input type="password" class="form-control input-field" id="password" required/>
                <label for="password" class="label-field">Password</label>
            </div>
            <div class="form-group col-md-6 input-container">
                <input type="password" class="form-control input-field" id="confPassword" required/>
                <label for="confPassword" class="label-field">Confirm Password</label>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="terms" required/>
                    <label class="form-check-label" for="terms">
                        I agree to the <a href="terms.html">terms and conditions</a>
                    </label>
                </div>
            </div>                
        </div>
        <button type="submit" class="btn btn-primary">Signup</button>
    </form>
        </div>
    </div>
                
    );
}

export default Signup;