import { useLayoutEffect, useRef } from "react";
import "./gameContent.css";

interface CharacterProps {
  characters: {
    name: string;
    image: string;
  }[];
  selectedCharacter: number | null;
  onSelectChar: (character: string, index: number) => void;
}

const MIN_NAME_FONT_PX = 8;

function fitCharacterNameFontSize(list: HTMLUListElement) {
  const tags = list.querySelectorAll<HTMLElement>(".nameTag");
  if (!tags.length) return;

  list.style.removeProperty("--char-name-font-size");

  const applySize = (fontSizePx: number) => {
    list.style.setProperty("--char-name-font-size", `${fontSizePx}px`);
  };

  const allFit = () =>
    Array.from(tags).every((tag) => {
      const container = tag.parentElement;
      if (!container) return true;
      return tag.scrollWidth <= container.clientWidth + 1;
    });

  const maxPx = parseFloat(window.getComputedStyle(tags[0]).fontSize) || 12.8;
  applySize(maxPx);

  if (allFit()) return;

  let lo = MIN_NAME_FONT_PX;
  let hi = maxPx;

  while (hi - lo > 0.5) {
    const mid = (lo + hi) / 2;
    applySize(mid);
    if (allFit()) lo = mid;
    else hi = mid;
  }

  applySize(lo);
}

export const Characters = (props: CharacterProps) => {
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || props.characters.length === 0) return;

    const measure = () => fitCharacterNameFontSize(list);

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(list);

    const onLoad = () => measure();
    window.addEventListener("load", onLoad);
    document.fonts?.ready.then(measure).catch(() => {});

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, [props.characters, props.selectedCharacter]);

  return (
    <div className="characters-list">
      <ul ref={listRef}>
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
