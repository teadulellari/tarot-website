import React, { ChangeEvent, FormEvent, useState, useContext, SetStateAction } from 'react';
import { TextDBContext } from "./contexts/TextDBContext";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactPreference: '',
    contactInfo: '',
    message: '',
    feedback: ''
  });

  const textDB = useContext(TextDBContext);

  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby1cUS4QTZA0_9asazhOd6ytfGbpX_epfUU8G-WxPsaT9BVXtPO5exLCfLyn1oCfxRyAg/exec', {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      if (response.status) {
        // Check if textDB.form is defined before using it
        if (textDB.form) {
          setSubmitStatus(textDB.form?.feedback as SetStateAction<string>);        } else {
          console.error('Error: textDB.form is undefined');
          setSubmitStatus('Form submitted successfully, but feedback is unavailable.');
        }

        // Clear the form after successful submission
        setFormData({
          name: '',
          contactPreference: '',
          contactInfo: '',
          message: '',
          feedback: ''
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
      <div className="w-full max-w-md bg-gray-200 p-8 rounded shadow-md">
      <p className="text-sm text-red mb-4">
{textDB.form?.note}        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              {textDB.form?.name}
            </label>
            <input
              type="text"
              name="name"
              placeholder={textDB.form?.name}
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
              {textDB.form?.contactPref}
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
             {textDB.form?.contactInfo}
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
              {textDB.form?.message}
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
            {textDB.form?.submit}
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
