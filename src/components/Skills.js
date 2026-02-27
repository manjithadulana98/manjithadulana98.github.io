import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Avatar,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import { Helmet } from 'react-helmet-async';

const skills = [
  {
    title: 'Languages & Tools',
    list: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    ],
  },
  {
    title: 'Industry Tools',
    list: [
      { name: 'SolidWorks', icon: 'https://img.icons8.com/color/48/solidworks.png' },
      { name: 'EasyEDA', icon: 'https://easyeda.com/favicon.ico' },
      { name: 'Altium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original.svg' },
      { name: 'LTspice', icon: 'https://img.icons8.com/fluency/48/circuit.png' },
      { name: 'Power BI', icon: 'https://img.icons8.com/color/48/power-bi.png' },
      { name: 'NI Multisim', icon: 'https://img.icons8.com/fluency/48/electronics.png' },
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
      { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
    ],
  },
  {
    title: 'Soft Skills',
    list: [
      { name: 'Teamwork', icon: 'https://cdn-icons-png.flaticon.com/512/3771/3771435.png' },
      { name: 'Time Management', icon: 'https://cdn-icons-png.flaticon.com/512/5358/5358780.png' },
      { name: 'Documentation', icon: 'https://cdn-icons-png.flaticon.com/512/3145/3145765.png' },
      { name: 'Problem-Solving', icon: 'https://cdn-icons-png.flaticon.com/512/1040/1040230.png' },
      { name: 'Presentation', icon: 'https://cdn-icons-png.flaticon.com/512/1685/1685369.png' },
      { name: 'Leadership', icon: 'https://cdn-icons-png.flaticon.com/512/1040/1040214.png' },
    ],
  },
];

const Skills = () => (
  <>
    <Helmet>
      <title>Skills | Manjitha Kularatne</title>
      <meta name="description" content="Technical skills of Manjitha Kularatne - Python, JavaScript, MATLAB, React, Machine Learning, Deep Learning, biosignal processing, and more." />
      <link rel="canonical" href="https://manjithadulana98.github.io/skills" />
    </Helmet>
  <Box
    sx={{
      padding: { xs: '1.5rem', md: '3rem' },
      maxWidth: '1000px',
      margin: 'auto',
    }}
  >
    {/* Page Title */}
    <Typography
      variant="h4"
      sx={{ fontWeight: 800, mb: 1, textAlign: 'center' }}
    >
      Skills
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ textAlign: 'center', mb: 5, maxWidth: 520, mx: 'auto' }}
    >
      Technical proficiencies, industry tools, and interpersonal strengths
    </Typography>

    <Box sx={{ bgcolor: '#f7f7f7', borderRadius: 4, p: { xs: 2, md: 3.5 } }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
          <BuildIcon />
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Skill Set
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {skills.map((category, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: 2.5,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: '#ffffff',
                transition: 'all 0.25s',
                '&:hover': { borderColor: 'primary.light', boxShadow: 2 },
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}
                >
                  {category.title}
                </Typography>
                <Grid container spacing={1.5}>
                  {category.list.map((skill, i) => (
                    <Grid
                      item
                      xs={6}
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      {skill.icon && (
                        <CardMedia
                          component="img"
                          image={skill.icon}
                          alt={skill.name}
                          sx={{
                            width: 22,
                            height: 22,
                            objectFit: 'contain',
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <Typography
                        variant="body2"
                        sx={{ fontSize: '0.8rem', lineHeight: 1.3 }}
                      >
                        {skill.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
  </>
);

export default Skills;
