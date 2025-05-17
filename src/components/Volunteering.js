import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

// Importing local logo files
import ieeeEMBSSriLankaLogo from './logos/EMBS_SL.jpg'; // reused if same logo
import ieeeEMBSMoratuwaLogo from './logos/EMBS_UOM.jpg'; // reused if same logo
import ypLogo from './logos/IEEE_YP.jpg';

const volunteering = [
  {
    title: 'IEEE EMBS Sri Lanka',
    logo: ieeeEMBSSriLankaLogo,
    roles: [
      { role: 'Webmaster', year: '2025 – Now' }
    ]
  },
  {
    title: 'IEEE EMBS Moratuwa',
    logo: ieeeEMBSMoratuwaLogo,
    roles: [
      { role: 'Chairperson – Brainstorm 2023', year: '2023' },
      { role: 'Vice Chair – Brainstorm 2021', year: '2021' },
      { role: 'Founder – Medi-Engi collaboration', year: '2021' }
    ]
  },
  {
    title: 'IEEE Young Professionals',
    logo: ypLogo,
    roles: [
      { role: 'Webmaster – StudPro 5.0', year: '2022' },
      { role: 'Industry Lead – Y2NPro', year: '2022' }
    ]
  }
];

const Volunteering = () => (
  <Box sx={{ padding: '2rem' }}>
    <Typography variant="h4" gutterBottom>
      🤝 Volunteering
    </Typography>
    <Grid container spacing={4}>
      {volunteering.map((item, idx) => (
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
            <CardMedia
              component="img"
              image={item.logo}
              alt={`${item.title} logo`}
              sx={{
                width: 200,
                height: 200,
                objectFit: 'contain',
                margin: '1rem auto 0'
              }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary" align="center">
                {item.title}
              </Typography>
              <List dense disablePadding>
                {item.roles.map((entry, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemText
                      primary={entry.role}
                      secondary={entry.year}
                      primaryTypographyProps={{ variant: 'body2' }}
                      secondaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Volunteering;
