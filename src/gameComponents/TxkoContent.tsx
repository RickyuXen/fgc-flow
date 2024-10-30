import "../components/gameContent.css";
import { Characters } from "../components/Characters";
import { useState } from "react";
import ekkoImage from "../assets/2XKO/ekko.png";
import { RightContent } from "../components/RightContent";

interface CharacterInfo {
  name: string;
  tags: string[];
  overview: string;
  difficulty: string;
  video: string;
  notablePlayers: string[];
  color: string;
}

export const TxkoContent = () => {
  // Characters in the game and images
  let characters = [
    // characters for selection
    {
      name: "Ekko",
      image: ekkoImage,
    },
  ];
  let characterInfos = [
    // all info about character, passed to right content; maybe add border colour to dynamically change that
    {
      name: "Ekko",
      tags: ["Setplay", "Neutral", "Corner-Carry", "Beard"],
      overview: "Some overview on Ekko",
      difficulty: "2/5",
      video: "https://www.youtube.com/watch?v=7u0-LtgJM5U",
      notablePlayers: ["Paladin"],
      color: "#555",
    },
  ];
  let gameInfo = {
    title: "2XKO",
    mainInfo: "2XKO is ...",
    datePublished: "2025",
    publisher: "Riot Games",
    video: "video/sf6main",
    fontStyle: "blackHan",
    fontSize: "1vw",
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
          textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`, // text shadow for hard to read font
        }}
      >
        <div
          className="column left"
          style={{
            borderColor: selectedCharInfo?.color || "#555",
            fontSize: "3.5vh", // adjust values based on font
            letterSpacing: "0vw",
          }}
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
            clearCharacterInfo={handleClearChar}
          />
        </div>
      </div>
    </>
  );
};

// need to be able to separate left and right content; left content should be scrollable and right content should be static
