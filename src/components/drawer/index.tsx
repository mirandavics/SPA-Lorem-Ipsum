import React from 'react';
import {
  Divider,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Box,
  AppBar,
  IconButton,
  Drawer as DrawerMui,
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import logo from '../../assets/images/whiteLogo.svg';
import { devices } from '../../assets/devices';

type LinkProps = {
  title: string;
  action: () => void;
};

type innerRefs = {
  refs: {
    refAboutUs: React.RefObject<HTMLInputElement>;
    refServices: React.RefObject<HTMLInputElement>;
    refContact: React.RefObject<HTMLInputElement>;
  };
};

const Drawer = (inner: innerRefs) => {
  const { refs } = inner;
  const { refAboutUs, refServices, refContact } = refs;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const scrollSmoothHandler = (ref: any) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const links = [
    {
      title: 'SERVICES',
      action: () => {
        scrollSmoothHandler(refServices);
      },
    },
    {
      title: 'ABOUT',
      action: () => {
        scrollSmoothHandler(refAboutUs);
      },
    },
    {
      title: 'CONTACT',
      action: () => {
        scrollSmoothHandler(refContact);
      },
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerList = (
    <List
      sx={{
        [devices.desktop]: {
          display: 'flex',
          justifyContent: 'space-between',
        },
      }}
    >
      {links.map((link: LinkProps) => (
        <ListItem key={link.title} disablePadding>
          <ListItemButton onClick={link.action}>
            <ListItemText primary={link.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const drawer = (
    <Box padding={4}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="end"
          onClick={handleDrawerToggle}
        >
          <Close />
        </IconButton>
      </Toolbar>
      <Divider />

      {drawerList}
    </Box>
  );

  return (
    <>
      <AppBar sx={{ boxShadow: 'none', padding: 2 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box width="auto">
            <img src={logo} alt="Lorem ipsum logo" style={{ width: 144 }} />
          </Box>

          <Box
            sx={{
              mr: 2,
              [devices.mobile]: {
                display: 'none',
              },
            }}
          >
            {drawerList}
          </Box>

          <Box
            sx={{
              mr: 2,
              [devices.desktop]: {
                display: 'none',
              },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <DrawerMui
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="top"
        sx={{
          [devices.desktop]: {
            display: 'none',
          },
        }}
      >
        {drawer}
      </DrawerMui>
    </>
  );
};

export default Drawer;
