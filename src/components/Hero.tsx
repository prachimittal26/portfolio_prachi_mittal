import React from 'react';
import { Github, Linkedin, Mail, Download, Sparkles, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 animate-bounce delay-3000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-slow opacity-75"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                <img 
                  src="/cv3.jpg" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
          
          <div className="mb-6 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Prachi Mittal
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              <span>Full Stack Developer</span>
              <div className="w-2 h-8 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp delay-200 leading-relaxed">
            Passionate about creating{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">beautiful</span>,{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">functional</span>, and{' '}
            <span className="text-purple-600 dark:text-purple-400 font-semibold">scalable</span>{' '}
            web experiences that make a real difference in people's lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp delay-300">
            {/* <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button> */}
            <a 
              href="#contact"
              className="group relative border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fadeInUp delay-400">
            {[
              { icon: Github, href: "https://leetcode.com/u/mprachi_26/", color: "hover:text-purple-600" },
              { icon: Linkedin, href: "https://in.linkedin.com/in/prachi-mittal-1b860b22a", color: "hover:text-blue-600" },
              { icon: Mail, href: "prachimittal263@gmail.com", color: "hover:text-pink-600" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a 
                key={index}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`p-3 text-gray-600 dark:text-gray-400 ${color} dark:${color.replace('text-', 'text-').replace('-600', '-400')} transition-all duration-300 rounded-full hover:bg-white/50 dark:hover:bg-gray-800/50 transform hover:scale-110 hover:rotate-12`}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;