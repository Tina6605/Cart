import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically gather form data and send it to a backend
    console.log("Contact form submitted!");
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-10">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Have questions about our food carts, custom builds, or just want to say hello?
          Reach out to us through the form below or using our direct contact information.
        </p>

        <div className="bg-white rounded-xl shadow-lg p-10 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Inquiry about..."
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Tell us how we can help..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Contact Details</h2>
            <div className="space-y-6">
              <ContactInfoItem
                icon="📞"
                label="Phone"
                value="(123) 456-7890"
                link="tel:+1234567890"
              />
              <ContactInfoItem
                icon="📧"
                label="Email"
                value="info@globalfoodtruck.com"
                link="mailto:info@globalfoodtruck.com"
              />
              <ContactInfoItem
                icon="📍"
                label="Address"
                value="123 Culinary Lane, Foodie City, FC 90210"
                link="https://maps.google.com/?q=123+Culinary+Lane+Foodie+City" // Replace with actual map link
              />
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Us on the Map</h3>
              {/* Placeholder for a map - In a real app, you'd embed a Google Map or similar */}
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md flex items-center justify-center text-gray-600 text-center p-4">
                <img src="/map-placeholder.png" alt="Map Location" className="w-full h-full object-cover" />
                {/* Or a static map image if you don't want to embed an interactive one yet */}
                {/* <p>Interactive Map Placeholder</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for Contact Info Items
const ContactInfoItem = ({ icon, label, value, link }) => (
  <div className="flex items-start">
    <span className="text-orange-500 text-3xl mr-4 flex-shrink-0">{icon}</span> {/* Emoji as icon */}
    <div>
      <h4 className="font-semibold text-gray-800 text-lg mb-1">{label}</h4>
      <a href={link} className="text-gray-700 hover:text-orange-600 transition-colors duration-200 block">
        {value}
      </a>
    </div>
  </div>
);

export default Contact;