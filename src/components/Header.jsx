import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Link as MuiLink,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/saikumar-photo1.jpg';

// Navigation links for the portfolio
const navLinks = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        backgroundColor: '#ffffff', // Pure white
        color: '#333333',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
      }}
    >


      <Toolbar
        sx={{
          backgroundColor: 'transparent', // Let AppBar show through
          justifyContent: 'space-between',
          maxWidth: '1200px',
          mx: 'auto',
          width: '100%',
          py: 1,
        }}
      >

        {/* Logo and Name */}
        <Box display="flex" alignItems="center">
          <Avatar src={logo} alt="Saikumar Chedrupu" sx={{ width: 44, height: 44, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{ fontWeight: 700, color: '#007bff', letterSpacing: 0.5 }}
          >
            Saikumar Chedrupu
          </Typography>
        </Box>

        {/* Navigation Menu */}
        <Box display="flex" gap={2}>
          {navLinks.map(({ label, path }) => (
            <MuiLink
              key={path}
              component={Link}
              to={path}
              underline="none"
              sx={{
                px: 1.5,
                py: 0.75,
                borderRadius: 2,
                fontWeight: 500,
                color: isActive(path) ? '#007bff' : '#333',
                backgroundColor: isActive(path) ? '#e3f2fd' : 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#e0f7fa',
                },
              }}
            >
              {label}
            </MuiLink>
          ))}
        </Box>

        {/* Authentication Buttons */}
        <Box display="flex" gap={1}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            size="small"
            sx={{
              textTransform: 'none',
              backgroundColor: '#007bff',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            size="small"
            sx={{
              textTransform: 'none',
              color: '#007bff',
              borderColor: '#007bff',
              '&:hover': {
                backgroundColor: '#007bff',
                color: '#fff',
              },
            }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
