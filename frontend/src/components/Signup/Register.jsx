// Register.js
import React, { useState } from "react";
import "./Register.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const [university, setuniversity] = useState("");
  const [universityID, setuniversityID] = useState("");
  const [course, setcourse] = useState("");
  const [year, setYear] = useState("");
  const [aadhar, setAadhar] = useState(0);
  const [gender, setGender] = useState("");
  const [residence, setResidence] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          userName: userName,
          password: password,
          confPassword: confPassword,
          university: university,
          universityID: universityID,
          course: course,
          year: year,
          aadhar: aadhar,
          gender: gender,
          residence: residence,
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
          <form action="#">
            <div className="form first">
              <div className="details personal">
                <span className="title">Personal Details</span>
                <div className="fields">
                  <div className="input-field-upload">
                    <div className="wrapper">
                      <input type="file" className="my-file"/>
                    </div>
                  </div>
                  <div className="input-field">
                    <label htmlFor="First Name">First Name</label>
                    <input type="text" placeholder="First Name" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="Middle Name">Middle Name</label>
                    <input type="text" placeholder="Middle Name" />
                  </div>
                  <div className="input-field">
                    <label htmlFor="Last Name">Last Name</label>
                    <input type="text" placeholder="Last Name" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="Confirm-Email">Confirm Email</label>
                    <input type="email" placeholder="Confirm Email" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="gender">Gender</label>
                    <div className="radio-container">
                      <label className="radio" htmlFor="male"><input type="radio" id="male" name="gender" /><span>Male</span> </label>
                      <label className="radio" htmlFor="female"><input type="radio" id="female" name="gender" /><span>Female</span> </label>
                    </div>
                  </div>
                  <div className="input-field">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" pattern="\+91[0-9]{10}" placeholder="Phone" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="phone">Confirm Phone</label>
                    <input type="tel" pattern="\+91[0-9]{10}" placeholder="Phone" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="residence">Residence</label>
                    <div className="radio-container">
                      <label className="radio" htmlFor="hosteller"><input type="radio" id="hosteller" name="residence" /><span>Hosteller</span> </label>
                      <label className="radio" htmlFor="day-scholar"><input type="radio" id="day-scholar" name="residence" /><span>Day Scholar</span> </label>
                    </div>
                  </div>
                  <div className="input-field">
                    <label htmlFor="Date-Of-Birth">Date of Birth</label>
                    <input type="date" placeholder="Date-Of-Birth" required />
                  </div>
                </div>
              </div>
              <div className="details ID">
                <span className="title">Identity Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="idType">ID Type</label>
                    <select id="idType" value="{selectedState}" required>
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
                    <label htmlFor="id-number">Enter ID Number</label>
                    <input type="text" placeholder="ID Number" />
                  </div>
                  <div className="input-field file">
                    <label htmlFor="file-upload" className="custom-file-upload">Upload ID File</label>
                    <input type="file" id="file-upload" name="file" />
                  </div>
                </div>
              </div>
              <button className="nextBtn">
                <span className="btnText">Next</span>
                <i className="uil uil-navigator" />
              </button>
            </div>
            <div className="form second">
              <div className="details address">
                <span className="title">Address Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Address" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="town-city">City/Town</label>
                    <input type="text" placeholder="City/Town" />
                  </div>
                  <div className="input-field">
                    <label htmlFor="landmark">Landmark</label>
                    <input type="text" placeholder="Landmark" />
                  </div>
                  <div className="input-field">
                    <label htmlFor="state">State</label>
                    <select id="state" value="{selectedState}" required>
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
                    <label htmlFor="District">District</label>
                    <input type="text" placeholder="District" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="Pincode">Pincode</label>
                    <input type="number" placeholder="Pincode" required />
                  </div>
                </div>
              </div>
              <div className="family ID">
                <span className="title">Family Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="mother-name">Mother Name</label>
                    <input type="text" placeholder="Mother Name" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="father-name">Father Name</label>
                    <input type="text" placeholder="Father Name" required />
                  </div>
                  <div className="input-field">
                    <label htmlFor="no-of-sibling">No of Siblings</label>
                    <input type="number" placeholder="No of Siblings" required />
                  </div>
                </div>
                <div className="details university">
                  <span className="title">University Details</span>
                  <div className="fields">
                    <div className="input-field">
                      <label htmlFor="university-name">University Name</label>
                      <input type="text" placeholder="Enter University Name" required />
                    </div>
                    <div className="input-field">
                      <label htmlFor="university-id">University ID</label>
                      <input type="number" placeholder="Enter Registration Number" required />
                    </div>
                    <div className="input-field">
                      <label htmlFor="course">Course</label>
                      <select id="course" value="{selectedState}" required>
                        <option value="default">--Select Course--</option>
                        <option value="btech">B.Tech</option>
                        <option value="mba">MBA</option>
                        <option value="bba">BBA</option>
                        <option value="M.Tech">M.Tech</option>
                      </select>
                    </div>
                    <div className="input-field">
                      <label htmlFor="specialization">Specialization</label>
                      <input type="text" placeholder="eg. Computer Science and Engg." required />
                    </div>
                    <div className="input-field">
                      <label htmlFor="graduation-year">Graduation Year</label>
                      <input type="number" placeholder="Enter Graduation Year" required />
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="backBtn">
                      <i className="uil uil-navigator" />
                      <span className="btnText">Back</span>
                    </div>
                    <button className="nextBtn">
                      <span className="btnText">Submit</span>
                      <i className="uil uil-navigator" />
                    </button>
                  </div>
                </div>
              </div>
            </div></form>
          <div id="customAlert" className="custom-alert" style={{display: 'none'}}>
            <div className="custom-alert-content">
              <span className="custom-alert-closebtn" onclick="closeAlert()">×</span>
              <p>Please fill in all required fields.</p>
            </div>
          </div>
        </div></div>
  );
};

export default Signup;
