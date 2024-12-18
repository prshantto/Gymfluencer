/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="mt-24">
        <div className="min-h-screen w-screen bg-black pt-24 flex flex-col items-center">
          <div className="h-auto w-screen text-[#CC0000] text-center text-[10vh] leading-tight font-extrabold">
            <h2>Your Fitness.</h2>
            <h2>Our Mission.</h2>
          </div>
          <p className="text-center text-base text-white font-mono w-7/12 mt-6">
            At GymFluencer, our mission is simple: to provide the tools and
            support you need to reach your fitness goals. We combine innovative
            technology with personalized guidance to make fitness easier, more
            accessible, and more motivating. Join us as we help you transform
            your fitness journey, one workout at a time.
          </p>

          <div className="w-screen h-48 flex justify-center items-center font-mono  text-white px-10">
            <div className="flex flex-col items-center justify-center h-28 px-10">
              <h1 className="text-[6vh] font-extrabold">463 k+</h1>
              <p className="text-xs w-52 text-center text-gray-600">
                Workouts logged and progress tracked every month
              </p>
            </div>
            <div className="flex flex-col items-center justify-center h-28 border-l border-gray-500 px-10">
              <h1 className="text-[6vh] font-extrabold">163 k+</h1>
              <p className="text-xs w-52 text-center text-gray-600">
                Fitness enthusiasts connected through our platform
              </p>
            </div>
            <div className="flex flex-col items-center justify-center h-28 border-l border-gray-500 px-10">
              <h1 className="text-[6vh] font-extrabold">14 +</h1>
              <p className="text-xs w-52 text-center text-gray-600">
                Countries where GymFluencer is making an impact
              </p>
            </div>
          </div>

          <div className="h-[62vh] w-7/12 bg-blue-700 flex justify-center items-center rounded-xl m-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/pznrAWMhahA?si=NN5s_7UOKk1y9dCl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
