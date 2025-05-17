import { Box, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => (
  <Box sx={{ padding: '2rem' }}>
    <Typography variant="h4" gutterBottom>
      🌐 Connect with Me
    </Typography>
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8}>
        <Card elevation={3} sx={{ borderRadius: 3, textAlign: 'center', padding: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Feel free to reach out through any of the following platforms:
            </Typography>
            <Stack direction="column" spacing={2} alignItems="center" mt={3}>
              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                href="mailto:manjitha456@gmail.com"
                size="large"
              >
                manjitha456@gmail.com
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                href="https://linkedin.com/in/manjitha-kularatne"
                target="_blank"
                size="large"
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href="https://github.com/manjithadulana98"
                target="_blank"
                size="large"
              >
                GitHub
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default Contact;
