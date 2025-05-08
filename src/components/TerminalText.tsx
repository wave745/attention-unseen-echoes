
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TerminalTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  showCursor?: boolean;
  startDelay?: number;
  onComplete?: () => void;
}

const TerminalText = ({
  text,
  className,
  typingSpeed = 50,
  showCursor = true,
  startDelay = 0,
  onComplete,
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: number;
    let charIndex = 0;
    let interval: number;

    // Reset when text changes
    setDisplayedText("");
    setIsTyping(false);
    
    timeout = window.setTimeout(() => {
      setIsTyping(true);
      
      interval = window.setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedText(text.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      }, typingSpeed);
    }, startDelay);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, typingSpeed, startDelay, onComplete]);
  
  return (
    <div className={cn("terminal-text font-mono", className)}>
      {displayedText}
      {(isTyping || showCursor) && <span className="terminal-cursor"></span>}
    </div>
  );
};

export default TerminalText;
