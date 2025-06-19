import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import illustrations from '../assets/illustrations.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === 'password') {
      alert('Login successful');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#f0f4f8',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 1, color: '#333' }}>
          Welcome Back!
        </Typography>
        <Typography sx={{ mb: 3, color: '#555', maxWidth: 400 }}>
          Enter your credentials to access the portfolio dashboard.
        </Typography>
        <Box
          component="img"
          src={illustrations}
          alt="Login Illustration"
          sx={{
            width: '80%',
            maxWidth: 400,
            animation: 'float 3s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            },
          }}
        />
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 4,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 400,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center', mb: 3, color: '#222' }}>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                fontWeight: 'bold',
                backgroundColor: '#007bff',
                '&:hover': {
                  backgroundColor: '#0056b3',
                },
              }}
            >
              Login
            </Button>
          </form>
          <Typography
            sx={{
              mt: 2,
              textAlign: 'center',
              fontSize: '0.95rem',
              color: '#555',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/register')}
          >
            Don’t have an account?{' '}
            <Box
              component="span"
              sx={{
                color: '#007bff',
                fontWeight: 500,
                textDecoration: 'underline',
              }}
            >
              Register
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
