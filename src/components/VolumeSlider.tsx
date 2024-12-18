import React from "react";
import { useVolume } from "./VolumeContext";

// Volume slider component
export function VolumeSlider() {
  const { volume, setVolume } = useVolume();

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value)); // Update volume (0 to 1)
  };

  return (
    <div
      className="volume-container"
      style={{
        position: "fixed", // Fixes the position relative to the viewport
        bottom: "1em", // Distance from the bottom of the page
        right: "1em", // Distance from the right of the page
        backgroundColor: "#1c1c1c",
        padding: "0.5em 1em",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <label htmlFor="volume-slider">Volume:</label>
      <input
        id="volume-slider"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        style={{
          marginLeft: "1em",
          appearance: "none",
          width: "150px",
          height: "8px",
          backgroundColor: "#ddd",
          borderRadius: "20px",
          outline: "none",
        }}
      />
    </div>
  );
}
