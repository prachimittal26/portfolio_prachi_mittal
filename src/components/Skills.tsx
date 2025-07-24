import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-purple-600" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-blue-500" },
        { name: "Next.js", level: 88, color: "from-green-500 to-emerald-500" },
        // { name: "Vue.js", level: 75, color: "from-green-500 to-emerald-500" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-600 to-green-700" },
        { name: "Express.js", level: 88, color: "from-gray-600 to-gray-800" },
        { name: "PostgreSQL", level: 85, color: "from-blue-600 to-indigo-600" },
        { name: "MongoDB", level: 82, color: "from-green-500 to-green-600" },
        // { name: "GraphQL", level: 78, color: "from-pink-500 to-rose-500" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Git", level: 95, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "AWS", level: 75, color: "from-yellow-500 to-orange-500" },
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
        // { name: "Jest", level: 88, color: "from-red-500 to-pink-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise 🚀
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies and tools I master to transform innovative ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover/skill:text-purple-600 dark:group-hover/skill:text-purple-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fadeInUp delay-500">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Always Learning 📚
              </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Machine Learning", icon: "🤖", color: "from-green-500 to-emerald-500" },
              { name: "Web3 & Blockchain", icon: "⛓️", color: "from-yellow-500 to-orange-500" },
              { name: "Mobile Development", icon: "📱", color: "from-blue-500 to-cyan-500" },
              { name: "DevOps & Cloud", icon: "☁️", color: "from-purple-500 to-pink-500" },
              { name: "AI/ML Integration", icon: "🧠", color: "from-red-500 to-rose-500" }
            ].map((skill, index) => (
              <span 
                key={index}
                className={`group px-6 py-3 bg-gradient-to-r ${skill.color} text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-default flex items-center gap-2 font-medium`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="group-hover:animate-bounce">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;