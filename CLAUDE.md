# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm start          # Dev server (includes --openssl-legacy-provider for Node 18+)
npm run build      # Production build (auto-runs npm install --force --legacy-peer-deps first)
npm test           # Run Jest tests via react-scripts
```

**Node.js compatibility:** The start script uses `--openssl-legacy-provider` to work with Node 18+. If you encounter OpenSSL errors, this flag is already configured in package.json.

## Environment Variables

The contact form requires these EmailJS variables:
- `REACT_APP_SERVICE_ID`
- `REACT_APP_TEMPLATE_ID`
- `REACT_APP_EMAIL_API_KEY`

## Architecture

React 16 SPA built with create-react-app (react-scripts 5.0.1). No ejected config — all build tooling uses CRA defaults.

**Routing:** React Router v5 (`react-router-dom@5.2.0`) with `BrowserRouter`/`Switch`/`Route`. The About section uses nested routes (`/about/education`, `/about/experience`). Navigation between page sections uses `scrollIntoView()`.

**Styling:** Materialize CSS + SCSS. Custom styles live in `src/scss/` with one file per component. `M.AutoInit()` is called in component `useEffect` hooks to initialize Materialize JS components.

**Key integrations:**
- `tsparticles` / `react-tsparticles` — animated particle background (config in `src/particlesjs-config.json`)
- `react-reveal` — scroll-triggered fade animations
- `@emailjs/browser` — contact form submission
- `react-responsive` — responsive layout breakpoints

**Component layout:** All components are function components using hooks. Page sections (`Home`, `AboutMe`, `Works`, `Contact`) are top-level in `src/components/`. The sidebar navigation lives in `src/components/layout/Sidebar.js`. About sub-sections are in `src/components/AboutContent/`.
