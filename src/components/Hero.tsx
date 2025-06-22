
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full text-gray-700 text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Building Digital
              <span className="block text-blue-600">Excellence</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I partner with forward-thinking companies to create exceptional web applications, 
              mobile experiences, and digital solutions that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center group shadow-lg"
              >
                Start Your Project
                <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center group"
              >
                <Play size={16} className="mr-3" />
                View Work
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl flex items-center justify-center relative border border-gray-100 shadow-2xl">
                <div className="grid grid-cols-3 gap-6 p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                  <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                  <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                  <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                  <div className="w-16 h-16 bg-pink-500 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
