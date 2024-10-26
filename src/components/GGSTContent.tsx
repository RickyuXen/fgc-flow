import "./gameContent.css";
import { Characters } from "./Characters";
import { RightContent } from "./RightContent";
import { useState } from "react";
import solImage from "../assets/GGST/SolBadguy.png";

interface CharacterInfo {
  name: string;
  tags: string[];
  overview: string;
  difficulty: string;
  video: string;
  notablePlayers: string[];
}

export const GGSTContent = () => {
  // Characters in the game and images
  let characters = [
    {
      name: "Sol Badguy",
      image: solImage,
    },
  ];
  let characterInfos = [
    // all info about character, passed to right content
    {
      name: "Sol Badguy",
      tags: ["Shoto", "Neutral", "Corner-Carry", "Beard"],
      overview: "Some overview on Ryu",
      difficulty: "2/5",
      video: "./assets/videos/sf6/ryu",
      notablePlayers: ["Paladin"],
    },
    {
      name: "Ken",
      tags: ["Shoto", "Neutral", "Corner-Carry", "Feet"],
      overview: "Some overview on Ken",
      difficulty: "3/5",
      video: "./assets/videos/sf6/ken",
      notablePlayers: ["Daigo"],
    },
  ];
  let gameInfo = {
    mainInfo: "Guilty Gear Strive is ...",
    datePublished: "2021",
    publisher: "ArcSys",
    video: "video/sf6main",
  };

  const [selectedChar, setSelectedChar] = useState<string>(""); // useState to store selected character
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // useState to store index
  const [selectedCharInfo, setSelectedCharInfo] = // useState to store selected character and character info
    useState<CharacterInfo | null>(null);
  const handleSelectChar = (characterName: string, index: number) => {
    console.log(characterName);
    const foundCharInfo = characterInfos.find(
      (char) => char.name === characterName
    );
    setSelectedChar(characterName);
    setSelectedIndex(index);
    setSelectedCharInfo(foundCharInfo || null);
  };

  return (
    <>
      <div className="container">
        <div className="column left">
          <Characters
            characters={characters}
            selectedCharacter={selectedIndex}
            onSelectChar={handleSelectChar}
          />
        </div>
        <div className="column right">
          <RightContent
            key={selectedCharInfo ? selectedCharInfo.name : "game-info"}
            CharacterInfo={selectedCharInfo}
            GameInfo={gameInfo}
          />
        </div>
      </div>
    </>
  );
};
