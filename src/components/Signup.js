import '../css/App.css';

import { useState} from "react";

function Signup() {
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
            <h3 className="header">Create your account</h3>
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
              minLength={8}
            />
            <span className="link-wrapper">
              <p className="msg">
                Have an account? <Link to="/" className="link">Login</Link> here
              </p>
            </span>
            <button className="submit-btn" type="submit">Sign Up</button>
        </form>
      </section>
    </div>
  );
}

export default Signup;
