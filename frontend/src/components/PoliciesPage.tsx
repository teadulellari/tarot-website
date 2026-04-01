import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const policySections = [
  {
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
    title: "Products and Fulfillment",
    points: [
      "Digital products are delivered instantly after successful payment.",
      "Private readings are delivered digitally within the timeline shown on the selected service page.",
      "If delivery is delayed, support is available via email to provide a revised timeline.",
    ],
  },
  {
    title: "Refund and Cancellation",
    points: [
      "Digital downloads are non-refundable after access is granted.",
      "If a private reading has not yet started, cancellation is allowed within 24 hours of payment.",
      "If a paid service is not delivered within the stated timeframe, customers can request a full refund.",
      "Refund requests are handled through support and may require order confirmation.",
    ],
  },
  {
    title: "Service Disclaimer",
    points: [
      "Content is intended for personal reflection and entertainment.",
      "Services do not provide legal, medical, financial, or mental health advice.",
      "No guaranteed outcomes or predictions are promised.",
      "Services are intended for adults 18+ only.",
    ],
  },
  {
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
    <div className="min-h-screen bg-customColor1 text-customColor2">
      <main className="max-w-[1000px] mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Trust & Policies
        </h1>
        <p className="mt-4 text-center text-sm md:text-base">
          This page is published to provide transparent business, policy, and
          customer-support information.
        </p>

        <div className="mt-10 space-y-6">
          {policySections.map((section) => (
            <section
              key={section.title}
              className="bg-customColor2 text-customColor1 rounded-lg p-5 shadow"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-sm md:text-base">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/contactForm"
            className="inline-block px-5 py-2 rounded border border-customColor2 hover:bg-customColor2 hover:text-customColor1 transition"
          >
            Contact Support
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliciesPage;
