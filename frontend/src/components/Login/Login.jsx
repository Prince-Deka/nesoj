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
    <div className="outer">
      <div className="out-container"> {/* Changed class to className */}
        <header>Login</header>
        <form onSubmit={handleSubmit} className="login-form"> {/* Changed class to className */}
            <div className="field-input"> {/* Changed class to className */}
                <span className="logo"><i className="fa-solid fa-user"></i></span> {/* Changed class to className */}
                <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/> {/* Added value and onChange handlers */}
            </div>
            <div className="field-input"> {/* Changed class to className */}
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
