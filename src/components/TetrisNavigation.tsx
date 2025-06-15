'use client';

interface TetrisNavigationProps {
  currentSection: 'profile' | 'projects' | 'contact';
  onSectionChange: (section: 'profile' | 'projects' | 'contact') => void;
}

const TetrisNavigation = ({ currentSection, onSectionChange }: TetrisNavigationProps) => {
  const handleNext = () => {
    if (currentSection === 'profile') {
      onSectionChange('projects');
    } else if (currentSection === 'projects') {
      onSectionChange('contact');
    }
  };

  const handlePrev = () => {
    if (currentSection === 'projects') {
      onSectionChange('profile');
    } else if (currentSection === 'contact') {
      onSectionChange('projects');
    }
  };

  // Enhanced Tetris arrow component
  const TetrisArrow = ({ direction, onClick, disabled }: { 
    direction: 'up' | 'down'; 
    onClick: () => void; 
    disabled: boolean;
  }) => {
    const arrowBlocks = direction === 'up' 
      ? [
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0],
          [0, 1, 0]
        ]
      : [
          [0, 1, 0],
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0]
        ];

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`relative p-2 sm:p-3 md:p-4 transition-all duration-300 transform hover:scale-110 rounded-lg sm:rounded-xl ${
          disabled 
            ? 'opacity-40 cursor-not-allowed' 
            : 'hover:opacity-90 hover:shadow-xl backdrop-blur-sm'
        } ${
          currentSection === 'profile'
            ? 'bg-purple-500/20 hover:bg-purple-400/30'
            : currentSection === 'projects'
            ? 'bg-green-500/20 hover:bg-green-400/30'
            : 'bg-orange-500/20 hover:bg-orange-400/30'
        }`}
        aria-label={direction === 'down' ? 'Next section' : 'Previous section'}
      >
        <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
          {arrowBlocks.map((row, rowIndex) =>
            row.map((block, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-sm transition-all duration-300 ${
                  block === 1
                    ? disabled
                      ? 'bg-gray-600'
                      : currentSection === 'profile'
                      ? 'bg-purple-400 shadow-lg shadow-purple-400/50 hover:shadow-purple-300/70'
                      : currentSection === 'projects'
                      ? 'bg-green-400 shadow-lg shadow-green-400/50 hover:shadow-green-300/70'
                      : 'bg-orange-400 shadow-lg shadow-orange-400/50 hover:shadow-orange-300/70'
                    : 'bg-transparent'
                }`}
              />
            ))
          )}
        </div>
      </button>
    );
  };

  return (
    <div className="absolute right-0.5 sm:right-8 md:right-12 lg:right-16 xl:right-20 top-1/2 transform -translate-y-1/2 z-30">
      <div className="flex flex-col items-center space-y-1 sm:space-y-2 md:space-y-3">
        {/* Down Arrow */}
        <TetrisArrow
          direction="down"
          onClick={handleNext}
          disabled={currentSection === 'contact'}
        />

        {/* Section Indicators */}
        <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg md:rounded-xl backdrop-blur-md bg-black/20 border border-white/20">
          {[
            { key: 'profile', label: 'About' },
            { key: 'projects', label: 'Work' },
            { key: 'contact', label: 'Contact' }
          ].map((section) => (
            <div key={section.key} className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <button
                onClick={() => onSectionChange(section.key as any)}
                className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-sm transition-all duration-300 transform hover:scale-125 ${
                  currentSection === section.key
                    ? section.key === 'profile'
                      ? 'bg-purple-400 shadow-lg shadow-purple-400/50'
                      : section.key === 'projects'
                      ? 'bg-green-400 shadow-lg shadow-green-400/50'
                      : 'bg-orange-400 shadow-lg shadow-orange-400/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to ${section.label} section`}
              />
              <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 hidden md:block ${
                currentSection === section.key ? 'text-white' : 'text-gray-400'
              }`}>
                {section.label}
              </span>
            </div>
          ))}
        </div>

        {/* Up Arrow */}
        <TetrisArrow
          direction="up"
          onClick={handlePrev}
          disabled={currentSection === 'profile'}
        />
      </div>

      {/* Enhanced Section Label */}
      <div className="absolute left-full ml-1 sm:ml-2 md:ml-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl shadow-2xl text-white text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md border ${
          currentSection === 'profile'
            ? 'bg-purple-500/90 border-purple-400/50 shadow-purple-400/30'
            : currentSection === 'projects'
            ? 'bg-green-500/90 border-green-400/50 shadow-green-400/30'
            : 'bg-orange-500/90 border-orange-400/50 shadow-orange-400/30'
        }`}>
          {currentSection === 'profile' && 'About Me'}
          {currentSection === 'projects' && 'My Work'}
          {currentSection === 'contact' && 'Contact Me'}
        </div>
      </div>
    </div>
  );
};

export default TetrisNavigation;
