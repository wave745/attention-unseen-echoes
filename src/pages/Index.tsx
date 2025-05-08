
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlitchText from "@/components/GlitchText";
import GlitchOverlay from "@/components/GlitchOverlay";
import TerminalText from "@/components/TerminalText";
import { cn } from "@/lib/utils";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer1 = setTimeout(() => setShowTagline(true), 3000);
    const timer2 = setTimeout(() => setShowEnter(true), 5000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  
  const handleIntroSkip = () => {
    setIntroComplete(true);
  };
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cyber-black">
      <GlitchOverlay intensity="high" />
      
      <div className="z-10 flex flex-col items-center justify-center text-center p-4">
        <GlitchText 
          text="ATTENTION" 
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-wider mb-4 text-cyber-purple"
          glitchInterval={2000}
        />
        <GlitchText 
          text="ERA" 
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wider mb-8 text-cyber-blue"
          glitchInterval={2500}
        />
        
        {showTagline && (
          <TerminalText 
            text="You are not the user. You are the used." 
            className="text-lg sm:text-xl md:text-2xl mb-12 text-cyber-light"
            typingSpeed={40}
          />
        )}
        
        {showEnter && (
          <div 
            className={cn(
              "cyber-button text-lg border-cyber-red hover:border-cyber-blue cursor-pointer",
              "transition-opacity duration-1000",
              showEnter ? "opacity-100" : "opacity-0"
            )}
            onClick={() => handleNavigate("/decode")}
          >
            <span className="text-cyber-red">ENTER</span>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-4 left-4 z-20">
        <TerminalText 
          text="Attention is the new control." 
          className="text-xs opacity-70"
          typingSpeed={30}
        />
      </div>
      
      <div className="absolute top-4 left-4 z-20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyber-red animate-pulse"></div>
          <TerminalText 
            text="YOU ARE BEING WATCHED" 
            className="text-xs text-cyber-red"
            typingSpeed={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
