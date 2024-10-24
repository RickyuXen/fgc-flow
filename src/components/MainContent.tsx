import Section from "./Section";

interface MainProps {
  selectedGame: string;
  selectedGameContent: string;
  onClearSection: () => void;
}

const MainContent = (props: MainProps) => {
  return (
    <div className="main-content">
      <div className="header" onClick={props.onClearSection}>
        FGC-FLOW
      </div>
      <Section title={props.selectedGame || "About"}></Section>
      <Section title="Links"></Section>
    </div>
  );
};

export default MainContent;
