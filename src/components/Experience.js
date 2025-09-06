import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';
import { Typography, Box, Paper } from '@mui/material';

const experiences = [
  {
    role: 'Research Engineer',
    company: 'Synergen Technology Labs (Pvt) Ltd',
    duration: 'Jul 2023 – Present',
    location: 'On-site',
    description: `Contributed to AI-assisted ECG annotation systems, clinician variability studies, and statistical analysis protocols.
Supported validation for FDA SaMD compliance and helped generate visual reports and clinical summaries.`,
    skills: ['ECG Processing', 'Python', 'MATLAB', 'Statistics', 'FDA Compliance']
  },
  {
    role: 'Trainee R&D Biomedical Engineer',
    company: 'Effective Solutions (Pvt) Ltd',
    duration: 'Jan 2022 – Jul 2022',
    location: 'Sri Lanka',
    description: `Assisted in developing a vascular monitoring system for the Jendo project.
Built ESP32 Wi-Fi config system, implemented Wavelet-based filtering in backend, and improved Flutter app data quality.`,
    skills: ['Flutter', 'ESP32', 'Python', 'Java', 'Wavelet Filtering']
  }
];

const Experience = () => (
  <Box sx={{ padding: { xs: '1rem', md: '3rem' }, maxWidth: '1000px', margin: 'auto' }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main' }}>
      Work Experience
    </Typography>
    <Timeline position="alternate">
      {experiences.map((exp, idx) => (
        <TimelineItem key={idx}>
          <TimelineOppositeContent color="text.secondary">
            {exp.duration}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {idx !== experiences.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ padding: '1rem', backgroundColor: '#fafafa' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {exp.role}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {exp.company}
              </Typography>
              <Typography variant="body2" paragraph>
                {exp.description}
              </Typography>
              {exp.skills && (
                <Typography variant="caption" color="text.secondary">
                  Skills: {exp.skills.join(', ')}
                </Typography>
              )}
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);

export default Experience;
