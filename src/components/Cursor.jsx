import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      // Update position
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;

      // Check if hovering over a clickable element
      // This looks for any element with the 'zoom' class OR buttons/anchors
      const target = e.target;
      const isHoverable = target.closest('.zoom') || 
                          target.closest('button') || 
                          target.closest('h1') || 
                          target.closest('h2') || 
                          target.closest('a');

      if (isHoverable) {
        cursor.classList.add("hovered");
      } else {
        cursor.classList.remove("hovered");
      }
    };

    // Hide cursor when it leaves the window
    const handleMouseOut = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseOver = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseOver);
    };
  }, []);

  return <div ref={cursorRef} className="cursor" style={{ opacity: 0 }}></div>;
};

export default Cursor;