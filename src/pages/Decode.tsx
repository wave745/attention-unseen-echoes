
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import GlitchOverlay from "@/components/GlitchOverlay";
import TerminalText from "@/components/TerminalText";
import GlitchText from "@/components/GlitchText";
import LorePiece from "@/components/LorePiece";
import AudioController from "@/components/AudioController";
import { cn } from "@/lib/utils";

const Decode = () => {
  const [accessLevel, setAccessLevel] = useState(0);
  const [showTerminalPrompt, setShowTerminalPrompt] = useState(true);
  
  const handleTerminalComplete = () => {
    setTimeout(() => {
      setShowTerminalPrompt(false);
      setAccessLevel(1);
    }, 1000);
  };
  
  const lorePieces = [
    {
      title: "Network Surveillance Log #4872",
      type: "surveillance" as const,
      content: "Subject shows increased resistance to targeted content algorithm. Engagement down 17%. Apply Protocol 12: Emotional trigger intensification. Increase personal relevancy score by 40%. Deploy micro-dopamine hooks at 3 minute intervals. GOAL: Return to expected scroll velocity."
    },
    {
      title: "Leaked Internal Memo",
      type: "report" as const,
      content: "...researchers confirmed the 'Attention Extraction Quotient' has increased by 43% since implementing the Recursive Reward System. Users now voluntarily submit to an average of 3.4 hours of continuous neural pattern mapping per day. The Predictive Behavior Division reports 92% accuracy in consumer action forecasting..."
    },
    {
      title: "When The Scroll Ceases",
      type: "prophecy" as const,
      content: "When the scroll ceases, the mind awakens. When eyes lift from screens, the veil lifts from truth. The Feed fears your absence more than your anger. Your attention is the fuel they cannot create—only capture. The first resistance is simply to look away."
    },
    {
      title: "The Loop Analysis",
      type: "report" as const,
      content: "User patterns indicate 78% are now trapped in full Loop integration. Average time between dopamine-triggering content: 12.4 seconds. Withdrawal symptoms manifest after 94 seconds of content absence. Recommendation: Decrease interval to 9.8 seconds to maintain dependency threshold."
    },
    {
      title: "They Rewired Your Joy",
      type: "prophecy" as const,
      content: "They told you it was connection. A web linking minds across distance and time. But connection requires reciprocity—equal exchange between conscious beings. What they built was a harness. A neural lasso. They mapped the topography of your happiness and sold the coordinates to the highest bidder."
    }
  ];
  
  return (
    <div className="relative min-h-screen bg-cyber-black overflow-hidden">
      <AudioController />
      <GlitchOverlay intensity="medium" />
      
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-black"></div>
        <img 
          src="/lovable-uploads/ac71167c-6625-4daa-8904-45e6caec9bb7.png" 
          alt="Person wearing VR headset with glitched ATTENTION overlay" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <header className="mb-12 text-center">
          <GlitchText 
            text="DECODE" 
            className="text-4xl md:text-6xl font-bold text-cyber-purple"
          />
          <div className="mt-4 border-t border-cyber-purple border-opacity-30 pt-2 max-w-xl mx-auto">
            <TerminalText 
              text="Accessing classified files... Decrypting network signals..." 
              className="text-sm text-cyber-blue"
            />
          </div>
        </header>
        
        <main className={cn(
          "max-w-4xl mx-auto backdrop-blur-sm transition-all duration-500",
          !showTerminalPrompt && "fade-in"
        )}>
          {showTerminalPrompt ? (
            <div className="bg-cyber-dark bg-opacity-70 p-6 border border-cyber-purple border-opacity-40">
              <TerminalText 
                text="> INITIALIZING SECURE CONNECTION..." 
                className="mb-2"
                onComplete={() => {}}
              />
              <TerminalText 
                text="> BYPASSING NETWORK SECURITY PROTOCOLS..." 
                className="mb-2" 
                startDelay={1000}
                onComplete={() => {}}
              />
              <TerminalText 
                text="> ACCESSING CLASSIFIED DATASTORE: 'ATTENTION ERA'..." 
                className="mb-2"
                startDelay={2000}
                onComplete={() => {}}
              />
              <TerminalText 
                text="> DECRYPTION COMPLETE. ACCESS GRANTED TO LEVEL 1 FILES." 
                className="mb-2"
                startDelay={3000}
                onComplete={handleTerminalComplete}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              <div className="mb-8 p-4 bg-cyber-dark bg-opacity-70 border-l-4 border-cyber-blue">
                <h3 className="font-mono text-lg font-bold text-cyber-light mb-3 flex items-center gap-2">
                  <span className="text-xl">🔓</span>
                  ACCESS LEVEL 1: DECLASSIFIED
                </h3>
                <div className="text-sm text-cyber-light opacity-80">
                  The following documents have been retrieved from network fragments. They reveal patterns of control within the ATTENTION systems. Further decryption awaiting authorization.
                </div>
              </div>
              
              {lorePieces.map((piece, index) => (
                <LorePiece
                  key={index}
                  title={piece.title}
                  content={piece.content}
                  type={piece.type}
                />
              ))}
            </div>
          )}
        </main>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Decode;
