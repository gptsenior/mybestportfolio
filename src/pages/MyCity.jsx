import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';

function MyCity() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh')
      .then((response) => setWeather(response.data.current_weather))
      .catch(() => setError('Не вдалося отримати дані про погоду'));
  }, []);

  return (
    <Container
      maxWidth={false}
      style={{
        padding: '0 20px',
        backgroundColor: '#121212',
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
      <Box style={{ width: '50%', padding: '10px 0 0 10px', textAlign: 'center' }}>
        <Typography
          variant="h6"
          style={{ color: '#ffffff', fontWeight: 'bold' }}
        >
          Моє місто:
        </Typography>
        <Typography
          variant="h3"
          style={{ color: '#ffffff', fontWeight: 'bold', margin: '0' }}
        >
          КИЇВ
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{ color: '#ffffff', maxWidth: '100%', margin: '10px 0 0' }}
        >
          Київ — столиця України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра.
        </Typography>
      </Box>
      <Box style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <Box style={{ width: '50%', textAlign: 'center', marginBottom: '20px' }}>
          {error && <Typography style={{ color: '#ff1744' }}>{error}</Typography>}
          {weather && (
            <Box
              style={{
                backgroundColor: '#1e1e1e',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Typography variant="h5" style={{ color: '#ffffff' }}>
                Поточна погода в Києві
              </Typography>
              <Typography style={{ color: '#ffffff' }}>
                Температура: {weather.temperature}°C
              </Typography>
              <Typography style={{ color: '#ffffff' }}>
                Швидкість вітру: {weather.windspeed} км/год
              </Typography>
              <Typography style={{ color: '#ffffff' }}>
                Код погоди: {weather.weathercode} (документація Open-Meteo для деталей)
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default MyCity;