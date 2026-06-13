import "../components/gameContent.css";
import { useEffect, useState } from "react";
import { Characters } from "../components/Characters";
import { RightContent } from "../components/RightContent";
import {
  getCharacters,
  getGame,
  resolveAssetPath,
} from "../api/client";
import type { CharacterInfo, GameInfo } from "../api/types";

interface GameContentProps {
  slug: string;
}

export const GameContent = ({ slug }: GameContentProps) => {
  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [characters, setCharacters] = useState<
    { name: string; image: string }[]
  >([]);
  const [characterInfos, setCharacterInfos] = useState<CharacterInfo[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCharInfo, setSelectedCharInfo] =
    useState<CharacterInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    setSelectedCharInfo(null);
    setSelectedIndex(null);

    try {
      const [game, chars] = await Promise.all([
        getGame(slug),
        getCharacters(slug),
      ]);
      setGameInfo(game);
      setCharacterInfos(chars);
      setCharacters(
        chars.map((character) => ({
          name: character.name,
          image: resolveAssetPath(character.imagePath),
        }))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load game data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadData();
  }, [slug]);

  const handleSelectChar = (characterName: string, index: number) => {
    const foundCharInfo = characterInfos.find(
      (char) => char.name === characterName
    );
    setSelectedIndex(index);
    setSelectedCharInfo(foundCharInfo || null);
  };

  const handleClearChar = () => {
    setSelectedCharInfo(null);
    setSelectedIndex(-1);
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: "2rem", textAlign: "center" }}>
        Loading game data...
      </div>
    );
  }

  if (error || !gameInfo) {
    return (
      <div className="container" style={{ padding: "2rem", textAlign: "center" }}>
        <p>{error ?? "Game not found."}</p>
        <button type="button" onClick={() => void loadData()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{
        fontFamily: `${gameInfo.fontStyle}, sans-serif`,
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      <div
        className="column left"
        style={
          {
            borderColor: selectedCharInfo?.color || "#555",
            fontSize: slug === "ggst" ? "3vh" : "3.5vh",
            letterSpacing: "0vw",
            textTransform: "uppercase",
            "--active-color": selectedCharInfo?.color || "rgb(121, 238, 121)",
          } as React.CSSProperties
        }
      >
        <Characters
          characters={characters}
          selectedCharacter={selectedIndex}
          onSelectChar={handleSelectChar}
        />
      </div>
      <div
        className="column right"
        style={{ borderColor: selectedCharInfo?.color || "#555" }}
      >
        <RightContent
          key={selectedCharInfo ? selectedCharInfo.name : "game-info"}
          CharacterInfo={selectedCharInfo}
          GameInfo={gameInfo}
          GameLogo={resolveAssetPath(gameInfo.logoPath)}
          clearCharacterInfo={handleClearChar}
        />
      </div>
    </div>
  );
};
