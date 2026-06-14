import Section from "./Section";
import { PunchSparks, punchStyle } from "./PunchReveal";
import "./homePage.css";

interface MainProps {
  selectedGame: string;
  selectedSlug: string;
  onClearSection: () => void;
  animateHomeIntro: boolean;
  onHomeIntroComplete: () => void;
}

export const MainContent = (props: MainProps) => {
  const animateHeader = props.animateHomeIntro;

  return (
    <div className="main-content">
      <div className="header" onClick={props.onClearSection}>
        <span
          className={`punch-line header__title ${animateHeader ? "" : "punch-line--static"}`}
          style={punchStyle(0, animateHeader)}
        >
          {animateHeader && <PunchSparks count={12} />}
          <span className="punch-line__text">FGC-FLOW</span>
        </span>
      </div>
      <Section
        title={props.selectedGame || "About"}
        slug={props.selectedSlug}
        animateHomeIntro={props.animateHomeIntro}
        onHomeIntroComplete={props.onHomeIntroComplete}
      />
      <Section title="Links" slug="" />
    </div>
  );
};

export default MainContent;
