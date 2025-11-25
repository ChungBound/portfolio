"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { MouseAnimation } from "./MouseAnimation";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-bg animate-gradient" />

      {/* Mouse animation */}
      <MouseAnimation />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full mix-blend-multiply filter blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full mix-blend-multiply filter blur-xl"
        />

        {/* SVG geometric patterns */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-32 h-32 opacity-20"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/30">
            <polygon points="50,5 90,90 10,90" fill="currentColor" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/3 w-24 h-24 opacity-20"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/40">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            suppressHydrationWarning
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-current mb-6 drop-shadow-2xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Ben Zhang
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-current mb-8 max-w-2xl mx-auto drop-shadow-lg font-light leading-relaxed">
            Full-stack engineer with 3+ years building enterprise PHP (Laravel &
            Symfony) and JavaScript (Vue/React/Next.js) platforms, blending
            fintech, AI, and research experience to ship reliable products
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            href="https://github.com/ChungBound"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-card hover:bg-current/10 hover:shadow-lg transition-all duration-300"
          >
            <Github size={24} className="text-current" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/zebang-zhang"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-card hover:bg-current/10 hover:shadow-lg transition-all duration-300"
          >
            <Linkedin size={24} className="text-current" />
          </motion.a>
          <motion.a
            href="mailto:chungzbound@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass-card hover:bg-current/10 hover:shadow-lg transition-all duration-300"
          >
            <Mail size={24} className="text-current" />
          </motion.a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={scrollToAbout}
          className="glass-card px-6 py-3 rounded-full text-current font-medium hover:bg-current/10 hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2 backdrop-blur-lg border border-current/20 mx-auto"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Learn More</span>
          <ArrowDown size={18} />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-current/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-current/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
