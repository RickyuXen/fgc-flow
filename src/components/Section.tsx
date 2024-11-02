import React from "react";
import BottomLinks from "./BottomLinks";
import { SF6Content } from "../gameComponents/SF6Content";
import { GGSTContent } from "../gameComponents/GGSTContent";
import { TxkoContent } from "../gameComponents/TxkoContent";

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
          <h1 style={{ marginLeft: "7vw", marginRight: "7vw" }}>
            About:
            <br />
            <br /> FGC-FLOW was created wtih REACT.tsx, with the intention to
            centralize specific character information into a single, modernized
            website. Users can view listed games, as well as characters for
            those games along with character information and resources specific
            to those characters.
            <br /> <br />
            Note that this website was not made with mobile phones, portrait
            mode in mind. If you are using a phone, switching to landscape
            or(and) desktop view for a better experience.
            <br />
            <br />
          </h1>
        );
      case "Links":
        return <BottomLinks />;
      case "Street Fighter 6":
        return <SF6Content />;
      case "Guilty Gear Strive":
        return <GGSTContent />;
      case "2XKO":
        return <TxkoContent />;
      default:
        return <p>Error: Section not found.</p>;
    }
  };
  return <div className="section">{renderContent()}</div>;
};

export default Section;
