import React from "react";

const Navbar = ({ setPage, mode, toggleMode }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: mode === "light" ? "#f8f9fa" : "#333",
        color: mode === "light" ? "#000" : "#fff",
        padding: "10px 50px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      {/* Left section */}
      <div>
        <button
          style={buttonStyle(mode)}
          onClick={() => setPage("signup")}
        >
          Signup
        </button>
        <button
          style={buttonStyle(mode)}
          onClick={() => setPage("login")}
        >
          Login
        </button>
      </div>

      {/* Right section */}
      <div>
        <button style={buttonStyle(mode)} onClick={() => window.location.href = "/about"}>About</button>
        <button style={buttonStyle(mode)} onClick={() => window.location.href = "/recipes"}>Recipes</button>
        <button style={buttonStyle(mode)} onClick={() => window.location.href = "/profile"}>Profile</button>
        <button style={buttonStyle(mode)} onClick={() => window.location.href = "/contact"}>Contact</button>
        <button
          style={{
            ...buttonStyle(mode),
            backgroundColor: mode === "light" ? "#222" : "#eee",
            color: mode === "light" ? "#fff" : "#000"
          }}
          onClick={toggleMode}
        >
          {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
};

// Reusable button style
const buttonStyle = (mode) => ({
  backgroundColor: mode === "light" ? "#007bff" : "#555",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  margin: "0 5px",
  borderRadius: "5px",
  cursor: "pointer",
});

export default Navbar;
