import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1e1e1e',
        color: '#ffffff',
        padding: '20px 0',
        marginTop: 'auto',
        boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.5)',
        width: '100%',
      }}
    >
      <Container maxWidth={false} style={{ padding: '0 20px', width: '100%', boxSizing: 'border-box' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" style={{ color: '#76ff03' }}>
              Зв'яжіться зі мною:
            </Typography>
            <Typography variant="body2">Email: pavlo@example.com</Typography>
            <Typography variant="body2">Телефон: +123456789</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" style={{ color: '#76ff03' }}>
              Соціальні мережі:
            </Typography>
            <a href="https://github.com/pavlo" target="_blank" style={{ color: '#76ff03' }}>
              GitHub
            </a>
            <br />
            <a href="https://linkedin.com/in/pavlo" target="_blank" style={{ color: '#76ff03' }}>
              LinkedIn
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;