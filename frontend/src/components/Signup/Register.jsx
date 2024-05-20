// Register.js
import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Register.css";
import { useAuth } from "../../store/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState("");
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const {storeTokenInLs} = useAuth();

  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    confEmail: "",
    gender: "",
    phone: "",
    confPhone: "",
    residence: "",
    dateOfBirth: "",
    idType: "",
    idNumber: "",
    address: "",
    cityTown: "",
    landmark: "",
    stateName: "",
    district: "",
    pincode: "",
    motherName: "",
    fatherName: "",
    noSiblings: "",
    uniName: "Lovely Professional University",
    regNo: "",
    course: "",
    specialization: "",
    gradYear: "",
    username: "",
    password: "",
    confPassword: "",
  });

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handle profile image change
  const [bgImage, setBgImage] = useState("user_456212.png");

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBgImage(`url(${reader.result})`);
    };
    setProfilePic(file);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setBgImage("user_456212.png");
    }
  };

  // Handle file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      alert("Invalid file type. Please upload a JPG, JPEG or PDF file.");
      return;
    }

    setSelectedFileId(file);
  };
  

  // Submit form using Axios
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const { confEmail, confPhone, confPassword, ...userDataToSend } = user;
    
    const formData = new FormData();

    Object.keys(userDataToSend).forEach(key => {
      formData.append(key, userDataToSend[key]);
    });

    if (profilePic) formData.append("profilePic", profilePic);
    if (selectedFileId) formData.append("idFile", selectedFileId);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        storeTokenInLs(response.data.token);
        setUser({
          firstName: "", middleName: "", lastName: "", email: "", confEmail: "", gender: "", phone: "", confPhone: "", residence: "", dateOfBirth: "", idType: "", idNumber: "", address: "", cityTown: "", landmark: "", stateName: "", district: "", pincode: "", motherName: "", fatherName: "", noSiblings: "", uniName: "Lovely Professional University", regNo: "", course: "", specialization: "", gradYear: "", username: "", password: "", confPassword: ""
        });
        navigate('/login');
      } else {
        alert("Not a valid registration");
      }
    } catch (error) {
      console.log("Registration Error:", error.response?.data || error.message); // Detailed error message
    }
  }, [user, profilePic, selectedFileId, storeTokenInLs, navigate]);




  return (
    <div className="signup-outer">
      <div className="bg" />
      <div className="signup-container">
        <header>Registration</header>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Personal Details</span>
              <div className="fields">
                <div className="input-field-upload">
                  <div className="wrapper" style={{ backgroundImage: bgImage }}>
                    <input
                      type="file"
                      className="my-file"
                      onChange={handleProfileImageChange}
                    />
                  </div>
                </div>
                <div className="input-field">
                  <label htmlFor="First Name">First Name<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    id="firstName"
                    name="firstName"
                    autoComplete="off"
                    value={user.firstName}
                    onChange={handleInput}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Middle Name">Middle Name</label>
                  <input
                    type="text"
                    placeholder="Middle Name"
                    id="middleName"
                    name="middleName"
                    autoComplete="off"
                    value={user.middleName}
                    onChange={handleInput}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Last Name">Last Name<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    name="lastName"
                    autoComplete="off"
                    value={user.lastName}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Email">Email<span className="requiredField">*</span></label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Confirm-Email">Confirm Email<span className="requiredField">*</span></label>
                  <input
                    type="email"
                    placeholder="Confirm Email"
                    id="confEmail"
                    name="confEmail"
                    autoComplete="off"
                    value={user.confEmail}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="gender">Gender<span className="requiredField">*</span></label>
                  <div className="radio-container">
                    <label className="radio" htmlFor="male">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"  // Add a value attribute
                        checked={user.gender === "male"}  // Use checked prop
                        onChange={handleInput}  // Use the same change handler
                      />
                      <span>Male</span>{" "}
                    </label>

                    <label className="radio" htmlFor="female">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={user.gender === "female"}
                        onChange={handleInput}
                      />
                      <span>Female</span>{" "}
                    </label>
                  </div>
                </div>

                <div className="input-field">
                  <label htmlFor="phone">Phone<span className="requiredField">*</span></label>
                  <input
                    type="number"
                    placeholder="Phone"
                    id="phone"
                    name="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="phone">Confirm Phone<span className="requiredField">*</span></label>
                  <input
                    type="number"
                    placeholder="Phone"
                    id="confPhone"
                    name="confPhone"
                    autoComplete="off"
                    value={user.confPhone}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="residence">Residence<span className="requiredField">*</span></label>
                  <div className="radio-container">
                    <label className="radio" htmlFor="hosteller">
                      <input
                        type="radio"
                        id="hosteller"
                        name="residence"
                        value="hosteller"
                        checked={user.residence === "hosteller"}
                        onChange={handleInput}
                      />
                      <span>Hosteller</span>{" "}
                    </label>

                    <label className="radio" htmlFor="day-scholar">
                      <input
                        type="radio"
                        id="day-scholar"
                        name="residence"
                        value="dayscholar"
                        checked={user.residence === "dayscholar"}
                        onChange={handleInput}
                      />
                      <span>Day Scholar</span>{" "}
                    </label>
                  </div>
                </div>

                <div className="input-field">
                  <label htmlFor="Date-Of-Birth">Date of Birth<span className="requiredField">*</span></label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={user.dateOfBirth}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="details ID">
              <span className="title">Identity Details</span>
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="idType">ID Type<span className="requiredField">*</span></label>
                  <select
                    id="idType"
                    name="idType"
                    value={user.idType}
                    onChange={handleInput}
                    required
                  >
                    <option value="">--Select ID Type--</option>
                    <option value="aadhaar">Aadhaar Card</option>
                    <option value="voter-id">Voter ID Card</option>
                    <option value="passport">Indian Passport</option>
                    <option value="pan">PAN Card</option>
                    <option value="driving-license">Driving License</option>
                    <option value="ration">Ration Card</option>
                  </select>
                </div>

                <div className="input-field">
                  <label htmlFor="id-number">Enter ID Number<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="ID Number"
                    id="idNumber"
                    name="idNumber"
                    value={user.idNumber}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="input-field file">
                  <label htmlFor="file-upload" className="custom-file-upload">
                    Upload ID File<span className="requiredField">*</span>
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    name="file"
                    accept="image/jpeg, image/jpg, application/pdf"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <div className="details address">
              <span className="title">Address Details</span>
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="address">Address<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="House No, Street, Locality"
                    id="address"
                    name="address"
                    value={user.address}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="town-city">City/Town<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="City/Town"
                    id="cityTown"
                    name="cityTown"
                    value={user.cityTown}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    type="text"
                    placeholder="Landmark"
                    id="landmark"
                    name="landmark"
                    value={user.landmark}
                    onChange={handleInput}
                    autoComplete="off"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="state">State<span className="requiredField">*</span></label>
                  <select
                    id="stateName"
                    name="stateName"
                    value={user.stateName}
                    onChange={handleInput}
                    required
                  >
                    <option value="">--Select State--</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tripura">Tripura</option>
                  </select>
                </div>

                <div className="input-field">
                  <label htmlFor="District">District<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="District"
                    id="district"
                    name="district"
                    value={user.district}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Pincode">Pincode<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="Pincode"
                    min="100000"
                    max="999999"
                    id="pincode"
                    name="pincode"
                    value={user.pincode}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="family ID">
              <span className="title">Family Details</span>
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="mother-name">Mother Name<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="Mother Name"
                    id="motherName"
                    name="motherName"
                    value={user.motherName}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="father-name">Father Name<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="Father Name"
                    id="fatherName"
                    name="fatherName"
                    value={user.fatherName}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="no-of-sibling">No of Siblings</label>
                  <input
                    type="text"
                    placeholder="No of Siblings (except you)"
                    id="noSiblings"
                    name="noSiblings"
                    value={user.noSiblings}
                    onChange={handleInput}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="details university">
                <span className="title">University Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="university-name">University Name<span className="requiredField">*</span></label>
                    <input
                      type="text"
                      placeholder="Enter University Name"
                      id="uniName"
                      name="uniName"
                      value={user.uniName}
                      onChange={handleInput}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="university-id">University ID<span className="requiredField">*</span></label>
                    <input
                      type="text"
                      placeholder="Enter Registration Number"
                      id="regNo"
                      name="regNo"
                      value={user.regNo}
                      onChange={handleInput}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="course">Course<span className="requiredField">*</span></label>
                    <select
                      id="course"
                      name="course"
                      value={user.course}
                      onChange={handleInput}
                      required
                    >
                      <option value="">--Select Course--</option>
                      <option value="btech">B.Tech</option>
                      <option value="mba">MBA</option>
                      <option value="bba">BBA</option>
                      <option value="mTech">M.Tech</option>
                    </select>
                  </div>

                  <div className="input-field">
                    <label htmlFor="specialization">Specialization<span className="requiredField">*</span></label>
                    <input
                      type="text"
                      placeholder="eg. Computer Science and Engg."
                      id="specialization"
                      name="specialization"
                      value={user.specialization}
                      onChange={handleInput}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="gradYear">Graduation Year<span className="requiredField">*</span></label>
                    <select
                      id="gradYear"
                      name="gradYear"
                      value={user.gradYear}
                      onChange={handleInput}
                      required
                    >
                      <option value={0}>--Select Year--</option>
                      <option value={2024}>2024</option>

                      {/* {[...Array(20)].map((_, i) => (
                        <option key={i} value={2028 - i}>{2028 - i}</option>
                      ))} */}
                    </select>
                  </div>

                </div>
              </div>
              <div className="details credentials">
                <span className="title">Login Credentials</span>
                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="userName">Username<span className="requiredField">*</span></label>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      id="username"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="input-field" style={{ position: "relative" }}>
                    <label htmlFor="password">Enter Password<span className="requiredField">*</span></label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      autoComplete="off"
                      required
                    />
                    <i
                      className={`far ${showPassword ? "fa-eye" : "fa-eye-slash"
                        }`}
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "10px", // Position the icon
                        top: "50%", // Vertical centering
                        cursor: "pointer", // Set cursor style
                      }}
                    ></i>
                  </div>
                  <div className="input-field" style={{ position: "relative" }}>
                    <label htmlFor="confPassword">Enter Confirm Password<span className="requiredField">*</span></label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Enter Confirm Password"
                      id="confPassword"
                      name="confPassword"
                      value={user.confPassword}
                      onChange={handleInput}
                      autoComplete="off"
                      required
                    />
                    <i
                      className={`far ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"
                        }`}
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      style={{
                        position: "absolute",
                        right: "10px", // Position the icon
                        top: "50%", // Vertical centering
                        cursor: "pointer", // Set cursor style
                      }}
                    ></i>
                  </div>
                </div>
                <div className="buttons" type="submit">
                  <button
                    className="nextBtn"
                  >
                    <span className="btnText">Submit</span>
                    <i className="uil uil-navigator" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
