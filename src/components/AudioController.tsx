
import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AudioController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio elements for background sounds
    const ambientAudio = new Audio();
    ambientAudio.src = "https://cdn.freesound.org/previews/451/451402_9159316-lq.mp3"; // Low drone ambient
    ambientAudio.loop = true;
    ambientAudio.volume = 0.3;
    
    const glitchAudio = new Audio();
    glitchAudio.src = "https://cdn.freesound.org/previews/533/533431_5312929-lq.mp3"; // Digital glitch sounds
    glitchAudio.loop = true;
    glitchAudio.volume = 0.1;
    
    // Composite audio using AudioContext
    const audioContext = new AudioContext();
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.5;
    
    audioRef.current = ambientAudio;
    
    // Play random glitch sounds occasionally
    const playRandomGlitchSound = () => {
      if (!isPlaying) return;
      
      glitchAudio.currentTime = Math.random() * (glitchAudio.duration || 10);
      glitchAudio.play()
        .then(() => {
          setTimeout(() => {
            glitchAudio.pause();
          }, 1000 + Math.random() * 2000);
        })
        .catch(error => console.error("Failed to play glitch audio:", error));
    };
    
    let glitchInterval: number;
    
    if (isPlaying) {
      ambientAudio.play()
        .catch(error => {
          console.error("Failed to play ambient audio:", error);
          setIsPlaying(false);
        });
        
      glitchInterval = window.setInterval(playRandomGlitchSound, 3000 + Math.random() * 5000);
    } else {
      ambientAudio.pause();
      glitchAudio.pause();
    }
    
    return () => {
      ambientAudio.pause();
      glitchAudio.pause();
      clearInterval(glitchInterval);
    };
  }, [isPlaying]);
  
  return (
    <button 
      onClick={() => setIsPlaying(!isPlaying)} 
      className="fixed top-4 right-4 z-50 bg-cyber-dark bg-opacity-70 p-2 border border-cyber-purple border-opacity-40 rounded-full"
      aria-label={isPlaying ? "Mute audio" : "Play audio"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-cyber-blue" />
      ) : (
        <VolumeX className="w-5 h-5 text-cyber-purple" />
      )}
    </button>
  );
};

export default AudioController;
