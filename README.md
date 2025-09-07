## 🚀 Build, Test, and Deploy

### 🏗️ Build the Project

```
npm run build
```
This generates an optimized production build inside the `build/` folder.

---

### 🧪 Test Locally

```
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
  "build": "react-scripts build"
  }
```

Then run:

```
npm run deploy
```

If the push is rejected, force push:

```
git push --force origin main
```

---

> 📝 Make sure `gh-pages` is installed:
>
> ```
> npm install gh-pages --save-dev
> ```
