import "dotenv/config";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import { Character } from "../models/Character.js";
import { Game } from "../models/Game.js";
import { GAME_FOLDER, GAME_IMAGE_MANIFEST } from "./imageManifest.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "data");

interface GameJson {
  title: string;
  mainInfo: string;
  datePublished: string;
  publisher: string;
  video: string;
  fontStyle: string;
  fontSize: string;
  fontSizeRight: string;
  gameLogoSize: string[];
}

interface CharacterJson {
  name: string;
  tags: string[];
  overview: string;
  difficulty: string;
  video: string;
  notablePlayers: string[];
  resources: string[];
  color: string;
  pros: string[];
  cons: string[];
}

const GAME_CONFIG = [
  {
    slug: "sf6",
    gameFile: "sf6gameinfo.json",
    charactersFile: "sf6CharactersInfo.json",
  },
  {
    slug: "ggst",
    gameFile: "ggstGameinfo.json",
    charactersFile: "ggstCharactersInfo.json",
  },
] as const;

function readJson<T>(filename: string): T {
  const raw = readFileSync(join(dataDir, filename), "utf-8");
  return JSON.parse(raw) as T;
}

function buildImagePath(slug: string, file: string): string {
  const folder = GAME_FOLDER[slug];
  return `/images/${folder}/${file}`;
}

async function seed() {
  await connectDB();

  const gamesToInsert = [];
  const charactersToInsert = [];

  for (const config of GAME_CONFIG) {
    const gameJson = readJson<GameJson>(config.gameFile);
    const charactersJson = readJson<CharacterJson[]>(config.charactersFile);
    const manifest = GAME_IMAGE_MANIFEST[config.slug];

    gamesToInsert.push({
      slug: config.slug,
      title: gameJson.title,
      mainInfo: gameJson.mainInfo,
      datePublished: gameJson.datePublished,
      publisher: gameJson.publisher,
      video: gameJson.video,
      fontStyle: gameJson.fontStyle,
      fontSize: gameJson.fontSize,
      fontSizeRight: gameJson.fontSizeRight,
      gameLogoSize: gameJson.gameLogoSize,
      logoPath: buildImagePath(config.slug, manifest.logoFile),
    });

    const orderByName = new Map(
      manifest.characters.map((entry, index) => [entry.name, index])
    );
    const imageByName = new Map(
      manifest.characters.map((entry) => [
        entry.name,
        buildImagePath(config.slug, entry.file),
      ])
    );

    for (const character of charactersJson) {
      const displayOrder = orderByName.get(character.name);
      const imagePath = imageByName.get(character.name);

      if (displayOrder === undefined || !imagePath) {
        throw new Error(
          `Missing image manifest entry for ${config.slug} character: ${character.name}`
        );
      }

      charactersToInsert.push({
        gameSlug: config.slug,
        name: character.name,
        tags: character.tags,
        overview: character.overview,
        difficulty: character.difficulty,
        video: character.video,
        notablePlayers: character.notablePlayers,
        resources: character.resources,
        color: character.color,
        pros: character.pros,
        cons: character.cons,
        imagePath,
        displayOrder,
      });
    }
  }

  await Game.deleteMany({});
  await Character.deleteMany({});
  await Game.insertMany(gamesToInsert);
  await Character.insertMany(charactersToInsert);

  console.log(
    `Seeded ${gamesToInsert.length} games and ${charactersToInsert.length} characters.`
  );
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
