import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <div className="block xl:hidden">
        <div className="flex flex-col pb-20 mx-auto w-full bg-white max-w-[480px]">
          <div className="flex overflow-hidden relative flex-col px-12 pt-10 pb-20 w-full whitespace-nowrap min-h-[801px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/bg-hero-mobile.svg"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative shrink-0 self-end bg-white h-[5px] w-[52px]" />
            <div className="relative shrink-0 self-end mt-4 bg-white h-[5px] w-[52px]" />
            <div className="relative shrink-0 self-end mt-4 bg-white h-[5px] w-[52px]" />
            <img
              loading="lazy"
              srcSet="/logo.svg"
              className="relative mt-11 ml-8 max-w-full rounded-full aspect-[1.19] w-[158px] max-md:mt-10 max-md:ml-2.5"
            />
            <div className="relative mt-28 text-5xl font-bold text-black max-md:mt-10 max-md:text-4xl">
              Cricscroll
            </div>
            <div className="relative mt-5 mb-48 text-3xl text-zinc-950 max-md:mr-2.5 max-md:mb-10">
              Everything About Cricket
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
          <div className="flex flex-col items-center px-5 py-20 w-full text-2xl bg-yellow-200 max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="helment-mobile.svg"
              className="max-w-full aspect-[1.05] w-[212px]"
            />
            <div className="mt-4 text-3xl text-center text-black">
              ICC 2023 ODI WC is around the corner{" "}
            </div>
            <div className="self-stretch mt-3.5 text-center text-yellow-950 text-opacity-90 max-md:max-w-full">
              Over the years as{" "}
              <span className="text-yellow-950">the World Cup has evolved</span>{" "}
              to be a bigger and better platform for competing for the ultimate
              glory in the world of cricket, records are being made and broken
              at will and weird instances and events continue to dot the global
              spectrum of international cricket. Here are some of the most
              interesting facts about the ICC World Cup from its glorious years
              in history
            </div>
            <div className="justify-center px-10 py-3.5 mt-4 mb-5 whitespace-nowrap bg-neutral-900 bg-opacity-80 text-zinc-50 max-md:px-5">
              Read More
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col py-20 w-full min-h-[760px] max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/bg-hero-mobile-2.svg"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col px-16 mt-28 w-full text-center max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-5xl font-bold text-black max-md:text-4xl">
                Other Articles{" "}
              </div>
              <div className="self-center mt-5 text-3xl text-black text-opacity-90">
                Check out
              </div>
            </div>
            <div className="flex relative flex-col items-center mt-11 mb-2.5 ml-4 max-w-full text-3xl whitespace-nowrap w-[187px] max-md:mt-10 max-md:ml-2.5">
              <img
                loading="lazy"
                srcSet="/1.svg"
                className="self-start w-full aspect-[1.27]"
              />
              <div className="mt-2 text-white">Read</div>
              <img
                loading="lazy"
                srcSet="/2.svg"
                className="mt-6 w-full aspect-[1.35]"
              />
              <div className="mt-2 text-stone-50">Read</div>
            </div>
          </div>
          <div className="flex overflow-hidden relative z-10 flex-col py-20 pr-16 pl-5 -mt-1 w-full text-2xl min-h-[850px] text-neutral-600 text-opacity-90 max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/footer-bg-mobile-2.svg"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative mt-2 text-5xl font-bold text-black max-md:text-4xl">
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
          <div className="flex overflow-hidden relative flex-col pt-16 w-full text-white max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/footer-bg-mobile.svg"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col self-start ml-10 text-4xl max-md:ml-2.5">
              <div className="text-6xl font-bold text-black max-md:text-4xl">
                Sitemap
              </div>
              <div className="mt-2.5 text-3xl text-black whitespace-nowrap">
                All our pages
              </div>
              <div className="self-start mt-9 ml-4 max-md:ml-2.5">-Home</div>
              <div className="self-start mt-5 ml-2.5 whitespace-nowrap">
                -About Us
              </div>
              <div className="self-start mt-5 ml-4 max-md:ml-2.5">-Feature</div>
              <div className="self-start mt-5 ml-3.5 max-md:ml-2.5">
                -Purchase
              </div>
              <div className="self-end mt-28 max-md:mt-10">
                {" "}
                <span className="text-2xl">(+91) 786 6487 5</span>
              </div>
              <div className="self-end mt-6">
                {" "}
                <span className="text-2xl">mail@gmail.com</span>
              </div>
            </div>
            <div className=" bottom-0 relative items-center px-16 pt-9 pb-20 mt-52 w-full text-xl text-center bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
              Copyright 2023 All Right Reserved Company Name
            </div>
          </div>
        </div>
      </div>

      <div className="xl:block hidden">
        <div className="flex flex-col bg-white">
          <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-center px-6 pt-20 pb-6 w-full min-h-[800px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/bg-hero.svg"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6bc5923ce1925a5b93dafec2e11f610eadb0ae3ccd6ac3ec88b6152f56f51c1?"
              className="shrink-0 self-stretch my-auto w-10 aspect-[0.67]"
            />
            <div className="container">
              <div className="flex relative flex-col flex-1 self-stretch max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="/logo-web.svg"
                        className="grow shrink-0 max-w-full rounded-full aspect-[1.09] w-[195px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                      <div className="flex gap-5 justify-between self-stretch pr-20 m-auto w-full text-2xl text-white bg-zinc-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-auto gap-5 justify-between whitespace-nowrap">
                          <div className="grow justify-center px-10 py-6  max-md:pr-7 max-md:pl-5">
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
                <div className="mt-28 text-7xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  Cricscroll
                </div>
                <div className="mt-6 text-4xl text-zinc-950 max-md:max-w-full">
                  Everything About Cricket
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
                <div className="flex gap-4 self-center mt-64 max-md:mt-10">
                  <div className="shrink-0 bg-white rounded-full h-[22px] w-[22px]" />
                  <div className="shrink-0 rounded-full bg-neutral-400 h-[22px] w-[22px]" />
                  <div className="shrink-0 rounded-full bg-neutral-400 h-[22px] w-[22px]" />
                  <div className="shrink-0 rounded-full bg-neutral-400 h-[22px] w-[22px]" />
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5de0aacababc3a225689153ebea6a234b4aa31a6e62c1cca85378cba04660e7d?"
              className="shrink-0 self-stretch my-auto w-10 aspect-[0.67]"
            />
          </div>
          <div className="flex justify-center items-center px-16 py-20 w-full bg-yellow-200 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col my-24 w-full max-w-[1396px] max-md:my-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="/helmet-web.svg"
                      className="mt-4 w-full aspect-square max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                      <div className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
                        ICC 2023 ODI WC is around the corner{" "}
                      </div>
                      <div className="mt-12 text-4xl text-black text-opacity-90 max-md:mt-10 max-md:max-w-full">
                        10 facts you should know about world cup
                      </div>
                      <div className="mt-5 text-2xl text-yellow-950 text-opacity-90 max-md:max-w-full">
                        Over the years as{" "}
                        <span className="text-yellow-950">
                          the World Cup has evolved
                        </span>{" "}
                        to be a bigger and better platform for competing for the
                        ultimate glory in the world of cricket, records are
                        being made and broken at will and weird instances and
                        events continue to dot the global spectrum of
                        international cricket. Here are some of the most
                        interesting facts about the ICC World Cup from its
                        glorious years in history
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center self-center px-10 py-3.5 mt-2.5 text-2xl whitespace-nowrap bg-neutral-900 bg-opacity-80 text-zinc-50 max-md:px-5">
                Read More
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center items-end px-16 py-20 w-full min-h-[760px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/bg-hero-2.svg"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col mt-28 mr-80 mb-2.5 max-w-full w-[723px] max-md:mt-10 max-md:mr-2.5">
              <div className="text-5xl font-bold text-center text-black max-md:max-w-full max-md:text-4xl">
                Other Articles{" "}
              </div>
              <div className="self-start mt-5 ml-24 text-3xl text-center text-black text-opacity-90 max-md:ml-2.5">
                Check out
              </div>
              <div className="mt-28 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-3xl text-white whitespace-nowrap max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="/1-web.svg"
                        className="w-full aspect-[1.27]"
                      />
                      <div className="self-center mt-2">Read</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-3xl whitespace-nowrap text-stone-50 max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="/2-web.svg"
                        className="w-full aspect-[1.27]"
                      />
                      <div className="self-center">Read</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col pt-20 w-full min-h-[844px] max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/footer-web.svg"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col self-center mt-1.5 max-w-full w-[1130px]">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                    <div className="grow mt-5 max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow px-5 text-2xl text-neutral-600 text-opacity-90 max-md:mt-3">
                            <div className="text-6xl font-bold text-black whitespace-nowrap max-md:text-4xl">
                              Contact us
                            </div>
                            <div className="mt-12 text-4xl whitespace-nowrap text-blue-950 max-md:mt-10">
                              Send us a message
                            </div>
                            <div className="justify-center items-start px-11 py-6 mt-16 bg-white max-md:px-5 max-md:mt-10">
                              Full name
                            </div>
                            <div className="justify-center items-start px-10 py-6 mt-7 bg-white max-md:px-5">
                              Your Email
                            </div>
                            <div className="items-start px-11 pt-7 pb-24 mt-7 whitespace-nowrap bg-white max-md:px-5">
                              Your Message
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col px-5 text-4xl text-black max-md:mt-2.5">
                            <div className="text-6xl font-bold max-md:text-4xl">
                              Sitemap
                            </div>
                            <div className="mt-9">All our pages</div>
                            <div className="mt-12 max-md:mt-10">-Home</div>
                            <div className="mt-5">-About Us</div>
                            <div className="mt-5">-Feature</div>
                            <div className="mt-4">-Purchase</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 text-4xl text-white max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="/logo-web.svg"
                        className="max-w-full rounded-full aspect-[0.96] w-[195px]"
                      />
                      <div className="mt-24 max-md:mt-10">
                        {" "}
                        (+91) 786 6487 5
                      </div>
                      <div className="mt-16 max-md:mt-10"> mail@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-start px-11 py-6 mt-5 max-w-full text-2xl text-white whitespace-nowrap bg-neutral-700 w-[195px] max-md:px-5">
                Submit
              </div>
            </div>
            <div className="relative justify-center items-center px-16 py-12 mt-4 text-3xl text-white bg-black max-md:px-5 max-md:max-w-full">
              Copyright 2023 All Rights Reserved Company Name
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
