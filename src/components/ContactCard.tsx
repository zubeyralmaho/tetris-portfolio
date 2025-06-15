'use client';

const ContactCard = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "mail@zubeyralmaho.com",
      link: "mailto:mail@zubeyralmaho.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 3.95-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-.35 0-.69-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
        </svg>
      ),
      label: "Twitter",
      value: "@zybonymous",
      link: "https://twitter.com/zybonymous"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "/in/zubeyr-almaho",
      link: "https://linkedin.com/in/zubeyr-almaho"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "/zubeyralmaho",
      link: "https://github.com/zubeyralmaho"
    }
  ];

  return (
    <div className="tetris-card relative bg-gradient-to-br from-orange-900/95 to-red-900/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl w-full max-w-3xl mx-auto h-fit">
      {/* Complete Tetris border decoration covering all edges */}
      
      {/* Top edge - complete coverage */}
      <div className="absolute -top-3 left-2 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-8 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-14 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-20 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-26 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-32 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-38 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-38 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-32 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-26 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-20 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-14 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-8 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-2 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      
      {/* Right edge - complete coverage */}
      <div className="absolute -right-3 top-2 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-8 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-14 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-20 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-26 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-32 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-38 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-38 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-32 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-26 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-20 w-4 h-4 bg-lime-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-14 w-4 h-4 bg-lime-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-8 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-2 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      
      {/* Bottom edge - complete coverage */}
      <div className="absolute -bottom-3 right-2 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-8 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-14 w-4 h-4 bg-teal-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-20 w-4 h-4 bg-teal-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-26 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-32 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-38 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-38 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-32 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-26 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-20 w-4 h-4 bg-fuchsia-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-14 w-4 h-4 bg-fuchsia-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-8 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-2 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      
      {/* Left edge - complete coverage */}
      <div className="absolute -left-3 top-2 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-8 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-14 w-4 h-4 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-20 w-4 h-4 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-26 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-32 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-38 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-38 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-32 w-4 h-4 bg-amber-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-26 w-4 h-4 bg-amber-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-20 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-14 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-8 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-2 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>

      <div className="relative z-10 border-0">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-red-300">
            Get In Touch
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full animate-pulse delay-150"></div>
          </div>
          <p className="text-orange-200 text-sm sm:text-base">
            Feel free to reach out through any of these channels
          </p>
        </div>

        {/* Contact Links */}
        <div className="space-y-2 sm:space-y-3">
          {contactInfo.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-black/40 rounded-lg border border-orange-400/30 hover:border-orange-300/60 transition-all duration-300 transform hover:scale-[1.01] hover:bg-black/50 group backdrop-blur-sm"
            >
              <div className={`p-2 sm:p-2.5 rounded-lg shadow-xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center ${
                index % 4 === 0 
                  ? 'bg-orange-500/90 text-white group-hover:bg-orange-400/90 group-hover:shadow-orange-400/50' 
                  : index % 4 === 1
                  ? 'bg-red-500/90 text-white group-hover:bg-red-400/90 group-hover:shadow-red-400/50'
                  : index % 4 === 2
                  ? 'bg-yellow-500/90 text-white group-hover:bg-yellow-400/90 group-hover:shadow-yellow-400/50'
                  : 'bg-purple-500/90 text-white group-hover:bg-purple-400/90 group-hover:shadow-purple-400/50'
              }`}>
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                  {contact.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-base sm:text-lg">{contact.label}</div>
                <div className="text-orange-200 group-hover:text-orange-100 transition-colors text-sm sm:text-base truncate">
                  {contact.value}
                </div>
              </div>
              <div className="text-orange-300 group-hover:text-orange-200 transition-colors flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
