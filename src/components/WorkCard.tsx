'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  link: string;
  technologies: string[];
}

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
  link?: string;
}

interface Volunteer {
  id: number;
  organization: string;
  role: string;
  duration: string;
  description: string;
  activities: string[];
  impact: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Iztech Music Platform with Smart Lock Integration",
    description: "An innovative studio platform with integrated IoT smart lock system. I personally procured Yale Smart Locks and Bridge modules for the studio, developing an end-to-end 'appointment-based PIN generation system' with electronic integration using React.js. Automated PIN generation, electronic lock control, and time-based verification processes through Cloud Functions, automating all routine tasks and replaced for 8 key attendent. Successfully presented the project demo to Rector Yusuf Baran.",
    images: [
      "/assets/projects-images/iztech-music1-projects.png",
      "/assets/projects-images/iztech-music2-projects.png",
      "/assets/projects-images/iztech-music3.png"
    ],
    link: "https://iytemusic.web.app/",
    technologies: ["React.js", "Cloud Functions", "Seam API", "IoT Integration", "PIN Generation System"]
  },
  {
    id: 2,
    title: "PingUni",
    description: "\"Connect to campus\" - A comprehensive React Native mobile application that digitizes the entire campus environment. Bringing all campus services, activities, and community features into one unified digital platform.",
    images: [
      "/assets/projects-images/pinguni-projects.png"
    ],
    link: "https://github.com/zubeyralmaho/pinguni",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Node.js"]
  },
  {
    id: 3,
    title: "Iztech Chess",
    description: "A modern chess website built for Izmir Institute of Technology students. Features include activity manager, FAQ, and tournament management.",
    images: [
      "/assets/projects-images/iztechchess-projects.png"
    ],
    link: "https://github.com/zubeyralmaho/iztechchess",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"]
  },
  {
    id: 4,
    title: "Topluluklar Platform",
    description: "A community management platform for university clubs and organizations. Features include event management, member tracking, and communication tools.",
    images: [
      "/assets/projects-images/topluluklar-projects.png"
    ],
    link: "https://github.com/zubeyralmaho/topluluklar",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"]
  },
  {
    id: 5,
    title: "Tetris Portfolio Website",
    description: "A creative and animated portfolio website featuring falling Tetris blocks background. Built with modern web technologies for an innovative and interactive user experience. Features glassmorphism effects, smooth animations, and Tetris-style navigation.",
    images: [
      "/assets/projects-images/tetris-portfolio.png"
    ],
    link: "https://github.com/zubeyralmaho/tetris-portfolio",
    technologies: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS", "React Hooks"]
  }
];

const experiences: Experience[] = [
  {
    id: 1,
    company: "IZTECH (Izmir Institute of Technology)",
    position: "Head of Digital Solutions",
    duration: "2025 - Present",
    description: "Appointed by the Rector Prof. Dr. Yusuf Baran to lead digital transformation initiatives at the university. Leveraging coding expertise to solve real-world student problems and enhance campus digital infrastructure.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Python"],
    achievements: [
      "Developed web platforms for student clubs and organizations",
      "Created digital solutions for daily student problems",
      "Led university-wide digital transformation projects",
      "Improved student digital experience across campus"
    ],
    link: "https://topluluklar-29478.web.app/"
  },
  {
    id: 2,
    company: "Wayon.dev",
    position: "AI Automation & UI Designer",
    duration: "2025 - Present",
    description: "Working at an AI education platform, developing AI automation solutions and designing modern user interfaces to enhance the learning experience for AI education.",
    technologies: ["React", "Next.js", "TypeScript", "AI Tools", "Figma", "Tailwind CSS"],
    achievements: [
      "Designed and implemented AI automation workflows",
      "Created intuitive UI/UX for AI learning platforms",
      "Improved user engagement through modern interface design",
      "Developed AI-powered educational tools"
    ],
    link: "https://wayon.dev/"
  },
  {
    id: 3,
    company: "GTech",
    position: "Junior Software Engineer",
    duration: "2024 - 2025",
    description: "Developed full-stack fintech applications using .NET backend and Angular frontend technologies, working on financial technology solutions and enterprise-level software systems.",
    technologies: [".NET", "Angular", "C#", "TypeScript", "SQL Server", "Entity Framework"],
    achievements: [
      "Built fintech applications with .NET and Angular",
      "Developed secure financial software solutions",
      "Implemented robust backend APIs for financial services",
      "Created responsive fintech user interfaces with Angular"
    ],
    link: "https://www.gtech.com.tr/en/home/"
  },
  {
    id: 4,
    company: "Ajan Solutions",
    position: "Founder & AI Developer",
    duration: "2025 - Present",
    description: "Founded my own startup specializing in AI integration solutions. Developed WhatsApp Python AI bots, website AI integrations, and custom customer AI solutions for various businesses.",
    technologies: ["Python", "WhatsApp API", "AI/ML", "JavaScript", "PHP", "MySQL"],
    achievements: [
      "Founded and led AI integration startup",
      "Developed WhatsApp Python AI bot solutions",
      "Implemented AI integrations for websites",
      "Created custom customer AI solutions for businesses"
    ],
    link: "https://ajan.solutions/"
  }
];

