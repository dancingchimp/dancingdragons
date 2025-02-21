# Deploying to GitHub Pages

This guide covers how to deploy the Dancing Dragons website to GitHub Pages.

## Prerequisites

1. Make sure you have the `gh-pages` npm package installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Ensure your `package.json` has the correct homepage set:
   ```json
   "homepage": "https://dancingchimp.github.io/dancingdragons"
   ```

3. Verify that the deployment scripts are in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

## Deployment Steps

### 1. Prepare Files for GitHub Pages

Make sure these files are in the root of your repository:
- `.nojekyll` - Empty file to disable Jekyll processing
- `404.html` - Custom 404 page for SPA routing
- `index.html` - Main HTML entry point

### 2. Update Router Configuration

Ensure your Router component in `App.js` has the correct basename:
```jsx
<Router basename="/dancingdragons">
  {/* Routes */}
</Router>
```

### 3. Set Environment Variables

Make sure your `.env` file has:
```
PUBLIC_URL=/dancingdragons
```

### 4. Update Asset Paths

All asset paths in your HTML and CSS should use the repository name as prefix:
```html
<link rel="stylesheet" href="/dancingdragons/styles/index.css">
```

### 5. Deploy to GitHub Pages

Run the deploy script:
```bash
npm run deploy
```

This will:
1. Build your React application
2. Create a `gh-pages` branch (if it doesn't exist)
3. Push the contents of the `build` folder to that branch

### 6. Configure GitHub Repository Settings

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Ensure the Source is set to the `gh-pages` branch
4. Wait for the deployment to complete (usually 1-2 minutes)

## Troubleshooting

### Page Not Found Issues
If you see 404 errors, check:
1. The `basename` in your Router
2. The 404.html redirect script
3. SPA redirect script in index.html

### Blank Page
If you see a blank page:
1. Check browser console for errors
2. Verify all asset paths include `/dancingdragons/`
3. Make sure `.nojekyll` file exists in the root

### Resources Not Loading
If images, CSS, or JS files aren't loading:
1. Check all asset URLs in the developer tools
2. Make sure paths start with `/dancingdragons/`
3. Verify file existence in the gh-pages branch

## Development vs Production

When working locally:
- Run `npm start` for development
- URLs won't include the `/dancingdragons` prefix locally
- The Router's basename won't affect local development URLs

When deployed:
- All URLs will include `/dancingdragons/`
- The 404.html redirect will handle direct URL access
- The `homepage` in package.json ensures correct asset paths
