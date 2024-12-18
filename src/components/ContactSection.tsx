import { useState } from "react";

export const ContactSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div style={{ marginLeft: "7vw", marginRight: "7vw" }}>
      <h2>Contact to help out or give suggestions:</h2>
      {!isRevealed ? (
        <button
          onClick={handleReveal}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#B20CD9",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reveal Email
        </button>
      ) : (
        <a
          href="mailto:machsending@gmail.com"
          style={{ fontSize: "1.2rem", color: "#007BFF" }}
        >
          machsending@gmail.com
        </a>
      )}
    </div>
  );
};

export default ContactSection;
