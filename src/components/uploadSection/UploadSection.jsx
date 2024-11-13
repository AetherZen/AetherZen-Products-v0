"use client";
import { uploadImageToImgBB } from "@/lib/uploadImage";
import { Key } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import ImageLoader from "../shared/imageLoader/ImageLoader";
import { MdOutlineCancel } from "react-icons/md";

const UploadSection = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const imageUrl = await uploadImageToImgBB(file);
    setImages([imageUrl, ...images]);
  };

  const handleRemove = (idx) => {
    const filteredImages = images?.filter((images, id) => id !== idx);
    setImages(filteredImages);
    console.log(filteredImages);
  };
  return (
    <div className="section-padding-x py-5">
      <h1 className="font-semibold text-xl md:text-[40px] max-w-2xl mx-auto text-center leading-snug">
        Upload your project With Additional Information{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-10 md:gap-28">
        <div className="">
          <div className="w-max p-4 md:p-11 mx-auto border rounded-2xl">
            <h1 className="text-sm md:text-[28px]  font-semibold text-center">
              Upload your files
            </h1>
            <p className="text-[#4D4D4D] text-[12px] text-center mt-3">
              File should be JPG,PNG,PDF
            </p>

            <div className="mt-8">
              <label
                className="border-2 border-dashed bg-[#DDDDDD0F] cursor-pointer p-5 px-10 md:p-10 md:px-20 inline-block  rounded-2xl"
                htmlFor="inputTag"
                onChange={handleFileChange}
              >
                <div className="flex flex-col justify-center items-center h-full gap-3">
                  <FiUpload className="text-xl md:text-3xl" />
                  <div className="text-center">
                    <p className="text-[#4D4D4D] text-[12px]">
                      Max size is 15MB
                    </p>
                    <p className="text-[#4D4D4D] text-sm">
                      Drag & Drop your file or
                    </p>
                  </div>

                  <button className="bg-black text-[12px] md:text-base h-max w-max text-white flex items-center px-4  py-2 gap-2 rounded-full">
                    Browse File <FaArrowRight className="-rotate-45" />
                  </button>
                </div>
                <input
                  id="inputTag"
                  type="file"
                  className="border hidden"
                  accept="image/png, jpg"
                />
              </label>
            </div>
          </div>
        </div>
        <div>
          {images?.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between px-2 mb-5 items-center border rounded-xl bg-[#DDDDDD0F]"
            >
              <div className="flex gap-3 items-center">
                <Image
                  loader={ImageLoader}
                  src={item}
                  alt="Image Url"
                  height={50}
                  width={50}
                />
                <p>Image - {idx + 1}</p>
              </div>
              <div>
                <MdOutlineCancel
                  onClick={() => handleRemove(idx)}
                  className="text-red-600 text-2xl cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
