import React from "react";

interface SidebarProps {
  gameTitle: string[];
  selectedIndex: number | null;
  onSelectItem: (gameTitle: string, index: number) => void;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search"
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
      <ul>
        {props.gameTitle.map((gameTitle, index) => {
          return (
            <li
              className={props.selectedIndex === index ? "active" : ""}
              key={gameTitle}
              onClick={() => {
                props.onSelectItem(gameTitle, index);
              }}
            >
              {gameTitle}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
