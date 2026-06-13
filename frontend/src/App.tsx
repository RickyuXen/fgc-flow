import { useEffect, useState } from "react";
import { VolumeProvider } from "./components/VolumeContext";
import { VolumeSlider } from "./components/VolumeSlider";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { getGames } from "./api/client";
import type { GameSummary } from "./api/types";
import "./App.css";

function App() {
  const [games, setGames] = useState<GameSummary[]>([]);
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [selectedSlug, setSelectedSlug] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isSidebarOpen, setSideBar] = useState<boolean>(false);

  useEffect(() => {
    getGames()
      .then(setGames)
      .catch((error) => console.error("Failed to load games:", error));
  }, []);

  const handleClearSection = () => {
    setSelectedGame("");
    setSelectedSlug("");
    setSelectedIndex(null);
  };

  const handleSelectItem = (item: string, slug: string, index: number) => {
    if (selectedGame === item) {
      console.log("You've selected the same game");
    } else {
      setSelectedGame(item);
      setSelectedSlug(slug);
      setSelectedIndex(index);
    }
  };

  const toggleSidebar = () => {
    setSideBar(!isSidebarOpen);
  };

  return (
    <div className="App">
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>
      <Sidebar
        games={games}
        onSelectItem={handleSelectItem}
        selectedIndex={selectedIndex}
        isOpen={isSidebarOpen}
      />
      <VolumeProvider>
        <MainContent
          selectedGame={selectedGame}
          selectedSlug={selectedSlug}
          onClearSection={handleClearSection}
        />
        <VolumeSlider />
      </VolumeProvider>
    </div>
  );
}

export default App;
