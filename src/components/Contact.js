import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Avatar,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const contactLinks = [
  {
    icon: <EmailIcon />,
    label: 'manjitha456@gmail.com',
    href: 'mailto:manjitha456@gmail.com',
    color: '#ea4335',
    bg: '#fce8e6',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/manjitha-kularatne',
    color: '#0a66c2',
    bg: '#e7f0fa',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub Profile',
    href: 'https://github.com/manjithadulana98',
    color: '#24292f',
    bg: '#f0f0f0',
  },
];

const Contact = () => (
  <Box
    sx={{
      padding: { xs: '1.5rem', md: '3rem' },
      maxWidth: '600px',
      margin: 'auto',
    }}
  >
    {/* Page Title */}
    <Typography
      variant="h4"
      sx={{ fontWeight: 800, mb: 1, textAlign: 'center' }}
    >
      Get in Touch
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ textAlign: 'center', mb: 5, maxWidth: 420, mx: 'auto' }}
    >
      Feel free to reach out for collaborations, questions, or just a chat
    </Typography>

    <Box sx={{ bgcolor: '#f0f4ff', borderRadius: 4, p: { xs: 2, md: 3.5 } }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
          <ConnectWithoutContactIcon />
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Connect
        </Typography>
      </Stack>

      <Stack spacing={1.5}>
        {contactLinks.map((link) => (
          <Card
            key={link.label}
            elevation={0}
            sx={{
              borderRadius: 2.5,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: '#ffffff',
              transition: 'all 0.25s',
              '&:hover': {
                borderColor: link.color,
                boxShadow: 2,
              },
            }}
          >
            <CardContent sx={{ py: 1.5, px: 2.5, '&:last-child': { pb: 1.5 } }}>
              <Button
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                fullWidth
                sx={{
                  textTransform: 'none',
                  justifyContent: 'flex-start',
                  gap: 2,
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  '&:hover': { bgcolor: 'transparent' },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: link.bg,
                    color: link.color,
                    width: 36,
                    height: 36,
                  }}
                >
                  {link.icon}
                </Avatar>
                {link.label}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  </Box>
);

export default Contact;
