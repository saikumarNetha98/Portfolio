import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, GlobalStyles } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: {
          margin: 0,
          fontFamily: 'Arial, sans-serif',
        },
        html: {
          scrollPaddingTop: '70px',
          scrollBehavior: 'smooth',
        },
      }}
    />
    <App />
  </>
);
