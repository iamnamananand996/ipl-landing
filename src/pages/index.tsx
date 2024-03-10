import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
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
            glory in the world of cricket, records are being made and broken at
            will and weird instances and events continue to dot the global
            spectrum of international cricket. Here are some of the most
            interesting facts about the ICC World Cup from its glorious years in
            history
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
    </React.Fragment>
  );
}
