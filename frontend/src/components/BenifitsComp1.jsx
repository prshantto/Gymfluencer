/* eslint-disable no-unused-vars */
import React from "react";

const BenifitsComp1 = () => {
  return (
    <div className="w-full h-full main flex items-center justify-center gap-10 mt-20">
      <div className="w-1/4 h-full container2 flex flex-col gap-4 items-end">
        <div className=" h-1/2 bg-[#09090A] border border-gray-800 p-4 rounded-xl ">
          <img
            className="bg-[#18181A] p-2 m-2 rounded-xl border border-gray-800"
            src="https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg"
            alt="img"
          />
          <div>
            <h5 className="text-[#CC0000] text-2xl font-bold mt-4">
              Effortless Workout Logging
            </h5>
            <p className="text-gray-400 text-lg font-mono mt-2">
              Easily log your workouts and monitor your progress over time with
              our intuitive logging feature.
            </p>
          </div>
        </div>

        <div className="h-1/2 bg-[#09090A] border border-gray-800 p-4 rounded-xl ">
          <img
            className="bg-[#18181A] p-2 m-2 rounded-xl border border-gray-800"
            src="https://framerusercontent.com/images/pvxqwt0ZG86WIRPPnHxDCgV7rkQ.svg"
            alt="img"
          />
          <div>
            <h5 className="text-[#CC0000] text-2xl font-bold mt-4">
              Personalized Workout Plans
            </h5>
            <p className="text-gray-400 text-lg font-mono mt-2">
              AI-powered workout plans tailored to your fitness level, goals,
              and progress.
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/4 h-[42rem] flex justify-center items-center bg-cover bg-center bg-[url('https://static.vecteezy.com/system/resources/thumbnails/019/859/767/small_2x/realistic-models-smartphone-with-transparent-screens-smartphone-mockup-collection-device-front-view-3d-mobile-phone-with-shadow-transparent-background-illustration-png.png')]">
        <img
          className="h-5/6 w-[17rem] rounded-3xl"
          src="https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png"
          alt=""
        />
      </div>

      <div className="w-1/4 h-full container3 flex flex-col gap-4">
        <div className=" h-1/2 bg-[#09090A] border border-gray-800 p-4 rounded-xl ">
          <img
            className="bg-[#18181A] p-2 m-2 rounded-xl border border-gray-800"
            src="https://framerusercontent.com/images/rxSlFR0RyaC3WCayigHX4RPQZs.svg"
            alt="img"
          />
          <div>
            <h5 className="text-[#CC0000] text-2xl font-bold mt-4">
              Accurate Rep Counting
            </h5>
            <p className="text-gray-400 text-lg font-mono mt-2">
              Count your reps accurately with our app, ensuring consistency and
              improved performance.
            </p>
          </div>
        </div>

        <div className="h-1/2 bg-[#09090A] border border-gray-800 p-4 rounded-xl ">
          <img
            className="bg-[#18181A] p-2 m-2 rounded-xl border border-gray-800"
            src="https://framerusercontent.com/images/u8fjSIAgWQzhagulXkIoN7PzI.svg"
            alt="img"
          />
          <div>
            <h5 className="text-[#CC0000] text-2xl font-bold mt-4">
              Calorie Calculation & Personalized Diet Plans
            </h5>
            <p className="text-gray-400 text-lg font-mono mt-2">
              Calculate calories burned during workouts and AI-customized meal
              plans for optimal nutrition and wellness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenifitsComp1;
