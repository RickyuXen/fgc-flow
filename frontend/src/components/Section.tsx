import BottomLinks from "./BottomLinks";
import { GameContent } from "../gameComponents/GameContent";
import ContactSection from "./ContactSection";

interface SectionProps {
  title: string;
  slug?: string;
}

const Section = (props: SectionProps) => {
  const renderContent = () => {
    switch (props.title) {
      case "About":
        return (
          <div>
            <h2 style={{ margin: "0 7vw", fontSize: "2rem" }}>About:</h2>
            <div style={{ margin: "1em 7vw", fontSize: "1.5rem" }}>
              <p>
                FGC-FLOW is a modernized website built with Vite and TypeScript,
                designed to centralize character information for specific games.
                Users can browse listed games and access detailed information
                and resources about individual characters.
              </p>
              <p>
                Please note: This website is not optimized for mobile devices in
                portrait mode. For the best experience, I recommend using
                landscape mode or viewing on a desktop.
              </p>
            </div>
            <ContactSection />
          </div>
        );
      case "Links":
        return <BottomLinks />;
      default:
        if (props.slug) {
          return <GameContent slug={props.slug} />;
        }
        return <p>Error: Section not found.</p>;
    }
  };
  return <div className="section">{renderContent()}</div>;
};

export default Section;
