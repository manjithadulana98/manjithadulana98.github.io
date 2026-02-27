# 🚀 Quick Deployment Guide

## Prerequisites
- Node.js and npm installed
- Git repository connected to GitHub
- gh-pages package installed (`npm install gh-pages --save-dev`)

---

## 🔧 One-Time Setup (Already Done)

✅ Homepage configured in package.json  
✅ Deploy script added  
✅ SEO meta tags implemented  
✅ Sitemap.xml created  
✅ All content updated  

---

## 📦 Deployment Commands

### **Option 1: Quick Deploy (Recommended)**
```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to GitHub Pages automatically
3. Make the site live at https://manjithadulana98.github.io

---

### **Option 2: Manual Build + Deploy**
```bash
# Step 1: Build
npm run build

# Step 2: Deploy (if you have the deploy script)
npm run deploy
```

---

## 🧪 Local Testing Before Deploy

```bash
# Start development server
npm start

# Visit http://localhost:3000 in browser
# Test all pages and features
```

---

## ✅ Post-Deployment Checklist

After running `npm run deploy`, verify:

1. **Site is Live**
   - Visit: https://manjithadulana98.github.io
   - Check all navigation links work

2. **SEO Meta Tags**
   - Open browser DevTools (F12)
   - Go to Elements tab
   - Check `<head>` section for meta tags
   - Verify Open Graph and Twitter Card tags

3. **Social Media Preview**
   - Test link on LinkedIn: https://www.linkedin.com/post-inspector/
   - Test link on Facebook: https://developers.facebook.com/tools/debug/
   - Test link on Twitter: https://cards-dev.twitter.com/validator

4. **Mobile Responsiveness**
   - Open on mobile device or use DevTools responsive mode
   - Test all breakpoints (mobile, tablet, desktop)

5. **All Sections Load**
   - ✓ Home / Header
   - ✓ Education
   - ✓ Experience
   - ✓ Projects
   - ✓ Skills
   - ✓ Achievements (with dataset publication)
   - ✓ Contact

---

## 🔍 Submit to Search Engines

### Google Search Console
1. Go to: https://search.google.com/search-console
2. Add property: `https://manjithadulana98.github.io`
3. Submit sitemap: `https://manjithadulana98.github.io/sitemap.xml`

### Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add site: `https://manjithadulana98.github.io`
3. Submit sitemap: `https://manjithadulana98.github.io/sitemap.xml`

---

## 🛠️ Troubleshooting

### "gh-pages not found"
```bash
npm install gh-pages --save-dev
```

### Deploy fails
```bash
# Clear cache and try again
rm -rf node_modules
npm install
npm run deploy
```

### Site not updating
- GitHub Pages can take 1-5 minutes to update
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check GitHub repository Settings > Pages

### Force push if needed
```bash
git push --force origin main
```

---

## 📊 Monitor Performance

After deployment, check:
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

---

## 🎯 Success Indicators

Your deployment is successful when:
- ✅ Site loads at https://manjithadulana98.github.io
- ✅ All 7 pages are accessible
- ✅ Meta tags visible in page source
- ✅ Social media previews show correct image and description
- ✅ Mobile version works smoothly
- ✅ Dataset publication visible on Achievements page
- ✅ IEEE EMBS volunteering highlighted

---

## 🔄 Future Updates

To update the website:
1. Make changes to files
2. Test locally with `npm start`
3. Deploy with `npm run deploy`
4. Changes live in 1-5 minutes

---

**Need Help?**
- Check browser console for errors (F12)
- Review GitHub Actions for deployment logs
- Verify package.json has correct homepage URL

**Current Status:** ✅ Ready to Deploy
