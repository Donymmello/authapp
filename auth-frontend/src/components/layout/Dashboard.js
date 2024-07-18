// Dashboard.js
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button,
  Box,
  Paper
} from '@mui/material';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Typography component="h1" variant="h4" gutterBottom>
            Welcome, {user}!
          </Typography>
          <Typography variant="body1" paragraph>
            This is your protected dashboard. Only authenticated users can see this page.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default Dashboard;