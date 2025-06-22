
import { Coffee, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Zap className="text-yellow-500" size={24} />,
      title: "Fast & Efficient",
      description: "I deliver high-quality solutions quickly without compromising on quality."
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "Collaborative",
      description: "I believe great projects come from great communication and teamwork."
    },
    {
      icon: <Coffee className="text-amber-600" size={24} />,
      title: "Passionate",
      description: "I genuinely love what I do, and it shows in every line of code I write."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Hi there! I'm Alex 👋
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A passionate freelance developer with 5+ years of experience crafting digital experiences 
              that people love to use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=600&fit=crop&crop=face"
                alt="Developer working"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                What started as curiosity about "how websites work" turned into a deep passion for creating 
                digital solutions that make people's lives easier. I've had the privilege of working with 
                startups, small businesses, and individual entrepreneurs to bring their visions to life.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or enjoying a good cup of coffee while planning the next big project.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe that great software isn't just about clean code—it's about understanding people, 
                solving real problems, and creating experiences that feel effortless.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-50 p-3 rounded-xl mr-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">{value.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
