import Marquee from "react-fast-marquee";


const MarqueeNews = () => {


 const marqueeData = [
    {
      "text": "LIO WEBSITE"
    },
    {
      "text": "BUSINESS WEBSITE"
    },
    {
      "text": "EDUCATION WEBSITE"
    }
  ]
  


  return (
    <div>
      <Marquee>
        <div className="uppercase flex items-center text-5xl border-red-100 border-t-[1px] border-b-[1px] py-8">
          {marqueeData.map((item, index) => (
            <p
              key={index}
              className={`${
                index % 2 === 0 ? "text-gray-500" : "text-black"
              } font-bold flex gap-6 justify-center items-center`}
            >
              <span className="rounded-full size-3 bg-black ml-6"></span>
              <span>{item.text}</span>
            </p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeNews;
