import React from "react";

interface PurpleCircleProps {
  size: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity?: string;
  blur?: string;
  className?: string;
}

export const PurpleCircle: React.FC<PurpleCircleProps> = ({
  size,
  top,
  bottom,
  left,
  right,
  opacity = "0.25",
  blur = "0px",
  className = "",
}) => {
  return (
    <div
      className={`absolute rounded-full bg-primary transition-all duration-700 cursor-pointer hover:scale-110 hover:opacity-80 hover:brightness-125 ${className}`}
      style={{
        width: size,
        height: size,
        top,
        bottom,
        left,
        right,
        opacity,
        zIndex: 0,
      }}
    />
  );
};

export const DecorativeCircles = () => {
  return (
    <>
      {/* Левая колонка кругов */}
      <PurpleCircle size="300px" top="-150px" left="-150px" opacity="0.3" />
      <PurpleCircle size="200px" top="30%" left="-100px" opacity="0.25" />
      <PurpleCircle size="150px" bottom="15%" left="-50px" opacity="0.35" />
      
      {/* Правая колонка кругов */}
      <PurpleCircle size="400px" top="10%" right="-200px" opacity="0.3" />
      <PurpleCircle size="250px" top="60%" right="-100px" opacity="0.35" />
      <PurpleCircle size="180px" bottom="-90px" right="15%" opacity="0.25" />
      
      {/* Центральные круги */}
      <PurpleCircle size="120px" top="40%" left="30%" opacity="0.2" />
      <PurpleCircle size="100px" bottom="20%" right="40%" opacity="0.2" />
    </>
  );
};

export const SectionDecoration = () => {
  return (
    <>
      <PurpleCircle size="150px" top="-75px" left="10%" opacity="0.35" />
      <PurpleCircle size="120px" bottom="-60px" right="20%" opacity="0.3" />
      <PurpleCircle size="80px" top="30%" right="5%" opacity="0.25" />
      <PurpleCircle size="100px" bottom="30%" left="5%" opacity="0.3" />
    </>
  );
};