import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

type FormData = {
  name: string;
  contactPreference: string;
  contactInfo: string;
  country: string;
  requestedService: string;
  message: string;
  acceptedPolicies: boolean;
};

const initialState: FormData = {
  name: "",
  contactPreference: "",
  contactInfo: "",
  country: "",
  requestedService: "Private Session",
  message: "",
  acceptedPolicies: false,
};

const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const requestedServiceFromUrl = searchParams.get("service");

  const [formData, setFormData] = useState<FormData>({
    ...initialState,
    requestedService: requestedServiceFromUrl || initialState.requestedService,
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.acceptedPolicies) {
      setSubmitStatus("Please accept the policy confirmation before submitting.");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby1cUS4QTZA0_9asazhOd6ytfGbpX_epfUU8G-WxPsaT9BVXtPO5exLCfLyn1oCfxRyAg/exec",
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        }
      );

      if (response.ok || response.status === 200) {
        setSubmitStatus(
          "Request sent successfully. You will receive a reply within 48 business hours."
        );
        setFormData(initialState);
      } else {
        setSubmitStatus("Request failed. Please try again shortly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("Error submitting form. Please try again later.");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : false;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-midnight/60 border border-soft-lavender/15 text-soft-lavender placeholder-soft-lavender/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300";
  const labelClasses = "block text-sm font-medium text-soft-lavender/80 mb-2";

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 flex items-start justify-center">
      <div className="w-full max-w-xl">
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-gradient-gold mb-3">
              Contact & Booking
            </h1>
            <div className="divider-gold w-20 mx-auto mb-3" />
            <p className="text-soft-lavender/50 text-sm">
              Include clear details so your request can be processed quickly.
            </p>
            <Link
              to="/policies"
              className="inline-block mt-2 text-sm text-gold/80 hover:text-gold transition-colors underline underline-offset-2"
            >
              Review Trust & Policies
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="country" className={labelClasses}>
                Country
              </label>
              <input
                type="text"
                name="country"
                placeholder="Your country"
                value={formData.country}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contactPreference" className={labelClasses}>
                Preferred Contact
              </label>
              <select
                name="contactPreference"
                value={formData.contactPreference}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="">Select contact method</option>
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Instagram">Instagram</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="contactInfo" className={labelClasses}>
                Contact Details
              </label>
              <input
                type="text"
                name="contactInfo"
                placeholder="Email, username, or number"
                value={formData.contactInfo}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="requestedService" className={labelClasses}>
                Requested Product or Service
              </label>
              <select
                name="requestedService"
                value={formData.requestedService}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="Private Session">Private Session</option>
                <option value="Love Reading">Love Reading</option>
                <option value="Finances Reading">Finances Reading</option>
                <option value="Decision Making Reading">Decision Making Reading</option>
                <option value="Spiritual Guidance Reading">Spiritual Guidance Reading</option>
                <option value="Short Reading">Short Reading</option>
                <option value="Tarot Reflection Journal (PDF)">Tarot Reflection Journal (PDF)</option>
                <option value="Tarot Meanings Study Pack">Tarot Meanings Study Pack</option>
                <option value="Monthly Prompt Pack">Monthly Prompt Pack</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us what you need and your preferred timeline."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className={inputClasses + " resize-none"}
              />
            </div>

            <label className="flex gap-3 items-start cursor-pointer group">
              <input
                type="checkbox"
                name="acceptedPolicies"
                checked={formData.acceptedPolicies}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 rounded border-soft-lavender/30 bg-midnight/60 text-gold focus:ring-gold/20 accent-gold"
              />
              <span className="text-xs text-soft-lavender/50 group-hover:text-soft-lavender/70 transition-colors leading-relaxed">
                I confirm I am 18+ and understand this content is for personal
                reflection and entertainment, not legal/medical/financial advice.
              </span>
            </label>

            <button type="submit" className="btn-primary w-full text-center">
              Submit Request
            </button>
          </form>

          {submitStatus && (
            <div
              className={`mt-5 text-sm text-center p-3 rounded-xl ${
                submitStatus.includes("success")
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-gold/10 text-gold border border-gold/20"
              }`}
            >
              {submitStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
