import "./gameContent.css";

interface CharacterProps {
  characters: {
    name: string;
    image: string;
  }[];
  selectedCharacter: number | null;
  onSelectChar: (character: string, index: number) => void;
}

export const Characters = (props: CharacterProps) => {
  return (
    <div className="characters-list">
      <ul>
        {props.characters.map((character, index) => {
          return (
            <li
              style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem 0",
              }}
              className={props.selectedCharacter === index ? "active" : ""}
              key={character.name}
              onClick={() => {
                props.onSelectChar(character.name, index);
              }}
            >
              <img
                src={character.image}
                alt={character.name}
                style={{
                  width: "16rem",
                  height: "8rem",
                  borderRadius: "10%",
                  marginRight: "1rem",
                }}
              />
              <div className="nameTagContainer">
                <span className="nameTag">{character.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
