import React from "react";
import "../css/Profile.css";

function Profile({ user }) {
  // ✅ Get user data from props or localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const currentUser = user || storedUser;

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    window.location.href = "/"; // Redirect to home after logout
  };

  return (
    <div className="auth-box">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="User Avatar"
        className="profile-avatar"
      />
      <h1>Profile</h1>

      <div className="profile-details">
        <p><b>Name:</b> {currentUser?.name || "Guest User"}</p>
        <p><b>Email:</b> {currentUser?.email || "Not Provided"}</p>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
