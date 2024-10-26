"use client";
import React, { useState } from "react";
import ProjectComponent from "./project";

const images = [
  "/project-card-1.jpeg",
  "/project-card-1.jpeg",
  "/project-card-1.jpeg",
  "/project-card-1.jpeg",
];

const ProjectSlider = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setExpandedIndex((prevIndex) => ((prevIndex ?? 0) + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleComponentClick = (index) => {
    if (index === expandedIndex) return;
    if (!isExpanding) {
      setIsExpanding(true);
      setExpandedIndex(index);
      const timeoutId = setTimeout(() => setIsExpanding(false), 1000);

      return () => clearTimeout(timeoutId);
    }
  };
  return (
    <div className="flex max-md:flex-col items-center justify-center md:h-[80%] w-full lg:w-[80%] mx-auto">
      {images.map((ele, index) => (
        <ProjectComponent
          key={index}
          expandedIndex={expandedIndex}
          index={index}
          image={ele}
          setExpandedIndex={() => handleComponentClick(index)}
        />
      ))}
    </div>
  );
};

export default ProjectSlider;
