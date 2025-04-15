import React, { useEffect, useRef } from "react";

interface PurpleCircleProps {
  size: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  opacity?: string;
  blur?: string;
  className?: string;
  animationDelay?: number;
  animationDirection?: "up" | "down" | "left" | "right";
  animationDistance?: string;
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
  animationDelay = 0,
  animationDirection = "up",
  animationDistance = "20px",
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = circle.getBoundingClientRect().top + scrollTop;
      const elementVisible = 150;
      
      if (elementTop < scrollTop + windowHeight - elementVisible) {
        circle.classList.add("animate-float");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Вызовем обработчик сразу, чтобы проверить видимость при загрузке
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div
      ref={circleRef}
      className={`absolute rounded-full bg-primary transition-transform duration-1000 cursor-pointer hover:scale-110 hover:opacity-80 hover:brightness-125 ${className}`}
      style={{
        width: size,
        height: size,
        top,
        bottom,
        left,
        right,
        opacity,
        zIndex: 0,
        animationDelay: `${animationDelay}s`,
        animationDuration: "3s",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        animationTimingFunction: "ease-in-out",
      }}
    />
  );
};

export const DecorativeCircles = () => {
  return (
    <>
      {/* Левая колонка кругов - смещены внутрь, чтобы отображались полностью */}
      <PurpleCircle size="200px" top="5%" left="5%" opacity="0.3" className="animate-float" animationDelay={0} />
      <PurpleCircle size="150px" top="40%" left="10%" opacity="0.25" className="animate-float-left" animationDelay={1} />
      <PurpleCircle size="120px" bottom="10%" left="8%" opacity="0.35" className="animate-float" animationDelay={2} />
      
      {/* Правая колонка кругов - смещены внутрь */}
      <PurpleCircle size="180px" top="15%" right="7%" opacity="0.3" className="animate-float-right" animationDelay={0.5} />
      <PurpleCircle size="150px" top="60%" right="5%" opacity="0.35" className="animate-float" animationDelay={1.5} />
      <PurpleCircle size="130px" bottom="5%" right="8%" opacity="0.25" className="animate-float-right" animationDelay={2.5} />
      
      {/* Центральные круги */}
      <PurpleCircle size="100px" top="30%" left="30%" opacity="0.2" className="animate-float" animationDelay={0.7} />
      <PurpleCircle size="80px" bottom="25%" right="35%" opacity="0.2" className="animate-float-left" animationDelay={1.2} />
    </>
  );
};

export const SectionDecoration = () => {
  return (
    <>
      <PurpleCircle 
        size="150px" 
        top="5%" 
        left="5%" 
        opacity="0.35" 
        className="animate-float"
        animationDelay={0.3}
      />
      <PurpleCircle 
        size="120px" 
        bottom="5%" 
        right="5%" 
        opacity="0.3"
        className="animate-float-right"
        animationDelay={1.2}
      />
      <PurpleCircle 
        size="80px" 
        top="30%" 
        right="10%" 
        opacity="0.25"
        className="animate-float"
        animationDelay={0.8}
      />
      <PurpleCircle 
        size="100px" 
        bottom="30%" 
        left="10%" 
        opacity="0.3"
        className="animate-float-left"
        animationDelay={1.5}
      />
    </>
  );
};