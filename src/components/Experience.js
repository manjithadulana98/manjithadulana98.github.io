import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const experiences = [
  {
    role: 'Research Engineer',
    company: 'Synergen Technology Labs (Pvt) Ltd',
    duration: 'Jul 2023 – Present',
    location: 'On-site',
    description: `Contributed to AI-assisted ECG annotation systems, clinician variability studies, and statistical analysis protocols. Supported validation for FDA SaMD compliance and helped generate visual reports and clinical summaries.`,
    skills: ['ECG Processing', 'Python', 'MATLAB', 'Statistics', 'FDA Compliance']
  },
  {
    role: 'Trainee R&D Biomedical Engineer',
    company: 'Effective Solutions (Pvt) Ltd',
    duration: 'Jan 2022 – Jul 2022',
    location: 'Sri Lanka',
    description: `Assisted in developing a vascular monitoring system for the Jendo project. Built ESP32 Wi-Fi config system, implemented Wavelet-based filtering in backend, and improved Flutter app data quality.`,
    skills: ['Flutter', 'ESP32', 'Python', 'Java', 'Wavelet Filtering']
  }
];

const Experience = () => (
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
      Work Experience
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ textAlign: 'center', mb: 5, maxWidth: 520, mx: 'auto' }}
    >
      Professional roles in biomedical engineering and AI research
    </Typography>

    <Box
      sx={{
        bgcolor: '#f0f4ff',
        borderRadius: 4,
        p: { xs: 2, md: 3.5 },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
          <WorkIcon />
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Career Timeline
        </Typography>
      </Stack>

      <Timeline
        position="alternate"
        sx={{
          p: 0,
          '& .MuiTimelineOppositeContent-root': {
            flex: { xs: 0.3, md: 0.4 },
          },
        }}
      >
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{ fontSize: '0.85rem', pt: 2 }}
            >
              {exp.duration}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: 'primary.main',
                  boxShadow: '0 0 0 4px #e3eafc',
                }}
              />
              {idx !== experiences.length - 1 && (
                <TimelineConnector sx={{ bgcolor: 'primary.light' }} />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ pb: 4 }}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 2.5,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: '#ffffff',
                  transition: 'all 0.25s',
                  '&:hover': {
                    borderColor: 'primary.light',
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {exp.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary.main"
                    sx={{ fontWeight: 600, mb: 0.5 }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', mb: 1.5 }}
                  >
                    {exp.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7, mb: 2, whiteSpace: 'pre-line' }}
                  >
                    {exp.description}
                  </Typography>
                  {exp.skills && (
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      useFlexGap
                      spacing={0.75}
                    >
                      {exp.skills.map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: '0.72rem',
                            borderRadius: 2,
                            borderColor: 'primary.light',
                            color: 'primary.dark',
                          }}
                        />
                      ))}
                    </Stack>
                  )}
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  </Box>
);

export default Experience;
