import React from "react";
import BottomLinks from "./BottomLinks";
import { SF6Content } from "./SF6Content";
import { GGSTContent } from "./GGSTContent";

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
      default:
        return <p>Error: Section not found.</p>;
    }
  };

  return <div className="section">{renderContent()}</div>;
};

export default Section;
