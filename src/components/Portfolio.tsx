"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  heroImage: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: "branding-design",
    title: "Luxury Newstar Mall Campaign Visual",
    category: "Graphic Design",
    description:
"A vibrant and detailed commercial advertisement, balancing photorealistic rendering and key financial information for the Newstar Mall project.",
  heroImage: "/design1.jpg",
  },
  {
    id: 2,
    slug: "website-redesign",
    title: "Minimalist Automotive Branding",
    category: "Graphic Design",
    description:
      "A modern and vibrant logo using negative space and a two-tone palette to create a memorable monogram mark for an automotive-themed park.",
    heroImage: "/d-logo.jpg",
  },
  {
    id: 3,
    slug: "social-campaign",
    title: "Social Media Campaign for Fashion Brand",
    category: "Marketing",
    description:
      "Strategic content creation and marketing visuals that boosted engagement by over 70%.",
    heroImage: "/images/projects/social.jpg",
  },
];

export default function PortfolioOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-white overflow-hidden "
    >
      {/* Soft Animated Blue Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0.6 }}
        animate={{
          background:
            "radial-gradient(600px at 20% 20%, rgba(56,189,248,0.15), transparent 70%), radial-gradient(800px at 80% 80%, rgba(56,189,248,0.2), transparent 70%)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-5 md:px-12 lg:px-20 relative z-10 ">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Featured <span className="text-sky-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our recent projects that showcase our expertise and creativity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-200">
                  <div className="aspect-[2/2] bg-gray-100 relative overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-sky-600 font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-sky-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className="rounded-full group bg-sky-600 hover:bg-sky-700 text-white px-8 py-3"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
