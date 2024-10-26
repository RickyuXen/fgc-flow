import React, { useState, useEffect } from "react";

interface SidebarProps {
  gameTitle: string[];
  selectedIndex: number | null;
  onSelectItem: (gameTitle: string, index: number) => void;
}

const Sidebar = ({ gameTitle, selectedIndex, onSelectItem }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search input
  const [filteredTitles, setFilteredTitles] = useState<string[]>(gameTitle); // Filtered titles

  // Filter game titles based on search query
  useEffect(() => {
    setFilteredTitles(
      gameTitle.filter((title) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, gameTitle]);

  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search input
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "16px",
          marginTop: "10px",
          marginLeft: "-10px",
          border: "1px solid #ccc",
        }}
      />
      <h2>Games</h2>
      {filteredTitles.length === 0 ? (
        <p>No matching games found.</p>
      ) : (
        <ul>
          {filteredTitles.map((title, index) => (
            <li
              key={title}
              className={
                // Check if the original index matches the selectedIndex
                gameTitle.indexOf(title) === selectedIndex ? "active" : ""
              }
              onClick={() => onSelectItem(title, gameTitle.indexOf(title))} // Set correct index
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
