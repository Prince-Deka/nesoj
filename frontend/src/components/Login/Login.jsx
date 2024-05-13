import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { useAuth } from "../../store/auth";

const Login = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const {storeTokenInLs} = useAuth();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (!username || !password) {
      setAlert({ type: 'warning', message: 'Both username and password must be filled out' });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      try {
        const response = await axios.post("http://localhost:3000/api/auth/login", user, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("login Form", response);
        if (response.statusText === "OK") {
          storeTokenInLs(response.data.token);
          setUser({ username: "", password: "" });
          setAlert({ type: 'success', message: 'Login Successful, redirecting to home in 3 sec...' });
          setShowAlert(true);
          setTimeout(() => {
            navigate("/homemain");
            setShowAlert(false);
          }, 3000);
        }
      } catch (error) {
        console.error(error);
      }
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
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleInput}
                required
              />
            </div>
            <div className="field-input">
              <span className="logo">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleInput}
                required
              />
              <span className="toggle-password">
                <i className="fa-solid fa-eye"></i>
              </span>
            </div>
            <div className="forgot-password">
              <Link to='/reset'>Forgot Password?</Link>
            </div>
            <button className="login-btn" type="submit">
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
