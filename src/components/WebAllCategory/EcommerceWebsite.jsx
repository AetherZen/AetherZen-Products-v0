"use client";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import WebsiteThemeCard from "./WebsiteThemeCard";
import CategoriesHero from "./CategoriesHero";

const EcommerceWebsite = () => {
  const webCategories = [
    { id: 1, category: "E-COMMERCE WEBSITE", image: "https://i.postimg.cc/1RYFNxyZ/Frame-76537.png" },
    { id: 2, category: "E-COMMERCE WEBSITE", image: "https://i.postimg.cc/yYMSvFJQ/Frame-76538.png" },
    { id: 3, category: "E-COMMERCE WEBSITE", image: "https://i.postimg.cc/T3n5SpgR/Frame-76539.png" },
    { id: 4, category: "E-COMMERCE WEBSITE", image: "https://i.postimg.cc/FKmkQNV0/Frame-76540.png" },
    { id: 5, category: "E-COMMERCE WEBSITE", image: "https://i.postimg.cc/8cqsXSCJ/Frame-76541.png" },
    { id: 6, category: "E-COMMERCE WEBSITE", image: "https://i.postimg.cc/7PcCZgNH/Frame-76542.png" },
    { id: 7, category: "CONSTRUCTION WEBSITE", image: "https://i.postimg.cc/DZCTBkgr/Frame-76543.png" },
    { id: 8, category: "CONSTRUCTION WEBSITE", image: "https://i.postimg.cc/Ls8Rf8k9/Frame-76544.png" },
    { id: 9, category: "CONSTRUCTION WEBSITE", image: "https://i.postimg.cc/JhY8QCKb/Frame-76545.png" },
    { id: 10, category: "BUSINESS WEBSITE", image: "https://i.postimg.cc/PJYkhpH4/Frame-76546.png" },
    { id: 11, category: "BUSINESS WEBSITE", image: "https://i.postimg.cc/PrbkRw2f/Frame-76525-1.png" },
  ];

  const ecommerceCategories = webCategories.filter(cat => cat.category === "E-COMMERCE WEBSITE");
  const constructionCategories = webCategories.filter(cat => cat.category === "CONSTRUCTION WEBSITE");
  const businessCategories = webCategories.filter(cat => cat.category === "BUSINESS WEBSITE");

  return (
    <div>



<CategoriesHero />



      {/* E-Commerce Section */}
      <section className="mx-auto w-full max-w-[1400px] px-2.5 md:px-5 bg-gradient-to-r from-pink-100 to-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-10">
          <h1 className="md:text-3xl uppercase text-xl font-bold text-black flex-1 md:max-w-[50%] max-w-[90%]">
            E-Commerce Website Theme
          </h1>
          <Link href="#" className="text-black bg-white px-4 py-2 text-sm rounded-full border border-gray-950 hover:bg-red-300 flex gap-3 justify-center items-center">
            Show More Theme
            <GoArrowUpRight className="text-lg" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-8 my-10 gap-y-10" id="category">
          {ecommerceCategories?.map((categoryData, index) => (
            <WebsiteThemeCard key={index} categoryData={categoryData} />
          ))}
        </div>
      </section>

      {/* Construction Website Section */}
      <section className="mx-auto w-full max-w-[1400px] px-2.5 md:px-5 bg-gradient-to-r from-pink-100 to-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-10">
          <h1 className="md:text-3xl uppercase text-xl font-bold text-black flex-1 md:max-w-[50%] max-w-[90%]">
            Construction Website Theme
          </h1>
          <Link href="#" className="text-black bg-white px-4 py-2 text-sm rounded-full border border-gray-950 hover:bg-red-300 flex gap-3 justify-center items-center">
            Show More Theme
            <GoArrowUpRight className="text-lg" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-8 my-10 gap-y-10" id="category">
          {constructionCategories?.map((categoryData, index) => (
            <WebsiteThemeCard key={index} categoryData={categoryData} />
          ))}
        </div>
      </section>

      {/* Business Website Section */}
      <section className="mx-auto w-full max-w-[1400px] px-2.5 md:px-5 bg-gradient-to-r from-pink-100 to-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-10">
          <h1 className="md:text-3xl uppercase text-xl font-bold text-black flex-1 md:max-w-[50%] max-w-[90%]">
            Business Website Theme
          </h1>
          <Link href="#" className="text-black bg-white px-4 py-2 text-sm rounded-full border border-gray-950 hover:bg-red-300 flex gap-3 justify-center items-center">
            Show More Theme
            <GoArrowUpRight className="text-lg" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-8 my-10 gap-y-10" id="category">
          {businessCategories?.map((categoryData, index) => (
            <WebsiteThemeCard key={index} categoryData={categoryData} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EcommerceWebsite;
