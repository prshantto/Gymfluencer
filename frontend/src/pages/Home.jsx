/* eslint-disable no-unused-vars */
import React from "react";
import About from "./About";
import Services from "./Services";
import Benifits from "./Benifits";
import Blogs from "./Blogs";
import Contact from "./Contact";
import RunnigDiv from "../components/RunnigDiv";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="  h-[112vh] w-screen bg-cover bg-center bg-[url('https://framerusercontent.com/images/SGmk37b8TDX43mcsVuBwFTVon0Y.jpg?scale-down-to=1024')]"
      >
        <div className="h-full w-screen bg-black/70 pt-28 flex flex-col justify-start items-center">
          <div className="h-12 text-white text-sm font-semibold font-mono flex items-center gap-2 bg-[#18181A] border border-gray-800 px-2.5 py-1.5 mt-16 rounded-full">
            <div className="flex">
              <div className="bg-cover bg-center bg-[url(https://framerusercontent.com/images/zA7hg7OUnSahgBJcsn7HpCAtY.png)] h-7 w-7 rounded-full "></div>
              <div className="bg-cover bg-center bg-[url(https://framerusercontent.com/images/FW7gdHyIJZUqRX0WLmQwCo53YI4.png)] h-7 w-7 rounded-full -ml-2"></div>
              <div className="bg-cover bg-center bg-[url(https://framerusercontent.com/images/Bwgwwe4qJCF29kCrDg7c4NMzek.png)] h-7 w-7 rounded-full -ml-2 "></div>
            </div>
            <div>Trusted by 3+ million users</div>
          </div>
          <h2 className="text-customRed text-[13vh] leading-tight font-[1000] w-[70vw] text-center mt-3">
            Track Your Fitness Journey
          </h2>
          <p className="text-white text-lg text-center font-mono font-bold w-[45vw] mt-5">
            Discover the ultimate fitness companion with GymFluencer.
            Effortlessly log your workouts, count reps, and track calories
            burned. Stay motivated and achieve your goals with ease.
          </p>
          <span className="flex flex-col h-72 w-full bg-gradient-to-b from-transparent to-black">
            <RunnigDiv />
          </span>
        </div>
      </div>

      <About />
      <Services />
      <Benifits />
      {/* <Blogs />
      <Contact /> */}
    </>
  );
};

export default Home;
