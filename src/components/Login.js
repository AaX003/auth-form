import '../css/App.css';

import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password.");
      return;
    }
    if (password.trim().length < 8) {
      alert("Password should be atleast 8 characters long.");
      return;
    } 
    alert("Logged in successfully!");
    setEmail("");
    setPassword("");
  }

  

  return (
    <div className="container">
      <section className="form-container">
        <form className="form" >
          <header className="form-header">
            <h3 className="header">Log into your account</h3>
          </header>
          <label 
            htmlFor="email" 
            className="email-label">Email</label>
          <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />

            <label 
              htmlFor="password" 
              className="password-label">Password</label>
            <input 
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              required
            />
            <span className="msg-wrapper">
              <p className="msg">
                Need an account? <a href="/signup" className="link">Register</a> here
              </p>
            </span>
        </form>
        <button className="submit-btn" type="submit" onClick={handleSubmit}>Login</button>
      </section>
    </div>
  );
}

export default Login;
