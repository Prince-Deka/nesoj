import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setAlert({ type: 'warning', message: 'Both username and password must be filled out' });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }else{
      // try {
      //   const response = await fetch("https://nesojbackend.onrender.com/login", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       username: username,
      //       password: password,
      //     }),
      //   });
  
      //   if (response.ok) {
      //     console.log("User registered successfully");
      //     window.alert("Login Successful");
      //     navigate("/landing");
      //   } else {
      //     console.error("Failed to login");
      //   }
      // } catch (error) {
      //   console.error("Error login:", error);
      // }
      setAlert({ type: 'success', message: 'Login Successful, redirecting to home in 3 sec...' });
      setShowAlert(true);
        setTimeout(() => {
          navigate("/homemain");
          setShowAlert(false);
        }, 3000);
    }

    
  };

  useEffect(() => {
    const handleClick = (e) => {
      // Toggle the type attribute
      const passwordInput = document.getElementById("password");
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);

      // Toggle the eye icon
      const eyeIcon = e.currentTarget.querySelector("i");
      eyeIcon.classList.toggle("fa-eye");
      eyeIcon.classList.toggle("fa-eye-slash");
    };

    const togglePassword = document.querySelector(".toggle-password");
    togglePassword.addEventListener("click", handleClick);

    // Cleanup function to remove event listener
    return () => {
      togglePassword.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="loginMainDiv">
      {showAlert && (
  <div className={`loginAlert alert alert-${alert.type} alert-dismissible fade show`}>
    <a href="#" className="close" data-dismiss="alert" aria-label="close" onClick={() => setShowAlert(false)}>&times;</a>
    <strong>{alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}!</strong> {alert.message}
  </div>
)}
      <div className="outer">
        <div className="out-container">
          <header>Login</header>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="field-input">
              <span className="logo">
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                type="username"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="field-input">
              <span className="logo">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password">
                <i className="fa-solid fa-eye"></i>
              </span>
            </div>
            <div className="forgot-password">
              <Link to='/reset'>Forgot Password?</Link>
            </div>
            <button className="login-btn" onClick={handleSubmit}>
              Login
            </button>
            <div className="signup-link">
              New User?&nbsp;<Link to="/register">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
