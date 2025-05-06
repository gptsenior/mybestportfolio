import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';

function App() {
  return (
    <Router>
      <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" style={{ background: 'linear-gradient(45deg, #121212 30%, #1e1e1e 90%)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)' }}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, color: '#ffffff', fontFamily: "'Montserrat', sans-serif" }}>
              Мій Портфоліо
            </Typography>
            <Button
              component={Link}
              to="/"
              style={{
                color: '#ffffff',
                backgroundColor: '#76ff03',
                margin: '0 10px',
                padding: '8px 16px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Про мене
            </Button>
            <Button
              component={Link}
              to="/my-city"
              style={{
                color: '#ffffff',
                backgroundColor: '#76ff03',
                margin: '0 10px',
                padding: '8px 16px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Моє місто
            </Button>
            <Button
              component={Link}
              to="/my-future"
              style={{
                color: '#ffffff',
                backgroundColor: '#76ff03',
                margin: '0 10px',
                padding: '8px 16px',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              Моє майбутнє
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="main" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/my-city" element={<MyCity />} />
            <Route path="/my-future" element={<MyFuture />} />
          </Routes>
        </Box>
        <Box
          component="footer"
          style={{
            background: 'linear-gradient(45deg, #1e1e1e 30%, #121212 90%)',
            padding: '20px',
            textAlign: 'center',
            color: '#ffffff',
            fontFamily: "'Montserrat', sans-serif",
            boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Typography variant="body2" style={{ marginBottom: '10px' }}>
            © 2025 Павло. Всі права захищені.
          </Typography>
          <Box>
            <Button
              href="https://github.com/pavlo"
              target="_blank"
              style={{
                color: '#ffffff',
                margin: '0 10px',
                textTransform: 'none',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/pavlo"
              target="_blank"
              style={{
                color: '#ffffff',
                margin: '0 10px',
                textTransform: 'none',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              LinkedIn
            </Button>
            <Button
              href="https://www.instagram.com/pavlo"
              target="_blank"
              style={{
                color: '#ffffff',
                margin: '0 10px',
                textTransform: 'none',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Instagram
            </Button>
            <Button
              href="https://www.facebook.com/pavlo"
              target="_blank"
              style={{
                color: '#ffffff',
                margin: '0 10px',
                textTransform: 'none',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Facebook
            </Button>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;