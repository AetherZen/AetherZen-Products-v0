import Image from "next/image";
import ImageLoader from "../shared/imageLoader/ImageLoader";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const WebsiteCategory = () => {
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
  console.log(websites);

  return (
    <div>
      <div>
        <div className="flex flex-col items-center py-10 bg-gradient-to-b from-white to-gray-100">
          {/* Title */}
          <h1 className="lg:text-4xl md:text-2xl text-xl font-bold mb-4 text-center">
            BUSINESS WEBSITE{" "}
            <span className="inline-block">
              <Image
                className="h-8 w-5  lg:h-11 pt-4 lg:w-6 object-cover"
                src="https://i.postimg.cc/NjZjWfFf/Brutalist-69.png"
                alt="icon"
                height={500}
                width={400}
                loader={ImageLoader}
              />
            </span>
          </h1>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 my-10 gap-y-10">
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

                  {/* Overlay with hover effect */}
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
