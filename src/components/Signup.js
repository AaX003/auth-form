import '../css/App.css';

import { useState} from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please create an email and password.");
      return;
    }
    if (password.trim().length < 8) {
      alert("Your password should be atleast 8 characters long.");
      return;
    } 
    alert("Signed up successfully!");
    setEmail("");
    setPassword("");
  }

  

  return (
    <div className="container">
      <section className="form-container">
        <form className="form" >
          <header className="form-header">
            <h3 className="header">Create your account</h3>
          </header>
          <label 
            htmlFor="email" 
            className="email-label">Email</label>
          <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Create an Email"
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
              placeholder="Create a Password"
              required
            />
            <span className="msg-wrapper">
              <p className="msg">
                Have an account? <a href="/" className="link">Login</a> here
              </p>
            </span>
        </form>
        <button className="submit-btn" type="submit" onClick={handleSubmit}>Sign Up</button>
      </section>
    </div>
  );
}

export default Signup;
