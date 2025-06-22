import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";

const Skills = () => {
  const services = [
    {
      icon: <Globe className="text-blue-500" size={32} />,
      title: "Web App Development",
      description:
        "Modern, responsive web applications using React, Python, and Node.js that scale with your business needs.",
      technologies: ["React", "Python", "Node.js", "TypeScript"],
    },
    {
      icon: <Smartphone className="text-green-500" size={32} />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps that provide seamless user experiences across devices.",
      technologies: ["React Native", "iOS", "Android"],
    },
    {
      icon: <Palette className="text-purple-500" size={32} />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with your users in mind, from wireframes to pixel-perfect designs.",
      technologies: ["Figma", "Sketch", "Prototyping"],
    },
    {
      icon: <Database className="text-orange-500" size={32} />,
      title: "Backend Development",
      description:
        "Robust server-side solutions, APIs, and database architecture that power your applications.",
      technologies: [
        "C# .NET",
        "Python",
        "Node.js",
        "PostgreSQL",
        "MySQL",
        "MSSQL",
        "MongoDB",
      ],
    },
    {
      icon: <Code className="text-red-500" size={32} />,
      title: "Custom Solutions",
      description:
        "Tailored software solutions that address your unique business challenges and requirements.",
      technologies: ["Custom APIs", "Integrations", "Automation", "Consulting"],
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Performance Optimization",
      description:
        "Speed up your existing applications and improve user experience through advanced optimization techniques.",
      technologies: [
        "Performance Audit",
        "SEO",
        "Core Web Vitals",
        "CDN Setup",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Skills & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I offer a comprehensive range of development services to help bring
            your digital vision to life, from initial concept to final
            deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="bg-white p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
