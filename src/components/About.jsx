import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import saikumarPhoto from '../assets/saikumar-photo1.jpg';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: '#f9f9f9',
        padding: '60px 20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: '50px',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Avatar
            src={saikumarPhoto}
            alt="Saikumar Chedrupu"
            sx={{
              width: 200,
              height: 200,
              border: '5px solid #6e8efb',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>

        {/* Content Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            Full Stack Developer with 3+ years of experience in Node.js and Next.js development.
            Proven ability to design and implement scalable web solutions with strong expertise
            in database management (MySQL, PostgreSQL).
          </Typography>
          <Box>
            <Typography sx={{ marginBottom: '10px' }}>
              <strong>Email:</strong> saikumarchedrupu@gmail.com
            </Typography>
            <Typography>
              <strong>Phone:</strong> +91 9000336132
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
