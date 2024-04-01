// Register.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./scriptLogin";
 

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://nesojbackend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,

          password: password,
        }),
      });

      if (response.ok) {
        console.log("User registered successfully");
        window.alert("Login Successful");
        navigate("/");
      } else {
        console.error("Failed to login");
      }
    } catch (error) {
      console.error("Error login:", error);
    }
  };




  // const[email,setEmail]= useState("");
  // const[password,setPassword]= useState("");
  // const [msg, setMessage] = useState("");
  // const navigate = useNavigate();
  // const handleSubmit=(evt)=>{
  //    evt.preventDefault();
  //    //creating Json Object;
  //    const checkLog = {
  //     email : email,
  //     password : password
  //    } 
  //    axios.post('https://nesojbackend.onrender.com/login',checkLog)//backend login route
  //    .then(res=>{
  //    sessionStorage.setItem("User Type",'User')
  //    sessionStorage.setItem("User Name",res.data[0].userName)
  //    sessionStorage.setItem("Userdetails", JSON.stringify(res.data[0]))
  //    navigate('/')
  //    })
  //    .catch(err=>{
  //     setMessage('INVALID UID OR PASSWORD')
  //    })
  //    setEmail('');
  //    setPassword('');
  // }
  // const adminpage=()=>{
  //   navigate('/adminlog')
  // }

  return (
    <div>
      <div className="bg"></div>
      <div className="parent-container">
        <div className="login-container custom-login-container">
          <div className="container custom-container">
            <img src="/assets/nesoj2.png" alt="Logo" height="100px" />

            <h2 className="mt-5 custom-heading">Sign In to your Account</h2>
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="form-group input-container custom-input-container">
                <input
                  type="email"
                  className="form-control input-field custom-input-field"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label htmlFor="email" className="label-field custom-label-field">
                  Email
                </label>
              </div>
              <div className="form-group input-container custom-input-container">
                <input
                  type="password"
                  className="form-control input-field custom-input-field"
                  id="password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <label htmlFor="password" className="label-field custom-label-field">
                  Password
                </label>
              </div>
              <button type="submit" className="btn btn-primary custom-btn">
                Login
              </button>
              <p className="text-center">
                {" "}
                <a href="#">Forgot Password</a>
              </p>
              <p className="text-center mb-3">
                Not a member?{' '}
                <Link to="/register">Register</Link> 
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
