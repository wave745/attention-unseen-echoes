
import React, { useState } from "react";
import TerminalText from "./TerminalText";
import { cn } from "@/lib/utils";

interface LorePieceProps {
  title: string;
  content: string;
  type: "surveillance" | "report" | "prophecy";
  className?: string;
}

const LorePiece = ({ title, content, type, className }: LorePieceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const typeStyles = {
    surveillance: "border-cyber-red",
    report: "border-cyber-blue",
    prophecy: "border-cyber-purple",
  };
  
  const typeIcons = {
    surveillance: "👁️",
    report: "📄",
    prophecy: "🔮",
  };
  
  const handleReveal = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => setIsRevealed(true), 500);
    } else {
      setIsRevealed(false);
      setTimeout(() => setIsOpen(false), 500);
    }
  };
  
  return (
    <div 
      className={cn(
        "glitch-container bg-cyber-dark bg-opacity-90 p-4 border-l-4",
        typeStyles[type],
        "transition-all duration-300",
        className
      )}
    >
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={handleReveal}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{typeIcons[type]}</span>
          <h3 className="font-mono text-lg font-bold text-cyber-light">{title}</h3>
        </div>
        <span className="text-cyber-light">{isOpen ? "[-]" : "[+]"}</span>
      </div>
      
      {isOpen && (
        <div 
          className={cn(
            "mt-4 transition-all duration-500 overflow-hidden",
            isRevealed ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {isRevealed && (
            <TerminalText 
              text={content} 
              className="text-sm md:text-base"
              typingSpeed={20}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LorePiece;
