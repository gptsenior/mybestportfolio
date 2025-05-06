import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar
      position="static"
      style={{
        background: 'linear-gradient(to right, #1e1e1e, #76ff03)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
        width: '100%',
      }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#ffffff' }}>
          Павло - Веб Дизайнер
        </Typography>
        <Button color="inherit" component={Link} to="/" style={{ color: '#76ff03' }}>
          Про мене
        </Button>
        <Button color="inherit" component={Link} to="/my-city" style={{ color: '#76ff03' }}>
          Моє місто
        </Button>
        <Button color="inherit" component={Link} to="/my-future" style={{ color: '#76ff03' }}>
          Моє майбутнє
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;