import Image from "next/image";

const FeaturesHome = () => {
  return (
    <div className="section-padding-t">
      <div className="section-padding-x grid gap-5 md:gap-14 grid-cols-1 lg:grid-cols-2">
        <div className="flex">
          <h1 className="text-xl md:text-5xl font-semibold ">FEATURES WE WILL PROVIDE</h1>
          <Image alt="brutalist"  src="/Brutalist.png" className="h-20 w-20 hidden md:block" height={70} width={80}/>
        </div>
        <p className="text-sm md:text-base line-clamp-4 md:line-clamp-none">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer.
        </p>
      </div>
      <div className="pb-20 md:pb-40 pt-10 md:pt-20 bg-gradient-to-tr from-[#FDF1F2] from-[30%] via-[#fceaeb00] to-[#fceaeb00] section-padding-x">
        <div className="grid gap-6 md:gap-28 grid-cols-2 lg:grid-cols-3">
          {data?.map((item, idx) => (
            <div className="space-y-3 text-center max-w-[315px] " key={idx}>
              <div className="bg-white rounded-full h-12  w-12 md:w-24 md:h-24 mx-auto p-3 md:p-6 shadow-md">
                <Image
                  className="mx-auto "
                  alt={item?.name}
                  src={item?.icon}
                  height={50}
                  width={61}
                />
              </div>
              <h1 className="text-base h-6 w-auto md:text-2xl text-center font-semibold mt-2">
                {item?.name}
              </h1>
              <p className="text-center text-xs line-clamp-2 md:text-sm">
                {item?.description}
              </p>
              {/* <h1 className="text-2xl text-center font-semibold mt-2">
                {item?.name}
              </h1>
              <p className="text-center text-sm">{item?.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesHome;

const data = [
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "/SEO.png",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "/budget.png",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "/dollar.png",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "/design.png",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "/payment.png",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "/clock.png",
  },
];
