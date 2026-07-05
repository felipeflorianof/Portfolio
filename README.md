# Portfolio

Personal portfolio built with React + Vite.

Live: [felipefontesportfolio.netlify.app](https://felipefontesportfolio.netlify.app)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The `dist` folder is published to Netlify. SPA routing is handled via `public/_redirects`.

## Routes

- `/` — home
- `/work/:slug` — project detail (`marketplace-pme`, `fleet-control`, `umanager`, `partner-portal`)
- `/work.html?project=...` — legacy URL redirect
