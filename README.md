# FGC-Flow

Full-stack FGC character guide: React frontend + Express API + MongoDB Atlas.

## Project structure

```
fgc-flow/
├── frontend/     # Vite + React (GitHub Pages)
├── backend/      # Express + MongoDB API
└── package.json  # root dev scripts
```

## Local setup

1. Install dependencies:

```powershell
npm run install:all
```

2. Configure MongoDB credentials in `backend/.env` (copy from `backend/.env.example`):

```
DB_PASSWORD=your_atlas_password
MONGODB_URI=mongodb+srv://rickymach7:your_atlas_password@cluster0.jhjif7w.mongodb.net/fgcflow?appName=Cluster0
PORT=3001
CORS_ORIGIN=http://localhost:5173,https://rickyuxen.github.io
```

3. Seed the database:

```powershell
npm run seed
```

4. Start both servers:

```powershell
npm run dev
```

- Frontend: http://localhost:5173/fgc-flow/
- API: http://localhost:3001/api/health

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/games` | Game list for sidebar |
| GET | `/api/games/:slug` | Game metadata |
| GET | `/api/games/:slug/characters` | Characters for a game |

## Adding new games

1. Add game JSON + character JSON to `backend/src/seed/data/`
2. Add image manifest entries in `backend/src/seed/imageManifest.ts`
3. Add character/game images under `frontend/src/assets/<GameFolder>/` (synced to `public/images/` automatically on build)
4. Register the game in `backend/src/seed/seed.ts` `GAME_CONFIG`
5. Run `npm run seed`

The frontend loads games dynamically from the API — no hardcoded game list.

## Production deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for GitHub Pages + Render/Railway setup.

## Templates

See `frontend/src/templates/` for JSON scaffolds when adding new game data.
