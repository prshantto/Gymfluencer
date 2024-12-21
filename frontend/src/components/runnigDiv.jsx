/* eslint-disable no-unused-vars */

import React from "react";

const RunnigDiv = () => {
  return (
    <>
      <div className="parent mt-36">
        <div className=" slider-wrapper text-white text-[5rem] font-bold font-light leading-tight overflow-hidden whitespace-nowrap">
          <div className="slider flex gap-8 animate-slide">
            <h1>Transformation /</h1>
            <h1>Motivation /</h1>
            <h1>Progress /</h1>
            <h1>Fitness /</h1>
            <h1>Transformation /</h1>
            <h1>Motivation /</h1>
            <h1>Progress /</h1>
            <h1>Fitness /</h1>
          </div>
        </div>

        <div className="slider-wrapper text-red-950 text-[5rem] font-bold font-light leading-tight overflow-hidden whitespace-nowrap">
          <div className={`slider flex gap-8 animate-slideReverse`}>
            <h1>Transformation /</h1>
            <h1>Motivation /</h1>
            <h1>Progress /</h1>
            <h1>Fitness /</h1>
            <h1>Transformation /</h1>
            <h1>Motivation /</h1>
            <h1>Progress /</h1>
            <h1>Fitness /</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default RunnigDiv;
