/* eslint-disable no-unused-vars */
import React from "react";

const Services = () => {
  return (
    <div id="services" className="bg-black">
      <div className="min-h-screen w-screen pt-20 flex flex-col items-center">
        <h2 className="w-full text-[#CC0000] text-center text-5xl font-[1000] pt-2">
          Our services
        </h2>
        <p className="text-white text-center text-lg font-mono w-[28rem] mt-5">
          GymFluencer offers 5 essential services to help you achieve your
          fitness goals with ease and flexibility.
        </p>

        <div className="flex w-full h-[29rem] mt-16 text-2xl cursor-pointer">
          <div className=" w-1/5 bg-cover bg-center bg-[url('https://framerusercontent.com/images/8pjYdTm9Om62CflNUsF8dHqkrlQ.png')]">
            <div className="h-full w-full bg-black/70 text-white flex justify-center items-center ">
              TRACK
            </div>
          </div>
          <div className=" w-1/5 bg-cover bg-center bg-[url('https://framerusercontent.com/images/LqURARtPkDasnz8xNZRw6V7LVc.png')]">
            <div className="h-full w-full bg-black/70 text-white flex justify-center items-center ">
              ANALYZE
            </div>
          </div>
          <div className=" w-1/5 bg-cover bg-center bg-[url('https://framerusercontent.com/images/ZiSz1ONCwWlZSSTVgpW4sZm1hI.png')]">
            <div className="h-full w-full bg-black/70 text-white flex justify-center items-center ">
              TRAIN
            </div>
          </div>
          <div className=" w-1/5 bg-cover bg-center bg-[url('https://framerusercontent.com/images/H2mFADPlDeJZEZVhsqozg6Yc0.jpg')]">
            <div className="h-full w-full bg-black/70 text-white flex justify-center items-center ">
              CONNECT
            </div>
          </div>
          <div className=" w-1/5 bg-cover bg-center bg-[url('https://framerusercontent.com/images/JrDw3jtgKjcQOYfgKW5tggM5U.jpg')]">
            <div className="h-full w-full bg-black/70 text-white flex justify-center items-center ">
              CHALLENGE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
