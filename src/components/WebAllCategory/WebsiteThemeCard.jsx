import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import ImageLoader from "../shared/imageLoader/ImageLoader";

const WebsiteThemeCard = ({ categoryData }) => {
  const { image, category, id } = categoryData;

  return (
    <div>
      <div className="flex flex-col items-center group">
        <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden border-none">
          <Image
            src={image}
            alt="category image"
            height={300}
            width={500}
            loader={ImageLoader}
            className="object-cover border rounded-lg border-none"
          />

          {/* Overlay with hover effect */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 transition-opacity duration-700 flex flex-col items-center justify-center opacity-0 hover:opacity-100 rounded-lg">
            <p className="text-white font-semibold mb-2 lg:text-2xl text-lg">
              {category}
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

        <p className="mt-3 text-center lg:text-xl text-base font-semibold text-gray-800 group-hover:hidden">
          {category}
        </p>
      </div>
    </div>
  );
};

export default WebsiteThemeCard;
