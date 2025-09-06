import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

// Utility to render project cards
const ProjectCard = ({ project }) => (
  <Card
    elevation={3}
    sx={{
      width: 280,
      height: '100%',
      mx: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 3,
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 6
      }
    }}
  >
    <CardContent>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
        {project.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {project.description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {project.tags.map((tag, i) => (
          <Chip key={i} label={tag} color="primary" size="small" />
        ))}
      </Box>
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
            fontWeight: 600,
            borderRadius: 2
          }}
        >
          View on GitHub
        </Button>
      </Box>
    )}
  </Card>
);

// Horizontal scrolling section
const ProjectSection = ({ title, image, projects }) => (
  <Box sx={{ mb: 6 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: 32, height: 32, marginRight: 12 }}
        />
      )}
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
    </Box>

    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        py: 2,
        px: 1,
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': { display: 'none' } // Chrome
      }}
    >
      {projects.map((project, index) => (
        <Box key={index} sx={{ flex: '0 0 auto' }}>
          <ProjectCard project={project} />
        </Box>
      ))}
    </Box>
  </Box>
);

// Main component
const Projects = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Notable Projects
      </Typography>

      {/* Categories */}
      <ProjectSection
        title="Medical AI & Bioinformatics"
        image="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
        projects={[
          {
            title: 'Fundus Hybrid Segmentation',
            description: 'Hybrid segmentation of retinal fundus images using deep learning techniques.',
            tags: ['Python', 'PyTorch', 'Image Processing'],
            github: 'https://github.com/manjithadulana98/fundus-hybrid-segmentation'
          },
          {
            title: 'Diabetes and Ocular Features',
            description: 'Deep learning analysis on fundus images to predict diabetes.',
            tags: ['Python', 'Keras'],
            github: ''
          },
          {
            title: 'Eye Strain Diagnosis',
            description: 'Smart glasses using embedded image processing for eye strain detection.',
            tags: ['Python', 'OpenCV', 'Embedded'],
            github: 'https://github.com/manjithadulana98/Screen_eye_guard'
          }
        ]}
      />

      <ProjectSection
        title="System & Cloud Engineering"
        image="https://cdn-icons-png.flaticon.com/512/3820/3820331.png"
        projects={[
          {
            title: 'SafEat POS System',
            description: 'IoT-powered smart restaurant solution with cloud backend.',
            tags: ['Node.js', 'React', 'Firebase'],
            github: 'https://github.com/manjithadulana98/safeat_IoT_platform'
          },
          {
            title: 'Distributed Content-Sharing Overlay (DC Project)',
            description: 'P2P overlay network for content sharing with bootstrap and flooding search.',
            tags: ['Python', 'Networking', 'UDP'],
            github: 'https://github.com/manjithadulana98/DC_project'
          }
        ]}
      />

      <ProjectSection
        title="Data Science & Simulation"
        image="https://cdn-icons-png.flaticon.com/512/4149/4149709.png"
        projects={[
          {
            title: 'Statistical Inference Project',
            description: 'Course project on statistical inference—data analysis & simulation.',
            tags: ['Python', 'Statistics'],
            github: 'https://github.com/manjithadulana98/Statistical-Inference-Project'
          },
          {
            title: 'Simulated Stock Market',
            description: 'Stock simulation using Markov chains with Python.',
            tags: ['Python', 'Simulation'],
            github: 'https://github.com/HariWicky/ABM'
          }
        ]}
      />

      <ProjectSection
        title="Signal Processing & DSP"
        image="https://cdn-icons-png.flaticon.com/512/850/850960.png"
        projects={[
          {
            title: 'FIR Digital Filter',
            description: 'Signal processing FIR filter implemented in MATLAB.',
            tags: ['MATLAB', 'DSP'],
            github: 'https://github.com/manjithadulana98/Signal_Processing'
          }
        ]}
      />

      <ProjectSection
        title="Software Tools"
        image="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
        projects={[
          {
            title: 'Code Compressor (Java)',
            description: 'A basic code compressor tool built using Java.',
            tags: ['Java'],
            github: 'https://github.com/manjithadulana98/Code-Compression'
          }
        ]}
      />
    </Box>
  );
};

export default Projects;
