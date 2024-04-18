
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
                    <div className="profile-button-container">
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
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <table>
                            <tr className='app-item-head approval-table-row'>
                              <td className='app-col-table-data'>
                                <div>
                                  <img src="assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt=""/>
                                  <p>Name Name Name</p>
                                </div>
                              </td>
                              <td className='app-col-table-data'>email</td> 
                              <td className='app-col-table-data'>Town/City</td>
                              <td className='app-col-table-data'>Reg No</td>
                            </tr>
                          </table>
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body details-tab">
                      <div className="detail-row">
                          <span className="detail-label">Name:</span>
                          <span className="detail-value">First Name Middle Name Last Name</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Email:</span>
                          <span className="detail-value">nnnn@nnn.com</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Phone:</span>
                          <span className="detail-value">+91 9999999999</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Gender:</span>
                          <span className="detail-value">Male</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Residence:</span>
                          <span className="detail-value">Hosteller</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Date of Birth:</span>
                          <span className="detail-value">11/11/1111</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Id Type:</span>
                          <span className="detail-value">Aadhaar</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">ID Number:</span>
                          <span className="detail-value">77777777777</span>
                      </div>
                      <div className="button-container-approve">
                        <div className="remark-box">
                          <textarea name="" id="" cols="45" rows="1" placeholder='Remarks' className='remark-textarea'></textarea>
                        </div>
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
                <div className="card">
                  <div className="card-header approval-itembox" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <table>
                            <tr className='app-item-head approval-table-row'>
                              <td className='app-col-table-data'>
                                <div>
                                  <img src="assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt=""/>
                                  <p>Name Name Name</p>
                                </div>
                              </td>
                              <td className='app-col-table-data'>email</td> 
                              <td className='app-col-table-data'>Town/City</td>
                              <td className='app-col-table-data'>Reg No</td>
                            </tr>
                          </table>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body details-tab">
                      <div className="detail-row">
                          <span className="detail-label">Name:</span>
                          <span className="detail-value">First Name Middle Name Last Name</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Email:</span>
                          <span className="detail-value">nnnn@nnn.com</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Phone:</span>
                          <span className="detail-value">+91 9999999999</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Gender:</span>
                          <span className="detail-value">Male</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Residence:</span>
                          <span className="detail-value">Hosteller</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Date of Birth:</span>
                          <span className="detail-value">11/11/1111</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Id Type:</span>
                          <span className="detail-value">Aadhaar</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">ID Number:</span>
                          <span className="detail-value">77777777777</span>
                      </div>
                      <div className="button-container-approve">
                        <div className="remark-box">
                          <textarea name="" id="" cols="45" rows="1" placeholder='Remarks' className='remark-textarea'></textarea>
                        </div>
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
                <div className="card">
                  <div className="card-header approval-itembox" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <table>
                            <tr className='app-item-head approval-table-row'>
                              <td className='app-col-table-data'>
                                <div>
                                  <img src="assets/StateLogos/500x500/ASUJ/ASUJ_500x500.jpg" alt=""/>
                                  <p>Name Name Name</p>
                                </div>
                              </td>
                              <td className='app-col-table-data'>email</td> 
                              <td className='app-col-table-data'>Town/City</td>
                              <td className='app-col-table-data'>Reg No</td>
                            </tr>
                          </table>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body details-tab">
                      <div className="detail-row">
                          <span className="detail-label">Name:</span>
                          <span className="detail-value">First Name Middle Name Last Name</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Email:</span>
                          <span className="detail-value">nnnn@nnn.com</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Phone:</span>
                          <span className="detail-value">+91 9999999999</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Gender:</span>
                          <span className="detail-value">Male</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Residence:</span>
                          <span className="detail-value">Hosteller</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Date of Birth:</span>
                          <span className="detail-value">11/11/1111</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">Id Type:</span>
                          <span className="detail-value">Aadhaar</span>
                      </div>
                      <div className="detail-row">
                          <span className="detail-label">ID Number:</span>
                          <span className="detail-value">77777777777</span>
                      </div>
                      <div className="button-container-approve">
                        <div className="remark-box">
                          <textarea name="" id="" cols="45" rows="1" placeholder='Remarks' className='remark-textarea'></textarea>
                        </div>
                        <div className="button-wrapper-approve">
                            <button className="approve-button">Approve</button>
                        </div>
                        <div className="button-wrapper">
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
