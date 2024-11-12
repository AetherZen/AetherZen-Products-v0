import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-2.5 md:px-10 lg:my-20 my-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4 lg:block hidden ">
          <Image
            className="h-auto w-96 object-cover"
            src="https://i.postimg.cc/tgtt9Y6z/Frame-19.png"
            alt="why us"
            height={500}
            width={400}
          />
        </div>
        <div className="lg:col-span-8">
          <div className="flex justify-start items-center pb-6 mt-4">
            <h1 className="uppercase lg:text-4xl md:text-2xl text-lg font-bold">
              Why you Need Website
            </h1>
            <Image
              className="h-12 w-16 object-cover"
              src="https://i.postimg.cc/Dz3s8L3X/Brutalist-70.png"
              alt="why us"
              height={500}
              width={400}
            />
          </div>
          <div>
            <div className="flex justify-center gap-10">
             <div className="flex-1 text-justify lg:text-base text-sm ">
             <p className="lg:block block ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
                <br />               
                <br />               
              </p>
              <p className=" md:block hidden">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
                </p>
             </div>
              <Image
              className=" flex-1 h-auto w-16 object-cover "
              src="https://i.postimg.cc/vBBmBZTn/Frame-20.png"
              alt="why you need"
              height={500}
              width={400}
            />
            </div>
            <p className="lg:hidden block text-justify lg:text-base text-sm  mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
