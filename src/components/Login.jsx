import React, { useState } from "react";

const Login = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 💾 Local frontend login (no backend)
  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please sign up first!");
      setPage("signup");
      return;
    }

    // Check credentials
    if (storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      localStorage.setItem("token", "dummy-token"); // just for simulation
      setPage("home"); // redirect to home or profile
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <form onSubmit={handleLogin} className="auth-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <p>
        Don’t have an account?{" "}
        <span className="link" onClick={() => setPage("signup")}>
          Sign up
        </span>
      </p>
    </form>
  );
};

export default Login;
