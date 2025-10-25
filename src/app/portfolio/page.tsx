
"use client";

import { useState } from "react"; // ✅ for modal state
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, PenTool, Code2, Rocket } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Digital Brand Ad",
    category: "Marketing & Advertising",
    description:
      "A sci-fi-themed digital media graphic promoting 7EXPERTS' services for branding (Poster, Video, and Logo Design).",
    image: "/img2.jpg",
  },
  {
    id: 2,
    title: "Luxury Mall Promotion",
    category: "Marketing & Advertising",
    description:
      "A vibrant digital advertisement promoting shops and residency installments at a Luxury Newstar Mall development.",
    image: "/design1.jpg",
  },
  {
    id: 3,
    title: "Marketing Flyer",
    category: "Marketing & Advertising",
    description:
      "A visually striking digital flyer promoting the services of 7EXPERTS for professional, creative, and affordable website design.",
    image: "/img1.jpg",
  },
  {
    id: 4,
    title: "Road Logo Design",
    category: "Branding & Identity",
    description:
      "A clean, modern logo using the letter 'M' stylized as two merging roads to represent a Motor Park.",
    image: "/d-logo.jpg",
  },
  {
    id: 5,
    title: "Cartoon Avatar Art",
    category: "Digital Art & Illustration",
    description:
      "A colorful illustration of the cartoon character Blossom (from The Powerpuff Girls) against a pink-to-purple gradient background.",
    image: "/p-girl.jpg",
  },
  {
    id: 6,
    title: "Luxury Perfume Teaser",
    category: "Product Marketing",
    description:
      "high-end digital teaser for a new perfume from FEMMINAVIBES, featuring a luxurious gold bottle on a dark, dramatic stage.",
    image: "/perfume.jpg",
  },
    {
    id: 7,
    title: "Anime Cat Hood",
    category: "Product Marketing",
    description:
      "A stylized, moody cartoon portrait of a figure in a black hoodie with cat ears and a simple 'owo' facial expression on the hood.",
    image: "/anime.jpg",
  },
    {
    id: 8,
    title: "Mall Project Teaser",
    category: "Marketing & Advertising",
    description:
      "A high-impact digital advertisement promoting the Coming Soon booking and installment details for shops at Karachi's first solar-powered New Star Mall project",
    image: "/project.jpg",
  },
    {
    id: 9,
    title: "Residential Plot Ad",
    category: "Marketing & Advertising",
    description:
      "A modern digital flyer advertising PakSaaibaan's residential plots, commercial plots, and Dream Home booking options with low down payments.",
    image: "/plot.jpg",
  },
    {
    id: 10,
    title: "Wholesaler Brand Identity",
    category: "Branding & Identity",
    description:
      "A clean, modern logo and branding graphic for Q. PRINCE, a wholesaler of construction and industrial supplies, featuring a simple gold crown.",
    image: "/brand.jpg",
  },
      {
    id: 11,
    title: "Chibi Heart Art",
    category: "Digital Art & Illustration",
    description:
      "A cute, stylized cartoon illustration of a figure with silver hair and large eyes hugging a pink heart against a light blue background.",
    image: "/chibi.jpg",
  },
      {
    id: 12,
    title: "Branded T-Shirt Mockup",
    category: "Branding & Identity",
    description:
      "A white T-shirt mock-up featuring the gold and black SAF MARKETING logo printed prominently across the back.",
    image: "/t-shirt.jpg",
  },

];

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen bg-gradient-to-br from-[#F7FAFF] via-[#EFF6FF] to-[#E3F2FF] py-28 mt-15">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-sky-600">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-1xl mx-auto leading-relaxed"
          >
            Every creation we deliver is a blend of design precision, technical
            expertise, and meaningful storytelling built to last, built to
            inspire.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => setSelectedImage(project.image)} // ✅ open modal
                className="relative group rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative w-full h-[300px] sm:h-[340px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center text-center text-white px-6 opacity-0 group-hover:opacity-100 backdrop-blur-[2px]"
                  >
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm uppercase tracking-wide mb-3 text-sky-300">
                      {project.category}
                    </p>
                    <p className="text-sm leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ✅ Fullscreen Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-zoom-out p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl h-[80vh]"
            >
              <Image
                src={selectedImage}
                alt="Full View"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Process Section */}
        <div className="mt-32 text-center max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            How We <span className="text-sky-600">Work</span>
          </motion.h2>
          <p className="text-gray-600 text-lg mb-14">
            A structured yet flexible approach — from concept to final launch.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[ 
              {
                icon: <Sparkles className="w-10 h-10 text-sky-500 mb-4" />,
                title: "Discovery",
                desc: "We dive deep to understand your vision, market, and audience.",
              },
              {
                icon: <PenTool className="w-10 h-10 text-sky-500 mb-4" />,
                title: "Design",
                desc: "We craft pixel-perfect visuals that communicate your brand essence.",
              },
              {
                icon: <Code2 className="w-10 h-10 text-sky-500 mb-4" />,
                title: "Development",
                desc: "We build high-performance, scalable websites using Next.js & Tailwind.",
              },
              {
                icon: <Rocket className="w-10 h-10 text-sky-500 mb-4" />,
                title: "Launch",
                desc: "We test, refine, and deploy with precision — ensuring smooth delivery.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center">
                  {step.icon}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
