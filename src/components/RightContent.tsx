import "./gameContent.css";
import "../fonts.css";
import { motion, AnimatePresence, color } from "framer-motion";
import ReactPlayer from "react-player";

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
  mainInfo: string;
  datePublished: string;
  publisher: string;
  fontStyle?: string;
  fontSize?: string;
}

interface RightContentProps {
  CharacterInfo: CharacterInfo | null;
  GameInfo: GameInfo;
}

export const RightContent = (props: RightContentProps) => {
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
                width="62.2224vh"
                height="35vh"
                playing
              />
            </div>
            <div className="values-under-video">
              <div className="tags-under-video">
                {props.CharacterInfo.tags.join(", ")}
              </div>
              <div className="difficulty-under-video">
                {props.CharacterInfo.difficulty}
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
              }}
            >
              {props.CharacterInfo.name}
            </h2>
            <p>Overview: {props.CharacterInfo.overview}</p>
            <p>Difficulty: {props.CharacterInfo.difficulty}</p>
            <p>
              Notable Players: {props.CharacterInfo.notablePlayers.join(", ")}
            </p>
            <p>{props.CharacterInfo.resources}</p>
          </motion.div>
        </>
      ) : (
        <motion.div>
          <p>{props.GameInfo.mainInfo}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
