
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"// for navigating through react-router-dom;
import "./Profile.css";
import Popup from './Popup/Popup';

function Profile() {
  const [activeTab, setActiveTab] = useState("account");

  const menuItems = [
    { id: "account", text: "Account", iconClass: "fa-solid fa-circle-user" },
    { id: "notifications", text: "Notifications", iconClass: "fa-solid fa-bell" },
    { id: "approvals", text: "Approvals", iconClass: "fa-solid fa-person-circle-check" },
    
  ];

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
                    <div className="button-container">
                        <button className="button-cancel">Cancel</button>
                        <button className="button-save">Save</button>
                    </div>
                </div>
                <div className="account-edit">
                    <div className="account-input-container">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" placeholder='First Name'/>
                    </div>
                    <div className="account-input-container">
                        <label htmlFor="middle-name">Middle Name</label>
                        <input type="text" placeholder='Middle Name'/>
                    </div>
                    <div className="account-input-container">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" placeholder='Last Name'/>
                    </div>
                </div>

                <div className="account-edit">
                    <div className="account-input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Email'/>
                    </div>
                    <div className="account-input-container">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" placeholder='Phone'/>
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
                    <div className="button-container">
                        <button className="button-maar">Mark All As Read</button>
                    </div>
            </div>
            <div className="notification-container" onClick={handleClick}>
              <div className="notification-item">
                <div className="notification-main">
                  <div className="notification-upper">
                    <img src="StateLogos/500x500/ASUJ_500x500.jpg" alt="" className="user-img" />
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
        return <div className="approvals">Approvals Content Here</div>;
      default:
        return <div>Content not found!</div>;
    }
  };

  return (
    <div className='profile-outer'>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-header">
            <img src="src/components/Signup/user_456212.png" alt="" className='profile-img'/>
            <div className="profile-text-contaimer">
                <h1 className="profile-title">User Name</h1>
                <p className="profile-email">user@user.org</p>
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
            <a href="#" className='menu-link'>
              <i className='fa-solid fa-right-from-bracket menu-icon'></i>Logout
            </a>
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
