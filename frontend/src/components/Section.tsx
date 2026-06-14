import BottomLinks from "./BottomLinks";
import { GameContent } from "../gameComponents/GameContent";
import HomePage from "./HomePage";

interface SectionProps {
  title: string;
  slug?: string;
  animateHomeIntro?: boolean;
  onHomeIntroComplete?: () => void;
}

const Section = (props: SectionProps) => {
  const renderContent = () => {
    switch (props.title) {
      case "About":
        return (
          <HomePage
            animate={props.animateHomeIntro ?? false}
            onIntroComplete={props.onHomeIntroComplete ?? (() => {})}
          />
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
