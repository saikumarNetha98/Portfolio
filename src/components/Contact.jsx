import { useForm, ValidationError } from '@formspree/react';
import React, { useState, } from "react";
import Snackbar from '@mui/material/Snackbar';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  Grid
} from '@mui/material';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGlobe,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Contact = () => {
  const [state, handleSubmit] = useForm('manjbgeb');
  const [triggerSnackBarMessage, setTriggerSnackBarMessage] = useState(false)
  const [triggerSnackBarDescription, setTriggerSnackBarDescription] = useState("")
  const [triggerSnackBarSeverity, setTriggerSnackBarSeverity] = useState()

  const snackBar = (description, severity) => {
    setTriggerSnackBarMessage(true)
    setTimeout(() => {
      setTriggerSnackBarMessage(false)
    }, 3000)
    setTriggerSnackBarSeverity(severity)
    setTriggerSnackBarDescription(description)
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    snackBar(`${text} Copied`, "success")
    alert(`Copied: ${text}`);
  };


  return (
    <>
      <Box
        sx={{
          backgroundColor: '#f0f8fa',
          padding: '60px 20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#0c344b',
            marginBottom: '10px',
          }}
        >
          Contact Me
        </Typography>
        <Box
          sx={{
            width: '80px',
            height: '3px',
            backgroundColor: '#1393a3',
            margin: 'auto',
            marginBottom: '40px',
            borderRadius: '10px',
          }}
        />
     
        {/* Grid Layout */}
        <Grid container spacing={4} sx={{ margin: 'auto' }}>
          {/* Left Panel */}
          <Grid item xs={12} md={6}>
            {[
              { icon: <FaPhone />, text: '+91 9000336132' },
              { icon: <FaGlobe />, text: 'https://saikumarch.netlify.app/' },
              { icon: <FaEnvelope />, text: 'saikumarchedrupu@gmail.com' },
              { icon: <FaMapMarkerAlt />, text: 'Hyderabad, Telangana, India' },
            ].map((item, index) => (
              <Paper
                key={index}
                onClick={() => handleCopy(item.text)}
                elevation={2}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  padding: '12px 20px',
                  marginBottom: 2,
                  cursor: 'pointer',
                  backgroundColor: '#eeeeee',
                  borderRadius: '8px',
                }}
              >
                {item.icon}
                <Typography variant="body2" sx={{ fontSize: '15px' }}>
                  {item.text}
                </Typography>
              </Paper>
            ))}

            <Box display="flex" justifyContent="center" gap={2} mt={2}>
              <IconButton onClick={() => handleCopy('https://youtube.com')}>
                <FaYoutube size={20} color="#c4302b" />
              </IconButton>
              <IconButton onClick={() => handleCopy('https://linkedin.com/in/saikumarchedrupu')}>
                <FaLinkedin size={20} color="#0077b5" />
              </IconButton>
              <IconButton onClick={() => handleCopy('https://instagram.com')}>
                <FaInstagram size={20} color="#e1306c" />
              </IconButton>
              <IconButton onClick={() => handleCopy('https://github.com/saikumarchedrupu')}>
                <FaGithub size={20} color="#000" />
              </IconButton>
              <IconButton onClick={() => handleCopy('https://twitter.com/saikumarch')}>
                <FaTwitter size={20} color="#1da1f2" />
              </IconButton>
            </Box>
          </Grid>

          {/* Right Panel */}
          <Grid item xs={12} md={6}>
            {state.succeeded ? (
              <Typography
                variant="h6"
                sx={{ textAlign: 'center', color: 'green', marginTop: '40px' }}
              >
                ✅ Thanks for contacting me!
              </Typography>
            ) : (
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  placeholder="Enter Your Name"
                  required
                  InputProps={{ style: inputStyle }}
                />
                <ValidationError prefix="Username" field="username" errors={state.errors} />

                <TextField
                  fullWidth
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                  InputProps={{ style: inputStyle }}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  multiline
                  rows={5}
                  placeholder="Enter Your Message"
                  required
                  InputProps={{ style: inputStyle }}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <Button
                  type="submit"
                  variant="contained"
                  disabled={state.submitting}
                  sx={{
                    backgroundColor: '#0e7c89',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#0b6774',
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>

        {/* Snackbar */}
        <Snackbar
          open={triggerSnackBarMessage}
          autoHideDuration={3000}
          onClose={() => setTriggerSnackBarMessage(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setTriggerSnackBarMessage(false)}
            severity={triggerSnackBarSeverity || 'info'}
            sx={{ width: '100%' }}
          >
            {triggerSnackBarDescription}
          </Alert>
        </Snackbar>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={triggerSnackBarMessage}
        autoHideDuration={3000}
        onClose={() => setTriggerSnackBarMessage(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setTriggerSnackBarMessage(false)}
          severity={triggerSnackBarSeverity || 'info'}
          sx={{ width: '100%' }}
        >
          {triggerSnackBarDescription}
        </Alert>
      </Snackbar>
    </>
  );
};

const inputStyle = {
  backgroundColor: '#eeeeee',
  borderRadius: '5px',
  padding: '12px',
  fontSize: '14px',
};


export default Contact;
