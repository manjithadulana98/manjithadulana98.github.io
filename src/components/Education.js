import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import {
  Typography,
  Box,
  Chip,
  Stack,
  Avatar,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Helmet } from 'react-helmet-async';

const education = [
  {
    title: 'Master of Science - M.Sc, Data Science and Artificial Intelligence',
    institution: 'University of Moratuwa',
    years: 'Jan 2025 – Dec 2026',
    badge: 'Ongoing',
    description:
      'Postgraduate coursework and research in advanced AI, big data platforms, distributed computing, and cloud systems. Emphasis on statistical modeling, deep learning, and scalable architectures for AI.',
  },
  {
    title: 'B.Sc. in Biomedical Engineering',
    institution: 'University of Moratuwa',
    years: '2018 – 2023',
    badge: null,
    description:
      "Focused on biosignal analysis, medical imaging, embedded systems, and biomedical instrumentation. Completed capstone project in signal-based diagnostics. Earned Dean's List recognition for academic excellence.",
  },
  {
    title: 'School Education',
    institution: "St. Peter's College, Colombo 04",
    years: '2004 – 2017',
    badge: null,
    description:
      'Completed G.C.E. A/Ls in the Physical Science stream with a strong academic profile and national rank of 319.',
  },
];

const academicStrengths = [
  {
    label: 'Biomedical Engineering & Signal Processing',
    skills: [
      'Biosignal Processing',
      'Medical Imaging',
      'Medical Instrumentation',
      'Anatomy & Physiology',
      'Digital Signal Processing',
    ],
  },
  {
    label: 'Artificial Intelligence & Data Science',
    skills: [
      'Advanced AI',
      'Pattern Recognition',
      'Machine Intelligence',
      'Statistical Inference',
      'Big Data Analytics',
      'Cloud Platforms',
      'Neural Networks',
    ],
  },
  {
    label: 'Electronics & Embedded Systems',
    skills: [
      'Embedded Systems',
      'IoT',
      'Robotics',
      'Control Systems',
      'Circuit Design',
    ],
  },
  {
    label: 'Mathematics & Computational Foundations',
    skills: [
      'Linear Algebra',
      'Calculus',
      'Time Series Analysis',
      'Differential Equations',
      'Applied Statistics',
    ],
  },
  {
    label: 'Business & Innovation',
    skills: [
      'Entrepreneurship',
      'Financial Accounting',
      'Engineering Economics',
      'Business Plan Development',
    ],
  },
];

const Education = () => (
  <>
    <Helmet>
      <title>Education | Manjitha Kularatne</title>
      <meta name="description" content="Academic background of Manjitha Kularatne - M.Sc in Data Science & AI at University of Moratuwa, B.Sc in Biomedical Engineering. Education timeline and coursework." />
      <link rel="canonical" href="https://manjithadulana98.github.io/education" />
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
      Education
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ textAlign: 'center', mb: 5, maxWidth: 520, mx: 'auto' }}
    >
      Academic background and key areas of expertise
    </Typography>

    {/* ── Education Timeline ── */}
    <Box
      sx={{
        bgcolor: '#f0f4ff',
        borderRadius: 4,
        p: { xs: 2, md: 3.5 },
        mb: 5,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
          <SchoolIcon />
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Academic Journey
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
        {education.map((edu, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{ fontSize: '0.85rem', pt: 2 }}
            >
              {edu.years}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: 'primary.main',
                  boxShadow: '0 0 0 4px #e3eafc',
                }}
              />
              {idx < education.length - 1 && (
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
                  {edu.badge && (
                    <Chip
                      label={edu.badge}
                      color="primary"
                      size="small"
                      sx={{ fontWeight: 600, mb: 1, fontSize: '0.7rem', height: 22 }}
                    />
                  )}
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.4 }}>
                    {edu.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary.main"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {edu.description}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>

    {/* ── Key Academic Strengths ── */}
    <Box sx={{ bgcolor: '#f7f7f7', borderRadius: 4, p: { xs: 2, md: 3.5 } }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
          <AutoStoriesIcon />
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Key Academic Strengths
        </Typography>
      </Stack>

      <Grid container spacing={2}>
        {academicStrengths.map((area, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: 2.5,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: '#ffffff',
                transition: 'all 0.25s',
                '&:hover': { borderColor: 'primary.light', boxShadow: 2 },
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}
                >
                  {area.label}
                </Typography>
                <Stack direction="row" flexWrap="wrap" useFlexGap spacing={0.75}>
                  {area.skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: '0.72rem',
                        borderRadius: 2,
                        borderColor: '#d0d7de',
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
  </>
);

export default Education;
