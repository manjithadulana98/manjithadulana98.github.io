import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const projectList = [
  {
    title: 'Diabetes and Ocular Features',
    description: 'Deep learning analysis on fundus images to predict diabetes.',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    github: ''
  },
  {
    title: 'SafEat POS System',
    description: 'IoT-powered smart restaurant solution with cloud backend.',
    image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
    github: 'https://github.com/manjithadulana98/safeat_IoT_platform'
  },
  {
    title: 'Eye Strain Diagnosis',
    description: 'Smart glasses using embedded image processing for eye strain detection.',
    image: 'https://cdn-icons-png.flaticon.com/512/3784/3784266.png',
    github: 'https://github.com/manjithadulana98/Screen_eye_guard'
  },
  {
    title: 'FIR Digital Filter',
    description: 'Signal processing FIR filter implemented in MATLAB.',
    image: 'https://cdn-icons-png.flaticon.com/512/3513/3513516.png',
    github: 'https://github.com/manjithadulana98/Signal_Processing'
  },
  {
    title: 'Code Compressor (Java)',
    description: 'A basic code compressor tool built using Java.',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    github: 'https://github.com/manjithadulana98/Code-Compression'
  },
  {
    title: 'Simulated Stock Market',
    description: 'Stock simulation using Markov chains with Python.',
    image: 'https://cdn-icons-png.flaticon.com/512/2620/2620733.png',
    github: 'https://github.com/HariWicky/ABM'
  }
];

const Projects = () => {
  return (
    <Box sx={{ padding: '2rem', bottomMargin: '5rem' }}>
      <Typography variant="h4" gutterBottom>
        💡 Notable Projects
      </Typography>
      <Grid container spacing={4}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              elevation={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                borderRadius: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6
                }
              }}
            >
              {project.image && (
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    height: 160,
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1, px: 2, pt: 2, pb: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              {project.github && (
                <Box sx={{ px: 2, pb: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    fullWidth
                    sx={{
                      textTransform: 'none',
                      fontWeight: 'bold',
                      borderRadius: 2
                    }}
                  >
                    View on GitHub
                  </Button>
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
