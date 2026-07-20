import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Sidebar = ({ open }) => {
  const location = useLocation();
  const drawerWidth = 260;

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
    { label: 'Students', path: '/students', icon: <PeopleIcon /> },
    { label: 'Courses', path: '/courses', icon: <SchoolIcon /> },
    { label: 'Analytics', path: '/analytics', icon: <AnalyticsIcon /> },
    { label: 'AI Chatbot', path: '/chatbot', icon: <ChatIcon /> },
    { label: 'Assessments', path: '/assessments', icon: <AssignmentIcon /> },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? drawerWidth : 0,
        transition: 'width 0.3s ease',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1a237e',
          color: '#fff',
          transition: 'width 0.3s ease',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#64b5f6' }}>
          📚 AI EduHub
        </Typography>
        <Typography variant="caption" sx={{ color: '#b0bec5' }}>
          Student Management
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: '#37474f' }} />
      <List sx={{ flex: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              color: location.pathname === item.path ? '#64b5f6' : '#b0bec5',
              backgroundColor: location.pathname === item.path ? '#283593' : 'transparent',
              '&:hover': {
                backgroundColor: '#283593',
                color: '#64b5f6',
              },
              transition: 'all 0.3s ease',
              mb: 1,
              borderRadius: 1,
              mx: 1,
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
