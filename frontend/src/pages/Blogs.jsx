/* eslint-disable no-unused-vars */
import React from "react";
import { CalendarOutlined } from "@ant-design/icons";

const Blogs = () => {
  return (
    <div
      id="blogs"
      className="min-h-[120vh] w-screen flex flex-col items-center"
    >
      <h1 className=" text-[#cc0000] text-center text-4xl font-bold mt-10 mb-5">
        OUR LATEST BLOGS
      </h1>

      <div className="flex gap-2  w-[95vw] h-[85vh] mt-5 ">
        <div className="w-[60%] h-full bg-[url('https://framerusercontent.com/images/Ak1npcHaOL6HZDqt4s8onDlRbY.jpg?scale-down-to=1024')] bg-cover bg-center rounded-2xl">
          <span className="flex justify-end flex-col gap-2 px-4 h-96 w-[58%] absolute  bg-gradient-to-b from-transparent to-black mt-[4.6rem] rounded-2xl">
            <div className="h-8 w-20 bg-[#cc0000] text-white text-xs font-bold rounded-md pl-3.5 py-2 font-mono">
              Excersise
            </div>
            <div className="text-white text-lg font-extrabold">
              Conquering Consistency: How to Make Exercise a Habit You Love
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 font-mono">
                <CalendarOutlined className="h-5 w-5 text-white" />
                <p className="text-xs text-white">Jun 28, 2024</p>
              </div>
              <div className="flex items-center gap-1 font-mono border-l-2 border-white pl-3">
                <img
                  src="https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg?scale-down-to=512"
                  className="h-5 w-5 rounded-full"
                />
                <p className="text-xs text-white">Benjamin</p>
              </div>
            </div>
          </span>
        </div>
        <div className="w-[40%] h-full flex flex-col gap-2">
          <div className="w-full h-[50%] bg-[url('https://framerusercontent.com/images/eZhVZiqwYqckpfqk8iVFqSYsQk.jpg?scale-down-to=512')] bg-cover bg-center rounded-2xl">
            <span className="flex justify-end flex-col gap-2 px-2 pb-1 mt-0.5 h-56 w-[39%] absolute  bg-gradient-to-b from-transparent to-black  rounded-2xl">
              <div className="h-8 w-20 bg-[#E3670E] text-white text-xs font-bold rounded-md pl-3.5 py-2 font-mono">
                Excersise
              </div>
              <div className="text-white text-lg font-extrabold">
                Weight Loss: A Sustainable Approach for a Healthier You
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-mono">
                  <CalendarOutlined className="h-5 w-5 text-white" />
                  <p className="text-xs text-white">Jun 26, 2024</p>
                </div>
                <div className="flex items-center gap-1 font-mono border-l-2 border-white pl-3">
                  <img
                    src="https://framerusercontent.com/images/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg?scale-down-to=1024"
                    className="h-5 w-5 rounded-full"
                  />
                  <p className="text-xs text-white">Jessica</p>
                </div>
              </div>
            </span>
          </div>
          <div className="w-full h-[50%] bg-[url('https://framerusercontent.com/images/vC9giEjmPcdMUbgxGuPwaw1fJg.jpg?scale-down-to=512')] bg-cover bg-center rounded-2xl">
            <span className="flex justify-end flex-col gap-2 px-2 pb-1 h-56 mt-0.5 w-[39%] absolute  bg-gradient-to-b from-transparent to-black  rounded-2xl">
              <div className="h-8 w-20 bg-[#2A990B] text-white text-xs font-bold rounded-md pl-3.5 py-2 font-mono">
                Excersise
              </div>
              <div className="text-white text-lg font-extrabold">
                Fuel Your Fitness: A Guide to Nutrition for Peak Performance
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 font-mono">
                  <CalendarOutlined className="h-5 w-5 text-white" />
                  <p className="text-xs text-white">Jun 23, 2024</p>
                </div>
                <div className="flex items-center gap-1 font-mono border-l-2 border-white pl-3">
                  <img
                    src="https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg?scale-down-to=512"
                    className="h-5 w-5 rounded-full"
                  />
                  <p className="text-xs text-white">David</p>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
