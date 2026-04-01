import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { FaBuilding, FaBox, FaUndo, FaExclamationTriangle, FaUserShield } from "react-icons/fa";

const policySections = [
  {
    icon: FaBuilding,
    title: "Business Information",
    points: [
      "Business name: Tea Leaf Tarot",
      "Business type: Sole proprietor",
      "Operating country: Albania",
      "Support email: hello@tarotcardread.com",
      "Support response time: within 48 hours on business days",
    ],
  },
  {
    icon: FaBox,
    title: "Products and Fulfillment",
    points: [
      "Digital products are delivered instantly after successful payment.",
      "Private readings are delivered digitally within the timeline shown on the selected service page.",
      "If delivery is delayed, support is available via email to provide a revised timeline.",
    ],
  },
  {
    icon: FaUndo,
    title: "Refund and Cancellation",
    points: [
      "Digital downloads are non-refundable after access is granted.",
      "If a private reading has not yet started, cancellation is allowed within 24 hours of payment.",
      "If a paid service is not delivered within the stated timeframe, customers can request a full refund.",
      "Refund requests are handled through support and may require order confirmation.",
    ],
  },
  {
    icon: FaExclamationTriangle,
    title: "Service Disclaimer",
    points: [
      "Content is intended for personal reflection and entertainment.",
      "Services do not provide legal, medical, financial, or mental health advice.",
      "No guaranteed outcomes or predictions are promised.",
      "Services are intended for adults 18+ only.",
    ],
  },
  {
    icon: FaUserShield,
    title: "Privacy",
    points: [
      "Only necessary customer data is collected for order delivery and support.",
      "Data is not sold or shared for third-party advertising.",
      "Customers can request data updates or deletion by email.",
    ],
  },
];

const PoliciesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      <main className="max-w-3xl mx-auto px-6 pb-16">
        <div className="text-center mb-14">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
            Trust & Policies
          </h1>
          <div className="divider-gold w-24 mx-auto mb-4" />
          <p className="text-soft-lavender/60 max-w-xl mx-auto text-sm md:text-base">
            Published to provide transparent business, policy, and
            customer-support information.
          </p>
        </div>

        <div className="space-y-5">
          {policySections.map((section) => (
            <section
              key={section.title}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <section.icon className="w-4 h-4 text-gold" />
                </div>
                <h2 className="font-display text-lg font-semibold text-soft-lavender">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-2 pl-12">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className="text-soft-lavender/60 text-sm leading-relaxed relative before:content-[''] before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold/30"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/contactForm" className="btn-primary text-sm">
            Contact Support
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliciesPage;
