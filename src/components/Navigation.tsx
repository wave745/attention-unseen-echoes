
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GlitchText from "./GlitchText";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const location = useLocation();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  const navItems = [
    { name: "DECODE", path: "/decode" },
    { name: "SUBMIT", path: "/submit" },
    { name: "OBSERVE", path: "/observe" },
    { name: "THE ORDER", path: "/order" }
  ];
  
  return (
    <nav className={cn("fixed bottom-8 left-0 right-0 z-50 flex justify-center", className)}>
      <div className="glitch-container bg-cyber-dark bg-opacity-70 backdrop-blur-sm px-6 py-3 border border-cyber-purple border-opacity-40">
        <ul className="flex flex-wrap justify-center gap-2 md:gap-8">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className={cn(
                    "cyber-button text-sm md:text-base",
                    isActive ? "border-cyber-blue text-cyber-blue" : "border-cyber-purple text-cyber-purple",
                  )}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {hoverIndex === index ? (
                    <GlitchText text={item.name} isAnimated={true} />
                  ) : (
                    item.name
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
