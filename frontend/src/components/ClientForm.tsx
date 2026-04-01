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
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
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

  return (
    <div className="bg-customColor1 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-customColor2 text-customColor1 p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold text-center">Contact & Booking</h1>
        <p className="text-sm mt-3">
          Please include clear details so your request can be processed quickly.
          You can review policies before submitting.
        </p>
        <p className="text-sm mt-2">
          <Link to="/policies" className="underline font-semibold">
            Review Trust & Policies
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block font-semibold mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              placeholder="Your country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="contactPreference"
              className="block font-semibold mb-2"
            >
              Preferred Contact
            </label>
            <select
              name="contactPreference"
              value={formData.contactPreference}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select contact method</option>
              <option value="Email">Email</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Instagram">Instagram</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="contactInfo" className="block font-semibold mb-2">
              Contact Details
            </label>
            <textarea
              name="contactInfo"
              placeholder="Email, username, or number"
              value={formData.contactInfo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="requestedService"
              className="block font-semibold mb-2"
            >
              Requested Product or Service
            </label>
            <select
              name="requestedService"
              value={formData.requestedService}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            >
              <option value="Private Session">Private Session</option>
              <option value="Love Reading">Love Reading</option>
              <option value="Finances Reading">Finances Reading</option>
              <option value="Decision Making Reading">Decision Making Reading</option>
              <option value="Spiritual Guidance Reading">
                Spiritual Guidance Reading
              </option>
              <option value="Short Reading">Short Reading</option>
              <option value="Tarot Reflection Journal (PDF)">
                Tarot Reflection Journal (PDF)
              </option>
              <option value="Tarot Meanings Study Pack">
                Tarot Meanings Study Pack
              </option>
              <option value="Monthly Prompt Pack">Monthly Prompt Pack</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us what you need and your preferred timeline."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 min-h-[120px]"
            />
          </div>

          <div className="mb-4 text-sm">
            <label className="flex gap-2 items-start">
              <input
                type="checkbox"
                name="acceptedPolicies"
                checked={formData.acceptedPolicies}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <span>
                I confirm I am 18+ and understand this content is for personal
                reflection and entertainment, not legal/medical/financial advice.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-customColor1 text-customColor2 px-4 py-2 rounded hover:opacity-90 focus:outline-none"
          >
            Submit Request
          </button>
        </form>
        {submitStatus && (
          <div className="text-sm text-customColor1 mt-4">{submitStatus}</div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
