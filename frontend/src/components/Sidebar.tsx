import { useState, useEffect } from "react";
import type { GameSummary } from "../api/types";

interface SidebarProps {
  games: GameSummary[];
  selectedIndex: number | null;
  onSelectItem: (gameTitle: string, slug: string, index: number) => void;
  isOpen: boolean;
}

const Sidebar = ({
  games,
  selectedIndex,
  onSelectItem,
  isOpen,
}: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredGames, setFilteredGames] = useState<GameSummary[]>(games);

  useEffect(() => {
    setFilteredGames(
      games.filter((game) =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, games]);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
      {filteredGames.length === 0 ? (
        <p>No matching games found.</p>
      ) : (
        <ul>
          {filteredGames.map((game) => {
            const index = games.findIndex((entry) => entry.slug === game.slug);
            return (
              <li
                key={game.slug}
                className={index === selectedIndex ? "active" : ""}
                onClick={() => onSelectItem(game.title, game.slug, index)}
              >
                {game.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
