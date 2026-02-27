import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StorageIcon from '@mui/icons-material/Storage';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';
import StarIcon from '@mui/icons-material/Star';
import { Helmet } from 'react-helmet-async';

// Importing local logos
import ieeeEMBSMoratuwaLogo from './logos/EMBS_UOM.jpg';
import ieeeEMBSSriLankaLogo from './logos/EMBS_SL.jpg';
import ypLogo from './logos/IEEE_YP.jpg';

/* ─── DATA ─── */

const publications = [
  {
    type: 'Dataset',
    title:
      'Conjunctival and Retinal Images of Healthy Subjects and Subjects with Diabetes',
    venue: 'IEEE DataPort',
    date: 'Apr 23, 2025',
    link: 'https://ieee-dataport.org/documents/conjunctival-and-retinal-images-healthy-subjects-and-subjects-diabetes',
    description:
      'This dataset includes conjunctival and retinal images collected from both diabetic and healthy individuals to support research on diabetes-related vascular changes. For each subject, eight conjunctival images (four per eye: looking left, right, up, and down) are provided. Subjects with diabetes additionally have corresponding left and right retinal fundus images. A subset of 20 conjunctival images has been manually annotated to highlight blood vessels ≥ 40 μm, facilitating the analysis of vascular tortuosity. This dataset enables the development of automated image analysis techniques for early, non-invasive screening of diabetes and diabetic retinopathy through ocular imaging.',
    tags: [
      'Dataset',
      'Medical Imaging',
      'Diabetes',
      'Retinal Imaging',
      'Conjunctival Imaging',
      'Vascular Analysis',
    ],
  },
];

const achievements = [
  {
    title: 'Thinkwave 4.0',
    result: 'Runners Up',
    description: 'Eye screening system development',
    icon: '🥈',
  },
  {
    title: 'Brainwave 2021',
    result: '4th Place',
    description: 'Tech competition for innovative solutions',
    icon: '🏅',
  },
  {
    title: 'IEEE Electronic Design Competition',
    result: 'Runners Up',
    description: 'Electronic hardware and software integration',
    icon: '🥈',
  },
  {
    title: 'Maestro 2.0 & 3.0',
    result: 'Semi-Finalist',
    description: 'Tech hackathon organized by IESL and KDU',
    icon: '🏅',
  },
  {
    title: 'Hackfest KDU',
    result: 'Semi-Finalist',
    description: 'Hackathon challenge event hosted by KDU',
    icon: '🏅',
  },
];

const volunteering = [
  {
    title: 'IEEE EMBS Moratuwa',
    logo: ieeeEMBSMoratuwaLogo,
    roles: [
      { role: 'Chairperson – Brainstorm 2023', year: '2023' },
      { role: 'Vice Chair – Brainstorm 2021', year: '2021' },
      { role: 'Founder – Medi-Engi Collaboration', year: '2021' },
    ],
  },
  {
    title: 'IEEE EMBS Sri Lanka',
    logo: ieeeEMBSSriLankaLogo,
    roles: [{ role: 'Webmaster', year: '2025' }],
  },
  {
    title: 'IEEE Young Professionals',
    logo: ypLogo,
    roles: [
      { role: 'Webmaster – StudPro 5.0', year: '2022' },
      { role: 'Industry Lead – Y2NPro', year: '2022' },
    ],
  },
];

/* ─── SECTION HEADER ─── */

