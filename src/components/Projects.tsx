"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "NeuroFlip Reader - BCI System",
    description:
      "A brain-computer interface system enabling users to flip digital book pages using brainwave signals from the Emotiv EPOC+ headset. Built Vue 3 frontend with Python FastAPI backend.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Python", "FastAPI", "EEG Processing"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Context-AI Tunes",
    description:
      "AI-powered music generation system to assess stress reduction across different physical environments. Features environment detection using camera feeds and GPT AI APIs.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Python", "SQLite", "GPT AI APIs"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Airport Construction Management System",
    description:
      "Enterprise system for airport construction management with workflow automation, data visualization using ECharts, and 3D model rendering capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Spring Boot", "ECharts", "3D Rendering"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Shanxi Government Affairs App",
    description:
      "Mobile application for provincial government services, featuring social security information systems and efficient data visualization and query systems.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Cordova", "Vant UI", "Mobile Development"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="section bg-white/5 backdrop-blur-sm pt-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-current mb-4 drop-shadow-xl">
            Featured Projects
          </h2>
          <p className="text-xl text-current font-light">
            Here are some of the projects I've worked on recently
          </p>
        </motion.div>

        <div className="max-h-[65vh] overflow-y-auto glass-card border border-current/10 rounded-2xl p-6 shadow-2xl bg-white/5 backdrop-blur-lg scrollbar-thin scrollbar-thumb-current/40 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-current/60 transition-all duration-300 scrollbar-gutter-stable">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-lg overflow-hidden hover:bg-current/15 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl transition-all duration-200 ease-out cursor-pointer group"
            >
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-current mb-2 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-current/75 mb-4 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-current/20 text-current text-sm rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-current/85 hover:text-current transition-colors duration-200 font-light"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-current/85 hover:text-current transition-colors duration-200 font-light"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
