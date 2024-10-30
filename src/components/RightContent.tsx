import "./gameContent.css";
import "../fonts.css";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";
import oneStar from "../assets/stars/oneStar.png";

interface CharacterInfo {
  name: string;
  tags: string[];
  overview: string;
  resources?: string[];
  difficulty: string;
  video: string;
  color?: string;
  notablePlayers: string[];
}

interface GameInfo {
  title: string;
  mainInfo: string;
  datePublished: string;
  publisher: string;
  video: string;
  fontStyle?: string;
  fontSize?: string;
}

interface RightContentProps {
  CharacterInfo: CharacterInfo | null;
  GameInfo: GameInfo;
  clearCharacterInfo?: () => void;
}

export const RightContent = (props: RightContentProps) => {
  // Function to create resources link with just the website name
  const createResourceLinks = () => {
    return props.CharacterInfo?.resources?.map((link, index) => {
      // Clean up the display text by removing "https://www.", "wiki.", and anything after ".com" or ".gg"
      const displayText = link
        .replace(/^https?:\/\/(www\.)?/, "")
        .replace(/^wiki\./, "")
        .replace(/\.com.*$/, "")
        .replace(/\.gg.*$/, "");

      return (
        <li key={index}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {displayText}
          </a>
        </li>
      );
    });
  };
  // obtain star image, create array of star image
  const renderStars = () => {
    const difficulty = props.CharacterInfo?.difficulty || "0/5";
    const starCount = parseInt(difficulty[0], 10);

    return Array(starCount)
      .fill(null)
      .map((_, index) => (
        <img
          key={index}
          src={oneStar}
          alt={`star-${index + 1}`}
          style={{
            width: "9.6vh",
            height: "9.1vh",
            marginRight: "0.5vh",
          }}
        />
      ));
  };
  return (
    <AnimatePresence>
      {props.CharacterInfo ? (
        <>
          <motion.div
            key="video-content"
            initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
            animate={{ opacity: 1, x: 0 }} // Animate to fully visible position
            exit={{ opacity: 0, x: -200 }} // Exit to the left
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="video-content" // Apply CSS class
            style={{
              fontFamily: `${props.GameInfo.fontStyle}, sans-serif`,
              fontSize: `${props.GameInfo.fontSize}`,
              letterSpacing: "0.125vh",
            }}
          >
            <div className="video-container">
              <ReactPlayer
                url={props.CharacterInfo.video}
                controls={false}
                loop
                width="62.5vh"
                height="35.1vh"
                playing
                style={{
                  borderRight: "0.741vh solid #555",
                  borderLeft: "0.741vh solid #555",
                  borderTop: "0.741vh solid #555",
                  borderBottom: "0.741vh solid #555",
                  borderRadius: "1.481vh",
                  borderColor: props.CharacterInfo.color
                    ? props.CharacterInfo.color
                    : "#555",
                }}
              />
            </div>
            <div className="values-under-video">
              <div className="tags-under-video">
                {props.CharacterInfo.tags.map((tags) => {
                  return (
                    <li
                      className="listTags"
                      style={
                        {
                          "--active-color":
                            props.CharacterInfo?.color || "rgb(121, 238, 121)",
                        } as React.CSSProperties
                      }
                    >
                      {tags}
                    </li>
                  );
                })}
              </div>
              <div className="difficulty-under-video">
                <div style={{ marginBottom: "1vh" }}>Difficulty:</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {renderStars()}
                </div>
              </div>
              <div
                className="resources-under-video"
                style={{ borderColor: props.CharacterInfo?.color || "#555" }}
              >
                <p
                  style={{
                    marginBottom: "1.4vh",
                    fontSize: "1.5vw",
                    marginTop: "1.2vh",
                  }}
                >
                  {props.CharacterInfo.name} Resources :
                </p>
                <ul className="resource-links">{createResourceLinks()}</ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            key="character-info"
            initial={{ opacity: 0, x: 200 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Animate to fully visible position
            exit={{ opacity: 0, x: 200 }} // Exit to the right
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="characters-information" // Apply CSS class
            style={{
              fontFamily: `${props.GameInfo.fontStyle}, sans-serif`,
              fontSize: `${props.GameInfo.fontSize}`,
              letterSpacing: "0.125vh",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "0vh",
                marginTop: "0vh",
                color: `${props.CharacterInfo.color}`,
                fontSize: "2.5em",
                textTransform: "uppercase",
              }}
            >
              {props.CharacterInfo.name}
            </h2>
            <p>Overview: {props.CharacterInfo.overview}</p>
            <p>Difficulty: {props.CharacterInfo.difficulty}</p>
            <p>
              Notable Players: {props.CharacterInfo.notablePlayers.join(", ")}
            </p>
            <button onClick={props.clearCharacterInfo}>
              Back to {props.GameInfo.title}
            </button>
          </motion.div>
        </>
      ) : (
        <motion.div>
          <ReactPlayer
            url={props.GameInfo.video}
            controls={false}
            loop
            width="58.025vw"
            height="63vh"
            playing
            style={{
              borderRight: "0.741vh solid #555",
              borderLeft: "0.741vh solid #555",
              borderTop: "0.741vh solid #555",
              borderBottom: "0.741vh solid #555",
              borderRadius: "1.481vh",
              marginLeft: "1vw",
            }}
          />
          <div className="game-mainpage">
            <p>{props.GameInfo.mainInfo}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
