import React, { useState } from 'react';
import Background3D from './3d'; // If used in background

function Contact() {
  const [status, setStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add access_key
    formData.append("access_key", "164a5264-f5f1-4263-9c00-d06e7ece3450");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Your message has been sent successfully!");
        event.target.reset(); // Clear form
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <div className="relative min-h-screen bg-black flex justify-center items-center p-6 overflow-hidden">
      

      <div className="relative w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>

        <form className="space-y-5" onSubmit={onSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm resize-none transition duration-300"
            ></textarea>
          </div>

          {status && (
            <p className="text-center text-green-600 font-medium">{status}</p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 rounded-xl shadow-lg hover:from-green-600 hover:to-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
