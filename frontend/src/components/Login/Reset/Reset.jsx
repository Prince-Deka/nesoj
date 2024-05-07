import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Reset() {
    const [email, setEmail] = useState("");
    const [otpReset, setOtpReset] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpValidated, setIsOtpValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [otpError, setOtpError] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [visibleField, setVisibleField] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (!isOtpSent) {
            if (!email || !email.includes('@')) {
                setEmailError(true);
                setTimeout(() => {
                    setEmailError(false);
                }, 2000);
            } else {
                setEmailError(false);
                setIsOtpSent(true);
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 1000);
            }
        } else if (!isOtpValidated) {
            if (otpReset !== '0000') {
                setOtpError(true);
                setTimeout(() => {
                    setOtpError(false);
                }, 2000);
            } else {
                setOtpError(false);
                setIsOtpValidated(true);
            }
        } else {
            if (!newPassword || newPassword !== confirmPassword) {
                setPasswordError(true);
                setTimeout(() => {
                    setPasswordError(false);
                }, 2000);
            } else {
                setPasswordError(false);
                // Perform password reset logic
                console.log("Password successfully reset to:", newPassword);
                setSuccessMessage("Password Successfully Reset. Redirecting to Login in 3 seconds.");
                setTimeout(() => {
                    navigate('/login');
                }, 3000); // Redirect after 3 seconds
            }
        }
    };

    const togglePasswordVisibility = (field) => {
        setVisibleField((prev) => (prev === field ? null : field));
    };

    return (
        <div className="loginMainDiv">
            {showAlert && (
                <div className="resetAlert alert alert-success alert-dismissible fade show">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Success!</strong> Sent an OTP for password reset.
                </div>
            )}
            {emailError && (
                <div className="resetAlert alert alert-warning alert-dismissible fade show">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Warning!</strong> Enter a valid email.
                </div>
            )}
            {otpError && (
                <div className="resetAlert alert alert-warning alert-dismissible fade show">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Warning!</strong> Enter a valid OTP.
                </div>
            )}
            {passwordError && (
                <div className="resetAlert alert alert-warning alert-dismissible fade show">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Warning!</strong> Passwords do not match or are empty.
                </div>
            )}
            {successMessage && (
                <div className="resetAlert alert alert-success alert-dismissible fade show">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>{successMessage}</strong>
                </div>
            )}
            <div className="outer">
                <div className="out-container">
                    <header>Reset Password</header>
                    <form className="login-form">
                        {!isOtpSent ? (
                            <div className="field-input">
                                <span className="logo">
                                    <i className="fa-solid fa-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        ) : !isOtpValidated ? (
                            <div className="field-input">
                                <span className="logo">
                                    <i className="fa-solid fa-key"></i>
                                </span>
                                <input
                                    type="text"
                                    id="otpReset"
                                    placeholder="Enter the OTP"
                                    value={otpReset}
                                    onChange={(e) => setOtpReset(e.target.value)}
                                />
                            </div>
                        ) : (
                            <>
                                <div className="field-input">
                                    <span className="logo">
                                        <i className="fa-solid fa-lock"></i>
                                    </span>
                                    <input
                                        type={visibleField === "newPassword" ? "text" : "password"}
                                        id="newPassword"
                                        placeholder="Enter new password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <span className="toggle-password" onClick={() => togglePasswordVisibility("newPassword")}>
                                        <i className={`fa-solid ${visibleField === "newPassword" ? "fa-eye-slash" : "fa-eye"}`}></i>
                                    </span>
                                </div>
                                <div className="field-input">
                                    <span className="logo">
                                        <i class="fa-solid fa-lock"></i>
                                    </span>
                                    <input
                                        type={visibleField === "confirmPassword" ? "text" : "password"}
                                        id="confirmPassword"
                                        placeholder="Confirm new password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <span className="toggle-password" onClick={() => togglePasswordVisibility("confirmPassword")}>
                                        <i className={`fa-solid ${visibleField === "confirmPassword" ? "fa-eye-slash" : "fa-eye"}`}></i>
                                    </span>
                                </div>
                            </>
                        )}
                        <button className="login-btn my-2" onClick={handleButtonClick}>
                            {!isOtpSent ? 'Send OTP' : !isOtpValidated ? 'Validate OTP' : 'Reset Password'}
                        </button>
                    </form>

                    <div className="signup-link my-1">
                        <Link to="/login">Back to Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reset;
