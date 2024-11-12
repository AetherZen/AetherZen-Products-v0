import Image from "next/image";
import { LuSearch } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 to-white py-16 px-4 lg:px-24">
      {/* Header Section */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-5">
        <div className="text-center lg:text-left mb-6 lg:col-span-9">
          <div className="flex lg:justify-start justify-center items-center gap-2">
            <span className="lg:text-lg text-[10px] font-semibold uppercase text-black ">
              Your Modern Website Our Responsibility
            </span>
            <span>
              <Image
                className="h-4 w-4 lg:h-6 lg:w-6 object-cover"
                src="https://i.postimg.cc/3JfyZLxQ/Spark-55.png"
                alt="why us"
                height={500}
                width={400}
              />
            </span>
          </div>
          <div className="flex justify-center items-center mt-4">
            <h1 className="text-lg lg:text-5xl font-bold text-black mt-2 uppercase">
              We Provide Amazing Website Template and Development Service.
              <span className="inline-block ">
                <Image
                  className="h-5 w-5  lg:h-10 lg:w-14 object-cover"
                  src="https://i.postimg.cc/Dz3s8L3X/Brutalist-70.png"
                  alt="why us"
                  height={500}
                  width={400}
                />
              </span>
            </h1>
          </div>
          <p className="mt-4 lg:text-sm text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="lg:col-span-3 lg:block hidden">
          <div className="flex justify-center lg:justify-start space-x-2 my-6">
            <Image
              src="https://i.postimg.cc/ZRLPYrFY/Frame-9.png"
              alt="Developer"
              className="rounded-lg object-cover"
              width={96}
              height={128}
            />
            <Image
              src="https://i.postimg.cc/8cKhMN0q/Frame-10.png"
              alt="Teamwork"
              className="rounded-lg object-cover"
              width={96}
              height={128}
            />
            <Image
              src="https://i.postimg.cc/dVT8ZMmx/Frame-11.png"
              alt="Development"
              className="rounded-lg object-cover"
              width={96}
              height={128}
            />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="lg:block hidden">
        <div className="flex justify-center lg:justify-center mt-6 ">
          <div className="relative w-full max-w-4xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-3 pl-5 pr-10 text-gray-700 bg-white border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-100 border-none"
            />
            <button className="absolute top-0 right-0 h-full px-3 text-black">
              <LuSearch className="text-2xl font-bold " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
