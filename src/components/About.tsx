"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Languages",
    description: "JavaScript, TypeScript, Python, Java, SQL, C, C++",
  },
  {
    icon: Globe,
    title: "Frameworks & Libraries",
    description: "Vue.js, React, Next.js, FastAPI, Node.js, Spring Boot",
  },
  {
    icon: Database,
    title: "Tools & Technologies",
    description: "Git, Webpack, Vite, Tailwind CSS, ECharts, Cordova",
  },
  {
    icon: Smartphone,
    title: "APIs & Integrations",
    description: "RESTful APIs, GPT AI APIs",
  },
];

export function About() {
  return (
    <section id="about" className="section bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-current mb-4 drop-shadow-xl">
            About Me
          </h2>
          <p className="text-xl text-current max-w-3xl mx-auto leading-relaxed font-light">
            I'm an experienced software developer currently working as a
            Research Assistant at the University of Adelaide. I love building
            scalable applications and contributing to innovative projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-current mb-6 drop-shadow-lg">
              My Journey
            </h3>
            <div className="space-y-4 text-current leading-relaxed">
              <p>
                My journey into software development began during my
                undergraduate studies at Taiyuan University of Technology, where
                I earned my Bachelor of Software Engineering degree. I further
                advanced my expertise by completing a Master of Computing and
                Innovation at the University of Adelaide with a GPA of 6.3/7.
              </p>
              <p>
                Throughout my career, I've worked across various industries
                including education, finance, and enterprise software
                development. I've contributed to workflow automation systems,
                AI-powered music generation platforms, and large-scale
                enterprise applications.
              </p>
              <p>
                Currently working as a Research Assistant at the University of
                Adelaide, I've completed multiple research projects and
                published a paper on AI Music generation in the HCII journal. My
                SecuFlow Miner project, an enterprise-level code security
                analysis system, won the School of Computer and Mathematical
                Sciences Software Engineering Prize ($1000). I'm passionate
                about leveraging technology to solve real-world problems and
                create meaningful user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-lg text-center hover:bg-current/15 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl transition-all duration-200 ease-out cursor-pointer group"
              >
                <skill.icon className="w-12 h-12 text-current opacity-80 group-hover:opacity-100 mx-auto mb-4 transition-all duration-300" />
                <h4 className="font-semibold text-current mb-2 drop-shadow-md">
                  {skill.title}
                </h4>
                <p className="text-sm text-current/80 font-light">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
