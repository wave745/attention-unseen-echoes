
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  isAnimated?: boolean;
  glitchInterval?: number;
  children?: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
}

const GlitchText = ({
  text,
  className,
  isAnimated = true,
  glitchInterval = 3000,
  children,
  tag: Tag = "div",
}: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    if (!isAnimated) return;
    
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
    let interval: number;
    let timeout: number;
    
    const runGlitch = () => {
      let iterations = 0;
      const maxIterations = 10;
      
      clearInterval(interval);
      
      interval = window.setInterval(() => {
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          return;
        }
        
        setDisplayText(
          text
            .split("")
            .map((char, idx) => {
              if (Math.random() < 0.1) {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
              }
              return char;
            })
            .join("")
        );
        
        iterations += 1;
      }, 50);
    };
    
    runGlitch();
    
    if (glitchInterval > 0) {
      timeout = window.setTimeout(() => {
        const intervalId = window.setInterval(() => {
          runGlitch();
        }, glitchInterval);
        
        return () => clearInterval(intervalId);
      }, 1000);
    }
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, isAnimated, glitchInterval]);
  
  return (
    <Tag 
      className={cn("glitch-text", 
        isAnimated && "animate-text-glitch", 
        className
      )} 
      data-text={text}
    >
      {children || displayText}
    </Tag>
  );
};

export default GlitchText;
