"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { SideNav } from "./SideNav";
import { CiSearch } from "react-icons/ci";
import { ProductSearchModal } from "../ProductSearchModal/ProductSearchModal";

const Navbar = () => {
  const pathname = usePathname();

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
    <div className="flex justify-between items-center section-padding-x py-10">
      <div className="flex items-center">
        <div className="lg:hidden">
          <SideNav navLinks={navLinks} />
        </div>
        <Image
          src="/logo.png"
          alt="Logo"
          height={50}
          className="h-10 w-32 lg:h-14 lg:w-44"
          width={186}
        />
      </div>
      <div className=" gap-x-12 hidden lg:flex">
        {navLinks?.map((link, idx) => (
          <Link
            className={`inline-block font-medium group ${
              pathname === link?.href ? "text-az-primary" : ""
            } `}
            key={idx}
            href={link?.href}
          >
            {link?.text}
            <span
              className={`block h-[2px]  ${
                pathname === link?.href
                  ? "bg-gradient-to-r from-az-primary w-full"
                  : "group-hover:bg-gradient-to-r group-hover:from-az-primary group-hover:to-[#e42c3800] w-0 group-hover:w-full duration-300"
              }`}
            ></span>
          </Link>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <ProductSearchModal trigger={( <CiSearch className="text-2xl" />)} />
        <Link href="/">
          <AiOutlineShoppingCart className="text-2xl" />
        </Link>{" "}
        <Link className="hidden lg:block" href="/">
          <FiUser className="text-2xl" />
        </Link>
        <button className="bg-black text-white hidden lg:flex items-center px-4 py-2 gap-2 rounded-full">
          Contact Us <FaArrowRight className="-rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
