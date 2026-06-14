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
      <div className="sidebar-inner">
        <input
          type="text"
          className="sidebar-search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <h2 className="sidebar-title">Games</h2>
        {games.length === 0 ? (
          <div className="sidebar-loading">
            <div className="sidebar-spinner" aria-hidden="true" />
            <p>Loading games</p>
          </div>
        ) : filteredGames.length === 0 ? (
          <p className="sidebar-empty">No matching games found.</p>
        ) : (
          <ul className="sidebar-games">
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
    </div>
  );
};

export default Sidebar;
