# Dancing Dragons

A women's adventure & wellness community website built with React and deployed on GitHub Pages.

## Live Site
Visit the site at [https://dancingchimp.github.io/dancingdragons/](https://dancingchimp.github.io/dancingdragons/)

## Project Setup

### Prerequisites
- Node.js 14+ and npm 6+
- Git

### Installation
1. Clone the repository:
```bash
git clone https://github.com/dancingchimp/dancingdragons.git
cd dancingdragons
```

2. Install dependencies:
```bash
npm install
```

3. Create favicon assets:
   - Generate favicon files using [RealFaviconGenerator](https://realfavicongenerator.net/)
   - Use the `logo.svg` in the repository root as the source
   - Place generated files in the public/favicon directory
   - Ensure `favicon.ico`, `logo192.png` and `logo512.png` are in the repository root

4. Start the development server:
```bash
npm start
```

## GitHub Pages Deployment
This project is configured for GitHub Pages deployment. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

Quick deployment:
```bash
npm run deploy
```

## Project Structure

```
dancingdragons/                     # Repository root
├── .nojekyll                       # Tells GitHub not to process with Jekyll
├── 404.html                        # Custom 404 page for SPA routing
├── index.html                      # Main HTML file (in root for GitHub Pages)
├── logo.svg                        # Vector logo in root for SEO and favicon generation
├── .htaccess                       # Apache configuration (for future compatibility)
├── manifest.json                   # PWA manifest
├── favicon.ico                     # Main favicon (root for compatibility)
├── logo192.png                     # PWA icon (192px)
├── logo512.png                     # PWA icon (512px)
├── public/                         # Public assets
│   ├── styles/                     # CSS files for production
│   └── favicon/                    # Additional favicon files
└── src/                            # Source code
    ├── index.js                    # JS entry point
    ├── App.js                      # Main app component
    ├── styles/                     # CSS source files
    ├── context/                    # React context
    ├── components/                 # React components
    ├── hooks/                      # Custom React hooks
    └── utils/                      # Utility functions
```

## Key Features
- **Single-Page Application** with React Router
- **Responsive Design** for all screen sizes
- **Progressive Web App** capabilities
- **GitHub Pages** integration
- **Component-Based Architecture**
- **Modern CSS** with variables and modular structure

## Building for Production

```bash
npm run build
```

This will create an optimized build in the `build` directory.

## Alternative Deployment Options

### Apache Server
- Copy the contents of the build directory to your web server
- Ensure the `.htaccess` file is properly copied (it handles routing)

### Nginx Server
- Copy the contents of the build directory to your web server
- Configure Nginx to route all requests to index.html:

```nginx
location / {
  root /path/to/build;
  try_files $uri $uri/ /index.html;
}
```

## PWA Support

The application is configured as a Progressive Web App (PWA). To disable PWA features, set `REACT_APP_ENABLE_PWA=false` in the `.env` file.

## Browser Support

The application supports:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Opera (latest version)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

## Code Standards

This project follows these coding standards:
- ESLint for JavaScript linting
- Prettier for code formatting
- React best practices and hooks
- Semantic HTML
- Accessible design (WCAG 2.1 AA compliant)

## CSS Structure

The CSS is organized following a modular approach:
- `variables.css` - Design tokens and theme variables
- `animations.css` - Animation keyframes and classes
- `components.css` - Component-specific styles
- `utilities.css` - Utility classes for rapid styling

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages
- `npm run lint` - Lints JavaScript files
- `npm run format` - Formats code with Prettier
- `npm run analyze` - Analyzes the bundle size

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for icons
- React Router for routing
- Create React App for the initial setup
