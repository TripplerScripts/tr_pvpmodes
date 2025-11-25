# FiveM TypeScript Template

## Setup

Install dependencies:
```bash
npm install
```

## Build

Build all projects (client, server, web):
```bash
npm run build
```

This will:
- Bundle all TypeScript files into single `main.js` per project
- Minify and compress the output (unreadable)
- Output to:
  - `client/build/main.js`
  - `server/build/main.js`
  - `web/build/main.js`

## Watch Mode

Auto-rebuild on file changes:
```bash
npm run watch
```

## Individual Builds

```bash
npm run build:client
npm run build:server
npm run build:web
```

## Structure

- `client/` - Client-side FiveM scripts
- `server/` - Server-side FiveM scripts
- `web/` - NUI/UI scripts
- Each folder has its own `tsconfig.json` for configuration