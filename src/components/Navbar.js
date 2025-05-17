// src/components/Navbar.js
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Volunteering', path: '/volunteering' },
  { label: 'Contact', path: '/contact' }
];

const Navbar = () => (
  <AppBar position="sticky" color="default" elevation={1}>
    <Toolbar>
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
        {navItems.map(({ label, path }) => (
          <Button
            key={label}
            component={RouterLink}
            to={path}
            sx={{ textTransform: 'none', fontWeight: 500, color: 'black' }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
