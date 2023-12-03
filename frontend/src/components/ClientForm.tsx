import React, { ChangeEvent, FormEvent, useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactPreference: '',
    contactInfo: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyVNuGuxC-k5t25klvI-DtuLrjXFPShqxeFvpFmlLcy2xH_THiFlKeLo5vBicVvI9kMBg/exec', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Thank you for submitting the form. You will be contacted soon.');
        // Clear the form after successful submission
        setFormData({
          name: '',
          contactPreference: '',
          contactInfo: '',
          message: '',
        });
      } else {
        setSubmitStatus('Form submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('Error submitting form. Please try again later.');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-customColor1 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="contactPreference"
              className="block text-gray-700 font-semibold mb-2"
            >
              Contact Preference
            </label>
            <select
              name="contactPreference"
              value={formData.contactPreference}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Contact Preference</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Instagram">Instagram</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="contactInfo"
              className="block text-gray-700 font-semibold mb-2"
            >
              Leave your Contact Info
            </label>
            <textarea
              name="contactInfo" 
              placeholder="Your Contact Info"
              value={formData.contactInfo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {submitStatus && (
          <div className="text-center text-sm text-gray-600 mt-4">{submitStatus}</div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
