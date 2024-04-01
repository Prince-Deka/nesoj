// Register.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "./scriptLogin";
 

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setpassword] = useState("");

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
      <div class="bg"></div>
      <div class="parent-container">
        <div class="login-container custom-login-container">
          <div class="container custom-container">
            <img src="nesoj.png" alt="Logo" height="100px" />

            <h2 class="mt-5 custom-heading">Sign In to your Account</h2>
            <form onSubmit={handleSubmit} class="custom-form">
              <div class="form-group input-container custom-input-container">
                <input
                  type="email"
                  class="form-control input-field custom-input-field"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label for="email" class="label-field custom-label-field">
                  Email
                </label>
              </div>
              <div class="form-group input-container custom-input-container">
                <input
                  type="password"
                  class="form-control input-field custom-input-field"
                  id="password"
                  name="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  required
                />
                <label for="password" class="label-field custom-label-field">
                  Password
                </label>
              </div>
              <button type="submit" class="btn btn-primary custom-btn">
                Login
              </button>
              <p class="text-center">
                {" "}
                <a href="#">Forgot Password</a>
              </p>
              <p class="text-center mb-3">
                Not a member?{' '}
                <Link to="/register">Register</Link> {/* Replaced <a> with Link */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
