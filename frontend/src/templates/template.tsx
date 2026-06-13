// Scaffold for adding a new game to the API-driven frontend.
// 1. Add seed data in backend/src/seed/data/
// 2. Update backend/src/seed/imageManifest.ts and seed.ts
// 3. Run npm run seed from repo root

import { GameContent } from "../gameComponents/GameContent";

export const ExampleGameContent = () => {
  return <GameContent slug="your-game-slug" />;
};
