import React from "react";

const standards = [
  {
    title: "Clear Scope",
    text: "Each product page defines what is included, delivery format, and expected timeline before purchase.",
  },
  {
    title: "Fast Support",
    text: "Customer messages are answered within 48 hours on business days via email or direct contact form.",
  },
  {
    title: "Transparent Policies",
    text: "Refund, privacy, and service disclaimer policies are published and accessible from every page.",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="mt-20 px-6 py-14 bg-customColor1">
      <div className="text-customColor2 text-center max-w-[900px] mx-auto">
        <h2 className="text-2xl font-bold">Service Standards</h2>
        <p className="mt-3 text-sm md:text-base">
          The business is structured around clear communication, documented
          policies, and dependable digital delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-[1000px] mx-auto">
        {standards.map((standard) => (
          <article
            key={standard.title}
            className="bg-customColor2 text-customColor1 rounded-lg p-5 shadow-md"
          >
            <h3 className="text-lg font-semibold">{standard.title}</h3>
            <p className="mt-2 text-sm">{standard.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
