// Register.js
import React, { useState } from 'react';
import './Register.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setmiddleName] = useState('');
    const [lastName, setlastName] = useState('');
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [confPassword, setconfPassword] = useState('');
    const [university, setuniversity] = useState('');
    const [universityID, setuniversityID] = useState('');
    const [course, setcourse] = useState('');
    const [year, setYear] = useState('');
    const [aadhar, setAadhar] = useState(0);
    const [gender, setGender] = useState('');
    const [residence, setResidence] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                    userName: userName,
                    password: password,
                    confPassword: confPassword,
                    university:university,
                    universityID:universityID,
                    course:course,
                    year:year,
                    aadhar:aadhar,
                    gender:gender,
                    residence:residence

                    
                }),
            });

            if (response.ok) {
                console.log('User registered successfully');
                window.alert("Registration Successful");
                window.location.replace('/')
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
            <div className="container">
                <h2 className="mt-5">Signup Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-4 input-container">
                            <input type="text" className="form-control input-field" name='firstName' id="firstName" onChange={(e) => { setFirstName(e.target.value) }} required />
                            <label htmlFor="firstName" className="label-field">First Name</label>
                        </div>
                        <div className="form-group col-md-4 input-container">
                            <input type="text" className="form-control input-field" name='middleName' id="middleName" onChange={(e) => { setmiddleName(e.target.value) }} required />
                            <label htmlFor="middleName" className="label-field">Middle Name</label>
                        </div>
                        <div className="form-group col-md-4 input-container">
                            <input type="text" className="form-control input-field" name='lastName' id="lastName" onChange={(e) => { setlastName(e.target.value) }} required />
                            <label htmlFor="lastName" className="label-field">Last Name</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6 input-container">
                            <input type="text" className="form-control input-field" name='userName' id="username" onChange={(e) => { setuserName(e.target.value) }} required />
                            <label htmlFor="username" className="label-field">Username</label>
                        </div>
                        <div className="form-group col-md-6 input-container">
                            <input type="email" className="form-control input-field" id="email" onChange={(e) => { setEmail(e.target.value) }} required />
                            <label htmlFor="email" className="label-field">Email</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6 input-container">
                            <input type="text" className="form-control input-field" id="university" name='university' onChange={(e)=>{setuniversity(e.target.value)}} required />
                            <label htmlFor="university" className="label-field">University</label>
                        </div>
                        <div className="form-group col-md-6 input-container">
                            <input type="text" className="form-control input-field" id="universityID" name='universityId' onChange={(e)=>{setuniversityID(e.target.value)}} required />
                            <label htmlFor="universityID" className="label-field">University ID/Registration ID</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="course">Course</label>
                            <select id="course" className="form-control" name='course' onChange={(e)=>{setcourse(e.target.value)}}  required>
                                <option id="Default" value='default' >Select Course</option>
                                <option id="BTech-CSE" value='Btech-CSE'>B.Tech(CSE)</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="year" >Year</label>
                            <input type="number" className="form-control" id="year" name='year' onChange={(e)=>{setYear(e.target.value)}} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="residence">Residence</label><br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="residence" id="hosteller" value="Hosteller" onChange={(e)=>{setResidence(e.target.value)}} required />
                                <label className="form-check-label" htmlFor="hosteller">Hosteller</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="residence" id="outsider" value="Outsider" onChange={(e)=>{setResidence(e.target.value)}} required />
                                <label className="form-check-label" htmlFor="outsider">Outsider</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="gender">Gender</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onChange={(e)=>{setGender(e.target.value)}} required />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onChange={(e)=>{setGender(e.target.value)}} required />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6 input-container">
                            <input type="number" className="form-control input-field" id="aadharID" onChange={(e)=>{setAadhar(e.target.value)}} required />
                            <label htmlFor="aadharID" className="label-field">Aadhar ID</label>
                        </div>
                        {/* <div className="form-group col-md-6">
                            <label htmlFor="dob">Date-of-Birth </label>
                            <input type="date" className="form-control" id="dob" required />
                        </div> */}

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6 input-container">
                            <input type="password" className="form-control input-field" id="password" name='password' onChange={(e) => { setpassword(e.target.value) }} required />
                            <label htmlFor="password" className="label-field">Password</label>
                        </div>
                        <div className="form-group col-md-6 input-container">
                            <input type="password" className="form-control input-field" id="confPassword" name='confPassword' onChange={(e) => { setconfPassword(e.target.value) }} required />
                            <label htmlFor="confPassword" className="label-field">Confirm Password</label>
                        </div>
                    </div>
                    {/* <div className="form-row">
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms" required/>
                    <label className="form-check-label" htmlFor="terms">
                        I agree to the <a href="terms.html">terms and conditions</a>
                    </label>
                </div>
            </div>                
        </div> */}
                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>
        </div>

    );
}

export default Signup;