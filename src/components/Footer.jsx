import React from 'react';
import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1c1c1c',
        color: '#ffffff',
        py: 5,
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2 }}>
        <MuiLink
          href="https://linkedin.com/in/saikumar-chedrupu-463630226"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <IconButton sx={{ color: '#ffffff', fontSize: '1.5rem', '&:hover': { color: '#00bcd4' } }}>
            <FaLinkedin />
          </IconButton>
        </MuiLink>

        <MuiLink
          href="https://github.com/saikumarNetha98"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <IconButton sx={{ color: '#ffffff', fontSize: '1.5rem', '&:hover': { color: '#00bcd4' } }}>
            <FaGithub />
          </IconButton>
        </MuiLink>

        <MuiLink
          href="https://twitter.com/"
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <IconButton sx={{ color: '#ffffff', fontSize: '1.5rem', '&:hover': { color: '#00bcd4' } }}>
            <FaTwitter />
          </IconButton>
        </MuiLink>

        <MuiLink
          href="mailto:saikumarchedrupu@gmail.com"
          aria-label="Email"
        >
          <IconButton sx={{ color: '#ffffff', fontSize: '1.5rem', '&:hover': { color: '#00bcd4' } }}>
            <FaEnvelope />
          </IconButton>
        </MuiLink>
      </Box>

      <Typography variant="body2" sx={{ color: '#bbbbbb', fontSize: '0.9rem' }}>
        &copy; {currentYear} Saikumar Chedrupu. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
