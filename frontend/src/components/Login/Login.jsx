import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Login.css";

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

  useEffect(() => {
    const handleClick = (e) => {
      // Toggle the type attribute
      const passwordInput = document.getElementById('password');
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);

      // Toggle the eye icon
      const eyeIcon = e.currentTarget.querySelector('i');
      eyeIcon.classList.toggle('fa-eye');
      eyeIcon.classList.toggle('fa-eye-slash');
    };

    const togglePassword = document.querySelector('.toggle-password');
    togglePassword.addEventListener('click', handleClick);

    // Cleanup function to remove event listener
    return () => {
      togglePassword.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <div className="outer">
        <div className="out-container">
          <header>Login</header>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="field-input">
              <span className="logo"><i className="fa-solid fa-user"></i></span>
              <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="field-input">
              <span className="logo"><i className="fa-solid fa-lock"></i></span>
              <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <span className="toggle-password"><i className="fa-solid fa-eye"></i></span>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <button className="login-btn" onClick={handleSubmit}>Login</button>
            <div className="signup-link">
              New User?&nbsp;<a href="#">Signup</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
