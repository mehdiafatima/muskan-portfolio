"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const services = [
  {
    id: "design",
    title: "Graphic Design",
    video: "/v5.mp4",
    detailedDescription:
      "From logos to full brand identities, we craft visuals that speak your brand’s language with clarity and confidence.",
    features: [
      "Logo & brand identity",
      "Custom illustrations",
      "Print & digital creatives",
    ],
  },
  {
    id: "web",
    title: "Website Development",
    video: "/v2.mp4",
    detailedDescription:
      "We create high-quality, fully responsive websites using HTML, CSS, and JavaScript powered by Next.js, Tailwind CSS, ShadCN, and Framer Motion. Each project is built with clean, production-ready code optimized for speed, performance, and modern design aesthetics.",
    features: [
      "Custom UI/UX Design",
      "SEO-Optimized Structure",
      "Smooth Animations with Framer Motion",
      "Reusable Components with ShadCN",
      "Complete Source Code Provided",
    ],
  },
  {
    id: "seo",
    title: "SEO Optimization",
    video: "/v4.mp4",
    detailedDescription:
      "Rank higher and reach your audience through data-driven SEO strategies tailored for growth and visibility.",
    features: ["Keyword optimization", "Technical audits", "Content strategy"],
  },
  {
    id: "social",
    title: "Social Media Management",
    video: "/v3.mp4",
    detailedDescription:
      "We manage your social presence, create engaging campaigns, and help your brand connect authentically.",
    features: [
      "Content creation",
      "Campaign strategy",
      "Performance reporting",
    ],
  },
  {
    id: "video",
    title: "Video Editing",
    video: "/v1.mp4",
    detailedDescription:
      "Dynamic, professional video content that brings your brand to life — from storytelling to cinematic visuals.",
    features: [
      "Short-form & reels",
      "Motion graphics",
      "Color grading & sound design",
    ],
  },
];

// --- NEW: Single service component with its own useInView
function ServiceItem({ service, index, scrollToContact }: { service: typeof services[0]; index: number; scrollToContact: () => void }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      {/* Text Section */}
      <div>
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center">
            <span className="text-sky-600 font-semibold text-xl">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
          </div>
          <span className="text-sm font-medium text-sky-600 uppercase tracking-wider">{service.id}</span>
        </div>

        <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
        <p className="text-lg text-gray-600 mb-6">{service.detailedDescription}</p>

        <div className="space-y-3 mb-8">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-sky-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={scrollToContact}
          className="rounded-full bg-sky-600 hover:bg-sky-700 text-white transition-all duration-200 hover:scale-105"
        >
          Get Started
        </Button>
      </div>

      {/* Video Section */}
      <div className="relative group">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-xl"
        >
          <video
            src={service.video}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          ></video>
        </motion.div>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-sky-600/10 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const router = useRouter();
  const scrollToContact = () => router.push("/#contact");

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
        <Navbar />
      </div>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-[#E8F4FF] via-[#F5FAFF] to-[#E4F1FF] text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto px-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-sky-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Creative and technical expertise crafted to elevate your digital presence and make your brand unforgettable.
            </p>
          </motion.div>

          {/* Floating glow elements */}
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="absolute top-0 left-0 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-50"
          />
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-40"
          />
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 space-y-24">
            {services.map((service, index) => (
              <ServiceItem
                key={service.id}
                service={service}
                index={index}
                scrollToContact={scrollToContact}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-sky-600 to-sky-700 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let’s bring your ideas to life. Reach out and let’s create something remarkable.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="rounded-full bg-white text-sky-700 hover:bg-sky-50 text-lg px-8"
            >
              Contact Us
            </Button>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
