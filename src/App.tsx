import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "@fontsource/exo";
import "@fontsource/exo/700.css";
import "./App.css"; // Optional: for global styles

function App() {
  let gameList = ["Street Fighter 6", "Guilty Gear Strive", "..."];
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedGameContent, setGameContent] = useState<string>("");
  const handleClearSection = () => {
    setSelectedGame("");
    setSelectedIndex(null);
    setGameContent("");
  };
  const handleSelectItem = (item: string, index: number) => {
    console.log(item);
    setSelectedGame(item);
    setSelectedIndex(index);
    setGameContent(item);
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
        selectedGameContent={selectedGameContent}
        onClearSection={handleClearSection}
      />
    </div>
  );
}

export default App;

// find out and figure out how to make nameTag text center on the right side of li justify right + justify center? idk
