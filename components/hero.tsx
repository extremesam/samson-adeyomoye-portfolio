"use client"

import { MapPin, Globe, Satellite } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 geo-grid opacity-20 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="relative mb-8 group"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.6, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-xl group-hover:opacity-75 transition-opacity"
          />
          <img
            src="https://www.dropbox.com/scl/fi/q6judxxgaplpcodpmpldg/Profilepic.jpg?rlkey=odp8g79u5q43pga2oc7chwv48&st=vxy3ke1y&raw=1"
            alt="Samson Adeyomoye"
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-2 bg-background p-3 rounded-full shadow-xl border border-border"
          >
            <Globe className="w-6 h-6 text-primary animate-spin-slow" />
          </motion.div>
        </motion.div>

        <div className="text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
          >
            <Satellite className="w-4 h-4" />
            <span>World Class GIS Analyst</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
          >
            Samson Adeyomoye
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-xl md:text-2xl font-light text-muted-foreground"
          >
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> GIS Analyst</span>
            <span className="hidden md:inline text-muted-foreground/30">|</span>
            <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-primary" /> Geospatial Developer</span>
            <span className="hidden md:inline text-muted-foreground/30">|</span>
            <span className="flex items-center gap-2"><Satellite className="w-5 h-5 text-primary" /> Remote Sensing</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
          >
            Crafting intelligent geospatial solutions through data analysis,
            satellite imagery processing, and cutting-edge AI integration.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-shadow duration-300"
            >
              Start a Project
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              className="px-10 py-4 glass text-foreground font-bold rounded-full hover:bg-foreground/5 transition-colors duration-300"
            >
              Explore Experience
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
