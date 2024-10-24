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
                  marginRight: "2rem",
                  marginTop: "0.5rem",
                }}
              />
              <span className="nameTag">{character.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
