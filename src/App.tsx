import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "@fontsource/exo";
import "@fontsource/exo/700.css";
import "./App.css"; // Optional: for global styles

function App() {
  let gameList = [
    "Street Fighter 6",
    "Guilty Gear Strive",
    "2XKO",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
  ];
  const [selectedGame, setSelectedGame] = useState<string>(""); // selected game
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // selected game index
  const handleClearSection = () => {
    setSelectedGame("");
    setSelectedIndex(null);
  };
  const handleSelectItem = (item: string, index: number) => {
    if (selectedGame === item) {
      // have characters.info be set to null inside game components
      console.log("You've selected the same game");
    } else {
      console.log(item);
      setSelectedGame(item);
      setSelectedIndex(index);
    }
  };

  return (
    <div className="App">
      <Sidebar
        gameTitle={gameList}
        onSelectItem={handleSelectItem}
        selectedIndex={selectedIndex}
      />
      <MainContent
        selectedGame={selectedGame}
        onClearSection={handleClearSection}
      />
    </div>
  );
}

export default App;

// find out and figure out how to make nameTag text center on the right side of li justify right + justify center? idk
