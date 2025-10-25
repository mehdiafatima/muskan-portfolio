"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Zap, Heart } from "lucide-react";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver nothing but the highest quality work.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your vision is our mission. We work as partners.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do, and it shows in our work.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-white text-center overflow-hidden"
    >
      {/* soft floating blue glows */}
      <motion.div
        className="absolute -top-20 left-10 w-56 h-56 bg-sky-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-5 text-gray-900"
            whileInView={{ scale: [0.95, 1], opacity: [0.8, 1] }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-sky-600">Mz Digital Arts</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We are a creative digital agency passionate about helping
            businesses thrive in the digital landscape. With expertise spanning
            design, development, and marketing, we turn your vision into
            reality.
          </motion.p>
        </motion.div>

        {/* value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 8px 20px rgba(56,189,248,0.15)",
              }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className="flex justify-center items-center mb-5"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-50 shadow-inner">
                  <value.icon className="w-8 h-8 text-sky-600" />
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* mission section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-[#ECF3F7] rounded-3xl p-10 md:p-14 shadow-inner border border-gray-100 relative overflow-hidden"
        >
          {/* subtle moving blue overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-sky-100/40 via-transparent to-sky-50/40"
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          <motion.h3
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 relative z-10"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h3>
          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed relative z-10"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            To empower businesses with exceptional digital solutions that drive
            growth, enhance brand presence, and create meaningful connections
            with their audiences.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
