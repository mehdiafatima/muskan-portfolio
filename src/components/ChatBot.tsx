"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const predefinedReplies: { [key: string]: string } = {
  services:
    "We offer Graphic Design, Website Development, SEO, Social Media Management/Marketing, and Video Editing at Mz Digital Arts.",
  contact:
    "You can reach us through the contact form on our website or email us at info@mzdigitalarts.com.",
  website:
    "Yes! We build modern, responsive websites using Next.js, Tailwind CSS, and Framer Motion.",
  design:
    "Our graphic design services include logos, flyers, branding, and complete brand identity kits.",
  default:
    "I’m here to help with anything about Mz Digital Arts — try asking about our services, design, or contact info!",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" as const };
    const lower = input.toLowerCase();

    let reply = predefinedReplies.default;
    if (lower.includes("service")) reply = predefinedReplies.services;
    else if (lower.includes("contact") || lower.includes("email"))
      reply = predefinedReplies.contact;
    else if (lower.includes("website")) reply = predefinedReplies.website;
    else if (lower.includes("design") || lower.includes("logo"))
      reply = predefinedReplies.design;

    const botMsg = { text: reply, sender: "bot" as const };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble toggle */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-button"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            className="bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 transition"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-sky-100"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-gradient-to-br from-[#E8F4FF] via-[#F5FAFF] to-[#E4F1FF] p-4 border-b border-sky-100">
              <h3 className="font-semibold text-sky-700">Mz Digital Arts Bot</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-sky-600" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-sky-600 text-white ml-auto max-w-[80%]"
                      : "bg-sky-100 text-gray-700 mr-auto max-w-[80%]"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center border-t border-gray-200 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about our services..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-sky-600 text-white px-3 py-2 rounded-lg hover:bg-sky-700 transition text-sm"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
