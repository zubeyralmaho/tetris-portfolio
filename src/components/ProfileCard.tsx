'use client';

const ProfileCard = () => {
  return (
    <div className="tetris-card relative bg-gradient-to-br from-purple-900/95 to-blue-900/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl w-full max-w-3xl mx-auto h-fit">
      {/* Complete Tetris border decoration covering all edges */}
      
      {/* Top edge - complete coverage */}
      <div className="absolute -top-3 left-2 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-8 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-14 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-20 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-26 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-32 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-32 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-26 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-20 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-14 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-8 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-2 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      
      {/* Right edge - complete coverage */}
      <div className="absolute -right-3 top-2 w-4 h-4 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-8 w-4 h-4 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-14 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-20 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-26 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-32 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-32 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-26 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-20 w-4 h-4 bg-amber-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-14 w-4 h-4 bg-amber-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-8 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-2 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      
      {/* Bottom edge - complete coverage */}
      <div className="absolute -bottom-3 right-2 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-8 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-14 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-20 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-26 w-4 h-4 bg-teal-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-32 w-4 h-4 bg-teal-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-32 w-4 h-4 bg-lime-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-26 w-4 h-4 bg-lime-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-20 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-14 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-8 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-2 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      
      {/* Left edge - complete coverage */}
      <div className="absolute -left-3 top-2 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-8 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-14 w-4 h-4 bg-fuchsia-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-20 w-4 h-4 bg-fuchsia-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-26 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-32 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-32 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-26 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-20 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-14 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-8 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-2 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      
      <div className="text-center relative z-10 border-0">
        {/* Profile Image */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-6 sm:mb-8">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-300 to-blue-400 p-1.5 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/profile-picture.jpeg" 
                alt="Zubeyr Almaho" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          {/* Floating tetris blocks around avatar */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg animate-pulse delay-75"></div>
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
          Zubeyr Almaho
        </h1>
        <h2 className="text-xl sm:text-2xl text-purple-200 mb-4 sm:mb-6 font-semibold tracking-wide">
          zybo
        </h2>

        {/* Description */}
        <div className="bg-black/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-purple-400/30 backdrop-blur-sm">
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg">
            Welcome to my Tetris-animated portfolio! I&apos;m Zubeyr (zybo), a passionate developer 
            who combines the nostalgia of classic gaming with cutting-edge web technologies. 
            Just like arranging Tetris blocks, I craft innovative digital experiences using 
            React, Next.js, and modern development tools that perfectly fit together.
          </p>
        </div>

        {/* Education */}
        <div className="bg-black/40 rounded-xl p-2 sm:p-3 mb-3 sm:mb-4 border border-purple-400/30 backdrop-blur-sm">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            Education
          </h3>
          <div className="space-y-2">
            <div className="border-l-4 border-purple-400 pl-2">
              <h4 className="text-sm sm:text-base font-semibold text-purple-200">
                Izmir Institute Of Technology
              </h4>
              <p className="text-blue-200 font-medium text-xs sm:text-sm">Computer Engineering</p>
              <div className="mt-0.5">
                <span className="inline-block w-2 h-2 bg-cyan-400 rounded-sm mr-1.5 animate-pulse"></span>
                <span className="text-gray-300 text-xs">2022 - Current </span>
              </div>
            </div>
            <div className="border-l-4 border-blue-400 pl-2">
              <h4 className="text-sm sm:text-base font-semibold text-blue-200">
                Aydın Highschool
              </h4>
              
              <div className="mt-0.5">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-sm mr-1.5"></span>
                <span className="text-gray-300 text-xs">Completed 2018-2022</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Canvas API'].map((skill, index) => (
            <span 
              key={skill}
              className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-200 cursor-default ${
                index % 3 === 0 
                  ? 'bg-purple-500/90 text-white hover:bg-purple-400/90 hover:shadow-purple-400/50' 
                  : index % 3 === 1
                  ? 'bg-blue-500/90 text-white hover:bg-blue-400/90 hover:shadow-blue-400/50'
                  : 'bg-cyan-500/90 text-white hover:bg-cyan-400/90 hover:shadow-cyan-400/50'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
