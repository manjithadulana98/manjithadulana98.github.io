import { Box, Typography, Avatar, Tooltip, Stack, Chip } from '@mui/material';
import { ReactTyped } from 'react-typed';
import { Helmet } from 'react-helmet-async';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Icon list
const techIcons = [
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'MATLAB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Flutter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Arduino', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'Neo4j', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Neo4j-logo2024color.png' },
  { name: 'Spark', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
  { name: 'LaTeX', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg' }
];

const socialLinks = [
  { icon: <EmailIcon sx={{ fontSize: 18 }} />, label: 'Email', href: 'mailto:manjitha456@gmail.com' },
  { icon: <LinkedInIcon sx={{ fontSize: 18 }} />, label: 'LinkedIn', href: 'https://linkedin.com/in/manjitha-kularatne' },
  { icon: <GitHubIcon sx={{ fontSize: 18 }} />, label: 'GitHub', href: 'https://github.com/manjithadulana98' },
];

const Header = () => {
  return (
    <>
      <Helmet>
        <title>Manjitha Kularatne | Biomedical Engineer & Data Scientist</title>
        <meta name="description" content="Manjitha Kularatne - Biomedical Engineer, Data Scientist, and AI Researcher specializing in biosignal processing, medical imaging, and AI solutions for healthcare." />
        <link rel="canonical" href="https://manjithadulana98.github.io/" />
      </Helmet>
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: { xs: '2rem 1.5rem', md: '3rem' },
        boxSizing: 'border-box',
        maxWidth: '800px',
        mx: 'auto',
      }}
    >
      {/* Profile Section */}
      <Avatar
        alt="Manjitha Kularatne"
        src="/profile.jpg"
        sx={{
          width: { xs: 160, md: 200 },
          height: { xs: 160, md: 200 },
          boxShadow: '0 8px 32px rgba(63, 81, 181, 0.18)',
          border: '4px solid #fff',
          mb: 3,
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '1.8rem', md: '2.6rem' },
          mb: 1,
        }}
      >
        Manjitha Kularatne
      </Typography>

      <Typography
        variant="h5"
        color="primary.main"
        sx={{
          fontWeight: 500,
          fontSize: { xs: '1.1rem', md: '1.4rem' },
          mb: 2,
          minHeight: '2rem',
        }}
      >
        <ReactTyped
          strings={[
            'Biomedical Engineer',
            'Data Scientist',
            'AI Enthusiast',
            'ECG Signal Expert',
            'Researcher',
            'React Developer',
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: 560,
          lineHeight: 1.75,
          mb: 3,
          fontSize: { xs: '0.9rem', md: '1rem' },
        }}
      >
        I specialize in biosignal processing and AI solutions for healthcare.
        Currently a Research Engineer at Synergen Technology Labs and a
        postgraduate student in Data Science & AI at University of Moratuwa.
      </Typography>

      {/* Social Chips */}
      <Stack direction="row" spacing={1} sx={{ mb: 5 }}>
        {socialLinks.map((s) => (
          <Chip
            key={s.label}
            icon={s.icon}
            label={s.label}
            component="a"
            href={s.href}
            target={s.label !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            clickable
            variant="outlined"
            sx={{
              fontWeight: 500,
              borderColor: 'divider',
              '&:hover': { borderColor: 'primary.main', bgcolor: '#f0f4ff' },
            }}
          />
        ))}
      </Stack>

      {/* Tech Icon Grid */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 2, md: 3 },
          maxWidth: 700,
        }}
      >
        {techIcons.map((icon) => (
          <Tooltip key={icon.name} title={icon.name} arrow>
            <Box
              component="img"
              src={icon.src}
              alt={icon.name}
              sx={{
                width: { xs: 40, md: 52 },
                height: { xs: 40, md: 52 },
                objectFit: 'contain',
                opacity: 0.45,
                transition: 'transform 0.3s, opacity 0.3s',
                '&:hover': {
                  transform: 'scale(1.3)',
                  opacity: 1,
                },
              }}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
    </>
  );
};

export default Header;
