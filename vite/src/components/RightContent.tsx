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
  pros?: string[];
  cons?: string[];
}

interface GameInfo {
  title: string;
  mainInfo: string;
  datePublished: string;
  publisher: string;
  video: string;
  fontStyle?: string;
  fontSize?: string;
  fontSizeRight?: string;
  gameLogoSize?: string[];
}

interface RightContentProps {
  CharacterInfo: CharacterInfo | null;
  GameInfo: GameInfo;
  GameLogo?: string;
  clearCharacterInfo?: () => void;
}

export const RightContent = (props: RightContentProps) => {
  const isMobile = window.innerWidth <= 700; // if on mobile, set different sizes
  // Function to create resources link with just the website name
  const createResourceLinks = () => {
    return props.CharacterInfo?.resources?.map((link, index) => {
      // Clean up the display text by removing "https://www.", "wiki.", and anything after ".com" or ".gg"
      const displayText = link
        .replace(/^https?:\/\/(www\.)?/, "")
        .replace(/^wiki\./, "")
        .replace(/\.com.*$/, "")
        .replace(/\.gg.*$/, "")
        .replace(/\.app.*$/, "");

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
            width: isMobile ? "3.2vh" : "9.6vh",
            height: isMobile ? "3.033vh" : "9.1vh",
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
                width={isMobile ? "34vh" : "62.5vh"}
                height={isMobile ? "20vh" : "35.1vh"}
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
              <motion.div
                key={"video-content"}
                initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
                animate={{ opacity: 1, x: 0 }} // Animate to fully visible position
                exit={{ opacity: 0, x: -200 }} // Exit to the left
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className="tags-under-video">
                  {props.CharacterInfo.tags.map((tags) => {
                    return (
                      <li
                        className="listTags"
                        style={
                          {
                            "--active-color":
                              props.CharacterInfo?.color ||
                              "rgb(121, 238, 121)",
                          } as React.CSSProperties
                        }
                      >
                        {tags}
                      </li>
                    );
                  })}
                </div>
              </motion.div>
              <motion.div
                key={"video-content"}
                initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
                animate={{ opacity: 1, x: 0 }} // Animate to fully visible position
                exit={{ opacity: 0, x: -200 }} // Exit to the left
                transition={{ duration: 1.25, ease: "easeInOut" }}
              >
                <div className="difficulty-under-video">
                  <div style={{ marginBottom: "1vh" }}>Difficulty to Use:</div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {renderStars()}
                  </div>
                </div>
              </motion.div>
              <motion.div
                key={"video-content"}
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              >
                <div
                  className="resources-under-video"
                  style={{ borderColor: props.CharacterInfo?.color || "#555" }}
                >
                  <p className="character-resource-label">
                    {props.CharacterInfo.name} Resources :
                  </p>
                  <ul
                    className="resource-links"
                    style={
                      {
                        "--active-color":
                          props.CharacterInfo?.color || "rgb(121, 238, 121)",
                      } as any
                    }
                  >
                    {createResourceLinks()}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Separation of left and right here */}

          <motion.div
            key="character-info"
            initial={{ opacity: 0, x: 200 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Animate to fully visible position
            exit={{ opacity: 0, x: 200 }} // Exit to the right
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="characters-information"
            style={{
              fontFamily: `${props.GameInfo.fontStyle}, sans-serif`,
              fontSize: `${props.GameInfo.fontSize}`,
              letterSpacing: "0.125vh",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "-2vh",
                marginTop: "0vh",
                color: `${props.CharacterInfo.color}`,
                fontSize: isMobile ? "7em" : "3.5em",
                textTransform: "uppercase",
              }}
            >
              {props.CharacterInfo.name}
            </h2>
            <div
              className="characters-overviews"
              style={{
                fontSize: isMobile ? "2.5em" : props.GameInfo.fontSizeRight,
              }}
            >
              <h3 style={{ textAlign: "center" }}>Overview</h3>
              <p>{props.CharacterInfo.overview}</p>
              <p>Notable Players:</p>
              {props.CharacterInfo.notablePlayers?.map((players) => {
                return <li>{players}</li>;
              })}
              <div className="character-pros">
                <h3>Pros</h3>
                {props.CharacterInfo.pros?.map((pros) => {
                  return <li>{pros}</li>;
                })}
              </div>
              <div className="character-cons">
                <h3>Cons</h3>
                {props.CharacterInfo.cons?.map((cons) => {
                  return <li>{cons}</li>;
                })}
              </div>
            </div>

            <div>
              <button onClick={props.clearCharacterInfo}>
                Back to {props.GameInfo.title}
              </button>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            key="game-video-main"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 3,
              alignItems: "center", // Center horizontally
              justifyContent: "flex-start", // Align to the top
              overflow: "auto",
              fontSize: isMobile ? "5rem" : "3rem", // text size on main page
            }}
          >
            <ReactPlayer
              className="game-video"
              url={props.GameInfo.video}
              controls={false}
              loop
              width={isMobile ? "80vw" : "54vw"}
              height={isMobile ? "25vh" : "58.6vh"}
              playing
              style={{
                justifyContent: "center",
                borderRight: "0.741vh solid #555",
                borderLeft: "0.741vh solid #555",
                borderTop: "0.741vh solid #555",
                borderBottom: "0.741vh solid #555",
                borderRadius: "1.481vh",
                borderColor: "#555",
                marginBottom: "1vh",
              }}
            />
            <motion.div
              key="game-mainpage"
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 200 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <div className="game-mainpage">
                <img
                  src={props.GameLogo}
                  alt={`${props.GameInfo.title} Logo`}
                  style={{
                    width: isMobile
                      ? props.GameInfo.gameLogoSize?.[2] || "5vw"
                      : props.GameInfo.gameLogoSize?.[0] || "10vw",
                    height: isMobile
                      ? props.GameInfo.gameLogoSize?.[3] || "5vw"
                      : props.GameInfo.gameLogoSize?.[1] || "10vw",
                  }}
                />
                <p>{props.GameInfo.mainInfo}</p>
                <p>
                  Published by {props.GameInfo.publisher} and released in{" "}
                  {props.GameInfo.datePublished}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
