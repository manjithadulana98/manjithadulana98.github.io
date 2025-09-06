import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography, Box, Divider, Paper } from '@mui/material';

const StyledPaper = ({ title, institution, years, children }) => (
  <Paper elevation={3} sx={{
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: 2,
    borderLeft: '6px solid #3f51b5',
  }}>
    <Typography variant="subtitle2" color="text.secondary" mb={0.5}>
      {years}
    </Typography>
    <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
    <Typography variant="subtitle1" sx={{ mb: 1 }}>{institution}</Typography>
    <Typography variant="body2">{children}</Typography>
  </Paper>
);

const BulletSection = ({ label, content }) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', mb: 0.5 }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ pl: 1 }}>{content}</Typography>
  </Box>
);

const Education = () => (
  <Box sx={{ padding: { xs: '1rem', md: '3rem' }, maxWidth: '1000px', margin: 'auto' }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: 'primary.main' }}>
      Education
    </Typography>

    {/* Education Timeline */}
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2025 – Present</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper
            title="M.Sc. in Data Science & Artificial Intelligence"
            institution="University of Moratuwa"
            years="2025 – Present"
          >
            Postgraduate coursework and research in advanced AI, big data platforms, distributed computing, and cloud systems. Emphasis on statistical modeling, deep learning, and scalable architectures for AI.
          </StyledPaper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2018 – 2023</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper
            title="B.Sc. in Biomedical Engineering"
            institution="University of Moratuwa"
            years="2018 – 2023"
          >
            Focused on biosignal analysis, medical imaging, embedded systems, and biomedical instrumentation. Completed capstone project in signal-based diagnostics. Earned Dean's List recognition for academic excellence.
          </StyledPaper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">2004 – 2017</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper
            title="School Education"
            institution="St. Peter’s College, Colombo 04"
            years="2004 – 2017"
          >
            Completed G.C.E. A/Ls in the Physical Science stream with a strong academic profile and national rank of 319.
          </StyledPaper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

    <Divider sx={{ my: 5 }} />

    {/* Highlighted Focus Areas */}
    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 3 }}>
      Key Academic Strengths
    </Typography>

    <BulletSection
      label="Biomedical Engineering & Signal Processing"
      content="Biosignal Processing, Medical Imaging, Medical Instrumentation, Anatomy & Physiology, Digital Signal Processing"
    />
    <BulletSection
      label="Artificial Intelligence & Data Science"
      content="Advanced AI, Pattern Recognition, Machine Intelligence, Statistical Inference, Big Data Analytics, Cloud Platforms, Neural Networks"
    />
    <BulletSection
      label="Electronics & Embedded Systems"
      content="Embedded Systems, IoT, Robotics, Control Systems, Circuit Design, Electronics I–III"
    />
    <BulletSection
      label="Mathematics & Computational Foundations"
      content="Linear Algebra, Calculus, Time Series Analysis, Differential Equations, Applied Statistics"
    />
    <BulletSection
      label="Business & Innovation"
      content="Entrepreneurship, Financial Accounting, Engineering Economics, Business Plan Development"
    />
  </Box>
);

export default Education;
