import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // Reset status after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");

      // Reset status after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Breadcrumb */}
      <div className="bg-light py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-600">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-dark mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-12">
          Get in touch with our team. We're here to help and answer any
          questions you might have.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-secondary">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-dark mb-2">Email</h3>
              <a
                href="mailto:info@ibrar.com"
                className="text-primary hover:underline"
              >
                info@ibrar.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-secondary">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-dark mb-2">Phone</h3>
              <a
                href="tel:+923001234567"
                className="text-primary hover:underline"
              >
                +92 300 1234567
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-secondary">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-dark mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/923001234567?text=Hello%20Ibrar%20International"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Start Chat
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-light rounded-lg p-8 border-l-4 border-secondary">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="text-xl font-bold text-dark mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Sat: 10:00 AM - 4:00 PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
              Send us a Message
            </h2>

            {/* Success Message */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Thank you! We've received your message. We'll get back to you
                soon.
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                ✗ Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 resize-none"
                  placeholder="Tell us about your inquiry or requirements"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 font-semibold rounded-lg text-white transition-all duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-opacity-90 hover:shadow-lg"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-gray-500">
                * Required fields. We'll respond to your inquiry within 24
                hours.
              </p>
            </form>
          </div>
        </div>

        {/* Map Section Placeholder */}
        <div className="bg-light rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">Visit Us</h2>
          <p className="text-gray-600 mb-6">
            Our office is located in a strategic location for easy access and
            efficient service delivery.
          </p>
          <div className="bg-gradient-to-br from-primary to-purple-700 rounded-lg h-64 flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <p>Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