const volunteers: Volunteer[] = [
  {
    id: 1,
    organization: "Community Volunteers Foundation (Toplum Gönüllüleri Vakfı)",
    role: "Volunteer",
    duration: "2022 - Present",
    description: "Active volunteer contributing to community development projects and social initiatives aimed at improving local communities and supporting those in need.",
    activities: [
      "Community development projects",
      "Social initiative coordination",
      "Local community support programs",
      "Educational outreach activities"
    ],
    impact: [
      "Contributed to multiple community improvement projects",
      "Supported educational initiatives for underprivileged youth",
      "Helped organize social support programs"
    ]
  },
  {
    id: 2,
    organization: "TOSFED (Turkish Automobile Sports Federation)",
    role: "Race Marshal / Supervisor",
    duration: "2023 - Present",
    description: "Serving as an official race marshal and supervisor at automobile racing events, ensuring safety protocols, fair competition, and proper event execution.",
    activities: [
      "Race event supervision and safety oversight",
      "Competition rule enforcement",
      "Safety protocol implementation",
      "Event coordination and management"
    ],
    impact: [
      "Ensured safe execution of 15+ racing events",
      "Maintained high safety standards in competitive racing",
      "Contributed to professional motorsport development in Turkey"
    ]
  },
  {
    id: 3,
    organization: "Local Chess Community",
    role: "Chess Instructor",
    duration: "2021 - Present",
    description: "Teaching chess to young children, helping them develop strategic thinking, problem-solving skills, and patience through the ancient game of chess.",
    activities: [
      "Chess lessons for children aged 6-12",
      "Strategic thinking development",
      "Tournament preparation coaching",
      "Chess theory and practice instruction"
    ],
    impact: [
      "Taught chess to 50+ children",
      "Developed critical thinking skills in young minds",
      "Organized local youth chess tournaments",
      "Fostered love for strategic games in the community"
    ]
  }
];

