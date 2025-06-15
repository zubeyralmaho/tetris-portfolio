'use client';

import { useState, useEffect } from 'react';
import { useTetris } from '../hooks/useTetris';
import ProfileCard from '../components/ProfileCard';
import WorkCard from '../components/WorkCard';
import ContactCard from '../components/ContactCard';
import TetrisNavigation from '../components/TetrisNavigation';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<'profile' | 'projects' | 'contact'>('profile');
  const [isLoaded, setIsLoaded] = useState(false);

  useTetris();

  useEffect(() => {
    // Tetris animasyonlarının yüklenmesi için kısa bir gecikme
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      {/* Tetris Background - back to fixed for proper animation */}
      <div className="fixed inset-0 z-0" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-4 max-h-screen">
        {isLoaded && (
          <div className="relative flex items-center justify-center w-full max-w-6xl h-full">
            {/* Card Container */}
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
              {/* Main Content Cards */}
            <div className={`transition-all duration-700 transform ${
              currentSection === 'profile' 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
            }`}>
              <ProfileCard />
            </div>

            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 transform ${
              currentSection === 'projects' 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
            }`}>
              <WorkCard />
            </div>

            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 transform ${
              currentSection === 'contact' 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
            }`}>
              <ContactCard />
            </div>
            </div>

            {/* Navigation - Outside card container but within main container */}
            <TetrisNavigation 
              currentSection={currentSection}
              onSectionChange={setCurrentSection}
            />
          </div>
        )}
      </div>
    </div>
  );
}
