
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import GlitchOverlay from "@/components/GlitchOverlay";
import TerminalText from "@/components/TerminalText";
import GlitchText from "@/components/GlitchText";
import { cn } from "@/lib/utils";
import AudioController from "@/components/AudioController";

const Submit = () => {
  const [formData, setFormData] = useState({
    scrollHours: "",
    feelWatched: "",
    silenceFeeling: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  
  const responses = [
    "You are part of The Loop. Your attention feeds it. But you've begun to see the edges.",
    "The Network has cataloged your response. Your awareness is a threat they will neutralize.",
    "Your data signature has been identified as Potential Unseen. Remain vigilant.",
    "You feel it too. The constant tug of invisible hooks. Your resistance is stronger than you know.",
    "Scroll velocity analysis indicates growing immunity to standard dopamine triggers. You are changing.",
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a pseudo-random response based on inputs
    const seed = formData.scrollHours.length + formData.feelWatched.length + formData.silenceFeeling.length;
    const responseIndex = seed % responses.length;
    
    setResponseMessage(responses[responseIndex]);
    setSubmitted(true);
  };
  
  const resetForm = () => {
    setFormData({
      scrollHours: "",
      feelWatched: "",
      silenceFeeling: "",
    });
    setSubmitted(false);
    setResponseMessage("");
  };
  
  return (
    <div className="relative min-h-screen bg-cyber-black overflow-hidden">
      <AudioController />
      <GlitchOverlay intensity="low" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <header className="mb-12 text-center">
          <GlitchText 
            text="SUBMIT" 
            className="text-4xl md:text-6xl font-bold text-cyber-purple"
          />
          <div className="mt-4 border-t border-cyber-purple border-opacity-30 pt-2 max-w-xl mx-auto">
            <TerminalText 
              text="User tracking ritual initialized... Your data will be assessed..." 
              className="text-sm text-cyber-blue"
            />
          </div>
        </header>
        
        <main className="max-w-xl mx-auto">
          {!submitted ? (
            <form 
              onSubmit={handleSubmit}
              className="bg-cyber-dark bg-opacity-70 p-6 border border-cyber-purple border-opacity-40"
            >
              <div className="mb-6">
                <label className="block text-cyber-light mb-2 font-mono">
                  How many hours did you scroll today?
                </label>
                <input
                  type="number"
                  name="scrollHours"
                  value={formData.scrollHours}
                  onChange={handleInputChange}
                  required
                  min="0"
                  max="24"
                  step="0.5"
                  className="w-full bg-cyber-black border border-cyber-purple text-cyber-light p-3 font-mono"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-cyber-light mb-2 font-mono">
                  Do you feel watched?
                </label>
                <select
                  name="feelWatched"
                  value={formData.feelWatched}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-cyber-black border border-cyber-purple text-cyber-light p-3 font-mono"
                >
                  <option value="">Select an answer</option>
                  <option value="always">Always</option>
                  <option value="sometimes">Sometimes</option>
                  <option value="never">Never</option>
                  <option value="watching">I am the one watching</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label className="block text-cyber-light mb-2 font-mono">
                  Have you forgotten what silence feels like?
                </label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="silenceFeeling"
                      value="yes"
                      checked={formData.silenceFeeling === "yes"}
                      onChange={handleInputChange}
                      className="mr-2 accent-cyber-purple"
                      required
                    />
                    <span className="text-cyber-light font-mono">Yes, I cannot remember</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="silenceFeeling"
                      value="no"
                      checked={formData.silenceFeeling === "no"}
                      onChange={handleInputChange}
                      className="mr-2 accent-cyber-purple"
                    />
                    <span className="text-cyber-light font-mono">No, I still know silence</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="silenceFeeling"
                      value="uncertain"
                      checked={formData.silenceFeeling === "uncertain"}
                      onChange={handleInputChange}
                      className="mr-2 accent-cyber-purple"
                    />
                    <span className="text-cyber-light font-mono">I am uncertain</span>
                  </label>
                </div>
              </div>
              
              <button 
                type="submit"
                className="cyber-button w-full border-cyber-red text-cyber-red hover:text-cyber-blue hover:border-cyber-blue"
              >
                SUBMIT TO THE NETWORK
              </button>
            </form>
          ) : (
            <div className="bg-cyber-dark bg-opacity-70 p-6 border border-cyber-red border-opacity-60">
              <h3 className="text-xl text-cyber-red mb-4 font-mono">DATA ANALYSIS COMPLETE</h3>
              
              <div className="mb-6 p-4 border border-dashed border-cyber-purple">
                <TerminalText 
                  text={responseMessage}
                  className="text-cyber-light"
                />
              </div>
              
              <div className="text-cyber-light mb-6 text-sm opacity-70 font-mono">
                Your data has been stored. Your profile has been updated.
              </div>
              
              <button 
                onClick={resetForm}
                className="cyber-button w-full border-cyber-blue text-cyber-blue hover:text-cyber-purple hover:border-cyber-purple"
              >
                SUBMIT AGAIN
              </button>
            </div>
          )}
        </main>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Submit;
