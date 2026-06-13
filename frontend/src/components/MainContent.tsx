import Section from "./Section";

interface MainProps {
  selectedGame: string;
  selectedSlug: string;
  onClearSection: () => void;
}

export const MainContent = (props: MainProps) => {
  return (
    <div className="main-content">
      <div className="header" onClick={props.onClearSection}>
        FGC-FLOW
      </div>
      <Section
        title={props.selectedGame || "About"}
        slug={props.selectedSlug}
      />
      <Section title="Links" slug="" />
    </div>
  );
};

export default MainContent;
