import "../components/gameContent.css";
import { Characters } from "../components/Characters";
import { RightContent } from "../components/RightContent";
import { useState } from "react";
import solImage from "../assets/GGST/SolBadguy.png";
import kyImage from "../assets/GGST/KyKiske.png";
import mayImage from "../assets/GGST/May.png";
import gameLogo from "../assets/GGST/ggstlogo.png"

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
  let characterInfos = [
    // all info about character, passed to right content
    {
      name: "Sol Badguy",
      tags: ["Shoto", "Neutral", "Corner-Carry", "Bol Sadguy"],
      overview: "Some overview on SOL BADGUY",
      difficulty: "2",
      video: "https://www.youtube.com/watch?v=Jm0oh5RYTIE",
      notablePlayers: ["IDK"],
      color: "#8b0000",
    },
    {
      name: "Ky Kiske",
      tags: ["Shoto", "Neutral", "Corner-Carry", "RoboKy"],
      overview: "Some overview on Ky Kiske",
      difficulty: "1",
      video: "https://www.youtube.com/watch?v=oWXpJ8wERMQ",
      notablePlayers: ["IDK"],
      color: "#318CE7",
    },
    {
      name: "May",
      tags: ["Charge", "TOTSUGEKI", "Dolphin", "Responsible"],
      overview: "Some overview on May",
      difficulty: "2",
      video: "https://www.youtube.com/watch?v=BtEFRYIUF6o",
      notablePlayers: ["IDK"],
      color: "#FF8C00",
    },
  ];
  let gameInfo = {
    title: "Guilty Gear Strive",
    mainInfo: "Guilty Gear Strive is ...",
    datePublished: "2021",
    publisher: "ArcSys",
    video: "video/sf6main",
    fontStyle: "ggstFont",
    fontSize: "1vw",
    fontSizeRight: "1.5vw",
  };

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // useState to store index
  const [selectedCharInfo, setSelectedCharInfo] = // useState to store selected character and character info
    useState<CharacterInfo | null>(null);
  const handleSelectChar = (characterName: string, index: number) => {
    console.log(characterName);
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
