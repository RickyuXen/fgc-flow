import "./gameContent.css";
import { Characters } from "./Characters";
import { useState } from "react";
import solImage from "../assets/GGST/SolBadguy.png";

export const GGSTContent = () => {
  // Characters in the game and images
  let characters = [
    {
      name: "Sol Badguy",
      image: solImage,
    },
  ];
  const [selectedChar, setSelectedChar] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleSelectChar = (char: string, index: number) => {
    console.log(char);
    setSelectedChar(char);
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="container">
        <div className="column left">
          Left Content (25%) component of lists of title characters that can
          interact; need usestate as well for this page to determine if one is
          selected
          <Characters
            characters={characters}
            selectedCharacter={selectedIndex}
            onSelectChar={handleSelectChar}
          />
        </div>
        <div className="column right">
          Right Content (75%) Content determined by usestate?
        </div>
      </div>
    </>
  );
};
