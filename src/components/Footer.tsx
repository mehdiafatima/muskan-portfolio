"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@mzdigitalarts.com", label: "Email" },
  ];

  const footerLinks = {
    Services: [
      { label: "Graphic Design", href: "/services#graphic-design" },
    { label: "Web Development", href: "/services#web-development" },
    { label: "SEO", href: "/services#seo" },
    { label: "Social Media", href: "/services#social-media" },
    { label: "Video Editing", href: "/services#video-editing" },
    ],
    Company: [
      { label: "About", href: "/#about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/#contact" },
    ],
  };

  return (
    <footer className="bg-white text-gray-800 py-16 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-bold">
                <span className="text-sky-600">Mz</span>
                <span className="text-gray-900"> Digital Arts</span>
              </div>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Transforming ideas into digital masterpieces. We craft stunning
              designs, build powerful websites, and elevate your brand&#39;s digital
              presence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-sky-50 hover:bg-sky-600 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5 text-sky-600 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-lg mb-4 text-gray-900">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-sky-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Mz Digital Arts. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-500 hover:text-sky-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-sky-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
