
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import GlitchOverlay from "@/components/GlitchOverlay";
import TerminalText from "@/components/TerminalText";
import GlitchText from "@/components/GlitchText";
import { cn } from "@/lib/utils";
import AudioController from "@/components/AudioController";

const Observe = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [currentHeadline, setCurrentHeadline] = useState(0);
  
  const headlines = [
    "Study shows average user checks phone 96 times per day",
    "Social media companies collect 4,000 data points on each user",
    "Digital addiction rates rise 300% among youth in last decade",
    "New AI can predict user behavior with 94% accuracy",
    "Attention spans dropped 40% since introduction of smartphones",
    "Average adult spends 6.4 hours daily on screens",
    "Face scanning technologies deployed in 65 countries without consent",
    "Tech CEO admits: 'Our goal is time extraction'",
    "Content algorithms optimized for 'maximum attention capture'",
    "Children now recognize tech logos before identifying plants or animals",
  ];
  
  useEffect(() => {
    // Update time
    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);
    
    // Simulate fluctuating online users
    const usersInterval = setInterval(() => {
      const baseUsers = 4763921;
      const fluctuation = Math.floor(Math.random() * 10000);
      setOnlineUsers(baseUsers + fluctuation);
    }, 3000);
    
    // Simulate scroll depth
    const scrollInterval = setInterval(() => {
      setScrollDepth(prev => {
        const newDepth = prev + Math.floor(Math.random() * 10000);
        return newDepth > 1000000 ? 0 : newDepth;
      });
    }, 2000);
    
    // Rotate headlines
    const headlineInterval = setInterval(() => {
      setCurrentHeadline(prev => (prev + 1) % headlines.length);
    }, 5000);
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(usersInterval);
      clearInterval(scrollInterval);
      clearInterval(headlineInterval);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen bg-cyber-black overflow-hidden">
      <AudioController />
      <GlitchOverlay intensity="high" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <header className="mb-12 text-center">
          <GlitchText 
            text="OBSERVE" 
            className="text-4xl md:text-6xl font-bold text-cyber-purple"
          />
          <div className="mt-4 border-t border-cyber-purple border-opacity-30 pt-2 max-w-xl mx-auto">
            <TerminalText 
              text="Live monitoring of The Network... Real-time attention metrics..." 
              className="text-sm text-cyber-blue"
            />
          </div>
        </header>
        
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Network Time */}
          <div className="bg-cyber-dark bg-opacity-70 p-6 border border-cyber-blue border-opacity-40 glitch-container">
            <h3 className="text-cyber-blue font-mono mb-2 text-sm">NETWORK TIME</h3>
            <div className="text-4xl font-mono text-cyber-light mb-4">{currentTime}</div>
            <div className="h-2 bg-cyber-black">
              <div 
                className="h-full bg-cyber-blue animate-pulse" 
                style={{ width: `${new Date().getSeconds() / 60 * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Users Online */}
          <div className="bg-cyber-dark bg-opacity-70 p-6 border border-cyber-purple border-opacity-40 glitch-container">
            <h3 className="text-cyber-purple font-mono mb-2 text-sm">USERS CURRENTLY FEEDING THE LOOP</h3>
            <div className="text-4xl font-mono text-cyber-light mb-4 animate-text-glitch">
              {onlineUsers.toLocaleString()}
            </div>
            <div className="text-xs text-cyber-light opacity-70 font-mono">
              Attention extraction rate: MAXIMUM
            </div>
          </div>
          
          {/* Global Scroll Depth */}
          <div className="bg-cyber-dark bg-opacity-70 p-6 border border-cyber-red border-opacity-40 glitch-container">
            <h3 className="text-cyber-red font-mono mb-2 text-sm">GLOBAL SCROLL DEPTH (PIXELS)</h3>
            <div className="text-4xl font-mono text-cyber-light mb-4">
              {scrollDepth.toLocaleString()}
            </div>
            <div className="h-2 bg-cyber-black">
              <div 
                className="h-full bg-cyber-red animate-glitch-h" 
                style={{ width: `${(scrollDepth / 1000000) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Current Headlines */}
          <div className="bg-cyber-dark bg-opacity-70 p-6 border border-cyber-green border-opacity-40 glitch-container">
            <h3 className="text-cyber-green font-mono mb-2 text-sm">REALITY FEED</h3>
            <div className="h-40 overflow-hidden relative">
              <TerminalText 
                text={headlines[currentHeadline]}
                className="text-cyber-light text-xl absolute inset-0"
                key={currentHeadline}
              />
            </div>
          </div>
          
          {/* Warning Message */}
          <div className="md:col-span-2 bg-cyber-dark bg-opacity-70 p-6 border border-cyber-red border-opacity-70 glitch-container">
            <h3 className="text-cyber-red font-mono mb-2 text-lg">SYSTEM WARNING</h3>
            <TerminalText 
              text="Attention resource depletion detected. User consciousness fragmentation at critical levels. The Network requires your continued engagement. Look away at your own risk."
              className="text-cyber-light"
            />
          </div>
        </main>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Observe;
