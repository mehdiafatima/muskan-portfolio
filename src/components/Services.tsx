"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  Palette,
  Code,
  TrendingUp,
  Share2,
  Video,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap = {
  Palette,
  Code,
  TrendingUp,
  Share2,
  Video,
} as const;

export default function Services() {
  const services = [
    {
      icon: "Palette",
      title: "Graphic Designing",
      description:
        "Building stunning visual identities that capture your brand essence and leave a lasting impression.",
    },
    {
      icon: "Code",
      title: "Website Development",
      description:
        "Developing high-performing, responsive websites designed for scalability and user engagement.",
    },
    {
      icon: "TrendingUp",
      title: "SEO Services",
      description:
        "Enhancing your online visibility with advanced SEO strategies that bring organic growth.",
    },
    {
      icon: "Share2",
      title: "Social Media Management",
      description:
        "Managing your digital presence with engaging, consistent, and impactful content strategies.",
    },
    {
      icon: "Video",
      title: "Video Editing",
      description:
        "Crafting professional, captivating video content that communicates your brand story effectively.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-[#E8F4FF] via-[#F5FAFF] to-[#E4F1FF]"
    >
      {/* floating glow elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-sky-100/40 via-transparent to-sky-200/30 blur-3xl"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-32 -left-10 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="text-sky-600">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empowering brands with comprehensive digital solutions designed for
            growth, innovation, and long-term impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

            return (
              <motion.div
                key={service.title}
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 12px 25px rgba(56,189,248,0.15)",
                }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-all duration-300"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="rounded-full group bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
