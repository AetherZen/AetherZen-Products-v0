import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/gallary",
      text: "Website Gallery",
    },
    {
      href: "/documentation",
      text: "Documentation",
    },
    {
      href: "/contact",
      text: "Contact Us",
    },
  ];
  return (
    <div className="section-padding-x section-padding-y bg-[#FFF9FA]">
      <div className="flex justify-between flex-col lg:flex-row gap-5 ">
        <div className="flex-1 flex justify-center lg:justify-start">
          <div>
            {" "}
            <Image
              src="/logo.png"
              alt="Logo"
              height={50}
              className="h-10 w-32 lg:h-14 lg:w-44 mx-auto lg:mx-0"
              width={186}
            />
            <p className="mt-6  text-center lg:text-left text-sm md:text-base lg:w-[80%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>
        </div>
        <div className=" mt-1 flex flex-col justify-between">
          <ul className="flex flex-wrap text-sm md:text-base gap-3 md:gap-8 xl:gap-12 justify-center xl:justify-end">
            {navLinks?.map((link, idx) => (
              <li key={idx}>
                <Link className="font-medium" href={link?.href}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col lg:flex-row justify-between flex-wrap mt-8">
            <p className="order-last lg:order-first text-sm md:text-base text-center lg:text-left mt-4 lg:mt-0">@Copyright 2024. All Rights <br /> Reserved.</p>
            <div className="flex flex-col lg:flex-row items-center flex-wrap gap-3">
              <p className="text-sm md:text-base">Follow Us</p>
              <div className="flex items-center gap-3">
                <Link href="/">
                  {" "}
                  <FaFacebook className="text-xl md:text-2xl" />
                </Link>
                <Link href="/">
                  {" "}
                  <PiInstagramLogoFill className="text-xl md:text-3xl" />
                </Link>
                <Link href="/">
                  {" "}
                  <FaYoutube className="text-xl md:text-3xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
