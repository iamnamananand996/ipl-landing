import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <div className="block xl:hidden">
        <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
          <div className="bg-black flex relative flex-col px-12 pt-10 pb-20 w-full min-h-[801px] max-md:px-5 max-md:max-w-full justify-center items-center">
            <img loading="lazy" srcSet="/logo.png" className="w-[250px]" />
            <div className="mt-28 text-5xl font-bold text-[#EBCF74] self-stretch leading-12">
              <p>Welcome to Reddy Anna Book</p>
            </div>
            <div className="relative mt-10 mb-8 text-3xl text-white">
              India's No.1 sports ID provider since 2010
            </div>
            <a
              href="https://wa.me/6299480841"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-green-500 text-white px-4 rounded-md no-underline font-bold flex flex-row justify-center py-3"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                alt="WhatsApp Icon"
                className="mr-2 w-[20px] h-[20px] my-auto"
              />
              <span className="my-auto">Chat on WhatsApp</span>
            </a>
          </div>
          <div className="flex flex-col items-center px-5 py-20 w-full text-2xl bg-[#141518] max-md:px-5 max-md:max-w-full">
            <div className="mt-4 text-3xl text-center text-[#EBCF74]">
              Why Choose Reddy Anna for Unmatched Gaming Excitement?
            </div>
            <div className="self-stretch mt-3.5 text-center text-white text-opacity-90 max-md:max-w-full">
              Over the years as Do you want to open your cricket ID online but
              can't find a trustworthy betting platform? Here's a Reddy Anna
              Book for you. This is India's most famous and trusted cricket demo
              ID platform. Reddy Anna Book is India's largest exchange platform,
              offering fantastic online sports betting with a 24-hour withdrawal
              service.
            </div>
            <div className="mt-[60px] justify-start text-center px-10 py-3.5 text-2xl whitespace-nowrap bg-[#EBCF74] bg-opacity-80 text-black">
              Read More
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col px-16 py-20 w-full min-h-[760px] max-md:px-5 max-md:max-w-full bg-black">
            <div className="flex relative flex-col mb-2.5 max-w-full max-md:mt-10">
              <div className="text-5xl font-bold text-center text-[#EBCF74] max-md:max-w-full max-md:text-4xl">
                Reddy Anna Customer Support
              </div>
              <div className="w-full flex justify-center pt-4">
                <div className="mt-5 text-xl text-center text-white text-opacity-90 max-md:ml-2.5">
                  Get in touch with REDDY ANNA for any Queries, Emergencies,
                  Feedback or Complaints. We are here to help you 24/7 with our
                  online services.
                </div>
              </div>
              <div className="relative text-white flex justify-center mt-5">
                <p className="border-2 border-[#EBCF74] p-2 px-8 rounded-[20px]">
                  Contact us @123456790
                </p>
              </div>
              <div className="text-5xl font-bold text-center text-[#EBCF74] max-md:max-w-full max-md:text-4xl my-10">
                <h1>Reddy Anna: Success Stories and Player Testimonials</h1>
              </div>
              <div className="flex justify-center items-center text-center">
                <p className="text-white text-xl">
                  In the realm of online gaming, Reddy Anna Book Official has
                  emerged as a trusted platform, garnering positive reviews and
                  tangible winning proof from its users. The platform's
                  commitment to providing a secure and transparent gaming
                  environment is reflected in the experiences shared by its
                  player community. From diverse game offerings to responsible
                  gaming features, Reddy Book has created a winning formula that
                  resonates with players seeking a reputable online gaming
                  destination. The tangible proof of winnings, combined with
                  favorable reviews, solidifies Reddy Anna's position as a
                  reliable and rewarding platform in the competitive landscape
                  of online gaming.
                </p>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative z-10 flex-col py-20 pr-16 pl-5 -mt-1 w-full text-2xl min-h-[850px] text-neutral-600 text-opacity-90 max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/footer-bg-mobile-2.svg"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative mt-2 text-5xl font-bold text-[#EBCF74] max-md:text-4xl">
              Contact us
            </div>
            <div className="relative mt-5 whitespace-nowrap text-blue-950">
              Send us a message
            </div>
            <div className="relative justify-center self-start px-8 py-6 mt-6 whitespace-nowrap bg-white max-md:pr-6 max-md:pl-5">
              Full name
            </div>
            <div className="relative items-start pt-8 pr-16 pb-5 pl-8 mt-5 bg-white max-md:px-5">
              Your Email
            </div>
            <div className="relative items-start pt-10 pr-16 pb-20 pl-8 mt-6 whitespace-nowrap bg-white max-md:px-5">
              Your Message
            </div>
            <div className="relative justify-center self-start px-14 py-6 mt-6 mb-32 text-white whitespace-nowrap bg-neutral-700 max-md:pr-6 max-md:pl-5 max-md:mb-10">
              Submit
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col pt-16 w-full text-white max-md:max-w-full bg-black">
            {/* <img
              loading="lazy"
              srcSet="/footer-bg-mobile.svg"
              className="object-cover absolute inset-0 size-full"
            /> */}
            <div className="flex relative flex-col self-start text-4xl px-8">
              <div className="text-6xl font-bold text-[#EBCF74] max-md:text-4xl">
                Sitemap
              </div>
              <div className="mt-9 text-white">Follow us on social media</div>

              <li className="mt-12">Home</li>
              <li className="mt-2">About Us</li>
              <li className="mt-2">Feature</li>
              <li className="mt-2">Purchase</li>

              <div className="self-end mt-28 max-md:mt-10">
                <span className="text-2xl">(+91) 786 6487 5</span>
              </div>
              <div className="self-end mt-6">
                {" "}
                <span className="text-2xl">mail@gmail.com</span>
              </div>
            </div>
            <div className="relative flex justify-center items-center px-16 py-12 mt-4 text-xl text-white bg-black">
              <p>
                {" "}
                Copyright © 2024 Reddy Anna Book Official. All rights reserved.
                Unauthorized reproduction or distribution of any content on this
                website is prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:block hidden">
        <div className="flex flex-col bg-white">
          <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-center px-6 pt-20 pb-6 w-full min-h-[800px] max-md:flex-wrap max-md:px-5 max-md:max-w-full bg-black">
            {/* <img
              loading="lazy"
              srcSet="/bg-hero.svg"
              className="object-cover absolute inset-0 size-full"
            /> */}
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6bc5923ce1925a5b93dafec2e11f610eadb0ae3ccd6ac3ec88b6152f56f51c1?"
              className="shrink-0 self-stretch my-auto w-10 aspect-[0.67]"
            />
            <div className="container">
              <div className="flex relative flex-col flex-1 self-stretch max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col max-md:ml-0 max-md:w-full">
                      <img loading="lazy" srcSet="/logo.png" />
                    </div>
                    <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                      <div className="flex gap-5 justify-between self-stretch pr-20 m-auto w-full text-2xl text-white bg-zinc-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-auto gap-5 justify-between whitespace-nowrap">
                          <div className="grow justify-center px-10 py-3  max-md:pr-7 max-md:pl-5">
                            Home
                          </div>
                          <div className="grow my-auto">About us</div>
                        </div>
                        <div className="flex flex-auto gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
                          {/* <div>Features</div> */}
                          <div className="flex-auto text-stone-50">
                            Contact Us
                          </div>
                          <div className="flex-auto">Purchase</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-28 text-7xl font-bold text-[#EBCF74] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  Welcome to Reddy Anna Book
                </div>
                <div className="mt-6 text-4xl text-white max-md:max-w-full">
                  India's No.1 sports ID provider since 2010
                </div>
                <div className="text-white w-1/3 my-5">
                  <p>
                    Do you want to open your cricket ID online but can't find a
                    trustworthy betting platform? Here's a Reddy Anna Book for
                    you. This is India's most famous and trusted cricket demo ID
                    platform. Reddy Anna Book is India's largest exchange
                    platform, offering fantastic online sports betting with a
                    24-hour withdrawal service.
                  </p>
                </div>
                <div className="w-1/4 pt-4">
                  <a
                    href="https://wa.me/6299480841"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-green-500 text-white px-4 rounded-md no-underline font-bold flex flex-row justify-center py-3"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                      alt="WhatsApp Icon"
                      className="mr-2 w-[20px] h-[20px] my-auto"
                    />
                    <span className="my-auto">Chat on WhatsApp</span>
                  </a>
                </div>
                <div className="flex gap-4 self-center mt-64 max-md:mt-10"></div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5de0aacababc3a225689153ebea6a234b4aa31a6e62c1cca85378cba04660e7d?"
              className="shrink-0 self-stretch my-auto w-10 aspect-[0.67]"
            />
          </div>
          <div className="flex justify-center items-center px-16 py-20 w-full bg-[#141518] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col my-24 w-full max-w-[1396px] max-md:my-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-8 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="/play.png"
                      className="w-full aspect-square mt-1"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                      <div className="text-5xl text-[#EBCF74] max-md:max-w-full max-md:text-4xl">
                        Why Choose Reddy Anna for Unmatched Gaming Excitement?
                      </div>

                      <div className="mt-5 text-2xl text-white text-opacity-90 max-md:max-w-full">
                        At Reddy Anna Book Official, we stand out as your
                        premier choice for online gaming. Offering a diverse
                        range of games, cutting-edge technology, and a
                        commitment to responsible gaming, we create an unmatched
                        and thrilling experience for our users. Choose Reddy
                        Anna for a secure and enjoyable gaming environment where
                        excitement knows no bounds. Join us and discover the
                        difference that sets Reddy Anna apart in the world of
                        online entertainment.
                      </div>
                      <div className="mt-[60px] w-1/4 justify-start text-center px-10 py-3.5 text-2xl whitespace-nowrap bg-[#EBCF74] bg-opacity-80 text-black">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col px-16 py-20 w-full min-h-[760px] max-md:px-5 max-md:max-w-full bg-black">
            <div className="flex relative flex-col mb-2.5 max-w-full max-md:mt-10 max-md:mr-2.5">
              <div className="text-5xl font-bold text-center text-[#EBCF74] max-md:max-w-full max-md:text-4xl">
                Reddy Anna Customer Support
              </div>
              <div className="w-full flex justify-center pt-4">
                <div className="mt-5 text-xl text-center text-white text-opacity-90 max-md:ml-2.5 w-1/2">
                  Get in touch with REDDY ANNA for any Queries, Emergencies,
                  Feedback or Complaints. We are here to help you 24/7 with our
                  online services.
                </div>
              </div>
              <div className="relative text-white flex justify-center mt-5">
                <p className="border-2 border-[#EBCF74] p-2 px-8 rounded-[20px]">
                  Contact us @123456790
                </p>
              </div>

              <div className="text-5xl font-bold text-center text-[#EBCF74] max-md:max-w-full max-md:text-4xl my-10">
                <h1>Reddy Anna: Success Stories and Player Testimonials</h1>
              </div>
              <div className="flex justify-center items-center text-center">
                <p className="text-white w-1/2 text-xl">
                  In the realm of online gaming, Reddy Anna Book Official has
                  emerged as a trusted platform, garnering positive reviews and
                  tangible winning proof from its users. The platform's
                  commitment to providing a secure and transparent gaming
                  environment is reflected in the experiences shared by its
                  player community. From diverse game offerings to responsible
                  gaming features, Reddy Book has created a winning formula that
                  resonates with players seeking a reputable online gaming
                  destination. The tangible proof of winnings, combined with
                  favorable reviews, solidifies Reddy Anna's position as a
                  reliable and rewarding platform in the competitive landscape
                  of online gaming.
                </p>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col pt-20 w-full min-h-[844px] max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/footer-web.svg"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col self-center mt-1.5 max-w-full w-[1280px]">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                    <div className="grow mt-5 max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow px-5 text-2xl text-neutral-600 text-opacity-90 max-md:mt-3">
                            <div className="text-6xl font-bold text-[#EBCF74] whitespace-nowrap max-md:text-4xl">
                              Contact us
                            </div>
                            <div className="mt-12 text-4xl whitespace-nowrap text-blue-950 max-md:mt-10">
                              Send us a message
                            </div>
                            <div className="justify-center items-start px-11 py-6 mt-16 bg-white max-md:px-5 max-md:mt-10">
                              Full name
                            </div>
                            <div className="justify-center items-start px-10 py-3 mt-7 bg-white max-md:px-5">
                              Your Email
                            </div>
                            <div className="items-start px-11 pt-7 pb-24 mt-7 whitespace-nowrap bg-white max-md:px-5">
                              Your Message
                            </div>
                          </div>
                          <div className="mx-4 justify-center items-start px-12 py-6 mt-5 max-w-full text-2xl text-white whitespace-nowrap bg-neutral-700 w-[195px]">
                            Submit
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col px-5 text-4xl text-[#EBCF74] max-md:mt-2.5">
                            <div className="text-6xl font-bold max-md:text-4xl">
                              Sitemap
                            </div>
                            <div className="mt-9 text-white">
                              Follow us on social media
                            </div>

                            <li className="mt-12">Home</li>
                            <li className="mt-2">About Us</li>
                            <li className="mt-2">Feature</li>
                            <li className="mt-2">Purchase</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 text-4xl text-white max-md:mt-10">
                      <img loading="lazy" srcSet="/logo.png" className="" />
                      <div className="mt-24 max-md:mt-10"> +91-1234567890</div>
                      <div className="mt-16 max-md:mt-10 text-[24px]">
                        {" "}
                        play-cricket@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center px-16 py-12 mt-4 text-xl text-white bg-black max-md:px-5 max-md:max-w-full">
              <div className="w-1/2">
                <p>
                  {" "}
                  Copyright © 2024 Reddy Anna Book Official. All rights
                  reserved. Unauthorized reproduction or distribution of any
                  content on this website is prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
