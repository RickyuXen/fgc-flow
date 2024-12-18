import BottomLinks from "./BottomLinks";
import { SF6Content } from "../gameComponents/SF6Content";
import { GGSTContent } from "../gameComponents/GGSTContent";
import ContactSection from "./ContactSection";
// import { TxkoContent } from "../gameComponents/TxkoContent";

interface SectionProps {
  title: string;
}

// If there is incorrect information, or if you would like to
// contribute to adding information to the site, be it games or
// characters, please contact me via: discord?

const Section = (props: SectionProps) => {
  const renderContent = () => {
    <h2>{props.title}</h2>;
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
      case "Street Fighter 6":
        return <SF6Content />;
      case "Guilty Gear Strive":
        return <GGSTContent />;
      // case "2XKO":
      //   return <TxkoContent />;
      default:
        return <p>Error: Section not found.</p>;
    }
  };
  return <div className="section">{renderContent()}</div>;
};

export default Section;
