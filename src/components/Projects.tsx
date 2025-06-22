
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Analytics Platform",
      description: "A comprehensive business intelligence solution with real-time data processing, advanced reporting, and AI-powered insights for Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Python", "AWS", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Enterprise"
    },
    {
      title: "FinTech Mobile Application",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and advanced financial planning tools.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Mobile"
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management platform with telemedicine capabilities, appointment scheduling, and electronic health records.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Healthcare"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped organizations across various industries achieve 
            their digital transformation goals through innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 hover:text-gray-700 font-semibold transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                  <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gray-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
