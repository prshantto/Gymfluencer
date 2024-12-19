/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { StarFilled } from "@ant-design/icons";

const Testiminials = (props) => {
  return (
    <div className="w-[98%] h-[60%] bg-[#121212] flex rounded-3xl">
      <div className={`w-[45%] h-full rounded-l-3xl overflow-hidden`}>
        <img className="h-48 w-full" src={`${props.Image}`} alt="" />
      </div>
      <div className="info flex w-[55%]">
        <img
          className="w-28 h-28 bottom-0 mt-16 ml-[4.5rem]"
          src="/invComma.png"
          alt=""
        />
        <div className="absolute h-48 w-48 bg-black/40 rounded-r-3xl">
          <div className=" h-[2rem] text-[#cc0000] flex gap-1 text-xl mx-4 my-2">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </div>
          <div className="testimonies text-white font-mono text-[0.7rem] leading-[0.9rem] px-4">
            <h1>{props.testimony}</h1>
            <h3 className="mt-10">{props.name}</h3>
            <p className=" text-gray-400">--- {props.jobs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testiminials;
