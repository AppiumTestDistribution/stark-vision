import React, { useState, useEffect } from "react";

const phrases = [
  "AI-Powered Mobile App Testing",
  "Test Mobile Apps faster, using AI",
  "Tech Agnostic, Autonomous Testing",
];

const TypewriterEffect: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentPhraseIndex >= phrases.length) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (currentText.length < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      }, 50 + Math.random() * 100); // Random delay between 50-100ms for more natural typing

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => prevIndex + 1);
        setCurrentText("");
      }, 2000); // Wait 2 seconds before starting the next phrase

      return () => clearTimeout(timeout);
    }
  }, [currentPhraseIndex, currentText]);

  return (
    <div className="h-24 flex items-center justify-center">
      <div className="text-3xl font-semibold tracking-wide bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
        {currentText}
        <span className="inline-block w-0.5 h-7 text-transparent ml-1 animate-blink bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500"></span>
      </div>
    </div>
  );
};

export default TypewriterEffect;
