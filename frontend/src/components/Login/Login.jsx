// Register.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Assuming this is for styling
import "./scriptLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Corrected typo: setpassword -> setPassword

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
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
        window.location.replace("/");
      } else {
        console.error("Failed to login");
      }
    } catch (error) {
      console.error("Error login:", error);
    }
  };

  return (
    <div>
      <div className="out-container"> {/* Changed class to className */}
        <header>Login</header>
        <form className="login-form"> {/* Changed class to className */}
            <div className="input-field"> {/* Changed class to className */}
                <span className="logo"><i className="fa-solid fa-user"></i></span> {/* Changed class to className */}
                <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/> {/* Added value and onChange handlers */}
            </div>
            <div className="input-field"> {/* Changed class to className */}
                <span className="logo"><i className="fa-solid fa-lock"></i></span> {/* Changed class to className */}
                <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/> {/* Added value and onChange handlers */}
                <span className="toggle-password"><i className="fa-solid fa-eye"></i></span> {/* Changed class to className */}
            </div>
            <div className="forgot-password"> {/* Changed class to className */}
                <a href="#">Forgot Password?</a>
            </div>
            <button className="login-btn" onClick={handleSubmit}>Login</button> {/* Changed class to className */}
           
            <div className="signup-link"> {/* Changed class to className */}
                New User?&nbsp;<a href="#">Signup</a>
            </div>
            </form>
        </div>
    </div>
  );
};

export default Login;
