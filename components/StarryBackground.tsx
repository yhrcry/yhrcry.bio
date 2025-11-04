"use client";
import { useEffect, useState } from "react";

export default function StarryBackground() {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const totalStars = 150;
    const newStars = [];
    for (let i = 0; i < totalStars; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 3 + Math.random() * 4;
      newStars.push(
        <div
          key={i}
          className="star"
          style={{
            top: `${y}%`,
            left: `${x}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    }
    setStars(newStars);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ overflow: "hidden" }}
    >
      {stars}
    </div>
  );
}
