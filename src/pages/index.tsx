import React, { useState } from "react";

export default function Home() {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <React.Fragment>
      {/* Navigation */}
      <nav className="bg-black p-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  <img src="/logo.png" alt="logo" />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                  <a
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Home
                  </a>
                  <a
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Services
                  </a>
                  <a
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Platforms
                  </a>
                  <a
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    About Us
                  </a>
                  <a
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Sports Id
                  </a>
                  <a
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Blog
                  </a>
                  <a
                    href="/"
                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Rule
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/adventures"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/destinations"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Services
              </a>
              <a
                href="/booking"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Platforms
              </a>
              <a
                href="/profile"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                About Us
              </a>
              <a
                href="/contact-us"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Sports Id
              </a>
              <a
                href="/contact-us"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contact Us
              </a>
              <a
                href="/contact-us"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Blog
              </a>
              <a
                href="/contact-us"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Rule
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="bg-black">
        <div className="px-6 py-20 md:px-10 max-w-full">
          <div className="text-center mt-10">
            <h1 className="text-3xl md:text-6xl font-bold text-[#EBCF74]">
              Welcome to Reddy Anna Book
            </h1>
            <p className="text-xl md:text-4xl text-white mt-4">
              India's No.1 sports ID provider since 2010
            </p>
            <p className="text-lg md:text-xl text-white mt-4">
              Do you want to open your cricket ID online but can't find a
              trustworthy betting platform? Here's a Reddy Anna Book for you.
              This is India's most famous and trusted cricket demo ID platform.
              Reddy Anna Book is India's largest exchange platform, offering
              fantastic online sports betting with a 24-hour withdrawal service.
            </p>
            <a
              href="https://wa.me/6299480841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-green-500 text-white px-4 py-3 rounded-md font-bold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-[#141518]">
        <div className="px-6 py-20 md:px-10 max-w-full">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <img
                loading="lazy"
                srcSet="/play.png"
                className="w-full"
                alt="Play"
              />
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2 md:ml-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#EBCF74]">
                Why Choose Reddy Anna for Unmatched Gaming Excitement?
              </h2>
              <p className="text-lg md:text-xl text-white mt-4">
                At Reddy Anna Book Official, we stand out as your premier choice
                for online gaming. Offering a diverse range of games,
                cutting-edge technology, and a commitment to responsible gaming,
                we create an unmatched and thrilling experience for our users.
                Choose Reddy Anna for a secure and enjoyable gaming environment
                where excitement knows no bounds. Join us and discover the
                difference that sets Reddy Anna apart in the world of online
                entertainment.
              </p>
              <div className="mt-8 flex justify-center">
                <button className="bg-[#EBCF74] text-black px-4 py-2 rounded-md font-bold hover:bg-yellow-400">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-black">
        <div className="px-6 py-20 md:px-10 max-w-full">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold text-[#EBCF74]">
              Reddy Anna Customer Support
            </h2>
            <p className="text-lg md:text-xl mt-4">
              Get in touch with REDDY ANNA for any Queries, Emergencies,
              Feedback or Complaints. We are here to help you 24/7 with our
              online services.
            </p>
            <p className="text-lg mt-4 border-2 border-[#EBCF74] inline-block px-6 py-3 rounded-md">
              Contact us +91-8227058228
            </p>
          </div>
          <div className="text-center mt-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#EBCF74]">
              Reddy Anna: Success Stories and Player Testimonials
            </h2>
            <p className="text-lg md:text-xl text-white mt-4">
              In the realm of online gaming, Reddy Anna Book Official has
              emerged as a trusted platform, garnering positive reviews and
              tangible winning proof from its users. The platform's commitment
              to providing a secure and transparent gaming environment is
              reflected in the experiences shared by its player community. From
              diverse game offerings to responsible gaming features, Reddy Book
              has created a winning formula that resonates with players seeking
              a reputable online gaming destination. The tangible proof of
              winnings, combined with favorable reviews, solidifies Reddy Anna's
              position as a reliable and rewarding platform in the competitive
              landscape of online gaming.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="bg-gray-900">
        <div className="relative px-6 py-20 md:px-10 max-w-full">
          <img
            loading="lazy"
            srcSet="/footer-web.svg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Footer Background"
          />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-[#EBCF74]">
                Contact us
              </h2>
              <p className="text-lg md:text-xl text-black-600 text-opacity-90 mt-4">
                Send us a message
              </p>
              <form className="mt-8 flex flex-col gap-4 max-w-md">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button className="px-4 py-2 bg-[#EBCF74] text-black rounded-md font-bold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                  Submit
                </button>
              </form>
            </div>
            <div className="md:w-1/4 mt-10 md:mt-0 md:ml-10">
              <img loading="lazy" srcSet="/logo.png" alt="Logo" />
              <p className="text-[24px] mt-4 text-white">+91-70211 92530</p>
              <p className="text-lg mt-4 text-white">play-cricket@gmail.com</p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col items-center ml-5 w-full max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 text-center text-4xl text-[#EBCF74] max-md:mt-2.5">
            <div className="text-4xl md:text-6xl font-bold max-md:text-4xl">
              Sitemap
            </div>
            <div className="mt-6 md:mt-9 text-white">
              Follow us on social media
            </div>
            <ul className="mt-8 md:mt-12 text-center mb-4">
              <li className="mt-4 md:mt-2 text-white">Home</li>
              <li className="mt-4 md:mt-2 text-white">About Us</li>
              <li className="mt-4 md:mt-2 text-white">Feature</li>
              <li className="mt-4 md:mt-2 text-white">Purchase</li>
            </ul>
          </div>
        </div> */}

        <div className="px-6 py-12 md:px-10 bg-gray-800 text-center">
          <p className="text-xl text-white">
            Copyright © 2024 Reddy Anna Book Official. All rights reserved.
            Unauthorized reproduction or distribution of any content on this
            website is prohibited.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
