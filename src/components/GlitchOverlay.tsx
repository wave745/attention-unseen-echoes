
import React, { useEffect, useState } from "react";

interface GlitchOverlayProps {
  intensity?: "low" | "medium" | "high";
}

const GlitchOverlay = ({ intensity = "medium" }: GlitchOverlayProps) => {
  const [glitchActive, setGlitchActive] = useState(false);
  
  useEffect(() => {
    const intensityValues = {
      low: { minInterval: 5000, maxInterval: 10000, duration: 300 },
      medium: { minInterval: 3000, maxInterval: 7000, duration: 500 },
      high: { minInterval: 1000, maxInterval: 4000, duration: 700 }
    };
    
    const { minInterval, maxInterval, duration } = intensityValues[intensity];
    
    const triggerGlitch = () => {
      setGlitchActive(true);
      
      setTimeout(() => {
        setGlitchActive(false);
      }, duration);
    };
    
    // Initial glitch
    triggerGlitch();
    
    // Random interval glitches
    const intervalId = setInterval(() => {
      const randomInterval = Math.random() * (maxInterval - minInterval) + minInterval;
      
      setTimeout(() => {
        triggerGlitch();
      }, randomInterval);
    }, maxInterval);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [intensity]);
  
  return (
    <>
      <div className="noise"></div>
      <div className="scanline animate-scan"></div>
      
      {glitchActive && (
        <>
          <div className="absolute inset-0 bg-cyber-red bg-opacity-5 z-10 animate-glitch-h"></div>
          <div className="absolute inset-0 bg-cyber-blue bg-opacity-5 z-10 animate-glitch-v"></div>
        </>
      )}
    </>
  );
};

export default GlitchOverlay;
