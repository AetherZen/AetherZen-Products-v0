"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import data from "../../../../public/category.json";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export function ProductSearchModal({ trigger }) {
  const [searchInput, setSearchInput] = useState("");
  const filteredData = data.filter((item) =>
    item.category_name.includes(searchInput)
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-72 md:max-w-2xl xl:max-w-3xl max-h-[350px] p-0 bg-transparent border-none">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid  py-4">
          <div
            className={`relative flex items-center  px-2 h-16 bg-white border-2  border-gray-300 shadow-xl ${
              searchInput.length > 0 ? "rounded-t-lg" : "rounded-lg"
            }`}
          >
            <CiSearch className="text-2xl text-gray-400 mr-2 " />
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              className="h-full focus:outline-none flex-1"
              placeholder="Search"
            />
          </div>
          {searchInput?.length > 0 && (
            <div className="bg-white rounded-b-lg max-h-72 overflow-y-scroll px-5 py-8 space-y-4">
              {filteredData?.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-100 text-lg pl-4 py-4 text-gray-500 duration-200  hover:bg-gray-200 cursor-pointer border rounded-lg shadow-sm px-2 "
                >
                  {item.category_name}
                </p>
              ))}
            </div>
          )}
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
