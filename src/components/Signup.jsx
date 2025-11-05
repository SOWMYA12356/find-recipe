import React, { useState } from "react";

const Signup = ({ setPage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 💾 Store user details locally (no backend)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // Save user info to localStorage
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! You can now log in.");
    setPage("login");
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>

      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => setPage("login")}>
          Login
        </span>
      </p>
    </form>
  );
};

export default Signup;
