/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { data } from "./data";

const SliderComponent = (props) => {
  return (
    <div className="w-[screen] h-screen flex justify-center items-center overflow-hidden">
      <div className=" w-[100vw] h-[90vh] bg-black overflow-hidden flex">
        <img
          src="https://framerusercontent.com/images/zs0FGyKaaDiChLyd7RnEOiW5ZgM.svg"
          alt=""
          className="h-[120vh] w-[50vw] ml-[-50vh] mt-[-20vh]"
        />
        <div className="h-full w-full bg-black/90 ml-[-50vh] p-3 ">
          <h1 className=" w-[45vw] h-1/6 my-1 text-center text-[#EB0000] text-2xl font-[1000] mx-72">
            TRANSFORMATION MADE POSSIBLE WITH GYMFKUENCER
          </h1>
          <div className="h-5/6 flex justify-between gap-2 my-1">
            <div className="h-full w-1/2">
              <div className="grid grid-cols-2 w-1/2 text-white font-[1000] text-2xl border-l-4 border-[#EB0000] pl-4 mx-10 my-5">
                <h1>Name:</h1>
                <h1>{props.name}</h1>
                <h1>Age:</h1>
                <h1>{props.age}</h1>
              </div>

              <div className="w-full text-white ml-10 mt-16">
                <div className="heading flex gap-16 w-4/6 font-mono font-[1000] text-xs border-b border-gray-600 pb-4 ">
                  <h2 className="border border-white p-1.5">
                    {props.duration}
                  </h2>
                  <h2 className=" p-1.5">Before</h2>
                  <h2 className=" p-1.5">After</h2>
                </div>

                <div className="content flex text-sm gap-16 my-4 ">
                  <div className="font-mono font-bold flex flex-col gap-3">
                    <h3 className="pt-1.5">Body Weight</h3>
                    <h3 className="pt-1.5">Body Fat</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 gap-x-16 font-[1000] text-lg ">
                    <h3>{props.beforeWeight}</h3>
                    <h3>{props.afterWeight}</h3>
                    <h3>{props.fatBefore}</h3>
                    <h3>{props.fatAfter}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-1/2  flex gap-10 p-5">
              <div className="h-full w-1/2 flex flex-col">
                <img
                  src={props.beforeImage}
                  alt=""
                  className="h-[80%] w-[100%]"
                />
                <h1 className="text-[#EB0000] text-center text-2xl font-[1000] py-5">
                  Before
                </h1>
              </div>
              <div className="h-full w-1/2 flex flex-col">
                <img
                  src={props.afterImage}
                  alt=""
                  className="h-[80%] w-[100%]"
                />
                <h1 className="text-[#EB0000] text-center text-2xl font-[1000] py-5">
                  After
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
