// import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Architecture",
      description: "Writing maintainable, scalable code with modern design patterns and best practices",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Excellence",
      description: "Crafting intuitive, beautiful interfaces that delight users and drive engagement",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance First",
      description: "Building lightning-fast applications optimized for speed and efficiency",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Passionate about exploring cutting-edge technologies and industry innovations",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            About Me 👨‍💻
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer crafting innovative digital solutions 
            that merge stunning design with powerful functionality. Results-oriented software engineer with strong proficiency in DSA and SQL, enabling optimized, reliable 
solutions for complex problems. Skilled in database management, OOPs, and networking with a focus 
on accuracy and performance. Collaborative and detail-driven with excellent communication skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fadeInUp delay-200">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/Screenshot 2025-07-17 124016.png" 
                alt="Developer workspace" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Crafting Digital Experiences ✨
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              I specialize in full-stack development with expertise in{' '}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">React</span>,{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Node.js</span>, and cutting-edge web technologies. 
              My journey began with curiosity about digital innovation and has evolved into a passion for 
              creating transformative user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Beyond coding, I'm actively involved in the tech community, contributing to open-source projects, 
              mentoring aspiring developers, and staying at the forefront of emerging technologies like{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">AI/ML</span> and{' '}
              <span className="text-pink-600 dark:text-pink-400 font-semibold">Web3</span>.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {['React Expert', 'Node.js', 'TypeScript', 'AWS', 'Docker'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp delay-300">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="group text-center p-6 rounded-2xl bg-white dark:bg-gray-800 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;