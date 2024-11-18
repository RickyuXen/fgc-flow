import { useState, useEffect } from "react";

interface SidebarProps {
  gameTitle: string[];
  selectedIndex: number | null;
  onSelectItem: (gameTitle: string, index: number) => void;
  isOpen: boolean; // New prop for controlling visibility
}

const Sidebar = ({
  gameTitle,
  selectedIndex,
  onSelectItem,
  isOpen,
}: SidebarProps) => {
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
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search input
        style={{
          width: "80%",
          padding: "0.4vw",
          marginLeft: "1.5vw",
          marginBottom: "-1vh",
          borderRadius: "16px",
          border: "1px solid #ccc",
          textAlign: "center",
        }}
      />
      <h2>Games</h2>
      {filteredTitles.length === 0 ? (
        <p>No matching games found.</p>
      ) : (
        <ul>
          {filteredTitles.map((title) => (
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
