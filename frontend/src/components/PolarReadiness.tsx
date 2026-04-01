import React from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaCalendarAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const digitalCatalog = [
  {
    name: "Tarot Reflection Journal",
    format: "PDF",
    price: "19",
    currency: "EUR",
    delivery: "Instant download after payment",
    details:
      "A structured self-reflection workbook with spreads, prompts, and journaling pages designed to deepen your tarot practice.",
    features: ["25+ guided spreads", "Daily reflection prompts", "Printable pages"],
    popular: false,
  },
  {
    name: "Tarot Meanings Study Pack",
    format: "PDF",
    price: "24",
    currency: "EUR",
    delivery: "Instant download after payment",
    details:
      "A comprehensive printable guide covering all 78 card meanings, keywords, and beginner-friendly spread ideas.",
    features: ["All 78 card meanings", "Keywords & reversals", "5 starter spreads"],
    popular: true,
  },
  {
    name: "Monthly Prompt Pack",
    format: "Digital",
    price: "9",
    currency: "EUR/mo",
    delivery: "Digital file delivered each month",
    details:
      "A subscription bundle of reflection prompts and planning templates for continuous personal growth.",
    features: ["Monthly new content", "Planning templates", "Growth tracking"],
    popular: false,
  },
];

const privateSessions = [
  {
    name: "Short Reflection Session",
    turnaround: "24-hour turnaround",
    link: "/reading/short-reading/details",
  },
  {
    name: "Love & Relationship Reading",
    turnaround: "48-hour turnaround",
    link: "/reading/love-reading/details",
  },
  {
    name: "Decision Clarity Reading",
    turnaround: "48-hour turnaround",
    link: "/reading/decision-making-reading/details",
  },
  {
    name: "Spiritual Growth Reading",
    turnaround: "48-hour turnaround",
    link: "/reading/spiritual-guidance-reading/details",
  },
];

const PolarReadiness: React.FC = () => {
  return (
    <section className="section-padding relative bg-midnight/70 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-gold/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Shop & Services
          </h2>
          <div className="divider-gold w-24 mx-auto mb-4" />
          <p className="text-soft-lavender/60 max-w-2xl mx-auto">
            Explore our digital products for instant access, or book a personal
            session for one-on-one guidance. Every product comes with clear
            fulfillment and support terms.
          </p>
        </div>

        {/* Digital Products */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaDownload className="text-gold w-5 h-5" />
            <h3 className="font-display text-xl md:text-2xl font-semibold text-soft-lavender">
              Digital Products
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digitalCatalog.map((product) => (
              <div
                key={product.name}
                className={`glass-card rounded-2xl overflow-hidden flex flex-col relative ${
                  product.popular ? "ring-1 ring-gold/40" : ""
                }`}
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-gold/90 text-midnight text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gold">{product.price}</span>
                    <span className="text-soft-lavender/50 ml-1">{product.currency}</span>
                  </div>

                  {/* Name */}
                  <h4 className="font-display text-lg font-semibold text-soft-lavender mb-1">
                    {product.name}
                  </h4>
                  <span className="text-xs text-soft-lavender/40 uppercase tracking-wider mb-3">
                    {product.format} &middot; {product.delivery}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-soft-lavender/60 leading-relaxed mb-5">
                    {product.details}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-soft-lavender/70">
                        <FaCheckCircle className="w-3.5 h-3.5 text-gold/70 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      to="/contactForm"
                      className={`block text-center py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        product.popular
                          ? "btn-primary w-full"
                          : "btn-outline w-full"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Sessions */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FaCalendarAlt className="text-gold w-5 h-5" />
            <h3 className="font-display text-xl md:text-2xl font-semibold text-soft-lavender">
              Private 1:1 Sessions
            </h3>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8">
            <p className="text-soft-lavender/60 text-sm mb-6">
              Private tarot sessions are arranged through the contact form.
              Each session is personalized to your situation and delivered
              digitally within the stated turnaround time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {privateSessions.map((session) => (
                <Link
                  key={session.name}
                  to={session.link}
                  className="group flex items-center justify-between p-4 rounded-xl border border-soft-lavender/10 hover:border-gold/30 transition-all duration-300 hover:bg-gold/5"
                >
                  <div>
                    <h4 className="text-soft-lavender font-medium group-hover:text-gold transition-colors">
                      {session.name}
                    </h4>
                    <span className="text-xs text-soft-lavender/40">
                      {session.turnaround}
                    </span>
                  </div>
                  <FaArrowRight className="w-3.5 h-3.5 text-soft-lavender/30 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contactForm" className="btn-primary text-sm text-center">
                Request a Session
              </Link>
              <Link to="/policies" className="btn-outline text-sm text-center">
                View Trust & Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolarReadiness;
