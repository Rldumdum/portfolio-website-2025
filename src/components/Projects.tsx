import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PIP Information System",
      description:
        "A system used by organizational stakeholders to find, view, and create plans, programs, and budgets through a web application.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "C# .NET", "MSSQL", "Material UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Enterprise",
    },
    {
      title: "Inventory System",
      description:
        "Inventory system allows us to track items and deploy and return products/items, manage warehouse stocks.",
      image: "./image/inventory.png",
      technologies: ["Next.js", "AWS RDS", "Prisma", "Ant Design"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Enterprise",
    },
    {
      title: "Aquila Consulting System (Medical Software)",
      description:
        "Allows us to check schedules, print reports and receipts, and manage medicine stock inventory.",
      image: "./image/medicalsoftware.png",
      technologies: ["Next.js", "C# .NET", "Tailwind Css"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Healthcare",
    },
    {
      title: "Partsman Mobile Application",
      description:
        "Mobile app for ordering car-related products such as tires and auto parts directly from suppliers.",
      image: "./image/partsman.png",
      technologies: ["React Native", "Expo", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      category: "Automotive",
    },
    {
      title: "RL - Official Blog Site",
      description:
        "Blog site showcasing my projects, articles, and insights on software development and technology.",
      image: "./image/blogsite.png",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://rl-blog-app.vercel.app/",
      githubUrl: "#",
      featured: true,
      category: "Technology",
    },
    {
      title: "DRAW MY RUN - Sketch your perfect run, export it as a run file, and sync it with Strava",
      description:
        "Sketch your perfect run, export it as a run file, and sync it with Strava",
      image: "./image/drawmyrun.png",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      liveUrl: "https://drawmy.run/",
      githubUrl: "#",
      featured: true,
      category: "Fitness",
    },
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
            Discover how I've helped organizations across various industries
            achieve their digital transformation goals through innovative
            solutions.
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
                {project.liveUrl !== "#" && (
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
                    <ArrowRight
                      size={20}
                      className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <button className="bg-gray-900 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
