/* eslint-disable no-unused-vars */
import React from "react";
import { StarOutlined } from "@ant-design/icons";
import SliderComponent from "../components/SliderComponent";
import Slider from "react-slick";
import Testiminials from "../components/Testiminials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../components/data";
import { testimonies } from "../components/data";

import BenifitsComp1 from "../components/BenifitsComp1";
import BenifitsComp2 from "../components/BenifitsComp2";

const Benifits = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="min-h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-auto w-full">
        <div className=" text-white text-center text-lg mt-24 font-mono bg-[#131315] border border-gray-800 p-2 rounded-full">
          <StarOutlined />
          <span className="mx-2">Our Benifits</span>
        </div>

        <h1 className=" text-[#CC0000] text-center text-5xl font-bold mt-8">
          Discover GymFluencer Benefits
        </h1>
        <p className="text-white text-center text-lg font-mono w-[35rem] mt-5">
          Unlock your full potential with GymFluencer your personal fitness
          partner for progress and motivation
        </p>
      </div>

      <BenifitsComp1 />
      <BenifitsComp2 />

      <div className=" slider-wrapper h-10  bg-red-500 text-white text-3xl font-bold font-light leading-tight overflow-hidden whitespace-nowrap">
        <div className="slider flex animate-slide">
          <h1>Workout Routines ⚪</h1>
          <h1>Progress Tracking ⚪</h1>
          <h1>Fitness Plans ⚪</h1>
          <h1>Workout Routines ⚪</h1>
          <h1>Progress Tracking ⚪</h1>
          <h1>Fitness Plans ⚪</h1>
          <h1>Workout Routines ⚪</h1>
          <h1>Progress Tracking ⚪</h1>
          <h1>Fitness Plans ⚪</h1>
          <h1>Workout Routines ⚪ /</h1>
          <h1>Progress Tracking ⚪ /</h1>
          <h1>Fitness Plans ⚪ /</h1>
        </div>
      </div>

      <Slider className="w-[93vw] h-screen ml-8" {...settings}>
        {data.map((d) => (
          <SliderComponent
            key={d.name}
            name={d.name}
            age={d.age}
            duration={d.duration}
            afterWeight={d.after.weight}
            beforeWeight={d.before.weight}
            fatBefore={d.before.bodyFat}
            fatAfter={d.after.bodyFat}
            beforeImage={d.before.image}
            afterImage={d.after.image}
          />
        ))}
      </Slider>

      {/*      <div id="benifits" className="w-screen h-[70vh] flex">
        <img
          className="w-full h-full object-cover"
          src="https://framerusercontent.com/images/rIgFCPu1UT9RSfM57qES2HcKsmc.jpg?scale-down-to=1024"
          alt=""
        />
        <div className=" absolute w-screen h-[70vh] bg-black/80 flex flex-col justify-start items-center pt-10">
          <h1 className="text-white text-2xl font-[1000] h-[20%]">
            WHAT PEOPLE SAY
          </h1>
          <div className="h-[65%] w-full">
            <Slider {...settings2}>
              {testimonies.map((d) => (
                <Testiminials
                  key={d.name}
                  name={d.name}
                  testimony={d.testimony}
                  Image={d.image}
                  jobs={d.jobs}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default Benifits;
