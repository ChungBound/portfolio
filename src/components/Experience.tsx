"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Research Assistant",
    company: "The University of Adelaide",
    period: "Aug 2025 – Present",
    description: [
      "Contributed to the NeuroFlip Reader project, a brain-computer interface (BCI) system enabling users to flip digital book pages using brainwave signals from the Emotiv EPOC+ headset",
      "Built Vue 3 frontend for real-time EEG-based interactive page flipping",
      "Built the backend using Python FastAPI, supporting API development and EEG data processing",
      "Supported system integration, testing, and cross-disciplinary research in human-centred computing",
    ],
  },
  {
    title: "Developer / Research Project Assistant",
    company: "The University of Adelaide",
    period: "May 2024 – Nov 2024",
    description: [
      "Led development of an AI-powered music generation system to assess stress reduction, integrating Vue 3 + Vite frontend with Python + SQLite backend",
      "Built an environment detection module using camera feeds and GPT AI APIs, enabling real-time tag generation for music prompts",
      "Optimised AI music playback using Suno AI API, enabling seamless switching between streaming and MP3 formats for real-time listening",
      "Implemented user activity tracking to support experimental data analysis for research paper",
    ],
  },
  {
    title: "Front-end Development Mentor",
    company: "Itcast Education Group",
    period: "Aug 2022 – Oct 2022",
    description: [
      "Guided aspiring developers in front-end skills and career preparation",
      "Conducted in-depth training sessions on Vue.js, covering core concepts such as component-based architecture, state management, and API integration",
      "Organised technical learning materials to enhance student learning outcomes",
      "Provided career-oriented mentoring, helping students build projects and prepare for technical interviews",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Insigma Hengtian Software Ltd.",
    period: "Mar 2022 – Aug 2022",
    description: [
      "Developed and optimised a scalable front-end architecture for a third-party recruitment management system",
      "Led and coordinated a front-end development team, overseeing technical decisions and implementation strategies",
      "Architected entire front-end infrastructure using Vue.js, Element UI, and Webpack",
      "Engineered core system functionalities including user authentication and role-based access control",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white/10 backdrop-blur-sm py-20"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-current mb-4 drop-shadow-xl">
            Work & Research Experience
          </h2>
          <p className="text-xl text-current font-light">
            My professional journey and research contributions
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 h-full opacity-60" />

          {/* Timeline items container with scroll */}
          <div className="space-y-16 max-h-[75vh] overflow-y-auto glass-card border border-current/10 rounded-2xl p-6 shadow-2xl bg-white/5 backdrop-blur-lg scrollbar-thin scrollbar-thumb-current/40 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-current/60 transition-all duration-300 scrollbar-gutter-stable">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot - positioned based on content side */}
                <div
                  className={`absolute w-4 h-4 rounded-full border-4 border-white/20 shadow-lg z-10 ${
                    index % 2 === 0
                      ? "left-0 ml-4 bg-gradient-to-r from-blue-400 to-purple-400"
                      : "right-0 mr-4 bg-gradient-to-r from-green-400 to-blue-400"
                  }`}
                />

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-8 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:ml-8"
                  }`}
                >
                  <motion.div
                    className="glass-card p-6 rounded-xl hover:bg-current/15 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-out cursor-pointer"
                  >
                    <div
                      className={`mb-4 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <h3 className="text-xl font-semibold text-current drop-shadow-lg mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-current/90 font-medium drop-shadow-sm text-lg">
                        {exp.company}
                      </p>
                      <span className="text-current/75 font-light text-sm">
                        {exp.period}
                      </span>
                    </div>

                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 20 : -20,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + itemIndex * 0.1,
                          }}
                          className="flex items-start space-x-2"
                        >
                          <span className="text-current/70 mt-1 flex-shrink-0">
                            •
                          </span>
                          <span className="text-current font-light leading-relaxed text-sm">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}

            {/* Additional Research Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative flex items-center md:flex-row"
            >
              <div className="absolute left-0 ml-4 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-white/20 shadow-lg z-10" />

              <div className="w-full md:w-5/12 md:pr-8 md:text-right">
                <motion.div
                  className="glass-card p-6 rounded-xl hover:bg-current/15 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer"
                >
                  <div className="mb-4 md:text-right">
                    <h3 className="text-xl font-semibold text-current drop-shadow-lg mb-1">
                      Research Achievements
                    </h3>
                    <p className="text-current/90 font-medium drop-shadow-sm text-lg">
                      University of Adelaide
                    </p>
                    <span className="text-current/75 font-light text-sm">
                      2024 - 2025
                    </span>
                  </div>

                  <ul className="space-y-2 md:text-right">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1 flex-shrink-0">
                        🏆
                      </span>
                      <span className="text-current/80 font-light leading-relaxed text-sm">
                        <strong>SecuFlow Miner</strong> - Awarded School of
                        Computer and Mathematical Sciences Software Engineering
                        Prize for enterprise repository security analysis system
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1 flex-shrink-0">
                        📄
                      </span>
                      <span className="text-current/80 font-light leading-relaxed text-sm">
                        <strong>Context-AI Tunes</strong> - Published research
                        paper on AI-generated music effectiveness for stress
                        reduction (HCII Conference)
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1 flex-shrink-0">
                        🧠
                      </span>
                      <span className="text-current/80 font-light leading-relaxed text-sm">
                        <strong>NeuroFlip Reader</strong> - Brain-computer
                        interface enabling users with disabilities to flip
                        digital book pages using brainwave signals
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="hidden md:block w-5/12" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
