// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, Medal, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      id: 1,
      title: "Excellence Award 2023",
      description: "Outstanding performance in software development and innovation",
      image: "/Screenshot 2025-07-18 120350.png",
      icon: Trophy,
      // color: "from-yellow-400 to-orange-500",
      shadowColor: "shadow-yellow-500/25",
      date: "2023",
      category: "Professional"
    },
    {
      id: 2,
      title: "Innovation Champion",
      description: "Recognized for breakthrough solutions in web development",
      image: "/Screenshot 2025-07-17 123813.png",
      icon: Zap,
      // color: "from-purple-400 to-pink-500",
      shadowColor: "shadow-purple-500/25",
      date: "2023",
      category: "Innovation"
    },
    {
      id: 3,
      title: "Team Leadership Award",
      description: "Successfully led multiple cross-functional teams to deliver exceptional results",
      image: "/WhatsApp Image 2025-07-18 at 12.24.31_59c81c24.png",
      icon: Star,
      // color: "from-blue-400 to-cyan-500",
      shadowColor: "shadow-blue-500/25",
      date: "2022",
      category: "Leadership"
    },
    {
      id: 4,
      title: "Technical Excellence",
      description: "Demonstrated mastery in full-stack development and system architecture",
      image: "/Screenshot 2025-07-17 122451.png",
      icon: Medal,
      // color: "from-green-400 to-emerald-500",
      shadowColor: "shadow-green-500/25",
      date: "2022",
      category: "Technical"
    },
    {
      id: 5,
      title: "Client Satisfaction Award",
      description: "Consistently delivered projects exceeding client expectations",
      image: "/image1.png",
      icon: Target,
      // color: "from-red-400 to-rose-500",
      shadowColor: "shadow-red-500/25",
      date: "2021",
      category: "Client Success"
    },
    {
      id: 6,
      title: "Rising Star Developer",
      description: "Recognized as an emerging talent in the tech industry",
      image: "/Screenshot 2025-07-18 120315.png",
      icon: Award,
      // color: "from-indigo-400 to-purple-500",
      shadowColor: "shadow-indigo-500/25",
      date: "2021",
      category: "Recognition"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of milestones, awards, and recognition earned through dedication and excellence
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    },
                  }}
                  style={{ 
                    perspective: "1000px"
                  }}
                  className={`
                    relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl overflow-hidden
                    shadow-2xl ${achievement.shadowColor} hover:shadow-3xl
                    border border-white/20 dark:border-gray-700/50
                    transform-gpu transition-all duration-500
                  `}
                >
                  {/* Card Header with Icon */}
                  <div className={`relative h-48 bg-gradient-to-br ${achievement.color} overflow-hidden`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    {/* Achievement Image */}
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          className="absolute w-2 h-2 bg-white/40 rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`
                        px-3 py-1 text-xs font-semibold rounded-full
                        bg-gradient-to-r ${achievement.color} text-white
                      `}>
                        {achievement.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {achievement.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Achievement Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${achievement.color}`} />
                      <span>Verified Achievement</span>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-r ${achievement.color} mix-blend-overlay rounded-2xl
                  `} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "15+", label: "Certifications Won", icon: Trophy },
            // { number: "50+", label: "Projects Completed", icon: Target },
            { number: "100%", label: "Client Satisfaction", icon: Star },
            // { number: "3+", label: "Years Experience", icon: Award },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl border border-white/20 dark:border-gray-700/50"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;