const SectionHeader = ({ icon, title, subtitle }) => (
  <Box sx={{ mb: 3 }}>
    <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 0.5 }}>
      <Avatar
        sx={{
          bgcolor: 'primary.main',
          width: 40,
          height: 40,
        }}
      >
        {icon}
      </Avatar>
      <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
        {title}
      </Typography>
    </Stack>
    {subtitle && (
      <Typography variant="body2" color="text.secondary" sx={{ pl: 7 }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

/* ─── COMPONENT ─── */

const Achievements = () => (
  <>
    <Helmet>
      <title>Achievements | Manjitha Kularatne</title>
      <meta name="description" content="Achievements and publications by Manjitha Kularatne - IEEE EMBS leadership, research publications, conferences, and awards in biomedical engineering and AI." />
      <link rel="canonical" href="https://manjithadulana98.github.io/achievements" />
    </Helmet>
  <Box
    sx={{
      padding: { xs: '1.5rem', md: '3rem' },
      maxWidth: '1000px',
      margin: 'auto',
    }}
  >
    {/* ── Page Title ── */}
    <Typography
      variant="h4"
      sx={{
        fontWeight: 800,
        mb: 1,
        color: 'text.primary',
        textAlign: 'center',
      }}
    >
      Highlights & Contributions
    </Typography>
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ textAlign: 'center', mb: 5, maxWidth: 600, mx: 'auto' }}
    >
      Publications, competition achievements, and community leadership
    </Typography>

    {/* ═══════════════════════════════════════════════════════
        SECTION 1 — Publications & Datasets
       ═══════════════════════════════════════════════════════ */}
    <Box
      sx={{
        bgcolor: '#f0f4ff',
        borderRadius: 4,
        p: { xs: 2, md: 3.5 },
        mb: 5,
      }}
    >
      <SectionHeader
        icon={<ArticleIcon />}
        title="Publications & Datasets"
        subtitle="Research contributions and open datasets"
      />

      {publications.map((pub, idx) => (
        <Card
          key={idx}
          elevation={0}
          sx={{
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: '#ffffff',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': { transform: 'translateY(-3px)', boxShadow: 6 },
          }}
        >
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            {/* Type + Date row */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              sx={{ mb: 1.5 }}
            >
              <Chip
                icon={<StorageIcon />}
                label={pub.type}
                color="primary"
                size="small"
                sx={{ fontWeight: 600 }}
              />
              <Stack direction="row" spacing={0.5} alignItems="center">
                <CalendarTodayIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                  {pub.date}
                </Typography>
              </Stack>
            </Stack>

            {/* Title */}
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.4 }}>
              {pub.title}
            </Typography>

            {/* Venue */}
            <Typography
              variant="subtitle2"
              color="primary.main"
              sx={{ fontWeight: 600, mb: 1.5 }}
            >
              {pub.venue}
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, lineHeight: 1.75 }}
            >
              {pub.description}
            </Typography>

            {/* Tags */}
            <Stack
              direction="row"
              spacing={0.75}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 2 }}
            >
              {pub.tags.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 2,
                    fontSize: '0.72rem',
                    borderColor: 'primary.light',
                    color: 'primary.dark',
                  }}
                />
              ))}
            </Stack>

            {/* Link Button */}
            <Button
              variant="contained"
              size="small"
              endIcon={<OpenInNewIcon />}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                fontWeight: 600,
                px: 2.5,
              }}
            >
              View on IEEE DataPort
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>

    {/* ═══════════════════════════════════════════════════════
        SECTION 2 — Competition Achievements
       ═══════════════════════════════════════════════════════ */}
    <Box sx={{ mb: 5 }}>
      <SectionHeader
        icon={<EmojiEventsIcon />}
        title="Competition Achievements"
        subtitle="Hackathons, design competitions, and tech challenges"
      />

      <Stack spacing={1.5}>
        {achievements.map((item, idx) => (
          <Card
            key={idx}
            elevation={0}
            sx={{
              borderRadius: 2.5,
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.25s',
              '&:hover': {
                borderColor: 'primary.light',
                bgcolor: '#fafbff',
                boxShadow: 2,
              },
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                py: 1.5,
                px: 2.5,
                '&:last-child': { pb: 1.5 },
              }}
            >
              {/* Medal icon */}
              <Typography sx={{ fontSize: '1.75rem', lineHeight: 1 }}>
                {item.icon}
              </Typography>

              {/* Text content */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Chip
                    label={item.result}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      height: 22,
                      bgcolor: item.result.includes('Runners')
                        ? '#e3f2fd'
                        : item.result.includes('4th')
                        ? '#fff3e0'
                        : '#f3e5f5',
                      color: item.result.includes('Runners')
                        ? '#1565c0'
                        : item.result.includes('4th')
                        ? '#e65100'
                        : '#7b1fa2',
                    }}
                  />
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                  {item.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>

    {/* ═══════════════════════════════════════════════════════
        SECTION 3 — Volunteering & Leadership
       ═══════════════════════════════════════════════════════ */}
    <Box
      sx={{
        bgcolor: '#f7f7f7',
        borderRadius: 4,
        p: { xs: 2, md: 3.5 },
      }}
    >
      <SectionHeader
        icon={<GroupsIcon />}
        title="Volunteering & Leadership"
        subtitle="IEEE community roles and initiatives"
      />

      <Grid container spacing={2.5}>
        {volunteering.map((item, idx) => (
          <Grid item xs={12} sm={4} key={idx} sx={{ display: 'flex' }}>
            <Card
              elevation={0}
              sx={{
                flexGrow: 1,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                width: '100%',
                transition: 'all 0.25s',
                '&:hover': {
                  borderColor: 'primary.light',
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.logo}
                alt={`${item.title} logo`}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: 'contain',
                  borderRadius: 2,
                  mb: 1.5,
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, textAlign: 'center', mb: 1 }}
              >
                {item.title}
              </Typography>
              <List dense disablePadding sx={{ width: '100%' }}>
                {item.roles.map((entry, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 0.25 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <StarIcon sx={{ fontSize: 14, color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={entry.role}
                      secondary={entry.year}
                      primaryTypographyProps={{
                        variant: 'body2',
                        fontWeight: 500,
                        fontSize: '0.8rem',
                      }}
                      secondaryTypographyProps={{
                        variant: 'caption',
                        color: 'text.secondary',
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
  </>
);

export default Achievements;
