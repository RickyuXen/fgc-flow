import "../components/gameContent.css";
import { Characters } from "../components/Characters";
import { useState } from "react";
import ryuImage from "../assets/SF6/ryu.png";
import kenImage from "../assets/SF6/ken.png";
import kimImage from "../assets/SF6/kimberly.png";
import lukeImage from "../assets/SF6/luke.png";
import gameLogo from "../assets/SF6/sf6logo.png";
import CharacterInfos from "../data/sf6CharactersInfo.json";
import gameInfo from "../data/sf6gameinfo.json";
import { RightContent } from "../components/RightContent";

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

export const SF6Content = () => {
  // Characters in the game and images for character selection; headache to use this in JSON file
  let characters = [
    // Values used in left-character selection
    {
      name: "Ryu",
      image: ryuImage,
    },
    {
      name: "Ken",
      image: kenImage,
    },
    {
      name: "Kimberly",
      image: kimImage,
    },
    {
      name: "Luke",
      image: lukeImage,
    },
    {
      name: "Luke",
      image: lukeImage,
    },
    {
      name: "Luke",
      image: lukeImage,
    },
    {
      name: "Luke",
      image: lukeImage,
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
          textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`, // text shadow for fonts to be more readable
        }}
      >
        <div
          className="column left"
          style={
            {
              borderColor: selectedCharInfo?.color || "#555",
              fontSize: "3.5vh", // adjust values based on font
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
            GameLogo={gameLogo}
            clearCharacterInfo={handleClearChar}
          />
        </div>
      </div>
    </>
  );
};
