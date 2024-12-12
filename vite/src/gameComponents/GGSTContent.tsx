import "../components/gameContent.css";
import { Characters } from "../components/Characters";
import { RightContent } from "../components/RightContent";
import { useState } from "react";
// character images
import solImage from "../assets/GGST/SolBadguy.png";
import kyImage from "../assets/GGST/KyKiske.png";
import mayImage from "../assets/GGST/May.png";
import gameLogo from "../assets/GGST/ggstlogo.png";
import gameInfo from "../data/ggstGameinfo.json";
import CharacterInfos from "../data/ggstCharactersInfo.json";

interface CharacterInfo {
  name: string;
  tags: string[];
  overview: string;
  resources?: string[];
  difficulty: string;
  video: string;
  notablePlayers: string[];
  color: string;
  pros?: string[];
  cons?: string[];
}

export const GGSTContent = () => {
  // Characters in the game and images
  let characters = [
    {
      name: "Sol Badguy",
      image: solImage,
      color: "#8b0000",
    },
    {
      name: "Ky Kiske",
      image: kyImage,
      color: "#318CE7",
    },
    {
      name: "May",
      image: mayImage,
      color: "#FF8C00",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // useState to store index
  const [selectedCharInfo, setSelectedCharInfo] = // useState to store selected character and character info
    useState<CharacterInfo | null>(null);
  const handleSelectChar = (characterName: string, index: number) => {
    console.log(characterName);
    const foundCharInfo = CharacterInfos.find(
      (char) => char.name === characterName
    );
    setSelectedIndex(index);
    setSelectedCharInfo(foundCharInfo || null);
  };
  const handleClearChar = () => {
    setSelectedCharInfo(null);
    setSelectedIndex(-1);
  };
  return (
    <>
      <div
        className="container"
        style={{
          fontFamily: `${gameInfo.fontStyle}, sans-serif`,
          textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`, // text shadow for hard to read fonts
        }}
      >
        <div
          className="column left"
          style={
            {
              borderColor: selectedCharInfo?.color || "#555",
              fontSize: "3.5vh", // adjust values based on font
              letterSpacing: "0vw",
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
          style={{
            borderColor: selectedCharInfo?.color || "#555",
          }}
        >
          <RightContent
            key={selectedCharInfo ? selectedCharInfo.name : "game-info"}
            CharacterInfo={selectedCharInfo}
            GameInfo={gameInfo}
            GameLogo={gameLogo}
            clearCharacterInfo={handleClearChar}
          />
        </div>
      </div>
    </>
  );
};
