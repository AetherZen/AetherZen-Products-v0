"use client";
import Image from "next/image";
import Link from "next/link";

const CategoriesHero = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-100 to-white">
        <div className="flex lg:items-center justify-between items-start max-w-7xl mx-auto lg:py-24 py-7 px-8 ">
          {/* Title */}
          <div className="">
            <h1 className="lg:text-5xl md:text-2xl text-xl font-bold text-black flex-1 md:max-w-[50%] max-w-[90%]">
              WHAT TYPE TEMPLATE WE PROVIDE
            </h1>
            <p className="lg:text-base text-sm mt-6 md:max-w-[80.5%] md:block hidden">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer.
            </p>
          </div>

          {/* Scroll Down Button */}
          <Link href="#category">
            <div className="flex flex-col items-center space-y-2 cursor-pointer">
              <div className="w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] border border-gray-700 rounded-full flex items-center justify-center">
                <p className="text-xs text-center">SCROLL DOWN</p>
              </div>
              {/* <HiArrowLongDown className="text-black text-2xl" /> */}
              <Image
                className=" h-10 w-1  lg:h-10 lg:w-1 object-cover"
                src="https://i.postimg.cc/sDZB3DH8/Arrow-1.png"
                alt="why us"
                height={500}
                width={400}
              />
            </div>
          </Link>
        </div>
        <p className="lg:text-base text-sm  md:max-w-[80.5%] md:hidden block px-2 lg:text-center text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer.
        </p>
      </div>
    </div>
  );
};

export default CategoriesHero;
