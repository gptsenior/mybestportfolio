import React from 'react';
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { School, Work, Star } from '@mui/icons-material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

function MyFuture() {
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
          variant="h4"
          style={{ color: '#ffffff', fontWeight: 'bold' }}
        >
          Моє майбутнє:
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{ color: '#ffffff', maxWidth: '100%', margin: '10px 0 0' }}
        >
          Я бачу себе як успішного веб-дизайнера та розробника, який працює над інноваційними проєктами.
        </Typography>
      </Box>
      <Box style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box style={{ width: '50%', padding: '0 0 20px 10px', textAlign: 'center' }}>
          <Typography
            variant="h4"
            style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '20px' }}
          >
            3 кроки в майбутнє
          </Typography>
          <List style={{ maxWidth: '100%', margin: '0 auto' }}>
            <ListItem style={{ backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '8px' }}>
              <ListItemIcon>
                <School style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Завершити навчання з веб-дизайну" style={{ color: '#ffffff' }} />
            </ListItem>
            <ListItem style={{ backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '8px' }}>
              <ListItemIcon>
                <Work style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Отримати першу роботу в IT" style={{ color: '#ffffff' }} />
            </ListItem>
            <ListItem style={{ backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '8px' }}>
              <ListItemIcon>
                <Star style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Стати експертом у своїй галузі" style={{ color: '#ffffff' }} />
            </ListItem>
          </List>
        </Box>
        <Box style={{ width: '50%', padding: '0 10px 20px 0', textAlign: 'center' }}>
          <Typography
            variant="h4"
            style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '20px' }}
          >
            Таймлайн:
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: '#ffffff' }} />
                <TimelineConnector style={{ backgroundColor: '#ffffff' }} />
              </TimelineSeparator>
              <TimelineContent style={{ color: '#ffffff' }}>
                2023: Початок навчання
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: '#ffffff' }} />
                <TimelineConnector style={{ backgroundColor: '#ffffff' }} />
              </TimelineSeparator>
              <TimelineContent style={{ color: '#ffffff' }}>
                2024: Перші проєкти
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: '#ffffff' }} />
              </TimelineSeparator>
              <TimelineContent style={{ color: '#ffffff' }}>
                2025: Отримання роботи
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <Typography
          variant="h6"
          style={{ color: '#ffffff', fontWeight: 'bold' }}
        >
          Мотиваційна фраза:
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{ color: '#ffffff', maxWidth: '800px', margin: '10px auto' }}
        >
          "Успіх — це постійний процес самовдосконалення."
        </Typography>
      </Box>
    </Container>
  );
}

export default MyFuture;