"use client"
import CountUp from "react-countup";

const CountupSection = () => {

  const countUpData =
  [
    {
      "id": 1,
      "value": 400,
      "label": "Projects",
      "duration": 4
    },
    {
      "id": 2,
      "value": 40,
      "label": "Client Satisfaction",
      "duration": 4
    },
    {
      "id": 3,
      "value": 10,
      "label": "Years Experience",
      "duration": 4
    }
  ]
  

  return (
    <div className="mx-auto w-full max-w-[1400px] px-2.5 md:px-10 lg:my-20 my-10">
      <div className="rounded-lg shadow-sm p-8">
        <div>
          <p className="lg:text-base text-sm font-medium text-black text-justify">
            “”WELCOME MASSAHE”” Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer.Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer.Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-3 lg:gap-1 gap-4  pt-6">
          {countUpData.map((count) => (
            <div
              key={count.id}
              className="grid h-full w-full lg:items-center items-start py-4 rounded-md"
            >
              <div className="text-center">
                <div className="flex flex-col">
                  <span className="lg:text-4xl text-xl font-bold leading-none">
                    <CountUp end={count.value} duration={count.duration} />+
                  </span>
                  <p className="md:mt-2 mt-3 lg:text-xl text-xs capitalize">
                    {count.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountupSection;
