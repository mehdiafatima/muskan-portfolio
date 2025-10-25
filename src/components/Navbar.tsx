"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-6 py-3 bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo2.png"
          alt="Mz Digital Arts Logo"
          width={130}
          height={40}
          className="object-contain"
          priority
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <Link href="#about" className="hover:text-sky-600 transition-colors">
          About
        </Link>
        <Link href="#services" className="hover:text-sky-600 transition-colors">
          Services
        </Link>
        <Link href="#portfolio" className="hover:text-sky-600 transition-colors">
          Portfolio
        </Link>
        <Link href="#contact" className="hover:text-sky-600 transition-colors">
          Contact
        </Link>
      </div>

      {/* Desktop Button */}
      <Button asChild className="hidden md:flex bg-sky-600 hover:bg-sky-700">
        <Link href="#contact">Get Started</Link>
      </Button>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-sky-600 hover:text-sky-800 transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-5 text-gray-700 font-medium">
              <Link
                href="#about"
                className="hover:text-sky-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="hover:text-sky-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="hover:text-sky-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="hover:text-sky-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

              <Button
                asChild
                className="bg-sky-600 hover:bg-sky-700 w-40 text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
