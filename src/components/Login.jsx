import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';
import illustrations from '../assets/illustrations.jpg'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Placeholder login logic
    if (email === 'admin@example.com' && password === 'password') {
      alert('Login successful');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      {/* Left Side Animation or Image */}
      <div className="login-left">
        <div className="animation-container">
          <h1>Welcome Back!</h1>
          <p>Enter your credentials to access the portfolio dashboard.</p>
          <img
            src={illustrations}
            alt="Login Illustration"
            className="login-illustration"
          />
        </div>
      </div>

      {/* Right Side Login Card */}
      <div className="login-right">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <p className="switch-link" onClick={() => navigate('/register')}>
            Don't have an account? <span>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
