"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { FaRegCircleCheck } from "react-icons/fa6";
import ButtonPrimay from "../shared/ButtonPrimary/ButtonPrimay";
import ButtonSecondary from "../shared/ButtonSecondary/ButtonSecondary";
import Image from "next/image";

export default function ShowCaseSection({project}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const demoArray = Array(9).fill(0);

  return (
    <div className="section-padding-x section-padding-y">
      <div className=" grid grid-rows-12 grid-cols-12 gap-y-12  lg:gap-12 section-padding-y">
        {/* carousel */}
        <div className="col-span-12 row-span-6 lg:row-span-12 lg:col-span-8">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 "
          >
            {data?.images?.map((image, idx) => (
              <SwiperSlide key={idx} className="h-40">
                <img className="" src={image} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            spaceBetween={20}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-5 "
          >
            {data?.images?.map((image, idx) => (
              <SwiperSlide
                key={idx}
                className="max-w-16 max-h-16 md:!max-w-28 md:!max-h-28 rounded-lg border-2 p-2  mt-10 "
              >
                <img className="" src={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-12 row-span-6 lg:row-span-12 lg:col-span-4">
          <div>
            <div className="flex border-b-2 pb-2 justify-between">
              <h1 className="text-2xl">Price</h1>
              <div className="flex gap-2">
                <p className="line-through text-red-500 text-xl">1200</p>
                <p className="text-2xl font-semibold">{data?.price}</p>
              </div>
            </div>

            <ul className="mt-5 !my-10">
              {data?.features?.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                  <FaRegCircleCheck /> <p>{item}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap w-max gap-5 mx-auto">
              <ButtonPrimay text="Buy Now" />
              <ButtonSecondary text="Live Review" />
            </div>
          </div>

          {/* payment system */}
          <div className=" py-3 my-10 md:my-20">
            <h1 className="text-xl md:text-2xl font-semibold text-center">
              We Accept
            </h1>
            <div className="flex gap-[6px] rounded-full shadow-md mx-auto w-max py-1.5 px-4 md:py-3 md:px-8 mt-6">
              <Image
                src="/bkash.png"
                height={50}
                width={50}
                alt="bkash"
                className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-full"
              />
              <Image
                src="/nogod.png"
                height={50}
                width={50}
                alt="bkash"
                className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-full"
              />
              <Image
                src="/rocket.png"
                height={50}
                width={50}
                alt="bkash"
                className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-full"
              />
              <Image
                src="/visa.png"
                height={50}
                width={50}
                alt="bkash"
                className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-full"
              />
              <Image
                src="/mastercard.png"
                height={50}
                width={50}
                alt="bkash"
                className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-full"
              />

              <div className="h-[30px] w-[30px] md:h-[50px] md:w-[50px] rounded-full border border-[#FF818180] flex items-center justify-center text-sm md:text-base font-semibold">
                <p>12+</p>
              </div>
            </div>
          </div>

          {/* Other Information */}
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              SOME INFORMATION THIS TEMPLATE{" "}
            </h1>
            <ul className="space-y-4 mt-8">
              {Object.entries(data.detailsPage).map(([key, value]) => (
                <li className="grid grid-cols-2 text-sm md:text-base" key={key}>
                  <strong className="">{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-xl md:text-[32px] font-bold">
            WHO IS THIS WEBSITE FOR
          </h1>
          <p className="text-[12px] md:text-base mt-6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 section-padding-y ">
          {Array(3)
            .fill(0)
            .map((item, idx) => (
              <ul key={idx} className="">
                <li className="text-xl md:text-2xl font-semibold mb-6">
                  Ready Ecommerce Site Features
                </li>
                {demoArray?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex mb-3 md:items-center mx-auto pl-5"
                  >
                    <FaRegCircleCheck className="mr-2 mt-1" />{" "}
                    <p className="text-sm md:text-base ">
                      Ipsum is simply dummy text of the printing
                    </p>
                  </li>
                ))}
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}

const data = {
  id: 1,
  title: "Modern Project Showcase Website",
  category: "Portfolio",
  price: 1000,
  shortDescription:
    "A modern website to showcase various web projects with detailed insights.",
  features: [
    "Responsive design",
    "User-friendly interface",
    "Project filtering options",
    "Detailed project pages",
    "SEO-optimized",
  ],
  images: [
    "https://i.postimg.cc/GmV4nY1t/Frame-76534.png",
    "https://i.postimg.cc/D0p2dkv0/Frame-76535.png",
    "https://i.postimg.cc/7L4yzY3X/Frame-76534-1.png",
    "https://i.postimg.cc/G2706FZS/Frame-76536.png",
  ],
  detailsPage: {
    description:
      "A comprehensive platform to display projects with all necessary information in an organized manner.",
    lastUpdate: "2024-11-10",
    version: "1.3.5",
    platform: "WordPress",
    wordpressVersion: "6.3.1",
  },
};
