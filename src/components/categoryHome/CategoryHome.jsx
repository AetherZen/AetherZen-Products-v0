import Image from "next/image";
import data from "../../../public/category.json";
import ImageLoader from "../shared/imageLoader/ImageLoader";
import { FaArrowRight } from "react-icons/fa";
const CategoryHome = async () => {
  console.log(data[0].category_imgUrl);
  return (
    <div className="section-padding-x section-padding-y bg-az-bgPrimary">
      <div className="flex flex-wrap justify-between gap-5">
        <h1 className="max-w-[650px] text-xl md:text-5xl font-bold md:font-semibold">
          WHAT TYPE TEMPLATE WE PROVIDE
        </h1>
        <button className="bg-black h-max text-white hidden lg:flex items-center px-4 py-2 gap-2 rounded-full">
          View More Theme <FaArrowRight className="-rotate-45" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-16">
        {data?.map((item, idx) => (
          <div className="p-4 shadow-md rounded-2xl" key={idx}>
            <h1 className="text-xl md:text-2xl font-semibold">
              {item?.category_name}
            </h1>
            <Image
              className="my-4"
              loader={ImageLoader}
              src={item.category_imgUrl}
              alt={item.category_imgUrl}
              height={100}
              width={3000}
            />
            <div className="h-[2px] bg-gradient-to-r from-black to-[#00000000] w-24 my-2"></div>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>
        ))}
      </div>
      <button className="border mt-10 lg:hidden flex border-black h-max mx-auto items-center px-4 py-2 gap-2 rounded-full">
        View More Theme <FaArrowRight className="-rotate-45" />
      </button>
    </div>
  );
};

export default CategoryHome;
