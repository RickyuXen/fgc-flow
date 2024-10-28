import "../components/gameContent.css";
import { Characters } from "../components/Characters";
import { useState } from "react";
import ryuImage from "../assets/SF6/ryu.png";
import kenImage from "../assets/SF6/ken.png";
import kimImage from "../assets/SF6/kimberly.png";
import solImage from "../assets/GGST/SolBadguy.png";
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
}

export const SF6Content = () => {
  // Characters in the game and images
  let characters = [
    // Values used in left-character selection
    {
      name: "Ryu",
      image: ryuImage,
      color: "grey",
    },
    {
      name: "Ken",
      image: kenImage,
      color: "red",
    },
    {
      name: "Kimberly",
      image: kimImage,
      color: "#AA336A",
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
    // all info about character, passed to right-side content
    {
      name: "Ryu",
      tags: ["Shoto", "Neutral", "Corner-Carry", "Beard"],
      overview: `Ryu retains his iconic moves, including the Hadouken (fireball), 
      Shoryuken (uppercut), and Tatsumaki Senpukyaku (hurricane kick). 
      These moves allow for effective zoning, anti-air options, and combo potential.`,
      difficulty: "2/5",
      video: "https://www.youtube.com/watch?v=-9MB38W2Gfw",
      notablePlayers: ["Paladin"],
      resources: ["https://www.streetfighter.com/6/character/ryu"],
      color: "#555",
    },
    {
      name: "Ken",
      tags: ["Shoto", "Neutral", "Corner-Carry", "Homeless", "Crypto-Bro"],
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
    // game info used for overall font and page when no character selected.
    mainInfo: "Street Fighter 6 is ...",
    datePublished: "2023",
    publisher: "Capcom",
    video: "video/sf6main",
    fontStyle: "sf6Font",
    fontSize: "1vw",
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
          />
        </div>
      </div>
    </>
  );
};