const WorkCard = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'projects' | 'volunteer'>('experience');
  const [currentProject, setCurrentProject] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [currentVolunteer, setCurrentVolunteer] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Read more states
  const [expandedExperienceDesc, setExpandedExperienceDesc] = useState(false);
  const [expandedProjectDesc, setExpandedProjectDesc] = useState(false);
  const [expandedVolunteerDesc, setExpandedVolunteerDesc] = useState(false);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
    setExpandedProjectDesc(false); // Reset when changing project
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
    setExpandedProjectDesc(false); // Reset when changing project
  };

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length);
    setExpandedExperienceDesc(false); // Reset when changing experience
  };

  const prevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + experiences.length) % experiences.length);
    setExpandedExperienceDesc(false); // Reset when changing experience
  };

  const nextVolunteer = () => {
    setCurrentVolunteer((prev) => (prev + 1) % volunteers.length);
    setExpandedVolunteerDesc(false); // Reset when changing volunteer
  };

  const prevVolunteer = () => {
    setCurrentVolunteer((prev) => (prev - 1 + volunteers.length) % volunteers.length);
    setExpandedVolunteerDesc(false); // Reset when changing volunteer
  };

  // Text truncation utility
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const nextImage = () => {
    const project = projects[currentProject];
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    const project = projects[currentProject];
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const project = projects[currentProject];
  const experience = experiences[currentExperience];
  const volunteer = volunteers[currentVolunteer];

  return (
    <div 
      className="tetris-card relative bg-gradient-to-br from-green-900/95 to-teal-900/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-2xl w-full max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto h-fit"
      style={{ 
        animation: 'cardSlideIn 1s ease-out',
      }}
    >
      {/* Complete Tetris border decoration covering all edges */}
      
      {/* Top edge - complete coverage */}
      <div className="absolute -top-3 left-2 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-8 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-14 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-20 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-26 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-32 w-4 h-4 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-38 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-44 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-44 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-38 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-32 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-26 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-20 w-4 h-4 bg-lime-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-14 w-4 h-4 bg-lime-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-8 w-4 h-4 bg-teal-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-2 w-4 h-4 bg-teal-400 rounded-sm shadow-lg"></div>
      
      {/* Right edge - complete coverage */}
      <div className="absolute -right-3 top-2 w-4 h-4 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-8 w-4 h-4 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-14 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-20 w-4 h-4 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-26 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-32 w-4 h-4 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-38 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-44 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-44 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-38 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-32 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-26 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-20 w-4 h-4 bg-lime-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-14 w-4 h-4 bg-lime-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-8 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-2 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      
      {/* Bottom edge - complete coverage */}
      <div className="absolute -bottom-3 right-2 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-8 w-4 h-4 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-14 w-4 h-4 bg-teal-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-20 w-4 h-4 bg-teal-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-26 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-32 w-4 h-4 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-38 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-44 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-44 w-4 h-4 bg-fuchsia-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-38 w-4 h-4 bg-fuchsia-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-32 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-26 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-20 w-4 h-4 bg-amber-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-14 w-4 h-4 bg-amber-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-8 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-2 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      
      {/* Left edge - complete coverage */}
      <div className="absolute -left-3 top-2 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-8 w-4 h-4 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-14 w-4 h-4 bg-fuchsia-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-20 w-4 h-4 bg-fuchsia-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-26 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-32 w-4 h-4 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-38 w-4 h-4 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-44 w-4 h-4 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-44 w-4 h-4 bg-amber-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-38 w-4 h-4 bg-amber-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-32 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-26 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-20 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-14 w-4 h-4 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-8 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-2 w-4 h-4 bg-emerald-400 rounded-sm shadow-lg"></div>

      <div className="relative z-10 border-0">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-300">
            My Work
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center gap-1 sm:gap-2 md:gap-4 mb-3 sm:mb-4 md:mb-6">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl md:rounded-2xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-xl shadow-green-400/30'
                  : 'bg-black/40 text-gray-300 hover:bg-black/60 border border-green-400/30'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl md:rounded-2xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'projects'
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-xl shadow-green-400/30'
                  : 'bg-black/40 text-gray-300 hover:bg-black/60 border border-green-400/30'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl md:rounded-2xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'volunteer'
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-xl shadow-green-400/30'
                  : 'bg-black/40 text-gray-300 hover:bg-black/60 border border-green-400/30'
              }`}
            >
              Volunteer
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="transition-all duration-500 ease-in-out transform">
            {/* Experience Navigation */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
              <button
                onClick={prevExperience}
                className="group bg-green-500/90 hover:bg-green-400/90 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-green-400/30"
                aria-label="Previous experience"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <span className="text-green-200 font-medium text-xs sm:text-sm">
                  {currentExperience + 1} of {experiences.length}
                </span>
                <div className="flex gap-1 sm:gap-2">
                  {experiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentExperience(index)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentExperience 
                          ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextExperience}
                className="group bg-green-500/90 hover:bg-green-400/90 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-green-400/30"
                aria-label="Next experience"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Experience Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-green-400/30 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3 md:mb-4 gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">{experience.position}</h3>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base md:text-lg text-green-300 font-semibold">{experience.company}</h4>
                      {experience.link && (
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 transition-colors duration-200 p-1 hover:bg-green-400/10 rounded"
                          aria-label="Visit company website"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="bg-green-500/20 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-green-400/30 self-start">
                    {experience.duration}
                  </span>
                </div>

                <div className="mb-2 sm:mb-3 md:mb-4">
                  <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
                    {expandedExperienceDesc 
                      ? experience.description 
                      : truncateText(experience.description, 120)
                    }
                  </p>
                  {experience.description.length > 120 && (
                    <button
                      onClick={() => setExpandedExperienceDesc(!expandedExperienceDesc)}
                      className="text-green-400 hover:text-green-300 text-xs sm:text-sm font-medium mt-1 transition-colors duration-200"
                    >
                      {expandedExperienceDesc ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-2 sm:mb-3 md:mb-4">
                  <h5 className="text-white font-semibold mb-2 text-xs sm:text-sm">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {experience.technologies.map((tech, index) => (
                      <span 
                        key={tech}
                        className={`px-2 py-1 rounded-full text-xs font-medium shadow-lg transition-all duration-200 hover:scale-105 ${
                          index % 2 === 0 
                            ? 'bg-green-500/90 text-white hover:shadow-green-400/50' 
                            : 'bg-teal-500/90 text-white hover:shadow-teal-400/50'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-white font-semibold mb-2 text-xs sm:text-sm">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-200 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="transition-all duration-500 ease-in-out transform">
            {/* Project Navigation */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
              <button
                onClick={prevProject}
                className="group bg-green-500/90 hover:bg-green-400/90 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-green-400/30"
                aria-label="Previous project"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <span className="text-green-200 font-medium text-xs sm:text-sm">
                  {currentProject + 1} of {projects.length}
                </span>
                <div className="flex gap-1 sm:gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentProject(index);
                        setCurrentImageIndex(0);
                        setExpandedProjectDesc(false); // Reset when changing project
                      }}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentProject 
                          ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextProject}
                className="group bg-green-500/90 hover:bg-green-400/90 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-green-400/30"
                aria-label="Next project"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Project Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Project Images Gallery */}
              <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 bg-gray-800 flex items-center justify-center">
                  <img 
                    src={project.images[currentImageIndex]} 
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Image Navigation */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-200"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-200"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                
                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Floating tetris decoration on image */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-sm shadow-lg animate-bounce"></div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-sm shadow-lg animate-bounce delay-100"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">{project.title}</h3>
                
                <div className="bg-black/40 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-green-400/30 backdrop-blur-sm">
                  <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                    {expandedProjectDesc 
                      ? project.description 
                      : truncateText(project.description, 150)
                    }
                  </p>
                  {project.description.length > 150 && (
                    <button
                      onClick={() => setExpandedProjectDesc(!expandedProjectDesc)}
                      className="text-green-400 hover:text-green-300 text-xs sm:text-sm font-medium mt-2 transition-colors duration-200"
                    >
                      {expandedProjectDesc ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={tech}
                      className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg transition-all duration-200 hover:scale-105 ${
                        index % 2 === 0 
                          ? 'bg-green-500/90 text-white hover:shadow-green-400/50' 
                          : 'bg-teal-500/90 text-white hover:shadow-teal-400/50'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <div className="pt-2 sm:pt-3 md:pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white font-semibold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-400/30 text-xs sm:text-sm md:text-base"
                  >
                    <span>View Project</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Volunteer Tab */}
        {activeTab === 'volunteer' && (
          <div className="transition-all duration-500 ease-in-out transform">
            {/* Volunteer Navigation */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
              <button
                onClick={prevVolunteer}
                className="group bg-purple-500/90 hover:bg-purple-400/90 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-purple-400/30"
                aria-label="Previous volunteer work"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <span className="text-purple-200 font-medium text-xs sm:text-sm">
                  {currentVolunteer + 1} of {volunteers.length}
                </span>
                <div className="flex gap-1 sm:gap-2">
                  {volunteers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVolunteer(index)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentVolunteer 
                          ? 'bg-purple-400 shadow-lg shadow-purple-400/50'
                          : 'bg-purple-600/50 hover:bg-purple-500/80'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextVolunteer}
                className="group bg-purple-500/90 hover:bg-purple-400/90 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-purple-400/30"
                aria-label="Next volunteer work"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Volunteer Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="bg-black/40 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 border border-purple-400/30 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-3 md:mb-4 gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">{volunteer.role}</h3>
                    <h4 className="text-sm sm:text-base md:text-lg text-purple-300 font-semibold">{volunteer.organization}</h4>
                  </div>
                  <span className="bg-purple-500/20 text-purple-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-purple-400/30 self-start">
                    {volunteer.duration}
                  </span>
                </div>

                <div className="mb-2 sm:mb-3 md:mb-4">
                  <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base">
                    {expandedVolunteerDesc 
                      ? volunteer.description 
                      : truncateText(volunteer.description, 120)
                    }
                  </p>
                  {volunteer.description.length > 120 && (
                    <button
                      onClick={() => setExpandedVolunteerDesc(!expandedVolunteerDesc)}
                      className="text-purple-400 hover:text-purple-300 text-xs sm:text-sm font-medium mt-1 transition-colors duration-200"
                    >
                      {expandedVolunteerDesc ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>

                {/* Activities */}
                <div className="mb-2 sm:mb-3 md:mb-4">
                  <h5 className="text-white font-semibold mb-2 text-xs sm:text-sm">Activities:</h5>
                  <div className="space-y-1">
                    {volunteer.activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-2 text-gray-200 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h5 className="text-white font-semibold mb-2 text-xs sm:text-sm">Impact & Achievements:</h5>
                  <ul className="space-y-1">
                    {volunteer.impact.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-200 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
