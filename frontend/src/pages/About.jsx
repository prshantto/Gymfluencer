/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";

const About = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div id="about" className="mt-24">
        <div className="min-h-screen w-screen bg-black pt-24 flex flex-col items-center">
          <div className="h-auto w-screen text-[#CC0000] text-center text-[10vh] leading-tight font-extrabold">
            <h2>Your Fitness.</h2>
            <h2>Our Mission.</h2>
          </div>
          <p className="text-center text-xl text-white font-mono w-7/12 mt-6">
            At GymFluencer, our mission is simple: to provide the tools and
            support you need to reach your fitness goals. We combine innovative
            technology with personalized guidance to make fitness easier, more
            accessible, and more motivating. Join us as we help you transform
            your fitness journey, one workout at a time.
          </p>

          <div className="w-screen h-48 mt-24 font-mono  text-white flex items-center justify-around">
            <div className="w-1/3 h-36 flex flex-col items-center justify-center ">
              <h1 className="text-[8vh] font-extrabold">463 k+</h1>
              <p className="text-md w-60 text-center text-gray-600">
                Workouts logged and progress tracked every month
              </p>
            </div>
            <div className="w-1/3 h-36 flex flex-col items-center justify-center border-l border-gray-500">
              <h1 className="text-[8vh] font-extrabold">163 k+</h1>
              <p className="text-md w-64 text-center text-gray-600">
                Fitness enthusiasts connected through our platform
              </p>
            </div>
            <div className="w-1/3 h-36 flex flex-col items-center justify-center border-l border-gray-500">
              <h1 className="text-[6vh] font-extrabold">14 +</h1>
              <p className="text-md w-60 text-center text-gray-600">
                Countries where GymFluencer is making an impact
              </p>
            </div>
          </div>

          <div className="h-[67vh] w-[60vw] bg-[url('/gymPhoto.png')] bg-cover bg-center rounded-xl m-16 flex items-center justify-center overflow-hidden relative">
            <span className="absolute h-full w-full flex items-center justify-center bg-black/60">
              <button
                onClick={() => setIsClicked(true)}
                className="text-white text-5xl font-mono  rounded-full "
              >
                <PlayCircleOutlined />
              </button>
            </span>

            {isClicked && (
              <video
                onClick={() => setIsClicked(false)}
                className=" absolute m-10"
                preload="auto"
                poster="/gymPhoto.png"
                src="/gymVideo.mp4"
                autoPlay
                controls
              ></video>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
