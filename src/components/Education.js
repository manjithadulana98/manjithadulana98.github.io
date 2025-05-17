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

const Education = () => (
  <Box sx={{ padding: '2rem' }}>
    <Typography variant="h4" gutterBottom>📘 Education</Typography>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2025 – Present</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">M.Sc. in Data Science & AI</Typography>
          <Typography>University of Moratuwa</Typography>
          <Typography variant="body2">Big Data Technologies</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2018 – 2023</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">B.Sc. in Biomedical Engineering</Typography>
          <Typography>University of Moratuwa</Typography>
          <Typography variant="body2">
            GPA: 3.57 | Minor in Entrepreneurship | Dean’s List (Sem 4 & 6)
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2004 – 2017</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">St. Peter’s College</Typography>
          <Typography>Colombo 04</Typography>
          <Typography variant="body2">Z-Score: 2.083 | Island Rank: 319</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </Box>
);

export default Education;
