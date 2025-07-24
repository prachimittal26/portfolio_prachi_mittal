import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Prepify AI ",
      description: "Designed and developed an AI-powered career coaching platform, streamlining the job preparation process.Enabled users to generate resumes, cover letters, and practice AI-driven mock interviews.  Developed a scalable frontend (Next.js, shadcn/ui) and backend (Prisma, PostgreSQL) powering real-time AI content for 500+ users with secure, seamless UX.",
      image: "/prepify.png",
      technologies: [" Next.js", "Node.js", "PostgreSQL", "Prisma", "Neon","shadcn/ui"],
      liveUrl: "https://coachly-ai.vercel.app/",
      githubUrl: "#",
      featured: true
    },
    
    
    {
      title: "Colorfy",
      description: "Colored Icons library is a collection of brand logos and tech stack logos.It's a handy resource to easily add brand icons to your projects with the hassle of mutual attribution.From frameworks like React and databases like MongoDB to brands like Tesla and Spotify — access every essential icon in seconds via CDN.Zero downloads. Zero build steps.Just pure CDN magic.",
      image: "Screenshot 2025-07-24 172225.png",
      technologies: ["Next.js", "Reactjs", "MongoDB", "Prisma", "Gemini"],
      liveUrl: "https://coloryfy-qa62.vercel.app/",
      githubUrl: "#",
      featured: false
    },
    {
      title: "IntelliAgent",
      description: "Developed an intelligent AI Agent with Google Gemini integration featuring real-time function calling capabilities.Created smart conversation flow with AI function calling and dynamic code execution via parameter parsing.Users can see when AI calls functions vs. generating responses (LLM limitations and how function calling solves them) ",
      image: "/robot.jpeg",
      technologies: ["React", "Gemini AI", "REST APIs", "Node.js", "Lucide","Framer Motion"],
      // liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "NewsMonkey- daily dose of news",
      description: "Developed progressive news web app with offline news reading capability, push notifications, and responsive design supporting 1000+ concurrent users. Implemented database indexing, and optimized queries reducing load time by 60%. Integrated Elastic search for full-text search with auto-suggestions, sentiment analysis, and content categorization using NLP",
      image: "/girl.jpg",
      technologies: ["React 18+", "MongoDB", "Docker", "GitHub", "NewsAPI"],
      // liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects ✨
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover my latest creations that showcase innovation, technical excellence, and user-centered design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    ⭐ Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-300 text-sm rounded-full hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  {/* <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Github size={16} />
                    Source Code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;