import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import register from '../assets/register.jpg'
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Placeholder logic
    console.log('Registering user:', { username, email, phone, password });
    alert('Registration successful');
    navigate('/login');
  };

  return (
    <div className="login-page">
      {/* Left side */}
      <div className="login-left">
        <div className="animation-container">
          <h1>Create Your Account</h1>
          <p>Join the platform and build your professional portfolio today.</p>
          <img
            src={register}
            alt="Register Illustration"
            className="login-illustration"
          />
        </div>
      </div>

      {/* Right side form */}
      <div className="login-right">
        <div className="login-card">
          <h2>Register</h2>
          <form onSubmit={handleRegister} className="login-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <p className="switch-link" onClick={() => navigate('/login')}>
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
