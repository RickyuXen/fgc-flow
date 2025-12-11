import "../components/gameContent.css";
import { Characters } from "../components/Characters";
import { useState } from "react";
// character image imports
import ryuImage from "../assets/SF6/ryu.png";
import lukeImage from "../assets/SF6/luke.png";
import jamieImage from "../assets/SF6/jamie.png";
import chunliImage from "../assets/SF6/chunli.png";
import guileImage from "../assets/SF6/guile.png";
import kimImage from "../assets/SF6/kimberly.png";
import juriImage from "../assets/SF6/juri.png";
import kenImage from "../assets/SF6/ken.png";
import blankaImage from "../assets/SF6/blanka.png";
import dhalsimImage from "../assets/SF6/dhalsim.png";
import ehondaImage from "../assets/SF6/ehonda.png";
import deejayImage from "../assets/SF6/deejay.png";
import manonImage from "../assets/SF6/manon.png";
import marisaImage from "../assets/SF6/marisa.png";
import jpImage from "../assets/SF6/jp.png";
import zangiefImage from "../assets/SF6/zangief.png";
import lilyImage from "../assets/SF6/lily.png";
import cammyImage from "../assets/SF6/cammy.png";
import rashidImage from "../assets/SF6/rashid.png";
import akiImage from "../assets/SF6/aki.png";
import edImage from "../assets/SF6/ed.png";
import akumaImage from "../assets/SF6/akuma.png";
import mbisonImage from "../assets/SF6/mbison.png";
import terryImage from "../assets/SF6/terry.png";
// game logo import
import gameLogo from "../assets/SF6/sf6logo.png";
// json file imports
import CharacterInfos from "../data/sf6CharactersInfo.json";
import gameInfo from "../data/sf6Gameinfo.json";
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
      name: "Luke",
      image: lukeImage,
    },
    {
      name: "Jamie",
      image: jamieImage,
    },
    {
      name: "Chun-Li",
      image: chunliImage,
    },
    {
      name: "Guile",
      image: guileImage,
    },
    {
      name: "Kimberly",
      image: kimImage,
    },
    {
      name: "Juri",
      image: juriImage,
    },
    {
      name: "Ken",
      image: kenImage,
    },
    {
      name: "Blanka",
      image: blankaImage,
    },
    {
      name: "Dhalsim",
      image: dhalsimImage,
    },
    {
      name: "E. Honda",
      image: ehondaImage,
    },
    {
      name: "Dee Jay",
      image: deejayImage,
    },
    {
      name: "Manon",
      image: manonImage,
    },
    {
      name: "Marisa",
      image: marisaImage,
    },
    {
      name: "JP",
      image: jpImage,
    },
    {
      name: "Zangief",
      image: zangiefImage,
    },
    {
      name: "Lily",
      image: lilyImage,
    },
    {
      name: "Cammy",
      image: cammyImage,
    },
    {
      name: "Rashid",
      image: rashidImage,
    },
    {
      name: "A.K.I.",
      image: akiImage,
    },
    {
      name: "Ed",
      image: edImage,
    },
    {
      name: "Akuma",
      image: akumaImage,
    },
    {
      name: "M. Bison",
      image: mbisonImage,
    },
    {
      name: "Terry",
      image: terryImage,
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
