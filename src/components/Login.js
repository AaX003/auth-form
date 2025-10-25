import '../css/App.css';
import { Link } from 'react-router-dom';
import { useState} from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // success message
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() || password.trim()) {
      setSuccess("Successful!");
    }

  }


  return (
    <div className="container">
      <section className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <header className="form-header">
            <h3 className="header">Log into your account</h3>
          </header>

          {success && (
              <div className="msg-wrapper">
                <p className="success-msg">{success}</p>
              </div>
            )}
            
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
              minLength={8}
            />
            <span className="link-wrapper">
              <p className="msg">
                Need an account? <Link to="/signup" className="link">Sign Up</Link> here
              </p>
            </span>
            <button className="submit-btn" type="submit">Log In</button>
        </form>
      </section>
    </div>
  );
}

export default Login;
