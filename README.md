# Jason Andrews Testimonials

A React + TypeScript application showcasing testimonials and content.

## Development

This project uses:
- Vite
- React
- TypeScript
- Tailwind CSS

### Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

### Building

To create a production build:
```bash
npm run build
```

## Deployment

This project is configured for automatic deployment through Netlify. Any pushes to the main branch will trigger a new deployment.

To deploy manually:

1. Push your changes to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically detect the build settings and deploy your site

The build settings are configured in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`