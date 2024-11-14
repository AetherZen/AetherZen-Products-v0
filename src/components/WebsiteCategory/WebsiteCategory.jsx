"use client";
import Image from "next/image";
import ImageLoader from "../shared/imageLoader/ImageLoader";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import MarqueeNews from "../MarqueeSection/MarqueeNews";

const WebsiteCategory = ({ category }) => {


  return (
    <div>
      <div className="bg-gradient-to-r from-pink-100 to-white">
        <div className="flex lg:items-center justify-between items-start max-w-7xl mx-auto py-24 px-8 ">
          <h1 className="lg:text-5xl md:text-2xl text-xl font-bold text-black flex-1 md:max-w-[50%] max-w-[90%]">
            WHAT TYPE TEMPLATE WE PROVIDE
            <span className="inline-block md:translate-y-[8.5px] translate-y-[8px]">
              <Image
                className="h-5 w-5 md:h-10 md:w-12 lg:h-11 lg:w-14 object-cover text-center"
                src="https://i.postimg.cc/Dz3s8L3X/Brutalist-70.png"
                alt="why us"
                height={500}
                width={400}
              />
            </span>
          </h1>

          <Link href="#category">
            <div className="flex flex-col items-center space-y-2 cursor-pointer">
              <div className="w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border border-gray-700 rounded-full flex items-center justify-center">
                <p className="text-xs text-center">SCROLL DOWN</p>
              </div>
              <Image
                className="h-10 w-1 lg:h-10 lg:w-1 object-cover"
                src="https://i.postimg.cc/sDZB3DH8/Arrow-1.png"
                alt="scroll arrow"
                height={500}
                width={400}
              />
            </div>
          </Link>
        </div>
      </div>
      <MarqueeNews />

      <div>
        <div className="flex flex-col items-center pt-5 bg-gradient-to-b from-white to-gray-100">
          <div className="lg:text-4xl md:text-2xl text-xl lg:py-12 py-10 font-bold text-black flex items-center">
            <h1>BUSiNESS WEBSITE</h1>
            <span className="lg:block hidden">
              <Image
                className="h-5 w-5 md:h-10 md:w-12 lg:h-10 lg:w-12 object-cover text-center"
                src="https://i.postimg.cc/Dz3s8L3X/Brutalist-70.png"
                alt="icon"
                height={500}
                width={400}
              />
            </span>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 my-10 gap-y-10"
            id="category"
          >
            {websites?.map((site) => (
              <div key={site.id} className="flex flex-col items-center">
                <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden border-none">
                  <Image
                    src={site.image}
                    alt="category image"
                    height={300}
                    width={500}
                    loader={ImageLoader}
                    className="object-cover border rounded-lg border-none"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-35 transition-opacity duration-300 flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-lg">
                    <p className="text-white font-semibold mb-2 lg:text-2xl text-lg">
                      {site.title}
                    </p>
                    <div className="flex space-x-4 mt-5">
                      <Link
                        href="#"
                        className="text-black bg-white px-4 py-2 text-sm rounded-full hover:bg-red-300 flex gap-3 justify-center items-center"
                      >
                        Live Preview
                        <GoArrowUpRight className="text-lg" />
                      </Link>
                      <Link
                        href="#"
                        className="text-black bg-white px-4 py-2 text-sm rounded-full hover:bg-red-300 flex gap-3 justify-center items-center"
                      >
                        Buy Now
                        <GoArrowUpRight className="text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-center lg:text-xl text-base font-semibold text-gray-800">
                  {site.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCategory;




const websites = [
  {
    id: 1,
    title: "CONSTRUCTION WEBSITE",
    image: "https://i.postimg.cc/fWFXwZJp/Frame-76526.png",
  },
  {
    id: 2,
    title: "CONSTRUCTION WEBSITE",
    image: "https://i.postimg.cc/c6yrfx3J/Frame-76528.png",
  },
  {
    id: 3,
    title: "CONSTRUCTION WEBSITE",
    image: "https://i.postimg.cc/mgSyZJx9/Frame-76529.png",
  },
  {
    id: 4,
    title: "CONSTRUCTION WEBSITE",
    image: "https://i.postimg.cc/pdXYmCx6/Frame-76530.png",
  },
  {
    id: 5,
    title: "CONSTRUCTION WEBSITE",
    image: "https://i.postimg.cc/sfZPGvds/Frame-76525.png",
  },
  {
    id: 6,
    title: "CONSTRUCTION WEBSITE",
    image: "https://i.postimg.cc/fWFXwZJp/Frame-76526.png",
  },
];
