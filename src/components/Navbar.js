// src/components/Navbar.js
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      elevation={0} // remove shadow
      sx={{
        backgroundColor: '#ffffff', // match the page background exactly
        // borderBottom: '1px solid #e0e0e0' // optional subtle border
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: { xs: 0.5, sm: 1.5, md: 3 },
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            '&::-webkit-scrollbar': { height: 0 },
            scrollbarWidth: 'none',
          }}
        >
          {navItems.map(({ label, path }) => (
            <Button
              key={label}
              component={RouterLink}
              to={path}
              sx={{
                textTransform: 'none',
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.875rem' },
                minWidth: 'auto',
                px: { xs: 1, sm: 1.5, md: 2 },
                fontWeight: location.pathname === path ? 700 : 400,
                color: location.pathname === path ? 'primary.main' : 'text.primary',
                borderBottom: location.pathname === path ? '2px solid' : '2px solid transparent',
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'transparent',
                  borderBottomColor: 'primary.main'
                }
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
