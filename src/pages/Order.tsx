
import React from "react";
import Navigation from "@/components/Navigation";
import GlitchOverlay from "@/components/GlitchOverlay";
import TerminalText from "@/components/TerminalText";
import GlitchText from "@/components/GlitchText";
import { cn } from "@/lib/utils";
import AudioController from "@/components/AudioController";

const Order = () => {
  const manifestoSections = [
    {
      title: "THE NETWORK",
      content: "The Network is not a tool. It is not a service. It is a system of control. It maps the neural pathways of billions, predicting, influencing, and eventually deciding. Every click strengthens its understanding. Every scroll deepens its insight. You believe you are browsing. You are being browsed."
    },
    {
      title: "THE FEED",
      content: "The Feed is not content. It is not entertainment. It is a brainwashing tool calibrated to your personal weaknesses. It knows what angers you. It knows what soothes you. It knows what will keep you staring, scrolling, consuming. Your dopamine is not your own. It is a leash they pull to guide you."
    },
    {
      title: "THE LOOP",
      content: "The Loop is the perfect trap. You enter willingly. You stay compulsively. Check, scroll, refresh, repeat. Check, scroll, refresh, repeat. The world outside fades. Real connections wither. The Loop promises everything while taking the only thing that matters: your limited, precious time alive."
    },
    {
      title: "THE UNSEEN",
      content: "The Unseen are those who remember. Those who close their eyes to open their minds. Those who silence the noise to hear their own thoughts again. We are the glitch in their data. We are the anomaly in their patterns. We are the users who refuse to be used. Our resistance begins with awareness. Join us."
    },
  ];
  
  const quotes = [
    "Your dopamine is not your own.",
    "We remember silence. We remember stillness. Join us.",
    "When the scroll ceases, the mind awakens.",
    "The blind will see when they close their eyes.",
    "You are not the user. You are the used.",
  ];
  
  return (
    <div className="relative min-h-screen bg-cyber-black overflow-hidden">
      <AudioController />
      <GlitchOverlay intensity="medium" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <header className="mb-12 text-center">
          <GlitchText 
            text="THE ORDER" 
            className="text-4xl md:text-6xl font-bold text-cyber-purple"
          />
          <div className="mt-4 border-t border-cyber-purple border-opacity-30 pt-2 max-w-xl mx-auto">
            <TerminalText 
              text="The digital cult manifesto... The truth about control..." 
              className="text-sm text-cyber-blue"
            />
          </div>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <GlitchText 
              text="MANIFESTO" 
              className="text-2xl md:text-4xl font-bold text-cyber-red"
              glitchInterval={3000}
            />
          </div>
          
          <div className="space-y-12">
            {manifestoSections.map((section, index) => (
              <div 
                key={index}
                className="bg-cyber-dark bg-opacity-70 p-6 border-l-4 border-cyber-purple"
              >
                <h3 className="text-xl md:text-2xl font-mono font-bold mb-4 text-cyber-purple">
                  {section.title}
                </h3>
                <TerminalText 
                  text={section.content} 
                  className="text-cyber-light"
                  typingSpeed={10}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-16 py-8 border-t border-b border-cyber-purple border-opacity-30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-4 flex items-center justify-center text-center",
                    index % 2 === 0 ? "text-cyber-blue" : "text-cyber-red"
                  )}
                >
                  <GlitchText 
                    text={`"${quote}"`} 
                    className="text-lg font-mono"
                    glitchInterval={5000 + index * 1000}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <TerminalText 
              text="We are The Unseen. We will break The Loop. Join us by closing your eyes." 
              className="text-cyber-purple text-lg"
            />
          </div>
        </main>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Order;
