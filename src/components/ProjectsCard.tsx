'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, responsive e-commerce website built with React and Next.js. Features include payment integration, admin panel, and real-time inventory management.",
    image: "/placeholder-ecommerce.jpg",
    link: "https://example.com/ecommerce",
    technologies: ["Next.js", "React", "Stripe", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management application designed for teams. Includes real-time updates, drag & drop functionality, and advanced filtering.",
    image: "/placeholder-taskapp.jpg",
    link: "https://example.com/taskapp",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "Tetris Portfolio",
    description: "A creative portfolio website with animated Tetris background. Features smooth animations, modern design, and interactive navigation.",
    image: "/placeholder-portfolio.jpg",
    link: "https://example.com/portfolio",
    technologies: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS"]
  }
];

const ProjectsCard = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="tetris-card relative bg-gradient-to-br from-green-900/95 to-teal-900/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-green-400/40 max-w-3xl mx-auto">
      {/* Enhanced Tetris border decoration */}
      {/* Top edge */}
      <div className="absolute -top-3 left-6 w-5 h-5 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-16 w-5 h-5 bg-orange-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 left-26 w-5 h-5 bg-yellow-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-24 w-5 h-5 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-14 w-5 h-5 bg-pink-400 rounded-sm shadow-lg"></div>
      <div className="absolute -top-3 right-4 w-5 h-5 bg-cyan-400 rounded-sm shadow-lg"></div>
      
      {/* Right edge */}
      <div className="absolute -right-3 top-12 w-5 h-5 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-24 w-5 h-5 bg-red-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 top-36 w-5 h-5 bg-purple-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-32 w-5 h-5 bg-blue-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-20 w-5 h-5 bg-lime-400 rounded-sm shadow-lg"></div>
      <div className="absolute -right-3 bottom-8 w-5 h-5 bg-lime-400 rounded-sm shadow-lg"></div>
      
      {/* Bottom edge */}
      <div className="absolute -bottom-3 right-6 w-5 h-5 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-16 w-5 h-5 bg-green-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 right-26 w-5 h-5 bg-teal-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-24 w-5 h-5 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-14 w-5 h-5 bg-indigo-400 rounded-sm shadow-lg"></div>
      <div className="absolute -bottom-3 left-4 w-5 h-5 bg-emerald-400 rounded-sm shadow-lg"></div>
      
      {/* Left edge */}
      <div className="absolute -left-3 top-12 w-5 h-5 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-24 w-5 h-5 bg-violet-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 top-36 w-5 h-5 bg-fuchsia-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-32 w-5 h-5 bg-rose-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-20 w-5 h-5 bg-amber-400 rounded-sm shadow-lg"></div>
      <div className="absolute -left-3 bottom-8 w-5 h-5 bg-amber-400 rounded-sm shadow-lg"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-300">
            My Projects
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevProject}
            className="group bg-green-500/90 hover:bg-green-400/90 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-green-400/30"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-green-200 font-medium text-lg">
              {currentProject + 1} of {projects.length}
            </span>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
            className="group bg-green-500/90 hover:bg-green-400/90 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-green-400/30"
            aria-label="Next project"
          >
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Project Content */}
        <div className="space-y-8">
          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-56 bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-white text-xl font-semibold relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <span className="relative z-10">{project.title} Preview</span>
            </div>
            {/* Floating tetris decoration on image */}
            <div className="absolute top-3 right-3 w-4 h-4 bg-yellow-400 rounded-sm shadow-lg animate-bounce"></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 bg-cyan-400 rounded-sm shadow-lg animate-bounce delay-100"></div>
          </div>

          {/* Project Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            
            <div className="bg-black/40 rounded-2xl p-6 border border-green-400/30 backdrop-blur-sm">
              <p className="text-gray-200 leading-relaxed text-lg">{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium shadow-lg transition-all duration-200 hover:scale-105 ${
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
            <div className="pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-400/30"
              >
                <span>View Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
