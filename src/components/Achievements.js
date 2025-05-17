import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const achievements = [
  {
    title: 'Thinkwave 4.0 – Runners Up',
    description: 'Eye screening system development'
  },
  {
    title: 'Brainwave 2021 – 4th Place',
    description: 'Tech competition for innovative solutions'
  },
  {
    title: 'IEEE Electronic Design Competition – Runners Up',
    description: 'Electronic hardware and software integration'
  },
  {
    title: 'Maestro 2.0 & 3.0 – Semi-Finalist',
    description: 'Tech hackathon organized by IESL and KDU'
  },
  {
    title: 'Hackfest KDU – Semi-Finalist',
    description: 'Hackathon challenge event hosted by KDU'
  }
];

const Achievements = () => (
  <Box sx={{ padding: '2rem' }}>
    <Typography variant="h4" gutterBottom>
      🏆 Achievements
    </Typography>
    <Grid container spacing={4}>
      {achievements.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex' }}>
          <Card
            elevation={3}
            sx={{
              flexGrow: 1,
              borderRadius: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'left',
              padding: 2,
              width: '100%',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: 6
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Achievements;
