import React from "react";

function ContactPage() {
  return (
    <div>
      return (
      <section className=" py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center">
            <span className="text-red-600">Feature</span> Section
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mt-4">
            Have questions or feedback? We'd love to hear from you!
          </p>

          {/* Content */}
          <div className="mt-10 flex flex-col md:flex-row gap-10">
            {/* Contact Info */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Address
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  123 Foody Street, Flavor Town, FT 12345
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  support@foody.com
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  +1 234 567 890
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-medium">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-red-500 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
