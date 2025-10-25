"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mzdigitalarts@gmail.com",
      href: "mailto:hello@mzdigitalarts.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 311 9804921",
      href: "tel:+15551234567",
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#E8F4FF] via-[#F5FAFF] to-[#E4F1FF]"
    >
      {/* Floating lights */}
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
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Let&#39;s Work <span className="text-sky-600">Together</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your digital presence? Get in touch and let&#39;s create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md border border-gray-100"
            >
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="h-12 rounded-xl"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="h-12 rounded-xl"
              />
              <Select
                value={formData.service}
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Service Interested In" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="graphic-design">Graphic Designing</SelectItem>
                  <SelectItem value="web-dev">Website Development</SelectItem>
                  <SelectItem value="seo">SEO Services</SelectItem>
                  <SelectItem value="social-media">Social Media Management</SelectItem>
                  <SelectItem value="video-editing">Video Editing</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="rounded-xl resize-none"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full group bg-sky-600 hover:bg-sky-700 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 transition-colors">
                      <info.icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        {info.label}
                      </div>
                      <div className="font-medium text-gray-800 group-hover:text-sky-600 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 text-white shadow-md">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-100">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
