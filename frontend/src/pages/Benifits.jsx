/* eslint-disable no-unused-vars */
import React from "react";
import { StarOutlined } from "@ant-design/icons";
import Pagination from "../components/Pagination";

const Benifits = () => {
  return (
    <div id="benifits" className="min-h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-auto w-full">
        <div className="w-fit text-white text-center text-xs mt-24 font-mono bg-[#131315] border border-gray-700 p-2 rounded-full">
          <StarOutlined />
          <span className="mx-2">Our Benifits</span>
        </div>

        <h1 className="text-[#CC0000] text-center text-5xl font-bold mt-8">
          Discover GymFluencer Benefits
        </h1>
        <p className="text-white text-center text-sm font-mono w-96 mt-5">
          Unlock your full potential with GymFluencer your personal fitness
          partner for progress and motivation
        </p>
      </div>

      <div className="main flex gap-2 mx-20 my-14">
        <div className="container2 flex flex-col gap-4">
          <div className="w-72 h-52 bg-[#09090A] border border-gray-800 p-4 rounded-xl ">
            <img
              className="bg-[#18181A] p-2 m-2 rounded-xl border border-gray-800"
              src="https://framerusercontent.com/images/AjjAxBc5v6SZHOkJzG2bwrSMk.svg"
              alt="img"
            />
            <div>
              <h5 className="text-[#CC0000] text-md font-bold mt-4">
                Effortless Workout Logging
              </h5>
              <p className="text-gray-400 text-sm font-mono mt-2">
                Easily log your workouts and monitor your progress over time
                with our intuitive logging feature.
              </p>
            </div>
          </div>

          <div className="w-72 h-52 bg-[#09090A] border border-gray-800 p-4 rounded-xl ">
            <img
              className="bg-[#18181A] p-2 m-2 rounded-xl border border-gray-800"
              src="https://framerusercontent.com/images/pvxqwt0ZG86WIRPPnHxDCgV7rkQ.svg"
              alt="img"
            />
            <div>
              <h5 className="text-[#CC0000] text-md font-bold mt-4">
                Personalized Workout Plans
              </h5>
              <p className="text-gray-400 text-sm font-mono mt-2">
                AI-powered workout plans tailored to your fitness level, goals,
                and progress.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-[20rem] h-[30rem] flex justify-center items-center bg-cover bg-center bg-[url('https://static.vecteezy.com/system/resources/thumbnails/019/859/767/small_2x/realistic-models-smartphone-with-transparent-screens-smartphone-mockup-collection-device-front-view-3d-mobile-phone-with-shadow-transparent-background-illustration-png.png')]">
          <img
            className="h-[25rem] w-[12rem] rounded-3xl"
            src="https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png"
            alt=""
          />
        </div>

        <div className="container3 flex flex-col gap-4">
          <div className="w-72 h-52 bg-[#09090A] border border-gray-800 p-4 rounded-xl ">
            <img
              className="bg-[#18181A] p-2 m-2 rounded-xl border border-gray-800"
              src="https://framerusercontent.com/images/rxSlFR0RyaC3WCayigHX4RPQZs.svg"
              alt="img"
            />
            <div>
              <h5 className="text-[#CC0000] text-md font-bold mt-4">
                Accurate Rep Counting
              </h5>
              <p className="text-gray-400 text-sm font-mono mt-2">
                Count your reps accurately with our app, ensuring consistency
                and improved performance.
              </p>
            </div>
          </div>

          <div className="w-72 h-52 bg-[#09090A] border border-gray-800 p-4 rounded-xl ">
            <img
              className="bg-[#18181A] p-2 m-2 rounded-xl border border-gray-800"
              src="https://framerusercontent.com/images/u8fjSIAgWQzhagulXkIoN7PzI.svg"
              alt="img"
            />
            <div>
              <h5 className="text-[#CC0000] text-md font-bold mt-4">
                Calorie Calculation & Personalized Diet Plans
              </h5>
              <p className="text-gray-400 text-sm font-mono mt-2">
                Calculate calories burned during workouts and AI-customized meal
                plans for optimal nutrition and wellness
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen ">
        <div className="w-full h-full flex items-center justify-center gap-2 px-10 py-2 font-mono">
          <div className="w-1/2 h-5/6 mt-5 ml-10 bg-cover bg-center bg-[url('https://framerusercontent.com/images/i6uKTIBELHVGJq1QWiJqLSVgy1Q.png?scale-down-to=1024')]">
            <div className="w-full h-full bg-black/85">
              <h3 className="w-72  text-[#CC0000] text-3xl font-[1000] font-sans p-8">
                Your Personalized Fitness Hub
              </h3>
              <p className="text-white text-xs mt-10 ml-6 w-64">
                Personalized workout routines tailored to your goals and
                preferences
              </p>
              <p className="text-white text-xs mt-10 ml-6 w-64">
                Get expert guidance with virtual coaching sessions, available
                anytime, anywhere.
              </p>
              <p className="text-white text-xs mt-10 ml-6 w-64">
                Track your fitness journey with detailed analytics, goal
                setting, and achievements.
              </p>
            </div>
          </div>
          <div className="w-1/2 h-5/6 bg-[url('https://img.freepik.com/premium-photo/room-transformed-by-dark-wood-gym-aesthetic-ai-generation_724548-27377.jpg?w=900')] bg-cover bg-center">
            <div className="w-full h-full bg-black/90"></div>
          </div>
        </div>
      </div>

      <div className="w-screen h-8 p-2 bg-red-500 text-white relative overflow-hidden whitespace-nowrap">
        <div className=" text-center text-xs font-bold animate-move">
          Workout Routines ⚪ Progress Tracking ⚪ Fitness Plans ⚪ Workout
          Routines ⚪ Progress Tracking ⚪ Fitness Plans ⚪ Workout Routines ⚪
          Progress Tracking ⚪ Fitness Plans ⚪ Workout Routines ⚪ Progress
          Tracking ⚪ Fitness Plans ⚪ Workout Routines ⚪ Progress Tracking ⚪
          Fitness Plans⚪ Workout Routines ⚪ Progress Tracking ⚪ Fitness
          Plans⚪ Workout Routines ⚪ Progress Tracking ⚪ Fitness Plans⚪
          Workout Routines ⚪ Progress Tracking ⚪ Fitness Plans
        </div>
      </div>

      <div className="w-screen h-screen bg-green-500 flex justify-center items-center overflow-hidden">
        <Pagination />
      </div>
    </div>
  );
};

export default Benifits;
