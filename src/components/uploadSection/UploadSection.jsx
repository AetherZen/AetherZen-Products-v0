"use client";
import { uploadImageToImgBB } from "@/lib/uploadImage";
import { Key } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import ImageLoader from "../shared/imageLoader/ImageLoader";
import { MdOutlineCancel } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";

const UploadSection = () => {
  const [singleFeature, setSingleFeature] = useState("");
  const [singleInfo, setSingleInfo] = useState({
    title: "",
    description: "",
  });
  const [projectData, setProjectData] = useState({
    images: [],
    proName: "",
    shortDescription: "",
    proLink: "",
    features: [],
    info: [],
  });

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const imageUrl = await uploadImageToImgBB(file);
    setProjectData((prev) => {
      return { ...prev, images: [...prev.images, imageUrl] };
    });
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setProjectData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(projectData);
  };

  const handleAddFeatures = () => {
    if (!singleFeature) {
      return;
    }

    setProjectData((prev) => {
      return { ...prev, features: [...prev.features, singleFeature] };
    });
    setSingleFeature("");
  };

  return (
    <div className="section-padding-x">
      {/* Image upload section */}
      <div className=" py-5">
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
            {projectData?.images?.map((item, idx) => (
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
                    onClick={() =>
                      setProjectData((prev) => {
                        return {
                          ...prev,
                          images: prev?.images.filter((_, id) => id !== idx),
                        };
                      })
                    }
                    className="text-red-600 text-2xl cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Basic Information Section */}
      <div className="section-padding-y">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 xl:gap-28 p-5 xl:p-14 border rounded-2xl">
          <div className="">
            <h1 className="md:text-xl font-semibold">Basic information*</h1>
            <div className="md:px-4">
              {/* project name */}
              <div className="mt-6">
                <label
                  htmlFor="proName"
                  className="font-semibold block  text-sm md:text-base"
                >
                  Project Name{" "}
                  <span className="text-[#4D4D4D] font-normal">(required)</span>
                </label>
                <input
                  type="text"
                  name="proName"
                  placeholder="Enter Your Name"
                  className="border-b py-1 w-full mt-4 focus:outline-none text-sm md:text-base"
                  onChange={handleOnchange}
                />
              </div>

              {/* project short descriptin */}
              <div className="mt-6">
                <label
                  htmlFor="shortDescription"
                  className="font-semibold block text-sm md:text-base"
                >
                  Project Short Description{" "}
                  <span className="text-[#4D4D4D] font-normal ">
                    (required)
                  </span>
                </label>
                <input
                  type="text"
                  name="shortDescription"
                  placeholder="Enter Your Name"
                  className="border-b py-1 w-full mt-4 focus:outline-none text-sm md:text-base"
                  onChange={handleOnchange}
                />
              </div>

              {/* project link */}
              <div className="mt-6">
                <label
                  htmlFor="proLink"
                  className="font-semibold block text-sm md:text-base"
                >
                  Project Link{" "}
                  <span className="text-[#4D4D4D] font-normal ">
                    (required)
                  </span>
                </label>
                <input
                  type="url"
                  name="proLink"
                  placeholder="Enter Url..."
                  className="border-b py-1 w-full mt-4 focus:outline-none text-sm md:text-base"
                  onChange={handleOnchange}
                />
              </div>

              {/* project Features */}
              <div className="mt-6">
                <div className="flex justify-between">
                  <label
                    htmlFor="features"
                    className="font-semibold block text-sm md:text-base"
                  >
                    Project Features{" "}
                    <span className="text-[#4D4D4D] font-normal">
                      (required)
                    </span>
                  </label>
                  <FiPlusCircle
                    onClick={handleAddFeatures}
                    className="text-xl cursor-pointer"
                  />
                </div>
                <div className="mt-4">
                  {projectData?.features?.length > 0 &&
                    projectData?.features?.map((feature, idx) => (
                      <p
                        className="flex justify-between mb-2 text-sm md:text-base"
                        key={idx}
                      >
                        {idx + 1}. {feature}{" "}
                        <MdOutlineCancel
                          onClick={() =>
                            setProjectData((prev) => {
                              return {
                                ...prev,
                                features: prev?.features.filter(
                                  (_, id) => id !== idx
                                ),
                              };
                            })
                          }
                          className="text-lg cursor-pointer"
                        />
                      </p>
                    ))}
                </div>
                <input
                  type="url"
                  name="features"
                  placeholder="Enter Url..."
                  className="border-b py-1 w-full mt-4 focus:outline-none text-sm md:text-base"
                  onChange={(e) => setSingleFeature(e.target.value)}
                  value={singleFeature}
                />
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="md:text-xl font-semibold">Project information*</h1>

            <div className="md:px-4 mt-6">
              <div></div>
              {/* project name */}
              <div className="mt-6">
                <label
                  htmlFor="proName"
                  className="font-semibold flex justify-between gap-5"
                >
                  <span className="block flex-1 text-sm md:text-base">
                    Title
                  </span>
                  <span className="block flex-1 text-sm md:text-base">
                    Description
                  </span>
                  <FiPlusCircle
                    onClick={() => {
                      if (!singleInfo?.title || !singleInfo?.description) {
                        return;
                      }
                      setProjectData((prev) => {
                        return {
                          ...prev,
                          info: [...prev.info, singleInfo],
                        };
                      });

                      setSingleInfo({ title: "", description: "" });
                    }}
                    className="text-xl cursor-pointer"
                  />
                </label>
                <div className="flex flex-col gap-1  my-5 px-6">
                {projectData?.info?.map((item, idx) => (
                    <p
                      className="justify-between items-center w-full flex "
                      key={idx}
                    >
                      <span className="inline-block font-bold flex-1">
                        {idx + 1}. {item?.title}
                      </span>{" "}
                      <span className="inline-block items-start flex-1">
                        {item?.description}
                      </span>
                    </p>
                ))}
                </div>
                <div className="flex justify-between gap-5">
                  <input
                    type="text"
                    name="pTitle"
                    placeholder="Title"
                    value={singleInfo?.title}
                    className="border-b py-1 w-full mt-4 focus:outline-none text-sm md:text-base"
                    onChange={(e) => {
                      setSingleInfo((prev) => {
                        return {
                          ...prev,
                          title: e.target.value,
                        };
                      });
                    }}
                  />
                  <input
                    type="text"
                    name="pDescription"
                    placeholder="description"
                    value={singleInfo?.description}
                    className="border-b py-1 w-full mt-4 focus:outline-none text-sm md:text-base"
                    onChange={(e) => {
                      setSingleInfo((prev) => {
                        return {
                          ...prev,
                          description: e.target.value,
                        };
                      });
                    }}
                  />
                  <div>
                    <FiPlusCircle className="text-xl cursor-pointer invisible" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
