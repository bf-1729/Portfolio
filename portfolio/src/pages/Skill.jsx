import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  const skillArray = [
    { id: 1, name: "HTML", level: 95, image: "https://img.icons8.com/ios-filled/144/22C3E6/html-5--v1.png", category: "Frontend" },
    { id: 2, name: "CSS", level: 95, image: "https://img.icons8.com/ios-filled/144/22C3E6/css3.png", category: "Frontend" },
    { id: 3, name: "JavaScript", level: 85, image: "https://img.icons8.com/color/144/javascript--v1.png", category: "Frontend" },
    { id: 4, name: "React", level: 90, image: "https://img.icons8.com/officel/144/react.png", category: "Frontend" },
    { id: 5, name: "Bootstrap", level: 80, image: "https://img.icons8.com/fluency/144/bootstrap.png", category: "Frontend" },
    { id: 6, name: "Tailwind CSS", level: 90, image: "https://img.icons8.com/color/144/tailwind_css.png", category: "Frontend" },
    { id: 7, name: "Node.JS", level: 90, image: "https://img.icons8.com/fluency/144/node-js.png", category: "Backend" },
    { id: 8, name: "Express.JS", level: 80, image: "https://img.icons8.com/nolan/144/express-js.png", category: "Backend" },
    { id: 9, name: "JavaScript", level: 85, image: "https://img.icons8.com/color/144/javascript--v1.png", category: "Language" },
    { id: 10, name: "Java", level: 70, image: "https://img.icons8.com/fluency/144/java-coffee-cup-logo.png", category: "Language" },
    { id: 11, name: "Python", level: 80, image: "https://img.icons8.com/color/144/python--v1.png", category: "Language" },
    { id: 12, name: "C", level: 50, image: "https://img.icons8.com/color/96/c-programming.png", category: "Language" },
    { id: 13, name: "MongoDB", level: 90, image: "https://img.icons8.com/color/144/mongodb.png", category: "Backend" },
    { id: 14, name: "MySQL", level: 80, image: "https://img.icons8.com/color/144/mysql-logo.png", category: "Backend" },
    { id: 15, name: "GitHub", level: 90, image: "https://img.icons8.com/fluency/144/github.png", category: "Tools" },
    { id: 16, name: "Postman", level: 80, image: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png", category: "Tools" },
    { id: 17, name: "Compass", level: 80, image: "https://img.icons8.com/color/96/mongo-db.png", category: "Tools" },
    { id: 18, name: "Vs Code", level: 100, image: "https://img.icons8.com/color/96/visual-studio-code-2019.png", category: "Tools" },
    { id: 19, name: "Vercel", level: 100, image: "data:image/jpeg;base64,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", category: "Tools" },
  ];

  const groupedSkills = skillArray.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryPairs = [];
  const categories = Object.entries(groupedSkills);
  for (let i = 0; i < categories.length; i += 2) {
    categoryPairs.push(categories.slice(i, i + 2));
  }

  return (
    <section id="skill" className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="mt-3 text-gray-300 text-base sm:text-lg font-light">
          Tech stack I use to build modern, scalable, and aesthetic applications.
        </p>
      </div>

      <div className="space-y-16 max-w-7xl mx-auto">
        {categoryPairs.map((pair, index) => (
          <div key={index} data-aos="fade-top"
                data-aos-delay={index*100} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pair.map(([category, skills]) => (
              <motion.div
                key={category}
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-lg">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      data-aos="zoom-in"
          data-aos-delay={`${index * 100}`}
                      className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-xl hover:scale-[1.02] hover:shadow-cyan-500/30 transition-all"
                    >
                      <div className="flex items-center mb-2">
                        <img src={skill.image} alt={skill.name} className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                        <h4 className="text-sm sm:text-sm lg:text-base font-semibold">{skill.name}</h4>
                        <span className="ml-auto text-cyan-400 font-semibold text-xs sm:text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-3">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
