import { Router } from "express";
import { Game } from "../models/Game.js";
import { Character } from "../models/Character.js";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

router.get("/games", async (_req, res) => {
  try {
    const games = await Game.find()
      .select("slug title logoPath")
      .sort({ title: 1 })
      .lean();
    res.json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

router.get("/games/:slug", async (req, res) => {
  try {
    const game = await Game.findOne({ slug: req.params.slug }).lean();
    if (!game) {
      res.status(404).json({ error: "Game not found" });
      return;
    }
    res.json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch game" });
  }
});

router.get("/games/:slug/characters", async (req, res) => {
  try {
    const game = await Game.findOne({ slug: req.params.slug }).lean();
    if (!game) {
      res.status(404).json({ error: "Game not found" });
      return;
    }
    const characters = await Character.find({ gameSlug: req.params.slug })
      .sort({ displayOrder: 1 })
      .lean();
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch characters" });
  }
});

export default router;
