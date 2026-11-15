# AstroVitals

**Astronaut health monitoring and early-warning system for long-duration missions.**

AstroVitals is an offline-first progressive web app (PWA) that lets astronauts self-assess their health and flags early warning signs, built around hazards identified by NASA's Human Research Program. It was created for a NASA Space Apps-style challenge.

## Features

- Astronaut health self-assessment
- Early-warning indicators for long-duration mission risks
- Offline-first design (works without a connection)
- Installable as a PWA
- Light theme in white, pastel blue and pastel dark blue

> Edit this list to match what the app actually does.

## Tech Stack

- React + Vite (frontend)
- ESLint
- Node.js / npm

## Project Structure

```
.
├── frontend/        # React + Vite app (all source code lives here)
├── docs/            # Project documentation
├── package.json     # Root scripts that forward to /frontend
└── .gitignore
```

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (LTS recommended)
- npm (comes with Node.js)
- [VS Code](https://code.visualstudio.com/)

Check your versions:

```bash
node -v
npm -v
```

## Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/Vaisakha/astrohealth.git
   cd astrohealth
   ```

2. **Install dependencies** (the dependencies live in `frontend/`, not the root)

   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Start the dev server** (from the project root)

   ```bash
   npm run dev
   ```

4. **Open the app** at the URL printed in the terminal, usually <http://localhost:5173>.

## Available Scripts

Run these from the project root:

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Starts the Vite dev server with hot reload    |
| `npm run build`   | Creates a production build in `frontend/dist` |
| `npm run preview` | Serves the production build locally           |

## Testing the PWA / Offline Mode

Service workers generally only run on production builds, so to test offline behavior:

```bash
npm run build
npm run preview
```

Then open the preview URL, load the app once, and switch the browser to offline in DevTools (Application tab) to confirm it still works.

## Team

Team **Nova Cipher**: designer, frontend developers, research lead, content/QA, and project lead.

## License

MIT
