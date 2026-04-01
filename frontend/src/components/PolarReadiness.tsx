import React from "react";
import { Link } from "react-router-dom";

const digitalCatalog = [
  {
    name: "Tarot Reflection Journal (PDF)",
    price: "19 EUR",
    delivery: "Instant download after payment",
    details:
      "A structured self-reflection workbook with spreads, prompts, and journaling pages.",
  },
  {
    name: "Tarot Meanings Study Pack",
    price: "24 EUR",
    delivery: "Instant download after payment",
    details:
      "A printable guide covering card meanings, keywords, and beginner-friendly spread ideas.",
  },
  {
    name: "Monthly Prompt Pack",
    price: "9 EUR / month",
    delivery: "Digital file delivered each month",
    details:
      "A subscription bundle of reflection prompts and planning templates for personal growth.",
  },
];

const privateSessions = [
  "Short Reflection Session (24-hour turnaround)",
  "Love & Relationship Reflection Reading",
  "Decision Clarity Reading",
  "Spiritual Growth Reading",
];

const PolarReadiness: React.FC = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-6 mt-16">
      <div className="bg-customColor1 border border-customColor2/40 rounded-xl p-6 md:p-8 text-customColor2">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Polar Checkout Readiness
        </h2>
        <p className="mt-4 text-sm md:text-base text-center">
          To maximize gateway approval odds, checkout is positioned around
          deliverable digital products with clear fulfillment, support, and
          refund terms.
        </p>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#e1be8a]">
            Digital Products (Recommended for Checkout)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {digitalCatalog.map((product) => (
              <article
                key={product.name}
                className="bg-customColor2 text-customColor1 rounded-lg p-4 shadow-md"
              >
                <h4 className="font-semibold">{product.name}</h4>
                <p className="mt-2 text-sm">
                  <strong>Price:</strong> {product.price}
                </p>
                <p className="mt-1 text-sm">
                  <strong>Delivery:</strong> {product.delivery}
                </p>
                <p className="mt-2 text-sm">{product.details}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#e1be8a]">
            Private 1:1 Sessions (Booked by Request)
          </h3>
          <p className="mt-2 text-sm">
            Private tarot sessions are arranged manually via contact request and
            support follow-up.
          </p>
          <ul className="list-disc pl-6 mt-3 text-sm">
            {privateSessions.map((session) => (
              <li key={session}>{session}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/contactForm"
            className="inline-block px-4 py-2 rounded border border-customColor2 text-center hover:bg-customColor2 hover:text-customColor1 transition"
          >
            Request a Session
          </Link>
          <Link
            to="/policies"
            className="inline-block px-4 py-2 rounded bg-customColor2 text-customColor1 text-center hover:opacity-90 transition"
          >
            View Trust & Policies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PolarReadiness;
