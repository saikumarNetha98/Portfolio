import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import registerImg from '../assets/register.jpg';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering user:', { username, email, phone, password });
    alert('Registration successful');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Left Side */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#f0f4f8',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ mb: 1, color: '#333' }}>
          Create Your Account
        </Typography>
        <Typography sx={{ mb: 3, color: '#555', maxWidth: 400 }}>
          Join the platform and build your professional portfolio today.
        </Typography>
        <Box
          component="img"
          src={registerImg}
          alt="Register Illustration"
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

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#ffffff',
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
            Register
          </Typography>
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 2 }}
            />
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
            {/* <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ mb: 2 }}
            /> */}
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
                '&:hover': { backgroundColor: '#0056b3' },
              }}
            >
              Register
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
            onClick={() => navigate('/login')}
          >
            Already have an account?{' '}
            <Box
              component="span"
              sx={{
                color: '#007bff',
                fontWeight: 500,
                textDecoration: 'underline',
              }}
            >
              Login
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Register;
