# Manjitha Kularatne - Personal Portfolio Website

> 🌐 A modern, responsive portfolio showcasing biomedical engineering projects, research publications, and professional experience.

**Live Site:** [https://manjithadulana98.github.io](https://manjithadulana98.github.io)

---

## 🎯 Overview

This portfolio website highlights:
- 📚 **Education & Academic Journey** - B.Sc. in Biomedical Engineering, M.Sc. in Data Science & AI
- 💼 **Professional Experience** - Research Engineer at Synergen Technology Labs
- 🚀 **Projects** - Healthcare AI, biosignal processing, and medical imaging solutions
- 🏆 **Achievements & Publications** - IEEE datasets, competition awards, and research contributions
- 🤝 **Volunteering** - IEEE EMBS leadership roles and community initiatives

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Material-UI (MUI) v7
- **Routing:** React Router DOM v7
- **Animations:** React Typed
- **Build Tool:** React Scripts (Create React App)
- **Deployment:** GitHub Pages
- **SEO:** Optimized meta tags, sitemap.xml, robots.txt

---

## 📁 Project Structure

```
├── public/
│   ├── index.html          # SEO-optimized HTML with meta tags
│   ├── sitemap.xml         # Search engine sitemap
│   ├── robots.txt          # Search engine crawler instructions
│   ├── manifest.json       # PWA configuration
│   └── profile.jpg         # Profile image
├── src/
│   ├── components/
│   │   ├── Header.js       # Landing page with tech stack
│   │   ├── Education.js    # Academic timeline
│   │   ├── Experience.js   # Work history
│   │   ├── Projects.js     # Portfolio projects
│   │   ├── Skills.js       # Technical competencies
│   │   ├── Achievements.js # Publications, awards, volunteering
│   │   ├── Contact.js      # Contact information
│   │   └── Navbar.js       # Navigation bar
│   ├── App.js              # Main app with routing
│   └── index.js            # Entry point
└── package.json            # Dependencies and scripts
```

---

## 🚀 Build, Test, and Deploy

### 🏗️ Build the Project

```bash
npm run build
```
This generates an optimized production build inside the `build/` folder.

---

### 🧪 Test Locally

```bash
npm start
```
This launches the app on `http://localhost:3000`.

---

### 🚢 Deploy to GitHub Pages

Make sure the following exists in `package.json`:

```json
"homepage": "https://manjithadulana98.github.io",
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "deploy": "gh-pages -d build"
}
```

Then run:

```bash
npm run deploy
```

If the push is rejected, force push:

```bash
git push --force origin main
```

---

## 🔍 SEO Features

### Implemented Optimizations:
✅ **Meta Tags** - Comprehensive description, keywords, and author tags
✅ **Open Graph Tags** - Social media sharing optimization (Facebook, LinkedIn)
✅ **Twitter Card Tags** - Enhanced Twitter sharing
✅ **Canonical URL** - Prevent duplicate content issues
✅ **Sitemap.xml** - All pages mapped for search engines
✅ **Robots.txt** - Search engine crawler permissions
✅ **Semantic HTML** - Proper heading hierarchy and structure
✅ **Mobile Responsive** - Optimized for all device sizes
✅ **Fast Load Times** - Optimized images and code splitting

### Key Meta Tags:
- **Title:** Manjitha Kularatne - Biomedical Engineer & Data Scientist
- **Description:** Specializing in biosignal processing, medical imaging, and AI solutions for healthcare
- **Keywords:** Biomedical Engineering, Data Science, AI, ECG Signal Processing, Medical Imaging, Healthcare AI

---

## 📦 Dependencies

```json
{
  "react": "^19.1.0",
  "@mui/material": "^7.1.0",
  "react-router-dom": "^7.6.0",
  "react-typed": "^2.0.12"
}
```

---

## 📧 Contact

**Manjitha Kularatne**
- 📧 Email: manjitha456@gmail.com
- 💼 LinkedIn: [manjitha-kularatne](https://linkedin.com/in/manjitha-kularatne)
- 🐙 GitHub: [manjithadulana98](https://github.com/manjithadulana98)

---

## 📄 License

© 2026 Manjitha Kularatne. All rights reserved.

---

> 📝 **Note:** Make sure `gh-pages` is installed:
> ```bash
> npm install gh-pages --save-dev
> ```
