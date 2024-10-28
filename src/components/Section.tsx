import React from "react";
import BottomLinks from "./BottomLinks";
import { SF6Content } from "../gameComponents/SF6Content";
import { GGSTContent } from "../gameComponents/GGSTContent";
import { TxkoContent } from "../gameComponents/TxkoContent";

interface SectionProps {
  title: string;
}

const Section = (props: SectionProps) => {
  const renderContent = () => {
    <h2>{props.title}</h2>;
    switch (props.title) {
      case "About":
        return <h2>About</h2>;
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
