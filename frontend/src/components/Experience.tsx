import React from "react";
import { FaShieldAlt, FaHeadset, FaFileContract, FaStar, FaLock, FaGem } from "react-icons/fa";

const standards = [
  {
    icon: FaFileContract,
    title: "Clear Scope",
    text: "Every product page defines exactly what is included, the delivery format, and the expected timeline — so you know what you're getting before you purchase.",
  },
  {
    icon: FaHeadset,
    title: "Fast Support",
    text: "Customer messages are answered within 48 hours on business days via email or the direct contact form. Your questions never go unanswered.",
  },
  {
    icon: FaShieldAlt,
    title: "Transparent Policies",
    text: "Refund, privacy, and service disclaimer policies are published and accessible from every page. No hidden terms, no surprises.",
  },
  {
    icon: FaLock,
    title: "Secure Checkout",
    text: "All transactions are processed through trusted payment gateways with industry-standard encryption to protect your information.",
  },
  {
    icon: FaStar,
    title: "Quality Guaranteed",
    text: "Every reading and digital product is crafted with care, drawing on years of experience and a genuine commitment to your growth.",
  },
  {
    icon: FaGem,
    title: "Authentic Practice",
    text: "Rooted in generations of tarot tradition, each session is approached with respect, intuition, and heartfelt intention.",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="section-padding relative bg-midnight/80 backdrop-blur-sm">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-mystic-purple/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Why Trust Tea Leaf Tarot
          </h2>
          <div className="divider-gold w-24 mx-auto mb-4" />
          <p className="text-soft-lavender/60 max-w-2xl mx-auto">
            Built on clear communication, documented policies, and dependable
            digital delivery — everything you need for a confident experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((standard) => (
            <div
              key={standard.title}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <standard.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-soft-lavender mb-2">
                {standard.title}
              </h3>
              <p className="text-sm text-soft-lavender/60 leading-relaxed">
                {standard.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
