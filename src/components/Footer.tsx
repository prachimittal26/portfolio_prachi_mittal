// import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <div className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Prachi Mittal
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Crafting innovative digital experiences that bridge creativity and technology. 
              Let's build the future together, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-purple-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-purple-400">Let's Connect</h4>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: Github, href: "https://leetcode.com/u/mprachi_26/", color: "hover:bg-gray-700" },
                { icon: Linkedin, href: "https://in.linkedin.com/in/prachi-mittal-1b860b22a", color: "hover:bg-blue-600" },
                { icon: Mail, href: "mailto:alex@example.com", color: "hover:bg-purple-600" }
              ].map(({ icon: Icon, href, color }, index) => (
                <a 
                  key={index}
                  href={href}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`p-3 text-gray-300 ${color} rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 flex items-center gap-2">
              © {currentYear} Prachi Mittal. Made with <Heart size={16} className="text-red-500 animate-pulse" /> and lots of ☕
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              {/* <span>Built with React & Tailwind CSS</span> */}
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              {/* <span>Deployed on Vercel</span> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;