import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
  Avatar,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import { Helmet } from 'react-helmet-async';

// Utility to render project cards
const ProjectCard = ({ project }) => (
  <Card
    elevation={0}
    sx={{
      width: 280,
      height: '100%',
      mx: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 2.5,
      border: '1px solid',
      borderColor: 'divider',
      transition: 'all 0.25s',
      '&:hover': {
        borderColor: 'primary.light',
        transform: 'translateY(-4px)',
        boxShadow: 4,
      },
    }}
  >
    <CardContent sx={{ p: 2.5 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
        {project.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2, lineHeight: 1.65 }}
      >
        {project.description}
      </Typography>
      <Stack direction="row" flexWrap="wrap" useFlexGap spacing={0.75}>
        {project.tags.map((tag, i) => (
          <Chip
            key={i}
            label={tag}
            size="small"
            sx={{
              fontSize: '0.7rem',
              fontWeight: 600,
              bgcolor: '#e3eafc',
              color: '#1a3e8a',
              borderRadius: 2,
            }}
          />
        ))}
      </Stack>
    </CardContent>

    {project.github && (
      <Box sx={{ px: 2.5, pb: 2 }}>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href={project.github}
          target="_blank"
          fullWidth
          size="small"
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 2,
            borderColor: 'divider',
            color: 'text.primary',
            '&:hover': {
              borderColor: 'primary.main',
              bgcolor: '#f0f4ff',
            },
          }}
        >
          View on GitHub
        </Button>
      </Box>
    )}
  </Card>
);

// Horizontal scrolling section
const ProjectSection = ({ title, projects }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="subtitle1"
      sx={{
        fontWeight: 700,
        mb: 1.5,
        pl: 0.5,
        color: 'primary.main',
      }}
    >
      {title}
    </Typography>

    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        py: 1,
        px: 0.5,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
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
    <>
      <Helmet>
        <title>Projects | Manjitha Kularatne</title>
        <meta name="description" content="Notable projects by Manjitha Kularatne including ECG signal processing, medical imaging AI, healthcare machine learning, and biomedical engineering research." />
        <link rel="canonical" href="https://manjithadulana98.github.io/projects" />
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
        Notable Projects
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ textAlign: 'center', mb: 5, maxWidth: 520, mx: 'auto' }}
      >
        A selection of academic and personal projects across domains
      </Typography>

      <Box
        sx={{
          bgcolor: '#f7f7f7',
          borderRadius: 4,
          p: { xs: 2, md: 3.5 },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
            <CodeIcon />
          </Avatar>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Project Portfolio
          </Typography>
        </Stack>

        {/* Categories */}
        <ProjectSection
          title="Medical AI & Bioinformatics"
          projects={[
            {
              title: 'Fundus Hybrid Segmentation',
              description:
                'Hybrid segmentation of retinal fundus images using deep learning techniques.',
              tags: ['Python', 'PyTorch', 'Image Processing'],
              github:
                'https://github.com/manjithadulana98/fundus-hybrid-segmentation',
            },
            {
              title: 'Diabetes and Ocular Features',
              description:
                'Deep learning analysis on fundus images to predict diabetes.',
              tags: ['Python', 'Keras'],
              github: '',
            },
            {
              title: 'Eye Strain Diagnosis',
              description:
                'Smart glasses using embedded image processing for eye strain detection.',
              tags: ['Python', 'OpenCV', 'Embedded'],
              github:
                'https://github.com/manjithadulana98/Screen_eye_guard',
            },
          ]}
        />

        <ProjectSection
          title="System & Cloud Engineering"
          projects={[
            {
              title: 'SafEat POS System',
              description:
                'IoT-powered smart restaurant solution with cloud backend.',
              tags: ['Node.js', 'React', 'Firebase'],
              github:
                'https://github.com/manjithadulana98/safeat_IoT_platform',
            },
            {
              title: 'Distributed Content-Sharing Overlay',
              description:
                'P2P overlay network for content sharing with bootstrap and flooding search.',
              tags: ['Python', 'Networking', 'UDP'],
              github: 'https://github.com/manjithadulana98/DC_project',
            },
          ]}
        />

        <ProjectSection
          title="Data Science & Simulation"
          projects={[
            {
              title: 'Statistical Inference Project',
              description:
                'Course project on statistical inference—data analysis & simulation.',
              tags: ['Python', 'Statistics'],
              github:
                'https://github.com/manjithadulana98/Statistical-Inference-Project',
            },
            {
              title: 'Simulated Stock Market',
              description:
                'Stock simulation using Markov chains with Python.',
              tags: ['Python', 'Simulation'],
              github: 'https://github.com/HariWicky/ABM',
            },
          ]}
        />

        <ProjectSection
          title="Signal Processing & DSP"
          projects={[
            {
              title: 'FIR Digital Filter',
              description:
                'Signal processing FIR filter implemented in MATLAB.',
              tags: ['MATLAB', 'DSP'],
              github:
                'https://github.com/manjithadulana98/Signal_Processing',
            },
          ]}
        />

        <ProjectSection
          title="Software Tools"
          projects={[
            {
              title: 'Code Compressor (Java)',
              description: 'A basic code compressor tool built using Java.',
              tags: ['Java'],
              github:
                'https://github.com/manjithadulana98/Code-Compression',
            },
          ]}
        />
      </Box>
    </Box>
    </>
  );
};

export default Projects;
