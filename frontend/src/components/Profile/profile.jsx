
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom"// for navigating through react-router-dom;
import "./Profile.css";
import Popup from './Popup/Popup';
import "./tabledesign.css"
import { useAuth } from '../../store/auth';

function Profile() {
  const [activeTab, setActiveTab] = useState("account");
  const navigate = useNavigate();
  const { user } = useAuth();
  let menuItems = [];
  const checkAdmin = user.userData?.isAdmin && user.userData.isAdmin;

  const menuAdmin = [
    { id: "account", text: "Account", iconClass: "fa-solid fa-circle-user" },
    { id: "notifications", text: "Notifications", iconClass: "fa-solid fa-bell" },
    { id: "approvals", text: "Approvals", iconClass: "fa-solid fa-person-circle-check" },

  ];
  const menuNonAdmin = [
    { id: "account", text: "Account", iconClass: "fa-solid fa-circle-user" },
    { id: "notifications", text: "Notifications", iconClass: "fa-solid fa-bell" },
  ];


  if (checkAdmin) {
    menuItems = menuAdmin;
  }
  else {
    menuItems = menuNonAdmin;
  }

  const [popupOpen, setPopupOpen] = useState(false);

  const handleClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "account":
        return (
          <form action="#" className="account-form">
            <div className="account-header">
              <h1 className="account-title">Account Settings</h1>
              <div className="profile-button-container">
                <button className="button-cancel">Cancel</button>
                <button className="button-save">Save</button>
              </div>
            </div>
            <div className="account-edit">
              <div className="account-input-container">
                <label htmlFor="first-name">First Name</label>
                <input type="text" placeholder='First Name' />
              </div>
              <div className="account-input-container">
                <label htmlFor="middle-name">Middle Name</label>
                <input type="text" placeholder='Middle Name' />
              </div>
              <div className="account-input-container">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" placeholder='Last Name' />
              </div>
            </div>

            <div className="account-edit">
              <div className="account-input-container">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' />
              </div>
              <div className="account-input-container">
                <label htmlFor="phone">Phone</label>
                <input type="tel" placeholder='Phone' />
              </div>
              <div className="account-input-container">
                <label htmlFor="residence">Residence</label>
                <div className="profile-radio-container">
                  <label className="radio" htmlFor="hosteller"><input type="radio" id="hosteller" name="residence" /><span>Hosteller</span> </label>
                  <label className="radio" htmlFor="day-scholar"><input type="radio" id="day-scholar" name="residence" /><span>Day Scholar</span> </label>
                </div>
              </div>
            </div>
          </form>
        );
      case "notifications":

        return (
          <div className="notifications">
            <div className="notifications-header">
              <h1 className="notifications-title">Notifications</h1>
              <div className="profile-button-container">
                <button className="button-maar">Mark All As Read</button>
              </div>
            </div>
            <div className="notification-container">
              <div className="notification-item" onClick={handleClick}>
                <div className="notification-main">
                  <div className="notification-upper">
                    <img src="assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg" alt="" className="user-img" />
                    <h2 className='sender-name'>Assam Students Union Jalandhar <div className="red"></div></h2>
                    <div className="date-time">
                      <span className="notification-time">HH:MM</span>
                      <span className="date-time-differentiator">•</span>
                      <span className="notification-date">DD/MM/YYYY</span>
                    </div>
                  </div>
                  <div className="notification-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure corrupti ab eum, molestiae non?</p>
                  </div>
                </div>
              </div>
              <div className="notification-item" onClick={handleClick}>
                <div className="notification-main">
                  <div className="notification-upper">
                    <img src="assets/StateLogos/500x500/ASUJ/ASUJ_Colorful.jpg" alt="" className="user-img" />
                    <h2 className='sender-name'>Assam Students Union Jalandhar <div className="red"></div></h2>
                    <div className="date-time">
                      <span className="notification-time">HH:MM</span>
                      <span className="date-time-differentiator">•</span>
                      <span className="notification-date">DD/MM/YYYY</span>
                    </div>
                  </div>
                  <div className="notification-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure corrupti ab eum, molestiae non?</p>
                  </div>
                </div>
              </div>
              {popupOpen && <Popup onClose={handleClosePopup} />}
            </div>
          </div>
        );


      case "approvals":
        return (
          <div className="approvals">
            <div className="approvals-header">
              <h1 className="approvals-title">Approvals</h1>
            </div>
            <div className="approvals-container">
              <div id="accordion">
                <div className="card">
                  <div className="card-header approval-itembox" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <table className="approval-table">
                          <tbody>
                            <tr className="app-item-head approval-table-row">
                              <td className="app-col-table-data">
                                <div className="app-user-info">
                                  <img src="assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt="User" className="user-img" />
                                  <p className="user-name">Mrigankar Sonowal</p>
                                </div>
                              </td>
                              <td className="app-col-table-data">mrigankarofficiaal@gmail.coma1212333</td>
                              <td className="app-col-table-data">Silapathar</td>
                              <td className="app-col-table-data">120111111414</td>
                            </tr>
                          </tbody>
                        </table>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body details-tab">
                      <div className="details-grid">
                        <div className="detail-item">
                          <span className="detail-label">First Name:</span>
                          <span className="detail-value">Mrigankar</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Last Name:</span>
                          <span className="detail-value">Sonowal</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Gender:</span>
                          <span className="detail-value">male</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Phone:</span>
                          <span className="detail-value">7002507547</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Residence:</span>
                          <span className="detail-value">day_scholar</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Date of Birth:</span>
                          <span className="detail-value">21-08-2001</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">ID Type:</span>
                          <span className="detail-value">Aadhaar</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">ID Number:</span>
                          <span className="detail-value">12341156782900</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Address:</span>
                          <span className="detail-value">Seujinagar</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">City/Town:</span>
                          <span className="detail-value">Silapathar</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">State Name:</span>
                          <span className="detail-value">Assam</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">District:</span>
                          <span className="detail-value">Dhemaji</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Pincode:</span>
                          <span className="detail-value">787059</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Mother's Name:</span>
                          <span className="detail-value">Dip Jyoti Sonowal</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Father's Name:</span>
                          <span className="detail-value">Guna Kanta Sonowal</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">No of Siblings:</span>
                          <span className="detail-value">2</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">University Name:</span>
                          <span className="detail-value">Lovely Professional University</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Course:</span>
                          <span className="detail-value">B.Tech</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Specialization:</span>
                          <span className="detail-value">Computer Science and Engineering</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Graduation Year:</span>
                          <span className="detail-value">2</span>
                        </div>
                      </div>
                      <div className="button-container-approve">
                        <div className="button-wrapper-approve">
                          <button className="approve-button">Approve</button>
                        </div>
                        <div className="button-wrapper-approve">
                          <button className="reject-button">Reject</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Content not found!</div>;
    }
  };

  return (
    <div className='profile-outer'>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-header">
            <img src="src/components/Signup/user_456212.png" alt="" className='profile-img' />
            <div className="profile-text-contaimer">
              <h1 className="profile-title">{user.userData?.username && user.userData.username}</h1>
              <p className="profile-email">{user.userData?.email && user.userData.email}</p>
            </div>
          </div>
          <div className="profile-menu">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`menu-link ${activeTab === item.id ? "menu-link-active" : ""}`}
                onClick={() => setActiveTab(item.id)}
              >
                <i className={item.iconClass + " menu-icon"}></i>
                {item.text}
              </a>
            ))}
            <Link to="/logout" className='menu-link'>
              <i className='fa-solid fa-right-from-bracket menu-icon'></i>Logout
            </Link>
          </div>
        </div>

        <div className="tab-content" style={{ flex: 2 }}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default Profile;
