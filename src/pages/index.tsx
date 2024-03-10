import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <div className="h-full relative bg-white xl:block hidden">
        <div className="w-full h-[800px] left-[-1px] top-0 absolute">
          <img className="h-[800px] left-0 top-0 absolute" src="/bg-hero.svg" />
          <div className="w-full h-[699px] left-[24px] top-[78px] absolute">
            <div className="left-[345px] top-[369px] absolute text-zinc-950 text-4xl font-normal font-['Inter']">
              Everything About Cricket
            </div>
            <div className="w-full left-[343px] top-[282px] absolute text-black text-7xl font-bold font-['Inter']">
              Cricscroll
            </div>
            <div className="w-10 h-[60px] left-[1890px] top-[296px] absolute" />
            <div className="w-10 h-[60px] left-0 top-[292px] absolute" />
            <div className="w-[195px] h-[180px] left-[345px] top-0 absolute">
              <img
                className="w-[195px] h-[180px] left-0 top-0 absolute rounded-full"
                src="https://via.placeholder.com/195x180"
              />
              <div className="left-[40px] top-[61px] absolute text-neutral-400 text-opacity-0 text-5xl font-normal font-['Inter']">
                Logo
              </div>
            </div>
            <div className="w-[22px] h-[22px] left-[917px] top-[677px] absolute bg-white rounded-full" />
            <div className="w-[22px] h-[22px] left-[954px] top-[677px] absolute bg-neutral-400 rounded-full" />
            <div className="w-[22px] h-[22px] left-[993px] top-[677px] absolute bg-neutral-400 rounded-full" />
            <div className="w-[22px] h-[22px] left-[1031px] top-[677px] absolute bg-neutral-400 rounded-full" />
          </div>
          <div className="w-[1124px] h-[100px] left-[496px] top-[110px] absolute">
            <div className="w-[929px] h-[60px] left-[195px] top-[19px] absolute bg-yellow-950" />
            <div className="left-[945px] top-[35px] absolute text-white text-2xl font-normal font-['Inter']">
              Purchase
            </div>
            <div className="left-[570px] top-[35px] absolute text-white text-2xl font-normal font-['Inter']">
              Features
            </div>
            <div className="left-[743px] top-[35px] absolute text-stone-50 text-2xl font-normal font-['Inter']">
              Contact Us
            </div>
            <div className="left-[195px] top-[44px] absolute text-black text-2xl font-normal font-['Inter']">
              {" "}
            </div>
            <div className="left-[394px] top-[35px] absolute text-white text-2xl font-normal font-['Inter']">
              About us
            </div>
            <div className="w-[85px] left-[233px] top-[35px] absolute text-white text-2xl font-normal font-['Inter']">
              Home
            </div>
            <div className="w-[100px] h-[100px] left-0 top-0 absolute" />
          </div>
        </div>
        <div className="w-full h-[760px] left-[2px] top-[1666px] absolute">
          <img
            className="w-full h-[760px] left-0 top-0 absolute"
            src="/bg-hero-2.svg"
          />
          <div className="w-[886px] h-[479px] left-[728px] top-[178px] absolute">
            <div className="left-[681px] top-[432px] absolute text-stone-50 text-[32px] font-normal font-['Inter']">
              Read
            </div>
            <div className="left-[288px] top-[440px] absolute text-white text-[32px] font-normal font-['Inter']">
              Read
            </div>
            <div className="w-96 h-[60.80px] left-[135px] top-[58px] absolute text-center text-black text-opacity-95 text-[32px] font-normal font-['Inter']">
              Check out
            </div>
            <div className="w-[654px] left-0 top-0 absolute text-center text-black text-5xl font-bold font-['Inter']">
              Other Articles{" "}
            </div>
            <img
              className="w-[300px] h-[247px] left-[188px] top-[193px] absolute"
              src="https://via.placeholder.com/300x247"
            />
            <img
              className="w-[298px] h-[247px] left-[588px] top-[193px] absolute"
              src="https://via.placeholder.com/298x247"
            />
          </div>
        </div>
        <div className="w-full h-[866px] left-0 top-[800px] absolute">
          <div className="w-full h-[866px] left-0 top-0 absolute bg-yellow-200" />
          <div className="w-[715px] h-[283px] left-[889px] top-[312px] absolute text-yellow-950 text-opacity-95 text-2xl font-normal font-['Inter']">
            Over the years as the World Cup has evolved to be a bigger and
            better platform for competing for the ultimate glory in the world of
            cricket, records are being made and broken at will and weird
            instances and events continue to dot the global spectrum of
            international cricket. Here are some of the most interesting facts
            about the ICC World Cup from its glorious years in history
          </div>
          <div className="left-[889px] top-[251px] absolute text-black text-opacity-95 text-[40px] font-normal font-['Inter']">
            10 facts you should know about world cup
          </div>
          <div className="left-[893px] top-[164px] absolute text-black text-5xl font-normal font-['Inter']">
            ICC 2023 ODI WC is around the corner{" "}
          </div>
          <img
            className="w-[405px] h-[405px] left-[368px] top-[190px] absolute"
            src="https://via.placeholder.com/405x405"
          />
          <div className="left-[926px] top-[611px] absolute text-neutral-50 text-2xl font-normal font-['Inter']">
            Read More
          </div>
        </div>
        <div className="w-full h-[844px] left-[2px] top-[2426px] absolute">
          <img
            className="w-full h-[844px] left-0 top-0 absolute"
            src="https://via.placeholder.com/1978x844"
          />
          <div className="w-[195px] h-[203.10px] left-[1206px] top-[84.63px] absolute">
            <img
              className="w-[195px] h-[203.10px] left-0 top-0 absolute rounded-full"
              src="https://via.placeholder.com/195x203"
            />
            <div className="w-[114px] h-[65.44px] left-[40px] top-[68.83px] absolute text-neutral-400 text-opacity-0 text-5xl font-normal font-['Inter']">
              Logo
            </div>
          </div>
          <div className="w-[405px] h-[49.65px] left-[366px] top-[186.18px] absolute text-blue-950 text-4xl font-normal font-['Inter']">
            Send us a message
          </div>
          <div className="w-[405px] h-[78.98px] left-[366px] top-[91.40px] absolute text-black text-[58px] font-bold font-['Inter']">
            Contact us
          </div>
          <div className="w-[405px] h-[78.98px] left-[782px] top-[91.40px] absolute text-black text-[58px] font-bold font-['Inter']">
            Sitemap
          </div>
          <div className="w-[405px] h-[49.65px] left-[784px] top-[186.18px] absolute text-black text-4xl font-normal font-['Inter']">
            All our pages
          </div>
          <div className="w-[405px] h-[53px] left-[1206px] top-[369px] absolute">
            <div className="w-[405px] h-[49.65px] left-0 top-[3.35px] absolute text-white text-4xl font-normal font-['Inter']">
              {" "}
              (+91) 786 6487 5
            </div>
          </div>
          <div className="w-[405px] h-[49.65px] left-[1206px] top-[468.26px] absolute">
            <div className="w-9 h-[40.62px] left-[10px] top-[4.51px] absolute" />
            <div className="w-[405px] h-[49.65px] left-0 top-0 absolute text-white text-4xl font-normal font-['Inter']">
              {" "}
              mail@gmail.com
            </div>
          </div>
          <div className="w-[298px] h-[67.61px] left-[368px] top-[380.56px] absolute bg-white" />
          <div className="w-[405px] h-[139.91px] left-[366px] top-[475.03px] absolute bg-white" />
          <div className="w-[119px] h-[32.72px] left-[409px] top-[405.07px] absolute text-neutral-600 text-opacity-95 text-2xl font-normal font-['Inter']">
            Your Email
          </div>
          <div className="w-[161px] h-[32.72px] left-[409px] top-[496.47px] absolute text-neutral-600 text-opacity-95 text-2xl font-normal font-['Inter']">
            Your Message
          </div>
          <div className="w-[300px] h-[65.43px] left-[366px] top-[288.97px] absolute bg-white" />
          <div className="w-[108px] h-[31.62px] left-[409px] top-[305.32px] absolute text-neutral-600 text-opacity-95 text-2xl font-normal font-['Inter']">
            Full name
          </div>
          <div className="w-[193px] h-[65.43px] left-[366px] top-[635px] absolute bg-neutral-700" />
          <div className="w-[119px] h-[32.72px] left-[410px] top-[652.08px] absolute text-white text-2xl font-normal font-['Inter']">
            Submit
          </div>
          <div className="w-[197px] h-[173.93px] left-[781px] top-[266.07px] absolute">
            <div className="w-[191px] h-[43px] left-[3px] top-[130.93px] absolute text-black text-4xl font-normal font-['Inter']">
              -Purchase
            </div>
            <div className="w-[191px] h-[25.30px] left-[6px] top-[89.93px] absolute text-black text-4xl font-normal font-['Inter']">
              -Feature
            </div>
            <div className="w-[197px] h-[25.30px] left-0 top-[44.74px] absolute text-black text-4xl font-normal font-['Inter']">
              -About Us
            </div>
            <div className="w-[119px] h-[25.31px] left-[6px] top-0 absolute text-black text-4xl font-normal font-['Inter']">
              -Home
            </div>
          </div>
        </div>
        <div className="w-full h-[127px] left-0 top-[3143px] absolute">
          <div className="w-full h-[127px] left-0 top-0 absolute bg-black" />
          <div className="left-[615px] top-[47px] absolute text-white text-[28px] font-normal font-['Inter']">
            Copyright 2023 All Rights Reserved Company Name
          </div>
        </div>
      </div>

      <div>
        
      </div>
      <div className="w-full h-[4500px] relative bg-white block xl:hidden">
        <div className="w-full h-[801px] left-[-290px] top-0 absolute">
          <img
            className="w-full h-[801px] left-[290px] top-0 absolute"
            src="https://via.placeholder.com/1668x801"
          />
          <div className="w-full h-[652px] left-0 top-[132px] absolute">
            <div className="w-[391.18px] h-[39px] left-[336px] top-[286px] absolute text-zinc-950 text-[32px] font-normal font-['Inter']">
              Everything About Cricket
            </div>
            <div className="w-[234.29px] h-[58px] left-[336px] top-[228px] absolute text-black text-5xl font-bold font-['Inter']">
              Cricscroll
            </div>
            <div className="w-[41.28px] h-[60px] left-[1950.72px] top-[249px] absolute" />
            <div className="w-[41.28px] h-[60px] left-0 top-[245px] absolute" />
            <div className="w-[401.79px] h-[132px] left-[124.89px] top-0 absolute">
              <img
                className="w-[157.33px] h-[132px] left-[244.46px] top-0 absolute rounded-full"
                src="https://via.placeholder.com/157x132"
              />
              <div className="w-[116.46px] left-0 top-[37px] absolute text-neutral-400 text-opacity-0 text-5xl font-normal font-['Inter']">
                Logo
              </div>
            </div>
          </div>
        </div>
        <div className="w-[52px] h-[5px] left-[377px] top-[62px] absolute bg-white" />
        <div className="w-[52px] h-[5px] left-[377px] top-[83px] absolute bg-white" />
        <div className="w-full h-[866px] left-[-34px] top-[801px] absolute">
          <div className="w-full h-[866px] left-0 top-0 absolute bg-yellow-200" />

          <div className="w-[437px] h-[329px] left-[53px] top-[388px] absolute text-center text-yellow-950 text-opacity-95 text-2xl font-normal font-['Inter']">
            Over the years as the World Cup has evolved to be a bigger and
            better platform for competing for the ultimate glory in the world of
            cricket, records are being made and broken at will and weird
            instances and events continue to dot the global spectrum of
            international cricket. Here are some of the most interesting facts
            about the ICC World Cup from its glorious years in history
          </div>
          <div className="w-[226px] h-[103px] left-[142px] top-[285px] absolute text-center text-black text-[28px] font-normal font-['Inter']">
            ICC 2023 ODI WC is around the corner{" "}
          </div>
          <img
            className="w-[212px] h-[202px] left-[139px] top-[74px] absolute"
            src="https://via.placeholder.com/212x202"
          />
          <div className="left-[210px] top-[731px] absolute text-neutral-50 text-2xl font-normal font-['Inter']">
            Read More
          </div>
        </div>
        <div className="w-full h-[760px] left-[-96px] top-[1667px] absolute">
          <img
            className="w-full h-[760px] left-[33px] top-0 absolute"
            src="https://via.placeholder.com/1980x760"
          />
          <div className="left-[162px] top-[640px] absolute text-stone-50 text-[32px] font-normal font-['Inter']">
            Read
          </div>
          <div className="left-[162px] top-[449px] absolute text-white text-[32px] font-normal font-['Inter']">
            Read
          </div>
          <img
            className="w-[175px] h-[138px] left-[113px] top-[311px] absolute"
            src="https://via.placeholder.com/175x138"
          />
          <img
            className="w-[187.12px] h-[138px] left-[113px] top-[502px] absolute"
            src="https://via.placeholder.com/187x138"
          />
          <div className="w-96 h-[60.80px] left-[128px] top-[236px] absolute text-center text-black text-opacity-95 text-[32px] font-normal font-['Inter']">
            Check out
          </div>
          <div className="w-[654px] left-0 top-[178px] absolute text-center text-black text-5xl font-bold font-['Inter']">
            Other Articles{" "}
          </div>
        </div>
        <div className="w-full h-[850px] left-[-343px] top-[2423px] absolute">
          <img
            className="w-full h-[850px] left-0 top-0 absolute"
            src="https://via.placeholder.com/1978x850"
          />
          <div className="w-[405px] h-[49.65px] left-[371px] top-[138px] absolute text-blue-950 text-2xl font-normal font-['Inter']">
            Send us a message
          </div>
          <div className="w-[309px] h-[62px] left-[364px] top-[76px] absolute text-black text-5xl font-bold font-['Inter']">
            Contact us
          </div>
          <div className="w-[298px] h-[67.61px] left-[364px] top-[276px] absolute bg-white" />
          <div className="w-[405px] h-[139.91px] left-[364px] top-[368px] absolute bg-white" />
          <div className="w-[119px] h-[32.72px] left-[394px] top-[303px] absolute text-neutral-600 text-opacity-95 text-2xl font-normal font-['Inter']">
            Your Email
          </div>
          <div className="w-[161px] h-[32.72px] left-[394px] top-[400px] absolute text-neutral-600 text-opacity-95 text-2xl font-normal font-['Inter']">
            Your Message
          </div>
          <div className="w-[200px] h-[65.43px] left-[367px] top-[191px] absolute bg-white" />
          <div className="w-[108px] h-[31.62px] left-[400px] top-[207px] absolute text-neutral-600 text-opacity-95 text-2xl font-normal font-['Inter']">
            Full name
          </div>
          <div className="w-[193px] h-[65.43px] left-[364px] top-[531px] absolute bg-neutral-700" />
          <div className="w-[119px] h-[32.72px] left-[416px] top-[545px] absolute text-white text-2xl font-normal font-['Inter']">
            Submit
          </div>
        </div>
        <img
          className="w-[1920px] h-[895px] left-[-768px] top-[3273px] absolute"
          src="https://via.placeholder.com/1920x895"
        />
        <div className="w-[197px] h-[177px] left-[51px] top-[3457px] absolute">
          <div className="w-[191px] h-[43px] left-[3px] top-[134px] absolute text-white text-4xl font-normal font-['Inter']">
            -Purchase
          </div>
          <div className="w-[191px] h-[25.30px] left-[6px] top-[89px] absolute text-white text-4xl font-normal font-['Inter']">
            -Feature
          </div>
          <div className="w-[197px] h-[25.30px] left-0 top-[44.74px] absolute text-white text-4xl font-normal font-['Inter']">
            -About Us
          </div>
          <div className="w-[119px] h-[25.31px] left-[6px] top-0 absolute text-white text-4xl font-normal font-['Inter']">
            -Home
          </div>
        </div>
        <div className="w-[313px] h-[79px] left-[41px] top-[3324px] absolute text-black text-[58px] font-bold font-['Inter']">
          Sitemap
        </div>
        <div className="w-[322px] h-[50px] left-[45px] top-[3393px] absolute text-black text-[32px] font-normal font-['Inter']">
          All our pages
        </div>
        <div className="w-[381px] h-[42.15px] left-[177px] top-[3721px] absolute">
          <div className="w-[381px] h-[42.15px] left-0 top-0 absolute">
            <span className="text-white text-4xl font-normal font-['Inter']">
              {" "}
            </span>
            <span className="text-white text-xl font-normal font-['Inter']">
              {" "}
            </span>
            <span className="text-white text-4xl font-normal font-['Inter']">
              {" "}
            </span>
            <span className="text-white text-2xl font-normal font-['Inter']">
              (+91) 786 6487 5
            </span>
          </div>
        </div>
        <div className="w-[357px] h-[49.65px] left-[175px] top-[3763px] absolute">
          <div className="w-7 h-7 left-[11px] top-[11px] absolute" />
          <div className="w-[357px] h-[49.65px] left-0 top-0 absolute">
            <span className="text-white text-4xl font-normal font-['Inter']">
              {" "}
            </span>
            <span className="text-white text-2xl font-normal font-['Inter']">
              mail@gmail.com
            </span>
          </div>
        </div>
        <div className="w-[487px] h-[152px] left-0 top-[4016px] absolute bg-black" />
        <div className="w-[321px] left-[72px] top-[4049px] absolute text-center text-white text-xl font-normal font-['Inter']">
          Copyright 2023 All Right Reserved Company Name
        </div>
      </div>
    </React.Fragment>
  );
}
