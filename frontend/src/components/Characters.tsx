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
              <div className="character-image-frame">
                <img
                  src={character.image}
                  alt={character.name}
                  className="character-image"
                />
              </div>
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
