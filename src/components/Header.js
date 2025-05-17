import { Box, Typography, Avatar, useTheme, Tooltip } from '@mui/material';
import { ReactTyped } from 'react-typed';

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

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Profile Section */}
      <Box
        sx={{
          maxWidth: '650px',
          padding: '1.5rem',
          backdropFilter: 'blur(4px)',
          borderRadius: '12px',
          marginBottom: '2rem',
        }}
      >
        <Avatar
          alt="Manjitha Kularatne"
          src="/profile.jpg"
          sx={{ width: 280, height: 280, boxShadow: 4, mx: 'auto', mb: 3 }}
        />
        <Typography variant="h3" fontWeight="bold">
          Hi, I'm Manjitha Kularatne
        </Typography>
        <Typography variant="h5" color="text.secondary">
          <ReactTyped
            strings={[
              'Biomedical Engineer',
              'Data Scientist',
              'AI Enthusiast',
              'ECG Signal Expert',
              'React Developer'
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </Typography>
        <Typography variant="body1" mt={3}>
          I specialize in biosignal processing and AI solutions for healthcare. Currently a Research Engineer at Synergen Technology Labs and a postgraduate student in Data Science & AI at University of Moratuwa.
        </Typography>
      </Box>

      {/* Icon Grid Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))',
          gap: 3,
          width: '100%',
          justifyItems: 'center',
        }}
      >
        {techIcons.map((icon) => (
          <Tooltip key={icon.name} title={icon.name}>
            <Box
              component="img"
              src={icon.src}
              alt={icon.name}
              sx={{
                width: 70,
                height: 70,
                objectFit: 'contain',
                opacity: 0.6,
                transition: 'transform 0.3s, opacity 0.3s',
                '&:hover': {
                  transform: 'scale(1.2)',
                  opacity: 1,
                }
              }}
            />
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
