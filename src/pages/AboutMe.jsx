import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';

function AboutMe() {
  return (
    <Container
      maxWidth={false}
      style={{
        padding: '0 20px',
        background: 'linear-gradient(135deg, #121212 30%, #1e1e1e 90%)',
        flex: 1,
        color: '#ffffff',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 120px)', // Висота з урахуванням хедера і футера
        paddingBottom: '60px', // Відступ для футера
      }}
    >
      {/* Верхня частина (50%) для тексту */}
      <Box style={{ height: '50%', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography
          variant="h2"
          style={{
            color: '#ffffff',
            whiteSpace: 'nowrap',
            letterSpacing: '.15em',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          Привіт! я Павло
        </Typography>
        <Typography
          variant="h5"
          style={{
            color: '#ffffff',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            marginTop: '10px',
          }}
        >
          Я вивчаю веб-дизайн
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{
            color: '#b0b0b0',
            maxWidth: '90%',
            margin: '20px 0 0',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 300,
            lineHeight: 1.6,
            fontSize: '1.2rem',
          }}
        >
          Я захоплююся веб-дизайном та розробкою. Мої цінності включають креативність, увагу до деталей та постійне навчання. Завжди прагну створювати щось унікальне та функціональне. Моя мета — стати експертом у створенні сучасних і зручних веб-інтерфейсів.
        </Typography>
      </Box>

      {}
      <Box style={{ height: '50%', display: 'flex', flexDirection: 'row', padding: '20px' }}>
        {}
        <Box style={{ width: '50%', textAlign: 'center' }}>
          <Typography
            variant="h4"
            style={{
              color: '#ffffff',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              marginTop: '40px',
              marginBottom: '20px',
              textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
            }}
          >
            Мої проєкти
          </Typography>
          <Box style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {}
            <Box
              style={{
                background: 'linear-gradient(45deg, #1e1e1e 30%, #2a2a2a 90%)',
                padding: '15px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                width: '150px',
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                style={{ color: '#ffffff', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                HTML + CSS
              </Typography>
              <Button
                variant="contained"
                style={{
                  background: 'linear-gradient(45deg, #76ff03 30%, #00c853 90%)',
                  margin: '10px 0',
                  color: '#000000',
                  borderRadius: '8px',
                  padding: '5px 10px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                }}
                href="https://github.com/gptsenior/html-project-lab1"
                target="_blank"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
                }}
              >
                Проєкт 1
              </Button>
              <Button
                variant="contained"
                style={{
                  background: 'linear-gradient(45deg, #76ff03 30%, #00c853 90%)',
                  margin: '0',
                  color: '#000000',
                  borderRadius: '8px',
                  padding: '5px 10px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                }}
                href="https://github.com/gptsenior/AnimeWebsite"
                target="_blank"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
                }}
              >
                Проєкт 2
              </Button>
            </Box>

            {}
            <Box
              style={{
                background: 'linear-gradient(45deg, #1e1e1e 30%, #2a2a2a 90%)',
                padding: '15px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                width: '150px',
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                style={{ color: '#ffffff', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                JavaScript
              </Typography>
              <Button
                variant="contained"
                style={{
                  background: 'linear-gradient(45deg, #76ff03 30%, #00c853 90%)',
                  margin: '10px 0',
                  color: '#000000',
                  borderRadius: '8px',
                  padding: '5px 10px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                }}
                href="https://github.com/gptsenior/react-props"
                target="_blank"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
                }}
              >
                Проєкт 1
              </Button>
              <Button
                variant="contained"
                style={{
                  background: 'linear-gradient(45deg, #76ff03 30%, #00c853 90%)',
                  margin: '0',
                  color: '#000000',
                  borderRadius: '8px',
                  padding: '5px 10px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                }}
                href="https://github.com/gptsenior/APIgallery"
                target="_blank"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
                }}
              >
                Проєкт 2
              </Button>
            </Box>

            {/* React */}
            <Box
              style={{
                background: 'linear-gradient(45deg, #1e1e1e 30%, #2a2a2a 90%)',
                padding: '15px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                width: '150px',
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                style={{ color: '#ffffff', fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
              >
                React
              </Typography>
              <Button
                variant="contained"
                style={{
                  background: 'linear-gradient(45deg, #76ff03 30%, #00c853 90%)',
                  margin: '10px 0',
                  color: '#000000',
                  borderRadius: '8px',
                  padding: '5px 10px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                }}
                href="https://github.com/gptsenior/uuseEffect"
                target="_blank"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
                }}
              >
                Проєкт 1
              </Button>
              <Button
                variant="contained"
                style={{
                  background: 'linear-gradient(45deg, #76ff03 30%, #00c853 90%)',
                  margin: '0',
                  color: '#000000',
                  borderRadius: '8px',
                  padding: '5px 10px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                }}
                href="https://github.com/gptsenior/newrouterapp"
                target="_blank"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
                }}
              >
                Проєкт 2
              </Button>
            </Box>
          </Box>
        </Box>

        {}
        <Box style={{ width: '50%', textAlign: 'center' }}>
          <Typography
            variant="h4"
            style={{
              color: '#ffffff',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              marginTop: '40px',
              marginBottom: '20px',
              textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
            }}
          >
            Мої дизайни
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <img
                src="/assets/images/Project1.png"
                alt="Дизайн 1"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src="/assets/images/Project2.png"
                alt="Дизайн 2"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
            </Grid>
            <Grid item xs={4}>
              <img
                src="/assets/images/Project3.png"
                alt="Дизайн 3"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutMe;