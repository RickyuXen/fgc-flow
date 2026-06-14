import { useEffect } from "react";
import ContactSection from "./ContactSection";
import { PunchLine, punchStyle } from "./PunchReveal";
import "./homePage.css";

const INTRO_DURATION_MS = 3200;

const LINES = [
  {
    text: "Your shortcut to fighting-game character knowledge.",
    className: "home-hero__tagline",
    delay: 0.35,
  },
  {
    text: "Overviews, strengths, weaknesses, match footage, and resources — all in one place.",
    className: "home-hero__body",
    delay: 0.85,
  },
  {
    text: "Pick a game from the sidebar and select a character to dive in.",
    className: "home-hero__cta",
    delay: 1.35,
  },
  {
    text: "Best viewed in landscape or on desktop.",
    className: "home-hero__note",
    delay: 1.85,
  },
] as const;

interface HomePageProps {
  animate: boolean;
  onIntroComplete: () => void;
}

export const HomePage = ({ animate, onIntroComplete }: HomePageProps) => {
  useEffect(() => {
    if (!animate) return;
    const timer = window.setTimeout(onIntroComplete, INTRO_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [animate, onIntroComplete]);

  return (
    <div className="home-hero">
      {LINES.map((line) => (
        <PunchLine key={line.text} {...line} animate={animate} />
      ))}

      <div
        className={`home-hero__contact punch-line ${animate ? "" : "punch-line--static"}`}
        style={punchStyle(2.35, animate)}
      >
        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;
