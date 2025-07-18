import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 font-['Inter',sans-serif] text-gray-900">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-800 via-teal-800 to-green-800 py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4V2h-4V0h-2v2h-4v2h4zM6 34v4h4v-4h2v-4h-2v-4H6v4H2v2h4zm0-30v4h-4v2h4v4h2V6h4V4H6V0H4v4H2v2h4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
              Contact NAST
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-light">
              Reach out to our team for assistance with membership,
              certifications, or inquiries.
            </p>
          </div>
        </div>
      </header>

      {/* Contact Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-indigo-800 mb-8 pb-4 border-b border-gray-200">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Our Headquarters
                  </h3>
                  <p className="text-gray-600 text-sm">
                    24 Surveyors Way
                    <br />
                    Central Business District
                    <br />
                    Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Phone & Fax
                  </h3>
                  <p className="text-gray-600 text-sm">
                    +234 812 345 6789
                    <br />
                    +234 809 876 5432 (Fax)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Email Address
                  </h3>
                  <p className="text-gray-600 text-sm">
                    info@nastnigeria.org
                    <br />
                    support@nastnigeria.org
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Working Hours
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 bg-gray-100 border border-gray-200 rounded-xl overflow-hidden h-64 relative">
              <div className="absolute inset-0 bg-indigo-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-indigo-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-800">
                    Association Headquarters
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    24 Surveyors Way, Abuja
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">
              Send Us a Message
            </h2>

            {submitSuccess ? (
              <div className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-6 rounded-xl mb-8 animate-fade-in">
                <div className="flex items-center">
                  <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Message Sent!</h3>
                    <p className="mt-1 text-sm">
                      We'll respond within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Adebayo"
                    aria-label="Full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                    aria-label="Email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="How can we assist you?"
                    aria-label="Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    placeholder="Type your message here..."
                    aria-label="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center transition-all duration-300 ${
                    isSubmitting
                      ? "bg-indigo-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}

            {/* FAQ Section */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700">
                    How do I become a member of NAST?
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Visit our membership page to review application requirements
                    and submit your surveying qualifications and experience.
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700">
                    Where can I find continuing education courses?
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Check our events calendar for upcoming workshops and
                    training sessions to earn professional development hours.
                  </p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-700">
                    How can I verify a surveyor's credentials?
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Use our member directory to verify active members or contact
                    our certification department for formal verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">
              Our Contact Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet our dedicated professionals ready to assist you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-teal-200 mx-auto mb-4 overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-1">
                Amina Ibrahim
              </h3>
              <p className="text-indigo-600 font-medium mb-3">
                Membership Coordinator
              </p>
              <p className="text-gray-600 text-sm">
                Manages new member applications and renewals
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-teal-200 mx-auto mb-4 overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-1">
                Chinedu Okoro
              </h3>
              <p className="text-indigo-600 font-medium mb-3">
                Technical Support
              </p>
              <p className="text-gray-600 text-sm">
                Assists with certifications, standards, and technical inquiries
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-teal-200 mx-auto mb-4 overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-1">
                Funke Adeyemi
              </h3>
              <p className="text-indigo-600 font-medium mb-3">
                Events & Education
              </p>
              <p className="text-gray-600 text-sm">
                Manages workshops, conferences, and professional development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
