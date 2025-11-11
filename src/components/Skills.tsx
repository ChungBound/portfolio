"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Globe,
  Server,
  Smartphone,
  Cloud,
  Cpu,
  Layers,
  Zap,
  Terminal,
  GitBranch,
  Box,
  Settings,
  Network,
  Shield,
  BarChart3,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Python", icon: Code },
      { name: "Java", icon: Code },
      { name: "SQL", icon: Database },
      { name: "C", icon: Cpu },
      { name: "C++", icon: Cpu },
      { name: "Go", icon: Code },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Vue.js", icon: Layers },
      { name: "React", icon: Layers },
      { name: "Next.js", icon: Globe },
      { name: "FastAPI", icon: Server },
      { name: "Node.js", icon: Server },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Spring Boot", icon: Server },
      { name: "Express.js", icon: Server },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Webpack", icon: Box },
      { name: "Vite", icon: Zap },
      { name: "Cordova", icon: Smartphone },
      { name: "Docker", icon: Box },
      { name: "Kubernetes", icon: Cloud },
      { name: "Nginx", icon: Server },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      { name: "RESTful APIs", icon: Network },
      { name: "GraphQL", icon: Network },
      { name: "GPT AI APIs", icon: Cpu },
      { name: "Stripe", icon: Shield },
      { name: "AWS", icon: Cloud },
      { name: "Firebase", icon: Cloud },
      { name: "Agile Development", icon: Settings },
      { name: "System Design", icon: BarChart3 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-xl">
            Skills & Technologies
          </h2>
          <p className="text-xl text-white font-light">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Enhanced Skills Layout with Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                {skillCategories[0].skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card p-4 rounded-xl text-center hover:bg-white/25 transition-all duration-200 cursor-pointer group"
                    >
                      <IconComponent
                        size={32}
                        className="text-current opacity-80 group-hover:opacity-100 mx-auto mb-2 transition-all duration-300"
                      />
                      <span className="text-current font-medium text-sm block">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                {skillCategories[2].skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card p-4 rounded-xl text-center hover:bg-black/10 dark:hover:bg-white/25 transition-all duration-300 cursor-pointer group"
                    >
                      <IconComponent
                        size={32}
                        className="text-current opacity-80 group-hover:opacity-100 mx-auto mb-2 transition-all duration-300"
                      />
                      <span className="text-current font-medium text-sm block">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Frameworks & Libraries */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center lg:text-right"
            >
              <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                {skillCategories[1].skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card p-4 rounded-xl text-center hover:bg-black/10 dark:hover:bg-white/25 transition-all duration-300 cursor-pointer group"
                    >
                      <IconComponent
                        size={32}
                        className="text-current opacity-80 group-hover:opacity-100 mx-auto mb-2 transition-all duration-300"
                      />
                      <span className="text-current font-medium text-sm block">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* APIs & Integrations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center lg:text-right"
            >
              <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
                APIs & Integrations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                {skillCategories[3].skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card p-4 rounded-xl text-center hover:bg-black/10 dark:hover:bg-white/25 transition-all duration-300 cursor-pointer group"
                    >
                      <IconComponent
                        size={32}
                        className="text-current opacity-80 group-hover:opacity-100 mx-auto mb-2 transition-all duration-300"
                      />
                      <span className="text-current font-medium text-sm block">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
