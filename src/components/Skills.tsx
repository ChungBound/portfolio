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
          <h2 className="text-4xl font-bold text-current mb-4 drop-shadow-xl">
            Skills & Technologies
          </h2>
          <p className="text-xl text-current font-light">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Optimized Skills Grid Layout */}
        <div className="max-h-[70vh] overflow-y-auto glass-card border border-current/10 rounded-2xl p-6 shadow-2xl bg-white/5 backdrop-blur-lg scrollbar-thin scrollbar-thumb-current/40 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-current/60 transition-all duration-300 scrollbar-gutter-stable">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-current mb-6 drop-shadow-lg">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="glass-card p-4 rounded-xl text-center hover:bg-current/15 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-out cursor-pointer group"
                      >
                        <IconComponent
                          size={28}
                          className="text-current opacity-70 group-hover:opacity-100 mx-auto mb-2 transition-all duration-300"
                        />
                        <span className="text-current font-medium text-sm block leading-tight">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
