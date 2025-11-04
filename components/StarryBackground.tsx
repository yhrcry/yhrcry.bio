"use client";
import { useEffect, useState } from "react";

export default function StarryBackground() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const totalStars = 150;
    const starElements = Array.from({ length: totalStars }, (_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full opacity-70"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animation: `twinkle ${2 + Math.random() * 3}s infinite ease-in-out`
        }}
      />
    ));
    setStars(starElements);
  }, []);

  return <div className="absolute inset-0 overflow-hidden">{stars}</div>;
}
