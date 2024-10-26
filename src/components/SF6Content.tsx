import "./gameContent.css";
import { Characters } from "./Characters";
import { useState } from "react";
import ryuImage from "../assets/SF6/ryu.png";
import kenImage from "../assets/SF6/ken.png";
import kimImage from "../assets/SF6/kimberly.png";
import solImage from "../assets/GGST/SolBadguy.png";
import { RightContent } from "./RightContent";

interface CharacterInfo {
  name: string;
  tags: string[];
  overview: string;
  difficulty: string;
  video: string;
  notablePlayers: string[];
  color: string;
}

export const SF6Content = () => {
  // Characters in the game and images
  let characters = [
    // characters for selection
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
      name: "Kimberly",
      image: kimImage,
    },
    {
      name: "Kimberly",
      image: kimImage,
    },
    {
      name: "Kimberly",
      image: kimImage,
    },
    {
      name: "Kimberly",
      image: kimImage,
    },
  ];
  let characterInfos = [
    // all info about character, passed to right content; maybe add border colour to dynamically change that
    {
      name: "Ryu",
      tags: ["Shoto", "Neutral", "Corner-Carry", "Beard"],
      overview: "Some overview on Ryu",
      difficulty: "2/5",
      video: "https://www.youtube.com/watch?v=-9MB38W2Gfw",
      notablePlayers: ["Paladin"],
      color: "#555",
    },
    {
      name: "Ken",
      tags: ["Shoto", "Neutral", "Corner-Carry", "Feet"],
      overview: "Some overview on Ken",
      difficulty: "3/5",
      video: "https://www.youtube.com/watch?v=gip4mso1h70",
      notablePlayers: ["Daigo"],
      color: "red",
    },
    {
      name: "Kimberly",
      tags: ["Shoto", "Neutral", "Corner-Carry", "Feet"],
      overview: "Some overview on Ken",
      difficulty: "4/5",
      video: "https://www.youtube.com/watch?v=A0q2oXL0G74",
      notablePlayers: ["Diaphone"],
      color: "#AA336A",
    },
  ];
  let gameInfo = {
    mainInfo: "Street Fighter 6 is ...",
    datePublished: "2023",
    publisher: "Capcom",
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
        <div
          className="column left"
          style={{ borderColor: selectedCharInfo?.color || "#555" }}
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
          />
        </div>
      </div>
    </>
  );
};

// need to be able to separate left and right content; left content should be scrollable and right content should be static
