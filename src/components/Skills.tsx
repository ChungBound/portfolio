"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Globe,
  Server,
  Cloud,
  Cpu,
  Layers,
  Zap,
  GitBranch,
  Box,
  Settings,
  Network,
  Shield,
  BarChart3,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "PHP", icon: Code },
      { name: "JavaScript (ES6+)", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Python", icon: Code },
      { name: "Java", icon: Code },
      { name: "SQL", icon: Database },
      { name: "C", icon: Cpu },
      { name: "C++", icon: Cpu },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", icon: Server },
      { name: "Symfony", icon: Server },
      { name: "Vue.js", icon: Layers },
      { name: "React", icon: Layers },
      { name: "Next.js", icon: Globe },
      { name: "FastAPI", icon: Server },
      { name: "Node.js", icon: Server },
      { name: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Redis", icon: Database },
      { name: "SQLite", icon: Database },
      { name: "Docker", icon: Box },
      { name: "Nginx", icon: Server },
      { name: "Git & GitLab CI", icon: GitBranch },
      { name: "Vite/Webpack Tooling", icon: Zap },
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      { name: "RESTful APIs", icon: Network },
      { name: "RabbitMQ Queues", icon: Network },
      { name: "GPT/Suno AI APIs", icon: Cpu },
      { name: "Real-time Data Processing", icon: Zap },
      { name: "Cloud & Nginx Deployments", icon: Cloud },
      { name: "Enterprise Security", icon: Shield },
      { name: "CI/CD Automation", icon: Settings },
      { name: "System Design & Observability", icon: BarChart3 },
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
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="glass-card p-4 rounded-xl text-center hover:bg-current/15 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-out cursor-pointer group mobile-card"
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
