import "../components/gameContent.css";
import { Characters } from "../components/Characters";
import { RightContent } from "../components/RightContent";
import { useState } from "react";
// character images
import solImage from "../assets/GGST/sol.png";
import kyImage from "../assets/GGST/ky.png";
import mayImage from "../assets/GGST/may.png";
import axlImage from "../assets/GGST/axl.png";
import chippImage from "../assets/GGST/chipp.png";
import potImage from "../assets/GGST/pot.png";
import faustImage from "../assets/GGST/faust.png";
import milImage from "../assets/GGST/millia.png";
import zatoImage from "../assets/GGST/zato.png";
import ramImage from "../assets/GGST/ram.png";
import leoImage from "../assets/GGST/leo.png";
import nagoImage from "../assets/GGST/nago.png";
import gioImage from "../assets/GGST/gio.png";
import anjiImage from "../assets/GGST/anji.png";
import inoImage from "../assets/GGST/ino.png";
import goldImage from "../assets/GGST/gold.png";
import jackoImage from "../assets/GGST/jacko.png";
import hcImage from "../assets/GGST/hc.png";
import baikenImage from "../assets/GGST/baiken.png";
import testImage from "../assets/GGST/test.png";
import brisketImage from "../assets/GGST/brisket.png";
import sinImage from "../assets/GGST/sin.png";
import bedImage from "../assets/GGST/bed.png";
import asukaImage from "../assets/GGST/asuka.png";
import johnImage from "../assets/GGST/johnny.png";
import elpheltImage from "../assets/GGST/elphelt.png";
import abaImage from "../assets/GGST/aba.png";
import slayerImage from "../assets/GGST/slayer.png";
import dizzyImage from "../assets/GGST/dizzy.png";
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
      name: "Sol",
      image: solImage,
    },
    {
      name: "Ky",
      image: kyImage,
    },
    {
      name: "May",
      image: mayImage,
    },
    {
      name: "Axl",
      image: axlImage,
    },
    {
      name: "Chipp",
      image: chippImage,
    },
    {
      name: "Potemkin",
      image: potImage,
    },
    {
      name: "Faust",
      image: faustImage,
    },
    {
      name: "Millia",
      image: milImage,
    },
    {
      name: "Zato-1",
      image: zatoImage,
    },
    {
      name: "Ramlethal",
      image: ramImage,
    },
    {
      name: "Leo",
      image: leoImage,
    },
    {
      name: "Nagoriyuki",
      image: nagoImage,
    },
    {
      name: "Giovanna",
      image: gioImage,
    },
    {
      name: "Anji",
      image: anjiImage,
    },
    {
      name: "I-No",
      image: inoImage,
    },
    {
      name: "Goldlewis",
      image: goldImage,
    },
    {
      name: "Jack-O'",
      image: jackoImage,
    },
    {
      name: "Happy Chaos",
      image: hcImage,
    },
    {
      name: "Baiken",
      image: baikenImage,
    },
    {
      name: "Testament",
      image: testImage,
    },
    {
      name: "Bridget",
      image: brisketImage,
    },
    {
      name: "Sin",
      image: sinImage,
    },
    {
      name: "Bedman?",
      image: bedImage,
    },
    {
      name: "Asuka R#",
      image: asukaImage,
    },
    {
      name: "Johnny",
      image: johnImage,
    },
    {
      name: "Elphelt",
      image: elpheltImage,
    },
    {
      name: "A.B.A",
      image: abaImage,
    },
    {
      name: "Slayer",
      image: slayerImage,
    },
    {
      name: "Dizzy",
      image: dizzyImage,
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
              fontSize: "3vh", // adjust values based on font
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
