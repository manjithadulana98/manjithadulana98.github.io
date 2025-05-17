import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const skills = [
  {
    title: 'Languages & Tools',
    list: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' }
    ]
  },
  {
  title: 'Industry Tools',
  list: [
    { icon: 'http://upload.wikimedia.org/wikipedia/en/d/d2/SolidWorks_Logo.svg' }, // Logo hard to find, skip for now
    {  icon: 'https://easyeda.com/favicon.ico' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Altium_Limited_logo.svg' },
    { icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Linear_Technology_Corporation_logo.svg' },
    {  icon: 'https://upload.wikimedia.org/wikipedia/en/2/20/Power_BI_logo.svg' },
  
    {  icon: 'http://upload.wikimedia.org/wikipedia/en/b/be/NIMS10_logocap.png' }, // No free logo
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' }
  ]
}
,
  {
  title: 'Soft Skills',
  list: [
    {
      name: 'Teamwork',
      icon: 'https://cdn-icons-png.flaticon.com/512/3771/3771435.png'
    },
    {
      name: 'Time Management',
      icon: 'https://cdn-icons-png.flaticon.com/512/5358/5358780.png'
    },
    {
      name: 'Documentation',
      icon: 'https://cdn-icons-png.flaticon.com/512/3145/3145765.png'
    },
    {
      name: 'Problem-Solving',
      icon: 'https://cdn-icons-png.flaticon.com/512/1040/1040230.png'
    },
    {
      name: 'Presentation',
      icon: 'https://cdn-icons-png.flaticon.com/512/1685/1685369.png'
    },
    {
      name: 'Leadership',
      icon: 'https://cdn-icons-png.flaticon.com/512/1040/1040214.png'
    }
  ]
}



];

const Skills = () => (
  <Box sx={{ padding: '2rem' }}>
    <Typography variant="h4" gutterBottom>
      🛠️ Skills
    </Typography>
    <Grid container spacing={4}>
      {skills.map((category, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card elevation={3} sx={{ height: '100%', borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {category.title}
              </Typography>
              <Grid container spacing={2}>
                {category.list.map((skill, i) => (
                  <Grid item xs={6} key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {skill.icon && (
                      <CardMedia
                        component="img"
                        image={skill.icon}
                        alt={skill.name}
                        sx={{  height: 24 }}
                      />
                    )}
                    <Typography variant="body2">{skill.name}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Skills;
