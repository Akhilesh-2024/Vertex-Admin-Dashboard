import { useNavigate } from "react-router-dom";
import "./css/navbar.css";
import profile from "./Images/Profile.jpg";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const name = import.meta.env.VITE_name;
  const emailId = import.meta.env.VITE_user;
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
    console.log("Logout Successfully");
    setShowDropdown(false);
  };

  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const notificationRef = useRef(null);

  // Add to existing useEffect for outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotificationDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNotificationDropdown = () => {
    setShowNotificationDropdown(!showNotificationDropdown);
  };

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "New message received",
      message: "You have a new message from John Doe",
      time: "2 min ago",
      unread: true,
      type: "message",
    },
    {
      id: 2,
      title: "System update",
      message: "System maintenance scheduled for tonight",
      time: "1 hour ago",
      unread: true,
      type: "system",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo-section">
          <a href="#" className="logo">
            <div className="logo-icon">VT</div>
            VERTEX
          </a>
        </div>

        <div className="nav-right">
          <div className="search-bar">
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>

          <div className="nav-icon" ref={notificationRef}>
            <div onClick={toggleNotificationDropdown}>
              <svg viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
              <div className="notification-badge">5</div>
            </div>

            <div
              className={`notification-dropdown ${
                showNotificationDropdown ? "show" : ""
              }`}
            >
              <div className="notification-header">
                <h3>Notifications</h3>
                <span className="clear-all">Clear all</span>
              </div>

              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`notification-item ${
                    notification.unread ? "unread" : ""
                  }`}
                >
                  <div className="notification-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div className="notification-content">
                    <div className="notification-title">
                      {notification.title}
                    </div>
                    <div className="notification-message">
                      {notification.message}
                    </div>
                    <div className="notification-time">{notification.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section" ref={dropdownRef}>
            <div
              onClick={toggleDropdown}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                borderRadius: "16px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: "1px solid transparent",
              }}
            >
              <div className="profile-avatar">
                <img
                  src={profile}
                  alt=""
                  style={{ width: "44px", height: "44px", borderRadius: "50%" }}
                />
              </div>
              <div className="profile-details">
                <div className="profile-name">{name}</div>
                <div className="profile-status">● Online</div>
              </div>
            </div>

            <div className={`profile-dropdown ${showDropdown ? "show" : ""}`}>
              <div className="dropdown-header">
                <img src={profile} alt="" className="dropdown-avatar" />
                <div className="dropdown-info">
                  <h3>{name}</h3>
                  <p>{emailId}</p>
                </div>
              </div>

              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  My Profile
                </li>
                <li className="dropdown-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                  </svg>
                  Settings
                </li>
                {/* <li className="dropdown-item">
                  <svg viewBox="0 0 24 24">
                    <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
                  </svg>
                  Help & Support
                </li> */}
                <li className="dropdown-item logout" onClick={handleLogout}>
                  <svg viewBox="0 0 24 24">
                    <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
                  </svg>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
