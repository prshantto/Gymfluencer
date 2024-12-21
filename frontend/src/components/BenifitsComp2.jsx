/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";

const BenifitsComp2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full flex items-center justify-center gap-2 px-10 py-2 font-mono">
        <div className="w-1/2 h-5/6 mt-5  bg-cover bg-center bg-[url('https://framerusercontent.com/images/i6uKTIBELHVGJq1QWiJqLSVgy1Q.png?scale-down-to=1024')]">
          <div className="w-full h-full bg-black/85">
            <h3 className="w-4/6  text-[#CC0000] text-5xl font-[1000] font-sans py-8 px-10">
              Your Personalized Fitness Hub
            </h3>
            <p className="text-white text-lg mt-5 ml-8 w-80">
              Personalized workout routines tailored to your goals and
              preferences
            </p>
            <p className="text-white text-lg mt-8 ml-8 w-80">
              Get expert guidance with virtual coaching sessions, available
              anytime, anywhere.
            </p>
            <p className="text-white text-lg mt-8 ml-8 w-80">
              Track your fitness journey with detailed analytics, goal setting,
              and achievements.
            </p>
          </div>
        </div>
        <div className="w-1/2 h-5/6 bg-[url('https://img.freepik.com/premium-photo/room-transformed-by-dark-wood-gym-aesthetic-ai-generation_724548-27377.jpg?w=900')] bg-cover bg-center">
          <div className="w-full h-full bg-black/90">
            <div className="verticleSlider">
              <Slider className="h-full w-full" {...settings}>
                <div className="h-1/2 w-full bg-red-600">
                  <img
                    className="object-cover"
                    src="https://framerusercontent.com/images/y3OEsrPpF9ZlVWFn8txqhafXYY.png"
                  />
                </div>
                <div className="h-1/2 w-full bg-green-600">
                  {" "}
                  <img
                    className="object-cover"
                    src="https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png"
                  />
                </div>
                <div className="h-1/2 w-full bg-blue-600">
                  <img
                    className="object-cover"
                    src="https://framerusercontent.com/images/yuM4HjReun2ffEbHgraaGxf4Gl0.png"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenifitsComp2;
