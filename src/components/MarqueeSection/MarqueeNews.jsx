import Marquee from "react-fast-marquee";

const MarqueeNews = () => {
  return (
    <div>
      <Marquee>
        <div className="uppercase flex items-center text-5xl border-red-100 border-t-[1px] border-b-[1px] py-8">
          <p className=" text-gray-500 font-bold text-center pl-2 pr-2"><span className=" text-black font-extrabold rounded-full px-3">.</span> LIO WEBSITE</p>
          <p className=" text-black font-bold">
            <span className=" text-black font-extrabold rounded-full pl-3 pr-3 text-center">.</span>{" "}
              BUSINESS WEBSITE{" "}
          </p>
          <p className="  text-gray-500 font-bold">
            <span className=" text-gray-500 font-extrabold rounded-full  pr-2 pl-2 text-center">.</span>
              EDUCATION WEBSITE
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeNews;
