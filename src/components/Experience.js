import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography, Box } from '@mui/material';

const Experience = () => (
  <Box sx={{ padding: '2rem' }}>
    <Typography variant="h4" gutterBottom>💼 Work Experience</Typography>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Jul 2023 – Present</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Research Engineer</Typography>
          <Typography>Synergen Technology Labs</Typography>
          <Typography variant="body2">
            ECG signal processing, noise filtering, arrhythmia detection<br />
            Skills: Python, MATLAB
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Sep 2020 – Aug 2021</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Trainee R&D Biomedical Engineer</Typography>
          <Typography>Effective Solutions</Typography>
          <Typography variant="body2">
            WiFi-based medical devices | MATLAB, Java, Python, React, Node.js
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </Box>
);

export default Experience;
