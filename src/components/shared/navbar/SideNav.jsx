"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export function SideNav({ navLinks }) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu className="text-black text-3xl" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mt-10">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {navLinks?.map((link, idx) => (
            <Link className="w-max group" key={idx} href={link?.href}>
              {link?.text}{" "}
              <span
                className={`block h-[2px]  ${
                  pathname === link?.href
                    ? "bg-gradient-to-r from-az-primary w-full"
                    : "group-hover:bg-gradient-to-r group-hover:from-az-primary group-hover:to-[#e42c3800] w-0 group-hover:w-full duration-300"
                }`}
              ></span>
            </Link>
          ))}

          <button className="bg-black w-max text-white lg:hidden flex items-center px-4 py-2 gap-2 rounded-full">
            Contact Us <FaArrowRight className="-rotate-45" />
          </button>
        </div>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
