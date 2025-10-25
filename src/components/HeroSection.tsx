"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Star, Sparkles } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "modern websites.",
      "creative brands.",
      "digital experiences.",
      "stunning visuals.",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61582406566451&mibextid=wwXIfr&rdid=wAFIxbgD57tpNaKS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17RMqJC7Nm%2F%3Fmibextid%3DwwXIfr#" },
    { icon: FaInstagram, href: "https://www.instagram.com/mz_digital_arts/" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/yourprofile" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E8F4FF] via-[#F5FAFF] to-[#E4F1FF] py-20 md:py-28 mt-8">
      {/* Subtle animated gradient backdrop */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sky-200/20 via-transparent to-sky-100/30"
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating gradient flares */}
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content container */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left order-1"
        >
          <p className="text-sky-600 font-medium mb-2 lg:ml-4">Hi there!</p>

          <h1 className="font-bold text-gray-900 leading-tight mb-4 ml-4">
            <span className="block text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.4rem] text-sky-600">
              Mz Digital Arts
            </span>
            <span className="block text-[1.8rem] sm:text-[2.3rem] md:text-[2.7rem] lg:text-[3rem]">
              helps you build
            </span>
            <span className="block text-sky-600 font-semibold text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.7rem] h-[2.6rem] sm:h-[3rem] md:h-[3.2rem] overflow-hidden">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0 lg:ml-4">
            We craft modern websites, creative designs, and complete brand
            identities turning your ideas into digital success.
          </p>

          <motion.div
            className="flex flex-col items-center md:items-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-block px-7 py-3 sm:px-9 sm:py-4 bg-sky-600 text-white rounded-full font-medium shadow-md hover:bg-sky-700 transition"
            >
              Let’s Discuss
            </motion.a>

            {/* Social icons row */}
            <motion.div
              className="flex gap-5 text-sky-600 text-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, color: "#0369a1" }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow-sm hover:shadow-md border border-sky-100 transition"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative md:w-1/2 w-full flex justify-center order-2"
        >
          <div className="relative">
            {/* glow behind avatar */}
            <div className="absolute inset-0 bg-sky-100 rounded-full blur-3xl opacity-60 scale-110" />
            <div className="relative z-10">
              <Image
                src="/a3.png" // apni image ka path yahan
                alt="Mz Digital Arts Avatar"
                width={500}
                height={500}
                className="rounded-[40px] object-cover w-[300px] sm:w-[380px] md:w-[460px] h-auto mx-auto"
              />

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-10 -left-6 sm:-left-10 bg-white shadow-lg rounded-2xl px-4 py-2 sm:px-5 sm:py-3 flex items-center gap-3 border border-gray-100"
              >
                <Sparkles className="text-sky-600 w-5 h-5" />
                <p className="text-gray-700 text-sm font-medium whitespace-nowrap">
                  Design & Digital Expert
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-8 -right-6 sm:-right-10 bg-white shadow-lg rounded-2xl px-4 py-2 sm:px-5 sm:py-3 flex items-center gap-3 border border-gray-100"
              >
                <Star className="text-yellow-400 w-5 h-5" />
                <p className="text-gray-700 text-sm font-medium whitespace-nowrap">
                  Where ideas meet design
                </p>
              </motion.div>

              {/* Subtle floating motion for image */}
              <motion.div
                className="absolute inset-0"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
