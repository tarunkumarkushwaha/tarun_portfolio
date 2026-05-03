import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < text.length) {
          // Typing
          setCurrentText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else if (isDeleting && currentIndex > 0) {
          // Deleting
          setCurrentText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else if (currentIndex === text.length) {
          // Pause at the end
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (currentIndex === 0 && isDeleting) {
          setIsDeleting(false);
        }
      },
      isDeleting ? delay / 2 : delay,
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, delay]);

  return (
    <span className="font-mono font-bold text-blue-400">
      {currentText}
      <span className="inline-block w-[3px] h-[30px] md:h-[40px] bg-blue-500 ml-1 animate-pulse align-middle" />
    </span>
  );
};

export default TypewriterEffect;
