import React from "react";
import { useVolume } from "./VolumeContext";

// Volume slider component
export function VolumeSlider() {
  const { volume, setVolume } = useVolume();

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value)); // Update volume (0 to 1)
  };

  return (
    <>
      <div
        className="volume-container"
        style={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
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
          className="volume-slider"
          draggable="false"
          style={{
            marginLeft: "1em",
            appearance: "none", // Removes default styles
            width: "150px",
            height: "8px",
            backgroundColor: "#ddd",
            borderRadius: "20px",
            outline: "none",
          }}
        />
      </div>
      <style>{`
        /* For Chrome, Safari, Edge */
        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background-color: #00D1D1; 
          border-radius: 50%; 
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
        }
  
        .volume-slider::-webkit-slider-thumb:hover {
          background-color: #00A3A3; /* Change color on hover */
        }
  
        /* For Firefox */
        .volume-slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background-color: #00D1D1;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
  
        /* For Internet Explorer */
        .volume-slider::-ms-thumb {
          width: 16px;
          height: 16px;
          background-color: #00D1D1;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}
