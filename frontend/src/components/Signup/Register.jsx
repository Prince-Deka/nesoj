// Register.js
import React, { useState, useEffect, useRef } from "react";
import "./Register.css";

const Signup = () => {
  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [confEmail, setconfEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [confPhone, setConfPhone] = useState("");
  const [residence, setResidence] = useState("");
  const [date, setDate] = useState("");
  const [idType, setIdType] = useState("");
  const [idNumber, setIdnumber] = useState("");
  const [selectedFileId, setSelectedFileId] = useState(null);
  const [address, setAddress] = useState("");
  const [cityTown, setCityTown] = useState("");
  const [landmark, setLandmark] = useState("");
  const [stateName, setStateName] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState(0);
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [noSiblings, setNoSiblings] = useState(0);
  const [uniName, setUniName] = useState("");
  const [regNo, setRegNo] = useState(0);
  const [course, setcourse] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [gradYear, setGradYear] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // For Profile Pic
  const [bgImage, setBgImage] = useState("user_456212.png"); // replace with the URL of your default background image

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBgImage(`url(${reader.result})`);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setBgImage("user_456212.png"); // replace with the URL of your default background image
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/jpg", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      alert("Invalid file type. Please upload a JPG, JPEG or PDF file.");
      return; 
    }

    setSelectedFileId(file);
    setProfilePic(event.target.files[0]);
  };

  // Changing Profile Pic

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== confEmail) {
      alert("Emails do not match");
      return;
    }

    if ( password !== confPassword) {
      alert("Passwords do not match");
      return;
    }

    if (phone !== confPhone) {
      alert("Phone numbers do not match");
      return;
    }

    try {
      const response = await fetch("https://nesojbackend.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profilePic: profilePic,
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          email: email,
          gender: gender,
          phone: phone,
          residence: residence,
          date: date,
          idType: idType,
          idNumber: idNumber,
          address: address,
          cityTown: cityTown,
          landmark: landmark,
          stateName: stateName,
          district: district,
          pincode: pincode,
          motherName: motherName,
          fatherName: fatherName,
          noSiblings: noSiblings,
          uniName: uniName,
          regNo: regNo,
          course: course,
          specialization: specialization,
          gradYear: gradYear,
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        console.log("User registered successfully");
        window.alert("Registration Successful");
        window.location.replace("/");
      } else {
        console.error("Failed to register user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="signup-outer">
      <div className="bg" />
      <div className="signup-container">
        <header>Registration</header>
        <form method="POST" onSubmit={() => handleSubmit()}>
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
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Middle Name">Middle Name</label>
                  <input
                    type="text"
                    placeholder="Middle Name"
                    onChange={(e) => setmiddleName(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Last Name">Last Name<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setlastName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Email">Email<span className="requiredField">*</span></label>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Confirm-Email">Confirm Email<span className="requiredField">*</span></label>
                  <input
                    type="email"
                    placeholder="Confirm Email"
                    onChange={(e) => setconfEmail(e.target.value)}
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
                        onClick={() => {
                          setGender("male");
                        }}
                      />
                      <span>Male</span>{" "}
                    </label>
                    <label className="radio" htmlFor="female">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        onClick={() => {
                          setGender("female");
                        }}
                      />
                      <span>Female</span>{" "}
                    </label>
                  </div>
                </div>
                <div className="input-field">
                  <label htmlFor="phone">Phone<span className="requiredField">*</span></label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="phone">Confirm Phone<span className="requiredField">*</span></label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    onChange={(e) => setConfPhone(e.target.value)}
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
                        onClick={() => {
                          setResidence("hosteller");
                        }}
                      />
                      <span>Hosteller</span>{" "}
                    </label>
                    <label className="radio" htmlFor="day-scholar">
                      <input
                        type="radio"
                        id="day-scholar"
                        name="residence"
                        onClick={() => {
                          setResidence("dayscholar");
                        }}
                      />
                      <span>Day Scholar</span>{" "}
                    </label>
                  </div>
                </div>
                <div className="input-field">
                  <label htmlFor="Date-Of-Birth">Date of Birth<span className="requiredField">*</span></label>
                  <input
                    type="date"
                    placeholder="Date-Of-Birth"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
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
                    value={idType}
                    onChange={(e) => {
                      setIdType(e.target.value);
                    }}
                    required
                  >
                    <option value="default">--Select ID Type--</option>
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
                    onClick={(e) => {
                      setIdnumber(e.target.value);
                    }}
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
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="town-city">City/Town<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="City/Town"
                    onChange={(e) => setCityTown(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="landmark">Landmark</label>
                  <input
                    type="text"
                    placeholder="Landmark"
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="state">State<span className="requiredField">*</span></label>
                  <select
                    id="state"
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    required
                  >
                    <option value="default">--Select State--</option>
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
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="Pincode">Pincode<span className="requiredField">*</span></label>
                  <input
                    type="number"
                    placeholder="Pincode"
                    min="100000"
                    max="999999"
                    onChange={(e) => setPincode(e.target.value)}
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
                    onChange={(e) => setMotherName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="father-name">Father Name<span className="requiredField">*</span></label>
                  <input
                    type="text"
                    placeholder="Father Name"
                    onChange={(e) => setFatherName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="no-of-sibling">No of Siblings</label>
                  <input
                    type="number"
                    placeholder="No of Siblings"
                    onChange={(e) => setNoSiblings(e.target.value)}
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
                      onChange={(e) => setUniName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="university-id">University ID<span className="requiredField">*</span></label>
                    <input
                      type="number"
                      placeholder="Enter Registration Number"
                      onChange={(e) => setRegNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="course">Course<span className="requiredField">*</span></label>
                    <select
                      id="course"
                      value={course}
                      onChange={(e) => setcourse(e.target.value)}
                      required
                    >
                      <option value="default">--Select Course--</option>
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
                      onChange={(e) => setSpecialization(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="graduation-year">Graduation Year<span className="requiredField">*</span></label>
                    <select
                      placeholder="Enter Graduation Year"
                      onChange={(e) => setGradYear(e.target.value)}
                      required
                    >
                       <option value="default">--Select Year--</option>
                        {[...Array(20)].map((_, i) => 
                          <option key={i} value={2028 - i}>{2028 - i}</option>
                        )}
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
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-field" style={{ position: "relative" }}>
                    <label htmlFor="password">Enter Password<span className="requiredField">*</span></label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <i
                      className={`far ${
                        showPassword ? "fa-eye" : "fa-eye-slash"
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
                      onChange={(e) => setConfPassword(e.target.value)}
                      required
                    />
                    <i
                      className={`far ${
                        showConfirmPassword ? "fa-eye" : "fa-eye-slash"
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
                <div className="buttons">
                  <button
                    className="nextBtn"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    <span className="btnText">Submit</span>
                    <i className="uil uil-navigator" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div
          id="customAlert"
          className="custom-alert"
          style={{ display: "none" }}
        >
          <div className="custom-alert-content">
            <span className="custom-alert-closebtn" onclick="closeAlert()">
              ×
            </span>
            <p>Please fill in all required fields.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
