//components/sidebar/sidebar.jsx
import React, { useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { Menu as MenuIcon, Home as HomeIcon, Article as NewsIcon, Movie as VideosIcon, 
  LibraryMusic as MusicIcon, Assignment as ExamsIcon, Close as CloseIcon } from '@mui/icons-material';

const drawerWidth = 240;

const SidebarBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(2),
}));

const SidebarHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
}));

const SidebarMenu = styled(List)(({ theme }) => ({
  flexGrow: 1,
  marginTop: theme.spacing(2),
}));

const SidebarMenuItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1, 2),
  transition: 'background-color 0.2s ease-out',
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.light, 0.1),
  },
}));

const SidebarMenuItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const SidebarMenuItemText = styled(ListItemText)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 500,
  color: 'black',
}));

const SidebarItem = ({ icon, text }) => (
  <SidebarMenuItem>
    <SidebarMenuItemIcon>
      {icon}
    </SidebarMenuItemIcon>
    <SidebarMenuItemText primary={text} />
  </SidebarMenuItem>
);

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MenuIcon sx={{ color: 'black' }} />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <SidebarBox>
          <IconButton onClick={handleClose} sx={{ alignSelf: 'flex-end' }}>
            <CloseIcon />
          </IconButton>
          <SidebarHeader>JatBlog</SidebarHeader>
          <SidebarMenu>
            <SidebarItem icon={<HomeIcon />} text="Home" />
            <SidebarItem icon={<NewsIcon />} text="News" />
            <SidebarItem icon={<VideosIcon />} text="Videos" />
            <SidebarItem icon={<MusicIcon />} text="Music" />
            <SidebarItem icon={<ExamsIcon />} text="Exams" />
          </SidebarMenu>
        </SidebarBox>
      </Drawer>
    </>
  );
};

export default Sidebar;

