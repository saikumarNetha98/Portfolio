import React from 'react';
import { education } from '../constants/education';
import { Box, Typography, Grid } from '@mui/material';

const Education = () => {
  if (!education || education.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h4" color="primary">Education</Typography>
        <Typography>No education data available.</Typography>
      </Box>
    );
  }

  return (
    <Box id="education" sx={{ textAlign: 'center', py: 6, px: 2 }}>
      <Typography
        variant="h4"
        sx={{
          color: '#003366',
          fontWeight: 'bold',
          mb: 4,
          position: 'relative',
          '&::after': {
            content: '""',
            width: '60px',
            height: '4px',
            backgroundColor: '#00bcd4',
            display: 'block',
            margin: '10px auto 0',
            borderRadius: '2px',
          },
        }}
      >
        Education
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1100px', margin: '0 auto' }}>
        {education.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box
              sx={{
                height: 350,
                borderRadius: '12px',
                backgroundImage: `url(${item.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                transition: 'transform 0.4s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                overflow: 'hidden',
              }}
            >
              {/* Overlay on hover */}
              <Box
                className="education-overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  color: '#fff',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  px: 2,
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                  <Typography sx={{ fontWeight: 500 }}>{item.duration}</Typography>
                  <Typography sx={{ fontWeight: 600, color: '#00bcd4', mb: 1 }}>{item.degree}</Typography>
                  <Typography variant="body2" color="gray">{item.location}</Typography>
                </Box>
              </Box>

              {/* Circular Percentage */}
              <Box
                sx={{
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  color: '#fff',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                {item.percentage}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
