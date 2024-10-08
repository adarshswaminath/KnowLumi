import { FaPhoneAlt } from "react-icons/fa";
import aboutbar from "../assets/about_bar1.png";
import { Button } from "@material-tailwind/react";
import {
  MdArrowForward,
  MdHdrStrong,
  MdOutlinePhoneCallback,
} from "react-icons/md";

function HandPickedTitles() {
  return (
    <div id="explore" className="bg-white min-h-screen">
      <div className="w-full flex justify-start bg-white">
        <img
          src={aboutbar}
          className="w-full md:w-fit h-8 md:h-16 rotate-180 "
          alt=""
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        <Button className="flex justify-around items-center gap-2 font-archivo text-sm md:text-lg text-[#01010199] bg-[#F7F7F7] border border-[#01010108] rounded-full tracking-wider px-4 py-2">
          <MdHdrStrong className="w-4 h-4 p-0 text-[#88DB1B]" />
          START YOUR JOURNEY
        </Button>
      </div>

      <div className="grid lg:flex lg:p-16 justify-center items-start mt-8 mb-12 gap-6">
        {/* First Section */}
        <div className="w-full flex flex-col items-start p-4 max-w-xl gap-4">
          <h3 className="font-light text-2xl md:text-4xl lg:text-6xl">
            Program Open For Enrollment
          </h3>
          <p className="mt-4 text-sm md:text-base leading-loose">
            Get insights directly from people who have been there and done that.
            These masterclasses not only provide directions to reach your career
            goals but also keep you inspired to dream without limitations and
            achieve them.
          </p>
          <div className="mt-4">
            <Button className="rounded-full flex border border-black bg-white items-center gap-3 capitalize font-archivo font-medium text-xs md:text-sm text-black py-2 px-4">
              Request a Callback
              <i className="flex w-8 h-8 text-white border border-[#0101010D] bg-black justify-center items-center rounded-full">
                <MdOutlinePhoneCallback />
              </i>
            </Button>
          </div>
        </div>

        {/* Second Section */}
        <div className="w-full p-4 relative flex flex-col justify-start items-start">
          <div className="w-full md:w-[30rem] mx-auto">
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <img
                  src={blogContent.image}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover transition duration-200"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-lg text-zinc-700">
                  {blogContent.title}
                </h2>
                <h2 className="font-normal text-sm text-zinc-500">
                  {blogContent.description}
                </h2>
                <div className="flex items-center justify-center">
                  <Button className="rounded-full mt-6 bg-black flex items-center gap-3 capitalize font-archivo font-medium text-[16px] py-2 pr-2 pl-6 border border-gray-600 text-white">
                    Register
                    <i className="flex icon w-6 h-6 text-black bg-white border border-[#0101010D] justify-center items-center rounded-full">
                      <MdArrowForward />
                    </i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 mt-8 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-full md:w-[28rem] lg:w-[26rem] mx-auto p-2 "
          >
            <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl hover:shadow-[#88DB1B] border border-[#88DB1B]">
              <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <img
                  src={blogContent.image}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-lg text-zinc-700">
                  {blogContent.title}
                </h2>
                <h2 className="font-normal text-sm text-zinc-500">
                  {blogContent.description}
                </h2>
                <div className="flex flex-col md:flex-row gap-x-4 my-6 justify-center items-center">
                  <Button className="w-60 lg:w-auto md:w-72 rounded-full flex border border-black bg-white items-center justify-center gap-3 capitalize font-archivo font-medium text-[16px] text-black py-2 px-4">
                    Request a Callback
                    <i className="flex w-6 h-6 text-white border border-[#0101010D] bg-black justify-center items-center rounded-full">
                      <MdOutlinePhoneCallback />
                    </i>
                  </Button>
                  <Button className="w-60 lg:w-auto md:w-64 rounded-full bg-black flex items-center justify-center gap-3 capitalize font-archivo font-medium  py-2 pr-2 mt-4 md:mt-0">
                    Know More
                    <i className="flex icon w-6 h-6 text-white border border-[#0101010D] bg-[#FFFFFF33] justify-center items-center rounded-full">
                      <MdArrowForward />
                    </i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fourth Section */}
      <div className="flex items-center justify-center mt-12 mb-6">
        <Button className="rounded-full bg-black flex items-center gap-3 capitalize font-archivo font-medium  py-2 pr-2 pl-6 border border-gray-600 text-white">
          View All Programs
          <i className="flex icon w-6 h-6 text-black bg-white border border-[#0101010D] justify-center items-center rounded-full">
            <MdArrowForward />
          </i>
        </Button>
      </div>
    </div>
  );
}

const blogContent = {
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image:
    "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
};

export default HandPickedTitles;
