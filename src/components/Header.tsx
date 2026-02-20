import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const resumeUrl =
    "https://docs.google.com/document/d/1bmzT_MbhAfsDZKCJI9EqTxoxNrqT7U2F/edit";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-full max-w-7xl h-[80vh] relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              ✕
            </button>
            <iframe
              src={resumeUrl}
              title="My Resume"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              &lt;RL<span className="text-blue-600 ml-3">Dev/&gt;</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/Rldumdum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/rldumdum/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-zinc-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-zinc-900 transition-colors"
                >
                  Resume
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg">
              <nav className="flex flex-col p-6 space-y-6">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium"
                >
                  Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left font-medium"
                >
                  Contact
                </button>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-zinc-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-zinc-900 transition-colors"
                >
                  Resume
                </button>
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
