import { useState } from "react";
import { VolumeProvider } from "./components/VolumeContext";
import { VolumeSlider } from "./components/VolumeSlider";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css"; // Optional: for global styles

function App() {
  let gameList = ["Street Fighter 6", "Guilty Gear Strive"];
  const [selectedGame, setSelectedGame] = useState<string>(""); // selected game
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // selected game index
  const [isSidebarOpen, setSideBar] = useState<boolean>(false);
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
  const toggleSidebar = () => {
    setSideBar(!isSidebarOpen);
  };

  return (
    <div className="App">
      {/* Hamburger Button for Mobile */}
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776; {/* Unicode for hamburger icon */}
      </button>
      {/* Sidebar: Conditional rendering based on isSidebarOpen state */}
      <Sidebar
        gameTitle={gameList}
        onSelectItem={handleSelectItem}
        selectedIndex={selectedIndex}
        isOpen={isSidebarOpen} // Pass isOpen to the Sidebar
      />
      <VolumeProvider>
        <MainContent
          selectedGame={selectedGame}
          onClearSection={handleClearSection}
        />
        <VolumeSlider />
      </VolumeProvider>
    </div>
  );
}

export default App;
